"use server"

import { Resend } from "resend"
import { WaitlistConfirmationEmail } from "@/components/emails/waitlist-email"

// Send a waitlist confirmation email to the user based on submitted FormData
export async function sendWaitlistEmail(formData: FormData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const email = formData.get("email") as string

    if (!email) {
      return { error: "Email is required" }
    }

    if (!process.env.EMAIL_FROM) {
      // Not fatal; use default fallback
      console.warn("EMAIL_FROM not set; using default sender")
    }

    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || "DeDevs <bunsthedev@gmail.com>",
      to: email,
      subject: "Welcome to the DeDevs Community",
      react: WaitlistConfirmationEmail({ email }),
    })

    return { success: "Waitlist confirmation sent", data }
  } catch (error: any) {
    if ('message' in error && error.message.includes('Missing API key')) {
      return { error: "Missing environment variable: RESEND_API_KEY" }
    }
    return { error: error.message ?? "Failed to send waitlist email" }
  }
}

export async function sendEmail(formData: FormData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!email || !message) {
      return { error: "All fields are required" }
    }

    if (!process.env.EMAIL_FROM) {
      // Not fatal; use default fallback
      console.warn("EMAIL_FROM not set; using default sender")
    }

    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || "DeDevs <bunsthedev@gmail.com>",
      to: email,
      subject: "New Contact Form Submission",
      text: `
        Email: ${email}
        Message: ${message}
      `,
    })

    return { success: "Email sent successfully", data }
  } catch (error: any) {
    if ('message' in error && error.message.includes('Missing API key')) {
      return { error: "Missing environment variable: RESEND_API_KEY" }
    }
    return { error: error.message ?? "Failed to send email" }
  }
}

