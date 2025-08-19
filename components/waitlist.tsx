import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/split-text";
import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { HighlightText } from "./text-highlight";

export default function Waitlist() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center">
      <div className="mb-6">
        <SplitText className="text-5xl tracking-tighter font-medium">
          Join our Community of Builders
        </SplitText>
        <div className="tracking-tight text-xl mt-2 px-4 py-2 text-text dark:text-text font-medium rounded-md italic">
          <HighlightText text="Where builders and early adopters learn, collaborate, and ship together." />
        </div>
      </div>
      <WaitlistForm />
      <div className="mt-6">
        <Counter />
      </div>
      <footer className="sticky top-[100vh]">
        <Button size="icon" variant="ghost">
          <Link href="https://x.com/DeDevsClub" target="_blank">
            <Icon icon="line-md:twitter-x" width="24" height="24" />
          </Link>
        </Button>
      </footer>
    </div>
  );
}