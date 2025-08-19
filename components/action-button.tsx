"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import rocket from "@/assets/rocket.svg";
import Image from "next/image";

interface ActionButtonProps {
  text: string;
  href: string;
}

const ActionButton = ({ text, href }: ActionButtonProps) => {
const router = useRouter();
return ( 
  <Button
  className="relative bg-blue-500 dark:bg-pink-500 dark:text-foreground font-semibold text-sm px-4 pl-5 rounded-md flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#1C398E] group"
  onClick={() => router.push(href)}
>
  <span className="mr-10">{text}</span>
  <div
    className="absolute right-[0.2em] bg-blue-300 h-6/7 w-1/3 rounded-md  dark:bg-pink-300
    flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.35em)] 
    shadow-[0.1em_0.1em_0.6em_0.2em_#1C398E] dark:shadow-[0.1em_0.1em_0.6em_0.2em_#F6339A] active:scale-95"
  >
   <Image src={rocket} alt="Rocket" width={24} height={24} />
  </div>
</Button>
);
};

export default ActionButton;