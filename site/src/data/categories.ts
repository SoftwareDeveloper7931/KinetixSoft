export interface CategoryMeta {
  name: string;
  slug: string;
  icon: string;
  description: string;
  intro: string;
}

export const categories: Record<string, CategoryMeta> = {
  'getting-started': {
    name: 'Getting Started',
    slug: 'getting-started',
    icon: '🚀',
    description: 'Foundational concepts, architecture overviews, and low-code strategy.',
    intro: `Entering the FlutterFlow ecosystem transforms how modern teams build production-grade mobile and web applications. Low-code no longer means sacrificing architectural rigor or engineering standards. In this category, we dissect the core foundations of visual Flutter engineering, comparing visual component assembly with traditional Dart codebases and evaluating modern database engines.

Whether you are launching your first minimum viable product or migrating an existing enterprise system to FlutterFlow, starting with the right architectural blueprint is critical. Explore our comprehensive foundational tutorials to understand how visual state management, component lifecycles, and database connectors operate under the hood. Make sure to read our foundational pillar tutorial, [Intro to Low-Code Development: FlutterFlow Overview](/introduction-to-low-code-flutterflow-overview/), to establish a rock-solid mental model before configuring advanced third-party integrations.`
  },
  'authentication': {
    name: 'Authentication',
    slug: 'authentication',
    icon: '🔐',
    description: 'User registration, login systems, social OAuth, and session management.',
    intro: `A frictionless, secure authentication experience is the cornerstone of every successful mobile application. In FlutterFlow, developers can integrate both Firebase Authentication and Supabase Auth with turnkey ease, but production apps demand far more than standard login buttons. They require sophisticated email verification flows, password reset handshakes, session persistence, and custom user collection synchronization.

Our tutorials in this hub provide production-tested blueprints for designing responsive login and signup user interfaces, validating credentials in real time, handling password reset links, and structuring user metadata collections. Start with our [Beginner's Guide to Sign Up, Log In, and Forgot Password](/flutterflow-signup-login-forgot-password-beginners-guide/) or dive directly into the end-to-end [Login & Signup UI and Backend Guide](/flutterflow-login-signup-ui-backend/) for a complete breakdown of production security patterns.`
  },
  'firebase': {
    name: 'Firebase',
    slug: 'firebase',
    icon: '🔥',
    description: 'Firestore schemas, document relations, indexing, and scalable CRUD flows.',
    intro: `Google Firebase remains the primary default backend for FlutterFlow projects due to its real-time synchronization, serverless architecture, and deep native IDE integration. However, unoptimized Firestore usage often leads to ballooning read/write costs, denormalization headaches, and sluggish UI performance on slow networks.

In this category, KinetixSoft engineers break down professional Firestore architecture specifically tailored for FlutterFlow. Learn how to design scalable document schemas, manage parent-child document references, implement server-side pagination with infinite scroll, and execute batch document deletions safely. Explore our detailed guide on [How to Structure a Firebase Database for FlutterFlow](/how-to-structure-firebase-database-flutterflow/) and master [Firebase Store Relations and Document References](/firebase-store-relations-document-reference-queries-flutterflow/) to keep your database fast, predictable, and cost-effective.`
  },
  'supabase': {
    name: 'Supabase',
    slug: 'supabase',
    icon: '⚡',
    description: 'PostgreSQL relational schemas, foreign keys, views, and instant CRUD.',
    intro: `For applications with complex relational schemas, financial transactions, or strict data integrity constraints, Supabase provides an exceptional open-source PostgreSQL alternative to document databases. FlutterFlow features native support for Supabase, enabling visual builders to leverage the full power of relational tables, foreign keys, SQL joins, and database triggers.

These tutorials walk through every stage of configuring Supabase with FlutterFlow. You will discover how to model normalized relational databases, execute efficient server-side pagination, perform bulk record deletions, and bind complex table relationships directly to your visual UI widgets. Check out our foundational guide on [Structuring a Supabase Database for FlutterFlow](/structuring-supabase-database-flutterflow/) and learn how it compares with other backends in [Best Database Options for FlutterFlow](/best-database-options-for-flutterflow/).`
  },
  'security': {
    name: 'Security',
    slug: 'security',
    icon: '🛡️',
    description: 'Firestore rules, Supabase Row-Level Security, and role-based access control.',
    intro: `Deploying a FlutterFlow application without bulletproof backend security is one of the most critical vulnerabilities in mobile development. Because client-side logic in Flutter can be inspected or bypassed, your security policies must be strictly enforced at the database layer through Firebase Security Rules or Supabase Row-Level Security (RLS).

This cluster covers enterprise-level access control methodologies. Master role-based access control (RBAC) using Firebase Custom Claims, secure multi-tenant workspaces, enforce read/write validation checks, and prevent unauthorized data tampering. Begin by understanding core principles in our [Security Rules Implementation Guide](/security-rules-implementation-in-flutterflow/) and elevate your application with [Firebase Custom Claims & Admin Roles](/firebase-custom-claims-admin-role-flutterflow/) and [Supabase Security Implementation](/security-implementation-supabase-flutterflow/).`
  },
  'payments': {
    name: 'Payments',
    slug: 'payments',
    icon: '💳',
    description: 'Monetization, Stripe checkouts, RevenueCat in-app subscriptions, and webhooks.',
    intro: `Monetization is the lifeblood of commercial mobile applications. In FlutterFlow, developers can implement digital subscriptions via RevenueCat for Apple App Store and Google Play In-App Purchases, or integrate Stripe for physical goods, SaaS billing, and direct customer payments.

Navigating receipt validation, subscription entitlements, paywall UX, and webhook event listeners can be daunting without a clear roadmap. In this hub, our payments engineering specialists provide hands-on walkthroughs for both platforms. Follow our in-depth [RevenueCat Integration with FlutterFlow](/revenuecat-integration-flutterflow/) tutorial for native app subscriptions, or read our [Stripe Integration in FlutterFlow](/stripe-integration-in-flutterflow/) guide to configure secure, PCI-compliant payment sheets on web and mobile.`
  },
  'ai-integrations': {
    name: 'AI Integrations',
    slug: 'ai-integrations',
    icon: '🤖',
    description: 'OpenAI API, conversational chatbots, streaming completions, and prompt flows.',
    intro: `Integrating generative artificial intelligence into mobile applications has evolved from an experimental feature to a core product differentiator. With FlutterFlow's powerful REST API connectors and Custom Dart Actions, connecting to OpenAI's GPT models, Claude, or custom LLM endpoints is remarkably straightforward.

Our AI integration guides teach you how to authenticate API requests, stream token responses, construct conversational UI chat interfaces, and store conversation context in local or cloud state. Dive into our step-by-step tutorial on [Building a Conversational Chatbot in FlutterFlow Using the OpenAI API](/build-conversational-chatbot-flutterflow-openai/) or explore broader LLM automations in [OpenAI Integration with FlutterFlow](/openai-integration-with-flutterflow/).`
  },
  'email-marketing': {
    name: 'Email & Marketing',
    slug: 'email-marketing',
    icon: '✉️',
    description: 'Transactional emails, Brevo API, contact synchronization, and marketing loops.',
    intro: `Retaining and engaging users requires timely, transactional communication—from automated welcome emails upon signup to password reset links, order confirmations, and promotional newsletters. Connecting a dedicated email service provider like Brevo (formerly Sendinblue) provides reliable deliverability and sophisticated segmentation.

In this dedicated category, we demonstrate how to connect FlutterFlow with Brevo using secure serverless endpoints or direct API calls. Learn how to map signup fields to marketing contact lists, trigger dynamic transactional templates, and protect confidential API keys from client-side exposure. Read our flagship tutorial on [FlutterFlow and Brevo Integration](/flutterflow-brevo-integration/) to automate your app's communication stack from day one.`
  },
  'ui-design': {
    name: 'UI & Design',
    slug: 'ui-design',
    icon: '🎨',
    description: 'Component architecture, responsive layouts, animations, and search interfaces.',
    intro: `User interface craftsmanship directly impacts user retention and conversion rates. FlutterFlow offers an extensive catalog of pre-built Flutter widgets, but mastering responsive layouts across mobile, tablet, and desktop viewports requires deliberate design principles.

Our UI & Design tutorials cover responsive constraints, dynamic padding, wrap widgets, custom search interfaces with bottom sheet popups, and stateful widgets. Expand your visual design vocabulary by reviewing [FlutterFlow UI Widgets Explained: Every Widget Concept](/flutterflow-ui-widgets-explained/), ensure seamless adaptability across devices with [Responsive Design in FlutterFlow](/responsive-design-in-flutterflow/), and build intuitive filter overlays with [Custom Search and Popup Data Display](/custom-search-popup-local-storage-flutterflow/).`
  },
  'custom-code': {
    name: 'Custom Code',
    slug: 'custom-code',
    icon: '💻',
    description: 'Custom Dart Actions, Custom Functions, custom Flutter widgets, and parameters.',
    intro: `One of FlutterFlow's greatest architectural advantages over closed no-code builders is complete code extensibility. Whenever visual actions or native widgets fall short of complex business requirements, you can write and compile pure Dart code directly within the IDE.

This category guides you through writing safe, performant Custom Dart Functions for data transformations, Custom Actions for asynchronous device APIs and third-party SDKs, and Custom Widgets for specialized UI components. Check out [Custom Dart Actions in FlutterFlow](/custom-dart-actions-in-flutterflow/), master [Custom Functions in FlutterFlow](/custom-functions-in-flutterflow/), and unlock advanced component composition with [Custom Widgets in FlutterFlow](/custom-widgets-in-flutterflow/).`
  },
  'workflow-teams': {
    name: 'Workflow & Teams',
    slug: 'workflow-teams',
    icon: '👥',
    description: 'Git branching, multi-developer collaboration, environments, and CI/CD.',
    intro: `Scaling software development across multiple engineers requires robust version control, clean development environments, and structured merge workflows. FlutterFlow features enterprise-ready collaboration features, including real-time co-authoring, project branching, and multi-tier environment splitting.

Our tutorials in this hub establish professional team habits for agency and in-house teams. Master the separation of development, staging, and production databases with our [FlutterFlow Environment Splitting Guide](/flutterflow-environment-splitting-dev-staging-production/), avoid merge conflicts using the [FlutterFlow Branching System](/flutterflow-branching-system/), and optimize developer productivity with [Team Collaboration in FlutterFlow](/team-collaboration-in-flutterflow/).`
  },
  'performance': {
    name: 'Performance',
    slug: 'performance',
    icon: '⚡',
    description: 'Widget rebuilding optimization, query caching, low-code limits, and speed fixes.',
    intro: `Building an application quickly is only half the battle; ensuring it launches rapidly, renders at 60 FPS, and consumes minimal memory is what separates amateur builds from commercial products. As apps grow in complexity, uncontrolled page rebuilding, redundant network requests, and unindexed database queries can introduce noticeable lag.

This hub explores technical diagnosis and performance remediation in FlutterFlow. Discover how to identify bottlenecks, optimize widget build trees, cache static queries, and work around native low-code platform boundaries. Read our definitive [FlutterFlow Performance Optimization Guide](/flutterflow-performance-optimization-guide/) and learn realistic mitigation strategies in [FlutterFlow Limitations and Workarounds](/flutterflow-limitations-and-workarounds/).`
  }
};

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return categories[slug];
}

export function getCategoryByName(name: string): CategoryMeta | undefined {
  const slug = name.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return categories[slug];
}
