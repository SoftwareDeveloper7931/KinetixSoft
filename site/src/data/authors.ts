export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const authors: Record<string, Author> = {
  'jahanzaib-waris': {
    slug: 'jahanzaib-waris',
    name: 'Jahanzaib Waris',
    role: 'Senior FlutterFlow Architect & AI Specialist',
    bio: 'Jahanzaib specializes in advanced FlutterFlow component architecture, OpenAI integrations, and Supabase Row-Level Security.',
    avatar: '/images/authors/jahanzaib-waris.webp',
    socials: {
      linkedin: 'https://linkedin.com/company/kinetixsoft',
      github: 'https://github.com/kinetixsoft'
    }
  },
  'afaq-mehmood': {
    slug: 'afaq-mehmood',
    name: 'Afaq Mehmood',
    role: 'Lead Mobile Engineer & In-App Purchase Specialist',
    bio: 'Afaq leads mobile engineering workflows at KinetixSoft, focusing on multi-tier environment splitting and RevenueCat monetisation.',
    avatar: '/images/authors/afaq-mehmood.webp',
    socials: {
      linkedin: 'https://linkedin.com/company/kinetixsoft',
      github: 'https://github.com/kinetixsoft'
    }
  },
  'syed-abdullah': {
    slug: 'syed-abdullah',
    name: 'Syed Abdullah',
    role: 'Full-Stack Database Engineer',
    bio: 'Syed is an expert in relational database architecture for low-code apps, specializing in Supabase schema design and FlutterFlow state caching.',
    avatar: '/images/authors/syed-abdullah.webp',
    socials: {
      linkedin: 'https://linkedin.com/company/kinetixsoft',
      github: 'https://github.com/kinetixsoft'
    }
  },
  'm-jamal': {
    slug: 'm-jamal',
    name: 'M. Jamal',
    role: 'Cloud Security & Backend Engineer',
    bio: 'Jamal designs enterprise-grade auth systems, Firebase Custom Claims for RBAC, and high-fidelity screen navigation flows in FlutterFlow.',
    avatar: '/images/authors/m-jamal.webp',
    socials: {
      linkedin: 'https://linkedin.com/company/kinetixsoft'
    }
  },
  'sheharyar-ahmad': {
    slug: 'sheharyar-ahmad',
    name: 'Sheharyar Ahmad',
    role: 'Performance & Systems Engineer',
    bio: 'Sheharyar unpacks low-code boundaries, authoring battle-tested workarounds, Supabase server pagination, and batch deletion systems.',
    avatar: '/images/authors/sheharyar-ahmad.webp',
    socials: {
      linkedin: 'https://linkedin.com/company/kinetixsoft'
    }
  },
  'shoaib': {
    slug: 'shoaib',
    name: 'Shoaib',
    role: 'FlutterFlow Solutions Architect',
    bio: 'Shoaib authors foundational FlutterFlow guides, onboarding patterns, password reset architectures, and end-to-end performance audits.',
    avatar: '/images/authors/shoaib.webp',
    socials: {
      linkedin: 'https://linkedin.com/company/kinetixsoft'
    }
  },
  'ammar-khalid': {
    slug: 'ammar-khalid',
    name: 'Ammar Khalid',
    role: 'Fintech & AI Integration Engineer',
    bio: 'Ammar builds secure Stripe payment flows, webhooks, and conversational AI features in FlutterFlow production apps.',
    avatar: '/images/authors/ammar-khalid.webp',
    socials: {
      linkedin: 'https://linkedin.com/company/kinetixsoft'
    }
  },
  'umar-amjad': {
    slug: 'umar-amjad',
    name: 'Umar Amjad',
    role: 'DevOps & Custom Dart Specialist',
    bio: 'Umar focuses on team collaboration workflows, Git branching systems, custom Flutter widgets, and pure Dart functions in FlutterFlow.',
    avatar: '/images/authors/umar-amjad.webp',
    socials: {
      linkedin: 'https://linkedin.com/company/kinetixsoft'
    }
  },
  'asim-suhail': {
    slug: 'asim-suhail',
    name: 'Asim Suhail',
    role: 'Mobile UI/UX & Firebase Engineer',
    bio: 'Asim creates responsive multi-screen layouts and robust Firestore CRUD operations with infinite pagination in FlutterFlow.',
    avatar: '/images/authors/asim-suhail.webp',
    socials: {
      linkedin: 'https://linkedin.com/company/kinetixsoft'
    }
  },
  'wahab-waris': {
    slug: 'wahab-waris',
    name: 'Wahab Waris',
    role: 'Custom Dart Action & Firebase Developer',
    bio: 'Wahab bridges FlutterFlow and native code with Custom Dart Actions, complex async operations, and Firestore rules.',
    avatar: '/images/authors/wahab-waris.webp',
    socials: {
      linkedin: 'https://linkedin.com/company/kinetixsoft'
    }
  },
  'ahmed-ali': {
    slug: 'ahmed-ali',
    name: 'Ahmed Ali',
    role: 'Principal Low-Code Evangelist',
    bio: 'Ahmed provides high-level architectural insights on low-code app development, comparative database evaluations, and FlutterFlow strategy.',
    avatar: '/images/authors/ahmed-ali.webp',
    socials: {
      linkedin: 'https://linkedin.com/company/kinetixsoft'
    }
  },
  'saad': {
    slug: 'saad',
    name: 'Saad',
    role: 'Security & Access Control Specialist',
    bio: 'Saad authors comprehensive Firestore security rules, multi-tenant role isolation, and database security audits for FlutterFlow applications.',
    avatar: '/images/authors/saad.webp',
    socials: {
      linkedin: 'https://linkedin.com/company/kinetixsoft'
    }
  },
  'areeba-majeed': {
    slug: 'areeba-majeed',
    name: 'Areeba Majeed',
    role: 'NoSQL Data Modeler & Firebase Engineer',
    bio: 'Areeba designs scalable Firestore data models, parent-child document references, subcollection hierarchies, and compound filter queries.',
    avatar: '/images/authors/areeba-majeed.webp',
    socials: {
      linkedin: 'https://linkedin.com/company/kinetixsoft'
    }
  },
  'kinetixsoft-team': {
    slug: 'kinetixsoft-team',
    name: 'KinetixSoft Team',
    role: 'FlutterFlow Core Engineering Group',
    bio: 'The engineering team at KinetixSoft builds production-grade cross-platform apps, enterprise integrations, and high-performance FlutterFlow backends.',
    avatar: '/images/authors/kinetixsoft-team.webp',
    socials: {
      twitter: 'https://twitter.com/kinetixsoft',
      linkedin: 'https://linkedin.com/company/kinetixsoft',
      github: 'https://github.com/kinetixsoft'
    }
  }
};

export function getAuthorByName(name: string): Author {
  const norm = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return authors[norm] || authors['kinetixsoft-team'];
}
