import {
  BookOpen,
  GraduationCap,
  Landmark,
  Lock,
  Orbit,
  Radio,
  Scale,
  Wifi,
  type LucideIcon,
} from "lucide-react";

export type Project = {
  icon: LucideIcon;
  slug: string;
  name: string;
  status: "Active" | "Pilot";
  lead: string;
  email: string;
  summary: string;
  purpose: string;
  function: string;
  priorities: string[];
};

export const projects: Project[] = [
  {
    icon: Radio,
    slug: "nevada-broadband-mapping",
    name: "Nevada Broadband Mapping",
    status: "Active",
    lead: "Broadband Committee",
    email: "broadband@isocnv.org",
    summary:
      "Crowdsourced speed-and-coverage data across all 17 counties to inform state broadband policy and federal BEAD funding.",
    purpose:
      "This program helps Nevada communities document where Internet service is strong, weak, missing, or misrepresented. The goal is to make local broadband conditions visible enough that residents, advocates, providers, and public agencies can make better decisions.",
    function:
      "The workgroup collects community feedback, reviews public broadband data, identifies coverage gaps, and turns technical findings into plain-language evidence that can support grant planning, public comment, and local outreach.",
    priorities: [
      "Improve public understanding of broadband availability across rural, urban, and tribal communities.",
      "Support local mapping efforts with repeatable data collection practices.",
      "Share findings with policy partners working on broadband infrastructure decisions.",
    ],
  },
  {
    icon: Lock,
    slug: "encryption-defense",
    name: "Encryption Defense",
    status: "Active",
    lead: "Policy Committee",
    email: "policy@isocnv.org",
    summary:
      "Educate Nevada legislators and the public on the importance of strong, end-to-end encryption for everyday safety.",
    purpose:
      "This program protects the idea that secure communication is essential for families, businesses, journalists, organizers, and public institutions. It frames encryption as everyday safety infrastructure, not only a technical feature.",
    function:
      "The workgroup monitors policy proposals, prepares educational materials, responds to public conversations, and helps explain how weakening encryption can create wider security risks for everyone.",
    priorities: [
      "Track state and national policy conversations that affect encryption.",
      "Prepare clear public education materials for nontechnical audiences.",
      "Help policymakers understand the safety tradeoffs of encryption-related legislation.",
    ],
  },
  {
    icon: GraduationCap,
    slug: "digital-literacy-outreach",
    name: "Digital Literacy Outreach",
    status: "Active",
    lead: "Education Committee",
    email: "education@isocnv.org",
    summary:
      "K-12 and community college partnerships bringing Internet fundamentals and online safety to underserved Nevada students.",
    purpose:
      "This program expands practical Internet knowledge for students, families, and community members who benefit from clearer guidance on connectivity, privacy, safety, and participation online.",
    function:
      "The workgroup develops workshops, coordinates with education partners, supports volunteer instructors, and adapts Internet Society learning materials for Nevada communities.",
    priorities: [
      "Create approachable learning sessions for students and families.",
      "Support schools and community colleges with Internet fundamentals programming.",
      "Connect digital literacy work to real local needs like privacy, access, and online safety.",
    ],
  },
  {
    icon: Scale,
    slug: "tribal-connectivity-initiative",
    name: "Tribal Connectivity Initiative",
    status: "Pilot",
    lead: "Community Networks WG",
    email: "tribal@isocnv.org",
    summary:
      "Working with Nevada's tribal nations on community network feasibility and Indigenous data sovereignty.",
    purpose:
      "This initiative supports tribal communities as they evaluate connectivity options that respect sovereignty, local priorities, and long-term community control.",
    function:
      "The workgroup helps gather information, connect technical resources, document feasibility questions, and support conversations around community networks, infrastructure planning, and data governance.",
    priorities: [
      "Support community-led connectivity planning with respect for tribal sovereignty.",
      "Explore community network models and infrastructure options.",
      "Center Indigenous data sovereignty in project planning and documentation.",
    ],
  },
  {
    icon: BookOpen,
    slug: "the-meta-layer-initiative",
    name: "The Meta-Layer Initiative",
    status: "Active",
    lead: "Community Networks WG",
    email: "metaweb@isocnv.org",
    summary:
      "Working with The Meta-Layer to explore decentralized identity solutions for the Internet.",
    purpose:
      "This initiative explores how identity, trust, and user agency can work in a more decentralized Internet environment.",
    function:
      "The workgroup studies emerging decentralized identity concepts, shares learning opportunities, and connects interested members to practical experiments and educational resources.",
    priorities: [
      "Introduce members to decentralized identity and trust concepts.",
      "Identify practical use cases that matter to communities.",
      "Connect local learning with broader Internet Society values around an open and trustworthy Internet.",
    ],
  },
  {
    icon: Orbit,
    slug: "onboarding-outreach-and-engagement",
    name: "Onboarding, Outreach, and Engagement",
    status: "Pilot",
    lead: "Community Networks WG",
    email: "community@isocnv.org",
    summary:
      "Working with Nevada's communities towards better network connectivity and data literacy.",
    purpose:
      "This program helps new members, partners, and volunteers understand where they fit into the chapter's work.",
    function:
      "The workgroup designs onboarding paths, coordinates outreach, welcomes new contributors, and helps move interested people from first contact into meaningful participation.",
    priorities: [
      "Make it easier for new members to join active work.",
      "Improve follow-up after events, campaigns, and community conversations.",
      "Build a stronger volunteer pipeline for chapter projects.",
    ],
  },
  {
    icon: Wifi,
    slug: "nevada-digital-policy-and-regulations",
    name: "Nevada Digital Policy and Regulations",
    status: "Pilot",
    lead: "Community Networks WG",
    email: "nevada@isocnv.org",
    summary: "Nevada's Digital Policy and Regulations workgroup.",
    purpose:
      "This workgroup gives the chapter a focused place to understand Nevada policy and regulatory issues that affect connectivity, digital rights, infrastructure, and public access.",
    function:
      "The group monitors policy activity, prepares member briefings, identifies opportunities for public comment, and helps translate complex proposals into accessible language.",
    priorities: [
      "Track Nevada digital policy and regulatory developments.",
      "Prepare plain-language summaries for members and partners.",
      "Identify where chapter input can support an open, secure, and globally connected Internet.",
    ],
  },
  {
    icon: Landmark,
    slug: "nevada-connectivity-initiative",
    name: "Nevada Connectivity Initiative",
    status: "Pilot",
    lead: "Community Networks WG",
    email: "nvstate@isocnv.org",
    summary: "Working with Nevada's legislators to advance connectivity policies.",
    purpose:
      "This initiative focuses on practical state-level connectivity improvements and helps align chapter knowledge with legislative opportunities.",
    function:
      "The workgroup develops policy ideas, gathers community input, communicates with public leaders, and supports proposals that improve affordable, resilient, and inclusive Internet access.",
    priorities: [
      "Advance connectivity conversations with Nevada public leaders.",
      "Bring community needs into policy planning.",
      "Support practical improvements in access, resilience, and affordability.",
    ],
  },
];
export const projectSlugs = projects.map((p) => p.slug);
