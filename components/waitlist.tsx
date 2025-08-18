import { Counter } from "@/components/counter";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/ui/split-text";
import { WaitlistForm } from "@/components/waitlist-form";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Waitlist() {
  return (
    <div className="flex flex-col h-screen justify-center items-center text-center">
      <div className="mb-8">
        <SplitText className="text-5xl tracking-tighter font-medium">
          Join the Future of Decentralized Artificial Intelligence
        </SplitText>
        <SplitText className="tracking-tight text-xl">
          Access exclusive, AI and blockchain curated content, news, and insights for early adopters and visionaries.
        </SplitText>
      </div>
      <WaitlistForm />
      <div className="mt-4">
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