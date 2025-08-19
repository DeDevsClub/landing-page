// 

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface JoinButtonProps {
  href?: string;
  text?: string;
  className?: string;
}
export default function JoinButton({
  href,
  text,
  className,
}: JoinButtonProps) {
  return (
    <Link href={href || "https://buy.stripe.com/9B63cvdvZ11dbZH1v3gQE02"} target="_blank">
      <Button
        size="lg"
        variant="default"
        className={cn(
            `bg-pink-300 hover:bg-pink-300/80 dark:bg-pink-500 dark:hover:bg-pink-500/80 border-2 text-text border-pink-300 px-6 h-9 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105
          justify-center items-center`,
          className
        )}
      >
        {text || "Join Free"}
      </Button>
    </Link>
  );
}