"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import * as motion from "motion/react-client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { Icon } from "@iconify/react"
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name Required.")
    .max(100, "Name must be less than 100 characters."),
  email: z
    .string()
    .min(1, "Email Required.")
    .email("Please enter a valid email address."),
});

type FormValues = z.infer<typeof formSchema>;

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const { toast } = useToast();

  const form = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    form.clearErrors(); // clear errors

    const validationResult = formSchema.safeParse(data);

    if (!validationResult.success) {
      validationResult.error.issues.forEach((issue) => {
        form.setError(issue.path[0] as keyof FormValues, {
          type: "manual",
          message: issue.message,
        });
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validationResult.data),
      });

      let responseBody = {};
      try {
        // 204
        const text = await response.text();
        if (text) {
          responseBody = JSON.parse(text);
        }
      } catch (parseError) {
        console.error("Failed to parse response body:", parseError);
        if (!response.ok) {
          throw new Error(
            `HTTP error ${response.status}: ${response.statusText || "Request failed"
            }`
          );
        }
      }

      if (!response.ok) {
        throw new Error(
          (responseBody as { message?: string })?.message ||
          `Request failed with status: ${response.status}`
        );
      }

      toast({
        title: "You're in!",
        description:
          (responseBody as { message?: string })?.message ||
          "Successfully joined the waitlist.",
      });
      setSubmitStatus("success");
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      // Revert button state after a short delay for UX feedback
      setTimeout(() => setSubmitStatus("idle"), 2000);
    }
  }

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative flex w-full max-w-2xl flex-col gap-3 bg-card p-4 rounded-lg border shadow-xl dark:shadow-primary/10"
        initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 2, type: "spring", bounce: 0 }}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Enter your name"
                    type="text"
                    autoComplete="name"
                    className="h-11 rounded-md"
                    aria-label="Full name for waitlist"
                    aria-invalid={!!form.formState.errors.name}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="absolute pt-1 text-xs text-red-600 dark:text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    autoComplete="email"
                    className="h-11 rounded-md"
                    aria-label="Email address for waitlist"
                    aria-invalid={!!form.formState.errors.email}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="absolute pt-1 text-xs text-red-600 dark:text-red-500" />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className={
            "h-11 shrink-0 rounded-md px-6 font-medium transition-colors " +
            (submitStatus === "success"
              ? "bg-green-600 text-white hover:bg-green-600"
              : submitStatus === "error"
              ? "bg-red-600 text-white hover:bg-red-600"
              : "")
          }
          aria-live="polite"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Entering...
            </>
          ) : submitStatus === "success" ? (
            <div className="flex items-center">
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Joined!
            </div>
          ) : submitStatus === "error" ? (
            <div className="flex items-center">
              <XCircle className="mr-2 h-4 w-4" />
              Try again
            </div>
          ) : (
            <div className="flex items-center">
              <Icon icon="tabler:code" className="mr-2 h-4 w-4" />
              Join the Club
            </div>
          )}
        </Button>
      </motion.form>
    </Form>
  );
}