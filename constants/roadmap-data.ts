import {
    Rocket,
    Code,
    Users,
    Brain,
    Award,
    Globe,
    Smartphone,
    Zap,
    BookOpen,
    Network,
    CheckCircle2,
    Clock,
    Calendar,
  } from "lucide-react"
  
  export type MilestoneCategory = "product" | "community" | "technology" | "partnership" | "event"
  
  export type MilestoneStatus = "completed" | "in-progress" | "upcoming"
  
  export interface Milestone {
    id: string
    date: string // ISO date string
    title: string
    description: string
    longDescription?: string
    category: MilestoneCategory
    status: MilestoneStatus
    icon: any // Lucide icon component
    link?: string
    linkText?: string
    image?: string
  }
  
  export interface TimelinePeriod {
    id: string
    label: string
    milestones: Milestone[]
  }
  
  export const getCategoryDetails = (category: MilestoneCategory) => {
    switch (category) {
      case "product":
        return {
          label: "Product",
          color: "#0847F7", // Blue
          icon: Rocket,
        }
      case "community":
        return {
          label: "Community",
          color: "#FF2A6D", // Pink
          icon: Users,
        }
      case "technology":
        return {
          label: "Technology",
          color: "#05D9E8", // Cyan
          icon: Code,
        }
      case "partnership":
        return {
          label: "Partnership",
          color: "#9D4EDD", // Purple
          icon: Network,
        }
      case "event":
        return {
          label: "Event",
          color: "#FFC857", // Yellow
          icon: Calendar,
        }
    }
  }
  
  export const getStatusDetails = (status: MilestoneStatus) => {
    switch (status) {
      case "completed":
        return {
          label: "Completed",
          color: "#4CC38A", // Green
          icon: CheckCircle2,
        }
      case "in-progress":
        return {
          label: "In Progress",
          color: "#FF2A6D", // Pink
          icon: Clock,
        }
      case "upcoming":
        return {
          label: "Upcoming",
          color: "#0847F7", // Blue
          icon: Calendar,
        }
    }
  }
  
  // Sample roadmap data
  export const roadmapData: TimelinePeriod[] = [
    {
      id: "q1-2023",
      label: "Q1 2023",
      milestones: [
        {
          id: "community-launch",
          date: "2023-01-15",
          title: "Community Launch",
          description: "Official launch of the DeDevs community platform with forums and resource library.",
          longDescription:
            "We officially launched the DeDevs community platform, providing a central hub for blockchain and AI developers to connect, share knowledge, and collaborate. The initial release included discussion forums, a resource library, and member profiles.",
          category: "community",
          status: "completed",
          icon: Users,
          link: "#community-platform",
          linkText: "Visit Community Platform",
        },
        {
          id: "discord-server",
          date: "2023-02-10",
          title: "Discord Server",
          description: "Launch of our Discord server for real-time discussions and networking.",
          longDescription:
            "We expanded our community presence with a dedicated Discord server, creating channels for various topics including blockchain development, AI research, project collaboration, and general discussions. This provided members with a real-time communication platform to complement our forum.",
          category: "community",
          status: "completed",
          icon: Users,
        },
      ],
    },
    {
      id: "q2-2023",
      label: "Q2 2023",
      milestones: [
        {
          id: "learning-paths",
          date: "2023-04-15",
          title: "Learning Paths",
          description: "Structured learning paths for blockchain and AI development launched on our platform.",
          longDescription:
            "We introduced comprehensive learning paths to help members develop their skills in blockchain and AI technologies. Each path includes curated resources, tutorials, projects, and assessments to guide learners from beginner to advanced levels. Initial paths included 'Blockchain Development Fundamentals', 'AI for Blockchain Applications', and 'Decentralized AI Systems'.",
          category: "product",
          status: "completed",
          icon: BookOpen,
        }
      ],
    },
    {
      id: "q3-2023",
      label: "Q3 2023",
      milestones: [
        {
          id: "ai-workshops",
          date: "2023-07-12",
          title: "AI Workshop Series",
          description: "Weekly workshops covering various aspects of AI development and implementation.",
          longDescription:
            "We launched a weekly workshop series focused on AI development and implementation. Topics included neural networks, natural language processing, computer vision, reinforcement learning, and AI ethics. Each workshop combined theoretical knowledge with hands-on exercises and real-world applications, particularly focusing on the intersection with blockchain technology.",
          category: "event",
          status: "completed",
          icon: Brain,
        },
        {
          id: "blockchain-course",
          date: "2023-08-20",
          title: "Blockchain Course",
          description: "Comprehensive blockchain development course created in partnership with industry leaders.",
          longDescription:
            "In partnership with leading blockchain companies, we developed a comprehensive blockchain development course. The course covers blockchain fundamentals, smart contract development, decentralized application architecture, security best practices, and integration with AI systems. The course includes video lectures, coding exercises, projects, and a certification upon completion.",
          category: "product",
          status: "completed",
          icon: BookOpen,
        },
        {
          id: "community-projects",
          date: "2023-09-05",
          title: "Community Projects",
          description: "Launch of collaborative community projects with open-source contributions.",
          longDescription:
            "We initiated several collaborative community projects to encourage open-source contributions. These projects include a blockchain-based identity verification system, a decentralized AI marketplace, and tools for blockchain data analysis. Community members can contribute code, documentation, testing, and ideas to these ongoing projects.",
          category: "technology",
          status: "completed",
          icon: Code,
        },
      ],
    },
    {
      id: "q1-2024",
      label: "Q1 2024",
      milestones: [
        {
          id: "mobile-app",
          date: "2024-01-25",
          title: "Mobile App Launch",
          description: "Launch of the DeDevs mobile app for iOS and Android with community features.",
          longDescription:
            "We launched our mobile application for iOS and Android platforms, bringing the DeDevs community experience to mobile devices. The app includes access to forums, learning resources, event notifications, direct messaging, and a personalized feed of relevant content. The mobile app makes it easier for members to stay connected and engaged with the community on the go.",
          category: "product",
          status: "in-progress",
          icon: Smartphone,
        },
        {
          id: "job-board",
          date: "2024-02-15",
          title: "Job Board",
          description: "Dedicated job board for blockchain and AI positions from partner companies.",
          longDescription:
            "We introduced a specialized job board featuring blockchain and AI positions from our partner companies and the wider industry. The job board includes filters for job type, location, experience level, and required skills. Members can create profiles highlighting their expertise and receive personalized job recommendations based on their skills and interests.",
          category: "product",
          status: "in-progress",
          icon: Network,
        },
      ],
    },
    {
      id: "q3-2024",
      label: "Q3 2024",
      milestones: [
        {
          id: "ai-blockchain-platform",
          date: "2024-07-15",
          title: "AI-Blockchain Integration Platform",
          description: "Launch of our platform for seamless integration of AI and blockchain technologies.",
          longDescription:
            "We're developing a platform to facilitate seamless integration between AI and blockchain technologies. The platform will provide tools, APIs, and frameworks to help developers build applications that leverage both technologies effectively. Features will include AI model training on decentralized data, blockchain-based AI model marketplaces, and tools for verifiable AI computations.",
          category: "technology",
          status: "upcoming",
          icon: Code,
        },
        {
          id: "research-journal",
          date: "2024-09-10",
          title: "Research Journal",
          description: "Peer-reviewed journal for academic and industry research in blockchain and AI.",
          longDescription:
            "We're establishing a peer-reviewed journal for academic and industry research in blockchain and AI. The journal will publish original research papers, case studies, and review articles that advance the understanding and application of these technologies. Our editorial board will include respected academics and industry experts to ensure high-quality, relevant content.",
          category: "community",
          status: "upcoming",
          icon: BookOpen,
        },
      ],
    },
    {
      id: "q4-2024",
      label: "Q4 2024",
      milestones: [
        {
          id: "developer-tools",
          date: "2024-11-15",
          title: "Developer Tools Suite",
          description: "Comprehensive suite of tools for blockchain and AI development workflows.",
          longDescription:
            "We're developing a comprehensive suite of developer tools to streamline blockchain and AI development workflows. The suite will include code libraries, development frameworks, testing environments, deployment tools, and monitoring solutions. These tools will be designed to work together seamlessly, accelerating development and improving code quality.",
          category: "technology",
          status: "upcoming",
          icon: Code,
        },
      ],
    },
  ]
  
  