import { NotebookPen,CheckCircle2,Link2,CalendarDays,Bell,Bookmark,SquareCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link"; 
import { motion } from "framer-motion"

export default function FeaturesSection() {
  return (
    <section className="w-full border-t">
    <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-14">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Notes column */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
            <NotebookPen className="h-3.5 w-3.5" /> Notes
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">Structure your vibes...</h2>
          <p className="mt-2 text-muted-foreground">Capture links, code, ideas, todos, events, and reminders. Organize with Notes and Bookmarks. Create once, reuse everywhere.</p>
          <ul className="mt-4 space-y-2 text-sm grid grid-cols-2 gap-1 sm:gap-2">
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Interactive tasks with updates</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Calendar reminder with priority <span className="sr-only">(Calendar/Reminder)</span></li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> One-click edit from any card</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Store notes in notebooks</li>
          </ul>
          <div className="flex flex-cols gap-1 justify-center mt-5 w-full">
            {/* <BorderedButton href="/notebooks" text="Explore Notes" /> */}
            <Link href="/notebooks" className="flex flex-col w-full "><Button variant="default" size="lg" className="bg-background text-foreground border-2 border-pink-300 dark:border-pink-500 rounded-md"><NotebookPen className="mr-2 h-4 w-4" />Store Notes</Button></Link>
            <Link href="/tasks" className="flex flex-col w-full "><Button variant="default" size="lg" className="bg-background text-foreground border-2 border-pink-300 dark:border-pink-500 rounded-md"><SquareCheck className="mr-2 h-4 w-4" />Track Tasks</Button></Link>
            <Link href="/reminders" className="flex flex-col w-full "><Button variant="default" size="lg" className="bg-background text-foreground border-2 border-pink-300 dark:border-pink-500 rounded-md"><CalendarDays className="mr-2 h-4 w-4" />Check Reminders</Button></Link>
          </div>

          {/* Mini interactive preview cards */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs text-muted-foreground"><Link2 className="h-3.5 w-3.5" /> URL Note</div>
              <p className="mt-2 text-sm font-medium">Design systems that scale</p>
              <p className="text-xs text-muted-foreground truncate">https://example.com/blog/design-systems</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs text-muted-foreground"><CalendarDays className="h-3.5 w-3.5" /> Event</div>
              <p className="mt-2 text-sm font-medium">Ship v1 launch</p>
              <p className="text-xs text-muted-foreground">Aug 23 • 2:30 PM • Remote</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs text-muted-foreground"><Bell className="h-3.5 w-3.5" /> Reminder</div>
              <p className="mt-2 text-sm font-medium">Follow up with beta users</p>
              <p className="text-xs text-muted-foreground">Due in 2 hours</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border bg-card p-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs text-muted-foreground"><CheckCircle2 className="h-3.5 w-3.5" /> Todo</div>
              <p className="mt-2 text-sm font-medium">Polish onboarding flow</p>
              <p className="text-xs text-muted-foreground">3/5 complete</p>
            </motion.div>
          </div>
        </div>

        {/* Bookmarks Column */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
            <Bookmark className="h-3.5 w-3.5" /> Bookmarks
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">The fastest way to save the web.</h2>
          <p className="mt-2 text-muted-foreground">One shortcut to capture links, generate previews, and tag content. Powerful search makes everything instantly findable.</p>
          <ul className="mt-4 space-y-2 text-sm grid grid-cols-2 gap-1 sm:gap-2">
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Smart metadata extraction</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Organize with tags and collections</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Open, share, or convert to notes</li>
            <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Easy to use and understand</li>
          </ul>
          <div className="flex justify-center mt-5">
            <Link href="/bookmarks" className="flex flex-col w-full "><Button variant="default" size="lg" className="bg-background text-foreground border-2 border-pink-300 dark:border-pink-500 rounded-md"><Bookmark className="mr-2 h-4 w-4" />Explore Bookmarks</Button></Link>
            {/* <Link href="/bookmarks"><Button variant="outline" size="lg">Import from browser</Button></Link> */}
          </div>

          {/* Mini preview list */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border bg-card p-4 shadow-sm">
              <p className="text-sm font-medium">Next.js App Router patterns</p>
              <p className="text-xs text-muted-foreground truncate">nextjs.org/docs/app</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border bg-card p-4 shadow-sm">
              <p className="text-sm font-medium">Type-safe DB with Drizzle</p>
              <p className="text-xs text-muted-foreground truncate">orm.drizzle.team</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border bg-card p-4 shadow-sm">
              <p className="text-sm font-medium">Design tokens guide</p>
              <p className="text-xs text-muted-foreground truncate">design.systems/tokens</p>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="rounded-xl border bg-card p-4 shadow-sm">
              <p className="text-sm font-medium">PostgreSQL JSONB recipes</p>
              <p className="text-xs text-muted-foreground truncate">postgresql.org/docs/json</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}