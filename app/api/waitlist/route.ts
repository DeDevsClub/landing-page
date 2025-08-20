import { addToWaitlist } from "@/lib/redis";
import { resend } from "@/lib/email/resend";
import { WaitlistConfirmationEmail } from "@/components/emails/waitlist-email";
import arcjet, { validateEmail } from "@arcjet/next";
import { type NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    validateEmail({
      mode: "LIVE",
      deny: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
    }),
  ],
});

const emailSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required.")
    .max(100, "Name must be less than 100 characters."),
  email: z.string().email("Please enter a valid email address format."),
});

export async function POST(request: NextRequest) {
  try {
    let body: any;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error("JSON Parsing error:", parseError);
      return NextResponse.json(
        {
          success: false,
          message: "Invalid request body",
        },
        { status: 400 }
      );
    }

    const result = emailSchema.safeParse(body);
    if (!result.success) {
      const errorMessage =
        result.error.errors[0]?.message ?? "Invalid email address format";
      return NextResponse.json(
        { success: false, message: errorMessage },
        { status: 400 }
      );
    }

    const { email, name } = result.data;
    const decision = await aj.protect(request, { email });

    if (decision.isDenied()) {
      console.warn("Arcjet denied email:", email, "Reason:", decision.reason);
      return NextResponse.json(
        { success: false, message: "Email validation failed" },
        { status: 403 }
      );
    }

    const addResult = await addToWaitlist(email, name);

    if (!addResult.success) {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 409 }
      );
    }

    // Fire-and-forget email send; do not block response on failures
    try {
      if (!process.env.RESEND_API_KEY) {
        console.warn("RESEND_API_KEY not set; skipping confirmation email.");
      } else {
        await resend.emails.send({
          from: process.env.MAIL_FROM || "DeDevs Community <no-reply@dedevs.com>",
          to: email,
          subject: "Welcome to the DeDevs Community",
          react: WaitlistConfirmationEmail({ email }),
        });
      }
    } catch (emailErr) {
      console.error("Failed to send waitlist confirmation email:", emailErr);
      // continue; we still return success for the waitlist add
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully signed up to the waitlist!",
        position: addResult.position,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist submission error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
