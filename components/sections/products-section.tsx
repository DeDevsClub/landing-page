import { NotebookPen, CheckCircle2, Link2, CalendarDays, Bell, Bookmark, SquareCheck, Globe, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion"

const bookmarks = [
  { title: "VibesGuide", 
    description: "Save once, reuse everywhere", 
    url: "https://vibes.guide/notebooks" 
  },
  { title: "DeDevs Docs", 
    description: "Learn about our products.", 
    url: "https://docs.dedevs.com/" 
  },
  { title: "DeDevs Club", 
    description: "Join our community on Skool.", 
    url: "https://skool.com/devs" 
  },
  { title: "DeDevs Club", 
    description: "Follow us on Twitter.", 
    url: "https://twitter.com/DeDevsClub" 
  },
];

const notesFeatures  = [
  { 
    icon: <NotebookPen className="h-3.5 w-3.5" />,
    title: "Interactive tasks with updates", 
    description: "Follow us on Twitter.", 
    url: "https://twitter.com/DeDevsClub" 
  },
  { 
    icon: <NotebookPen className="h-3.5 w-3.5" />,
    title: "Calendar reminder with priority", 
    description: "Follow us on Twitter.", 
    url: "https://twitter.com/DeDevsClub" 
  },
  { 
    icon: <NotebookPen className="h-3.5 w-3.5" />,
    title: "One-click edit from any card", 
    description: "Follow us on Twitter.", 
    url: "https://twitter.com/DeDevsClub" 
  },
  { 
    icon: <NotebookPen className="h-3.5 w-3.5" />,
    title: "Store notes in notebooks", 
    description: "Follow us on Twitter.", 
    url: "https://twitter.com/DeDevsClub" 
  },
];

const notesPreviewCards = [
  { 
    icon: <Link2 className="h-3.5 w-3.5" />,
    title: "URL Note", 
    description: "Design systems that scale", 
    url: "https://example.com/blog/design-systems" 
  },
  { 
    icon: <CalendarDays className="h-3.5 w-3.5" />,
    title: "Event", 
    description: "Ship v1 launch", 
    url: "https://example.com/blog/ship-v1-launch" 
  },
  { 
    icon: <Bell className="h-3.5 w-3.5" />,
    title: "Reminder", 
    description: "Follow up with beta users", 
    url: "https://example.com/blog/follow-up-with-beta-users" 
  },
  { 
    icon: <CheckCircle2 className="h-3.5 w-3.5" />,
    title: "Todo", 
    description: "Polish onboarding flow", 
    url: "https://example.com/blog/polish-onboarding-flow" 
  },
];

export default function ProductsSection() {
  return (
    <section className="w-full border-t" id="products">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Notes column */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
              <NotebookPen className="h-3.5 w-3.5" /> Notes (Product)
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">Notes — structure your vibes.</h2>
            <p className="mt-2 text-muted-foreground">Our Notes product for capturing links, code, ideas, todos, events, and reminders. Organize everything into notebooks and reuse across your workflow.</p>
            <ul className="mt-4 space-y-2 text-sm grid grid-cols-2 gap-1 sm:gap-2">
              {notesFeatures.map((feature) => (
                <li key={feature.title} className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> {feature.title}</li>
              ))}
            </ul>
            <div className="flex flex-cols gap-1 justify-center mt-5 w-full">
              <Link href="https://vibes.guide/notebooks"
                className="flex flex-col w-full">
                <Button variant="default" size="lg"
                  className="bg-background text-foreground border-2 border-pink-300 dark:border-pink-500 rounded-md"><NotebookPen className="mr-2 h-4 w-4" />Store Notes</Button></Link>
              <Link href="https://vibes.guide/tasks"
                className="flex flex-col w-full">
                <Button variant="default" size="lg"
                  className="bg-background text-foreground border-2 border-pink-300 dark:border-pink-500 rounded-md"><SquareCheck className="mr-2 h-4 w-4" />Track Tasks</Button></Link>
              <Link href="https://vibes.guide/reminders"
                className="flex flex-col w-full">
                <Button variant="default" size="lg" className="bg-background text-foreground border-2 border-pink-300 dark:border-pink-500 rounded-md"><CalendarDays className="mr-2 h-4 w-4" />Check Reminders</Button></Link>
            </div>

            {/* Mini interactive preview cards */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {notesPreviewCards.map((card) => (
                <motion.div whileHover={{ y: -4 }} 
                  className="rounded-xl border bg-card p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">{card.icon} {card.title}</div>
                  <p className="mt-2 text-sm font-medium">{card.description}</p>
                  <p className="text-xs text-muted-foreground truncate">{card.url}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bookmarks Column */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-xs text-muted-foreground">
              <Bookmark className="h-3.5 w-3.5" /> Bookmarks (Product)
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">Bookmarks — save with intelligence.</h2>
            <p className="mt-2 text-muted-foreground">Our Bookmarks product for capturing links, generating previews, tagging content, and searching instantly across your saved knowledge.</p>
            <ul className="mt-4 space-y-2 text-sm grid grid-cols-2 gap-1 sm:gap-2">
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Smart metadata extraction</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Organize with tags and collections</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Open, share, or convert to notes</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" /> Easy to use and understand</li>
            </ul>
            <div className="flex justify-center mt-5">
              <Link href="/bookmarks" className="flex flex-col w-full ">
                <Button variant="default" size="lg" className="dark:bg-background dark:text-foreground border-2 border-pink-300 dark:border-pink-500 rounded-md"><Bookmark className="mr-2 h-4 w-4" />Explore Bookmarks</Button></Link>
              {/* <Link href="/bookmarks"><Button variant="outline" size="lg">Import from browser</Button></Link> */}
            </div>

            {/* Mini preview list */}
            <div className="mt-8 grid sm:grid-cols-2 gap-2">
              {bookmarks.map((bookmark) => (
                <motion.div whileHover={{ y: -4 }} className="justify-center text-start rounded-xl border bg-card p-4 shadow-sm h-24 space-y-1">
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