import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Zubair Ahmed",
  initials: "ZA",
  location: "Leeds, UK",
  locationLink: "https://www.google.com/maps/place/Leeds",
  about:
    "Cloud Engineer | DevOps | Automation | Cloud Architect | Design Scalable Performant Systems | Backend Engineering",
  summary:
    "I am a passionate Cloud Services Engineer specializing in cloud engineering, DevOps, and architecture. I've pioneered multi-cloud/on-prem support, built modules for technologies like Dataproc and Tigergraph, and optimized systems such as BigQuery and Firestore. Beyond coding, I've designed, implemented advanced security measures, and utilized tools like Chef, Python, and Terraform for efficient DevOps. I blend cloud expertise with a passion for automation and resilient infrastructure.As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/67697850?v=4",
  personalWebsiteUrl: "https://ahmedzbyr.gitlab.io/",
  contact: {
    email: "ahmedzbyr@proton.me",
    tel: "+44123456789",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ahmedzbyr",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ahmedzbyr/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ahmedzbyr",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Global Academy Of Technology",
      degree: "Bachelor's Degree in Information Science",
      start: "2001",
      end: "2005",
    },
  ],
  work: [
    {
      company: "Equifax",
      link: "https://www.equifax.com/",
      badges: ["Hybrid"],
      title: "Big Data Lead Engineer (Platform) → Cloud Services Engineer",
      start: "2018",
      end: "Present",
      description:
        "Experienced Cloud Services Engineer with a proven track record in leading and supporting diverse environments both in the cloud and on-premises. Recognized for my commitment to reliability, automation, and designing resilient systems. I have played a pivotal role as a core committer and architect for various modules including Dataproc, BigQuery, BigTable, Tigergraph, Datastore, and Firestore. My contributions include creating robust deployment modules, optimizing existing systems, and ensuring security through IAM setups and encryption.",
    },
    {
      company: "CGI",
      link: "https://www.cgi.com/nl/nl",
      title: "IT Consultant",
      start: "2018",
      end: "2018",
      description:
        "DevOps Engineer specializing in automation and configuration management. Proficient in building and maintaining enterprise solutions in both on-premise and cloud Linux environments. Experienced in developing and implementing CI/CD processes, utilizing tools such as GIT, Jenkins, Ansible, Python, and Chef. Skilled in containerization with Docker and Kubernetes, both in Google Cloud Platform (GCP) and on-premises environments.",
    },
    {
      company: "Happiest Minds Private Limited",
      link: "https://www.happiestminds.com/",
      badges: [],
      title: "Senior Technical Specialist → Architect",
      start: "2014",
      end: "2018",
      description:
        "Seasoned Architect with expertise in designing and optimizing big data deployments. Proficient in enhancing security through network firewall, Kerberos, TLS, and data-at-rest encryption. Adept at automation using Python, Ruby, Chef, and Ansible. Skilled in various data processing technologies, including Kafka, Storm, HBase, and NginX.",
    },
    {
      company: "Saggezza, an Apexon company",
      link: "https://www.apexon.com/experience/",
      badges: [],
      title: "Sofware Engineer → Sr Software Engineer → Project Lead → Solutions Lead",
      start: "2006",
      end: "2014",
      description: "Solutions Lead with a strong background in developing network analytics applications and data collection processes. Proficient in programming languages such as Python, Shell scripts, Java, C, and C++. Experienced in Linux porting on ARM-based boards (embedded systems).",
    },
  ],
  skills: [
    "Python", "Chef", "Ansible", "GCP", "AWS", "Nagios", "Zabbix",
    "C", 
    "C++",
    "Linux",
    "Hadoop",
    "Ruby"
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
