import { NotebookPen, CheckCircle2, Link2, CalendarDays, Bell, Bookmark, SquareCheck, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion"

const bookmarks = [
  {
    title: "VibesGuide",
    description: "Save once, reuse everywhere",
    url: "/notebooks"
  },
  {
    title: "DeDevs Docs",
    description: "Learn about our products.",
    url: "https://docs.dedevs.com/"
  },
  {
    title: "DeDevs Club",
    description: "Join our community on Skool.",
    url: "https://skool.com/devs"
  },
  {
    title: "@DeDevsClub",
    description: "Follow us on X.",
    url: "https://x.com/DeDevsClub"
  },
];

const notesFeatures = [
  {
    icon: <NotebookPen className="h-3.5 w-3.5" />,
    title: "Interactive task tracking",
    description: "Interactive tasks with updates.",
  },
  {
    icon: <NotebookPen className="h-3.5 w-3.5" />,
    title: "Reminders with priorities",
    description: "Reminders with priorities.",
  },
  {
    icon: <NotebookPen className="h-3.5 w-3.5" />,
    title: "Edit from within any card",
    description: "Edit from within any card.",
  },
  {
    icon: <NotebookPen className="h-3.5 w-3.5" />,
    title: "Write notes in notebooks",
    description: "Write notes in notebooks.",
  },
];

const notesPreviewCards = [
  {
    icon: <Link2 className="h-3.5 w-3.5" />,
    title: "Bookmarks",
    description: "Design systems that scale",
    action: "https://ui.dedevs.com"
  },
  {
    icon: <CalendarDays className="h-3.5 w-3.5" />,
    title: "Events",
    description: "Ship v1 launch",
    action: "Tomorrow at 14:00 PM CST"
  },
  {
    icon: <Bell className="h-3.5 w-3.5" />,
    title: "Reminders",
    description: "Follow up with beta users",
    action: "Overdue by 4 hours"
  },
  {
    icon: <CheckCircle2 className="h-3.5 w-3.5" />,
    title: "Tasks",
    description: "Polish onboarding flow",
    action: "1/4 tasks completed"
  },
];

export default function ProductsSection() {
return (
 <section id="products" className="w-full max-w-screen-2xl">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Notes column */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
              <NotebookPen className="h-3.5 w-3.5" /> Store Notes
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">Store Notes</h2>
            <p className="mt-2 text-muted-foreground">Capture links, code, ideas, todos, events, and reminders. Organize with Notes and Bookmarks. Create once, reuse everywhere.</p>
            <ul className="mt-4 space-y-2 text-xs lg:text-sm grid grid-cols-2 gap-1 sm:gap-2">
              {notesFeatures.map((feature) => (
                <li key={feature.title} className="flex items-start gap-2"><CheckCircle2 className="lg:mt-0.5 size-4 lg:size-5 text-text" /> {feature.title}</li>
              ))}
            </ul>
            <div className="flex flex-cols gap-1 justify-center mt-5 w-full">
              <Link href="https://vibes.guide/notebooks"
                className="flex flex-col w-full"
target="_to"
rel="noopener noreferrer"
>
                <Button variant="default" size="lg" className="bg-background text-text dark:bg-background dark:text-foreground hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white border-2 border-pink-300 dark:border-pink-500 rounded-md"><NotebookPen className="mr-2 h-4 w-4" />Notes</Button></Link>
                <Link href="https://vibes.guide/tasks"
                className="flex flex-col w-full"
target="_to"
rel="noopener noreferrer">
                <Button variant="default" size="lg" className="bg-background text-text dark:bg-background dark:text-foreground hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white border-2 border-pink-300 dark:border-pink-500 rounded-md"><SquareCheck className="mr-2 h-4 w-4" />Tasks</Button></Link>
                <Link href="https://vibes.guide/reminders"
target="_to"
rel="noopener noreferrer"
                className="flex flex-col w-full">
                <Button variant="default" size="lg" className="bg-background text-text dark:bg-background dark:text-foreground hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white border-2 border-pink-300 dark:border-pink-500 rounded-md"><CalendarDays className="mr-2 h-4 w-4" />Reminders</Button></Link>
            </div>

            {/* Mini interactive preview cards */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {notesPreviewCards.map((card) => (
                <motion.div whileHover={{ y: -4 }}
                  className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">{card.icon} {card.title}</div>
                  <p className="mt-2 text-sm font-medium">{card.description}</p>
                  <p className="text-xs text-muted-foreground truncate">{card.action}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bookmarks Column */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
              <Bookmark className="h-3.5 w-3.5" /> Save Bookmarks
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">Save Bookmarks
              {/* <span className="text-xs text-muted-foreground">(beta)</span> */}
            </h2>
            <p className="mt-2 text-muted-foreground">One shortcut to capture links, generate previews, and tag content. Powerful search makes everything instantly findable.</p>
            <ul className="mt-4 space-y-2 text-xs lg:text-sm grid grid-cols-2 gap-1 sm:gap-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="lg:mt-0.5 size-4 lg:size-5 text-text" /> Smart metadata extraction</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="lg:mt-0.5 size-4 lg:size-5 text-text" />Organize with collections</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="lg:mt-0.5 size-4 lg:size-5 text-text" />Save, upvote, and comment</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="lg:mt-0.5 size-4 lg:size-5 text-text" /> Easy to use and understand</li>
            </ul>
            <div className="flex justify-center mt-5">
              <Link href="https://vibes.guide/bookmarks" className="flex flex-col w-full"
target="_to"
rel="noopener noreferrer"
>
                <Button variant="default" size="lg" className="bg-background text-text dark:bg-background dark:text-foreground hover:bg-pink-500 hover:text-white dark:hover:bg-pink-500 dark:hover:text-white border-2 border-pink-300 dark:border-pink-500 rounded-md"><Bookmark className="mr-2 h-4 w-4" />Explore Bookmarks</Button></Link>
              {/* <Link href="/bookmarks"><Button variant="outline" size="lg">Import from browser</Button></Link> */}
            </div>

            {/* Mini preview list */}
            <div className="mt-8 grid sm:grid-cols-2 gap-2">
              {bookmarks.map((bookmark) => (
                <motion.div key={bookmark.url} whileHover={{ y: -4 }} className="justify-center text-start rounded-xl border bg-card p-4 shadow-sm h-24 space-y-1">
                  <p className="text-sm font-semibold">{bookmark.title}</p>
                  {/* <p className="text-xs text-muted-foreground truncate">{bookmark.url}</p> */}
                  <p className="text-xs text-muted-foreground">{bookmark.description}</p>

                  <div className="flex flex-cols justify-end items-center gap-1 rounded-md text-[10px] text-muted-foreground">
                    <span
                      className="flex flex-cols border justify-end items-center gap-1 rounded-full px-2 py-0.5 text-[10px] text-muted-foreground"
                      onClick={() => window.open(bookmark.url, "_blank")}
                    ><Bookmark className="h-3 w-3" /> Save</span>
                    <span
                      className="flex flex-cols border justify-end items-center gap-1 rounded-full px-2 py-0.5 z-10 text-[10px] text-muted-foreground"
                      onClick={() => window.open(bookmark.url, "_blank")}
                    ><Link2 className="h-3 w-3" /> Open</span>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}