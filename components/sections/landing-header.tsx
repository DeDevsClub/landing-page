import { type ComponentRef, forwardRef } from "react";
import { Book, Menu, Zap, Notebook } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Logo } from "../logo";
import { ThemeToggle } from "../theme-toggle";
import JoinButton from "../join-button";
import ActionButton from "../action-button";
import { HexagonBackground } from "@/components/sections/background";
import Image from "next/image";

const TopMenu = [
  {
    name: "Quickstart",
    Dropdown: [
      {
        title: "Docs",
        description: "Learn how to use DeDevs Club with our quickstart guides.",
        icon: <Book className="size-5 shrink-0" />,
        href: "https://docs.dedevs.com/",
      },
      {
        title: "VibesGuide",
        description: "Create and manage notes and reminders in your notebook.",
        icon: <Notebook className="size-5 shrink-0" />,
        href: "https://vibes.guide",
      },
    ],
  },
  // {
  //   name: "Resources",
  //   Dropdown: [
  //     {
  //       title: "Help Center",
  //       description: "Get all the answers you need right here",
  //       icon: <Zap className="size-5 shrink-0" />,
  //       href: "/",
  //     },
  //     {
  //       title: "Contact Us",
  //       description: "We are here to help you with any questions you have",
  //       icon: <Sunset className="size-5 shrink-0" />,
  //       href: "/",
  //     },
  //     {
  //       title: "Status",
  //       description: "Check the current status of our services and APIs",
  //       icon: <Trees className="size-5 shrink-0" />,
  //       href: "/",
  //     },
  //     {
  //       title: "Terms of Service",
  //       description: "Our terms and conditions for using our services",
  //       icon: <Book className="size-5 shrink-0" />,
  //       href: "/",
  //     },
  //   ],
  // },
  { name: "Products", href: "/#products" },
  { name: "Community", href: "/#community" },
];

export default function LandingHeader() {
  return (
    // wanna make sticky add these classed to header as well "sticky top-0"
    <header className="top-0 fixed w-full py-1 px-3 border-b border-border/40 bg-background/50 dark:bg-muted/50 backdrop-blur-md z-100">
      <HexagonBackground />
      <div className="max-w-7xl mx-auto">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-pink-500 dark:text-foreground hover:bg-pink-500 hover:text-pink-50 transition-all duration-500 px-2 rounded-md">
              <Link href="/" className="flex items-center gap-1 bg-background/50 py-1 px-2 rounded-md">
                <Logo
                  logoVariants={{
                    light: "/logo.png",  
                    dark: "/logo.png",
                  }}
                  height={24}
                  width={24}
                  className="h-4 w-4 lg:h-6 lg:w-6"
                  // transition={transition}
                />
                <p className="text-md lg:text-md font-semibold text-text ml-2">
                  DeDevs Club
                </p>
              </Link>
            </div>
          </div>
          <div className="items-center flex gap-6">
            <div className="flex items-center">
              <NavigationMenu className="relative z-[100]">
                <NavigationMenuList>
                  {TopMenu.map((menu, idx) =>
                    menu.Dropdown ? (
                      <NavigationMenuItem key={idx}>
                        <NavigationMenuTrigger className="font-semibold lg:text-md text-sm bg-transparent text-text hover:bg-pink-300 hover:text-pink-50 transition-all duration-500">
                          {menu.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="z-[100]">
                          {menu.name === "Quickstart" ? (
                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                              <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <Link
                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md
                                    bg-pink-300 hover:bg-pink-500 hover:text-pink-50 transition-all duration-500
                                    "
                                    href="https://skool.com/devs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <div className="flex items-center gap-2 mb-1 mt-1 text-lg font-semibold">
                                      <Image
                                      src="/favicon.ico"
                                      alt="logo"
                                      width={12}
                                      height={12}
                                      className="h-6 w-6 cursor-pointer"
                                    />
                                    DeDevs
                                  </div>
                                    <div className="mb-1 mt-1 text-md font-semibold">
                                      Join DeDevs Club
                                    </div>
                                    <p className="text-xs leading-tight text-muted-foreground">
                                      Join us on Skool.
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                              {menu.Dropdown.map((item, idx) => (
                                <ListItem
                                  key={idx}
                                  href={item.href}
                                  title={item.title}
                                >
                                  {item.description}
                                </ListItem>
                              ))}
                            </ul>
                          ) : (
                            <ul className="w-80 p-3">
                              {menu.Dropdown.map((item, index) => (
                                <li key={index} className="group">
                                  <NavigationMenuLink asChild>
                                    <Link
                                      className={cn(
                                        "flex flex-row select-none gap-4 rounded-md p-3 leading-none no-underline outline-hidden transition-colors"
                                      )}
                                      href={item.href}
                                    >
                                      <span className="transition-colors group-hover:text-primary">
                                        {item.icon}
                                      </span>
                                      <div>
                                        <div className="text-sm font-semibold">
                                          {item.title}
                                        </div>
                                        <p className="text-sm leading-snug text-muted-foreground">
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          )}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={idx}>
                        <Link
                          className={cn(
                            // navigationMenuTriggerStyle(),
                            `font-semibold text-md bg-transparent text-text hover:text-pink-300 mx-4 transition-all duration-500`
                          )}
                          href={menu.href}
                        >
                          {menu.name}
                        </Link>
                      </NavigationMenuItem>
                    )
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <ThemeToggle className="mt-1 xs:mt-0 sm:mt-1" />
            <div className="flex gap-2">
              {/* <CreatePromptsButton href="/dashboard" text="Generate"/> */}
              <JoinButton text="Docs" href="https://docs.dedevs.com/" />
              <ActionButton text="VibesGuide" href="https://vibes.guide" />
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-1">
                <Logo
                  logoVariants={{
                    light: "/logo.png",
                    dark: "/logo.png",
                  }}
                  height={12}
                  width={12}
                  className="h-8 w-8"
                  // transition={transition}
                />
                <span className="text-xl font-bold">DeDevs Club</span>
              </Link>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"outline"} size={"icon"}>
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto px-4 z-110">
                <SheetHeader className="pb-4 px-0 border-b">
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-1">
                      <Logo
                        logoVariants={{
                          light: "/logo.png",
                          dark: "/logo.png",
                        }}
                        height={12}
                        width={12}
                        className="h-8 w-8"
                        // transition={transition}
                      />
                      <span className="text-xl font-bold">DeDevs Club</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col">
                  {TopMenu.map((menu, idx) =>
                    menu.Dropdown ? (
                      <Accordion
                        key={idx}
                        type="single"
                        collapsible
                        className="w-full mb-1"
                      >
                        <AccordionItem
                          value={menu.name}
                          className="border-b border-border/40"
                        >
                          <AccordionTrigger className="py-3 font-medium hover:no-underline text-base">
                            {menu.name}
                          </AccordionTrigger>
                          <AccordionContent className="pt-2 pb-3">
                            <div className="flex flex-col space-y-3">
                              {menu.Dropdown.map((item, index) => (
                                <Link
                                  key={index}
                                  className={cn(
                                    "flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-accent hover:text-accent-foreground"
                                  )}
                                  href={item.href}
                                >
                                  <div className="flex-shrink-0 text-primary">
                                    {item.icon}
                                  </div>
                                  <div>
                                    <div className="font-medium text-sm">
                                      {item.title}
                                    </div>
                                    <p className="text-xs text-muted-foreground mt-0.5">
                                      {item.description}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={idx}
                        href={menu.href}
                        className={`py-3 px-1 font-medium text-base border-b border-border/40 flex items-center hover:text-pink-500`}
                      >
                        {menu.name}
                      </Link>
                    )
                  )}
                </div>
                <div className="border-t pt-4">
                  <div className="mt-2 flex flex-col gap-2 w-full">
                    <ActionButton text="VibesGuide" href="https://buy.stripe.com/9B63cvdvZ11dbZH1v3gQE02" />
                    <JoinButton
                      className="w-full hover:bg-pink-600 text-pink-50 font-bold"
                      text="Learn More"
                      href="https://docs.dedevs.com/"
                    />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

const ListItem = forwardRef<
  ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
