import { 
  ShellIcon,
  Globe
} from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  githubUrl: string;
  icon: any;
  animationType: 'bounce' | 'pulse' | 'spin';
}

export const projects: Project[] = [
  {
    id: "btor",
    title: "BTor",
    description: "BTor is a single-file installer + manager for Tor service and Tor Browser, designed to simplify setup and management on Linux systems.",
    githubUrl: "https://github.com/linux-brat/BTor",
    icon: ShellIcon,
    animationType: 'pulse'
  },
  {
    id: "aura-download-hub",
    title: "Aura Download Hub",
    description: "Aura Download Hub: free resources to supercharge creative and development projects. 🚀",
    githubUrl: "https://github.com/linux-brat/AuraDownloadHub.store",
    icon: Globe,
    animationType: 'pulse'
  },
  {
    id: "aura-discord-access-panel",
    title: "Aura Discord Auth Panel",
    description: "Authenticate with Discord and auto-assign a role in your server. Manage gated access for your community.",
    githubUrl: "https://github.com/linux-brat/Aura-Discord-Access-Panel",
    icon: Globe,
    animationType: 'pulse'
  }
];
