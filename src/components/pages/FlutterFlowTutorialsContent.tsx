"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen, Code2, Smartphone, Shield, Zap, Bot,
  Layers, ArrowRight, CheckCircle2, ChevronDown, ChevronRight,
  ExternalLink, Sparkles, Terminal, Cpu, Database, PlayCircle,
  CreditCard, MapPin, FileCheck, Magnet, Wifi, WifiOff,
  Copy, Check, Search, Filter, HelpCircle, AlertCircle
} from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

// -------------------------------------------------------------
// DATA TYPES
// -------------------------------------------------------------
interface TutorialModule {
  id: string;
  number: string;
  badge: string;
  category: "all" | "widgets" | "apis" | "ai" | "security" | "publishing";
  title: string;
  subtitle: string;
  readTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  image: string;
  highlights: string[];
  keySnippet?: {
    lang: string;
    label: string;
    code: string;
  };
  deepLink?: string;
}

interface WidgetItem {
  name: string;
  category: "layout" | "base" | "page" | "form" | "media" | "charts" | "utility";
  categoryLabel: string;
  description: string;
  keyProperties: string[];
  bestPractice: string;
  gotcha: string;
}

interface IntegrationScenario {
  id: string;
  title: string;
  badge: string;
  icon: string;
  scenario: string;
  architecture: string;
  workflowSteps: string[];
  codeSnippet: {
    lang: string;
    title: string;
    code: string;
  };
  commonErrors: string;
}

// -------------------------------------------------------------
// MODULES DATA
// -------------------------------------------------------------
const tutorialModules: TutorialModule[] = [
  {
    id: "widget-architecture",
    number: "01",
    badge: "UI & Layout Hierarchy",
    category: "widgets",
    title: "Understanding the Concepts of All FlutterFlow UI Widgets",
    subtitle: "The 4 Core Widget Categories & Spatial Layout Mental Model",
    readTime: "15 min read",
    difficulty: "Beginner",
    description: "Master the mental model of Flutter's reactive widget tree. Learn when to use Rows vs. Columns, how to avoid yellow-and-black RenderFlex overflows, how to build reusable components, and how to configure NavBars without manual action wiring.",
    image: "/images/blog/flutterflow-widget-taxonomy.svg",
    highlights: [
      "The 5 Core Widgets: Container, Text, Icon, Button, Image (80% of all UI)",
      "Layout Elements: Row, Column, Stack, Container, ListView, GridView, Wrap",
      "Page Elements: Scaffold skeleton, AppBar leading/actions, zero-wiring NavBar",
      "Form Elements: TextField keyboard types, Checkbox vs. Toggle/Switch distinction",
      "Hands-on Challenge: Building a responsive Profile Card component from scratch"
    ],
    keySnippet: {
      lang: "dart",
      label: "Mental Model: Widget Tree Hierarchy",
      code: `Scaffold (Page Skeleton)
 └── SafeArea
      └── Column (Vertical axis)
           ├── Container (Profile Card - radius: 16)
           │    └── Row (Horizontal alignment)
           │         ├── Image (Avatar - fit: cover)
           │         └── Column (Name + Bio texts)
           └── ListView (Dynamic scrollable feed)`
    },
    deepLink: "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"
  },
  {
    id: "state-management",
    number: "02",
    badge: "State & Data Flow",
    category: "widgets",
    title: "State Management Demystified: Widget vs. Page vs. App State",
    subtitle: "In-Memory Session Caching vs. Persistent Database Writes",
    readTime: "12 min read",
    difficulty: "Beginner",
    description: "Eliminate sluggish performance and unnecessary database billing by choosing the exact right state container for your data. Learn when to use ephemeral Page State versus in-memory App State versus Cloud Firestore / Supabase persistence.",
    image: "/images/blog/flutterflow-architecture-pipeline.svg",
    highlights: [
      "Widget State: Local to input fields, checkboxes, and interactive sliders",
      "Page State: Ephemeral to a single screen (multi-step form step counters)",
      "App State: Global in-memory list (shopping carts, chat sessions, auth tokens)",
      "Database State: Persistent cloud documents in Firebase or Supabase",
      "Performance Benchmark: Saving $100s/mo in Firebase read/write query costs"
    ],
    deepLink: "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"
  },
  {
    id: "brevo-email-api",
    number: "03",
    badge: "Third-Party REST APIs",
    category: "apis",
    title: "Connecting Brevo (Sendinblue) to FlutterFlow to Send Emails",
    subtitle: "Zero-Leak Private Environment Values & Cloud Function Proxies",
    readTime: "18 min read",
    difficulty: "Beginner",
    description: "Send transactional welcome emails, contact form notifications, and order confirmations directly from your app. Learn why 'Make Private' is mandatory and how to avoid the #1 trailing slash URL mistake.",
    image: "/images/blog/flutterflow-architecture-pipeline.svg",
    highlights: [
      "Base URL Rule: https://api.brevo.com/v3 (NEVER append a trailing slash!)",
      "Secure Storage: Private Environment Value 'brevoAPI' on Firebase Blaze plan",
      "Serverless Proxy: Deploying Cloud Functions so API keys never ship in APK/IPA",
      "6-Variable Payload: sender, receiver, subject, and dynamic htmlContent",
      "Troubleshooting Guide: Fixing 401 Unauthorized, 400 Bad Request, and unverified senders"
    ],
    keySnippet: {
      lang: "json",
      label: "Brevo POST /smtp/email Request Payload",
      code: `{
  "sender": { "name": "[senderName]", "email": "[senderEmail]" },
  "to": [{ "email": "[receiverEmail]", "name": "[receiverName]" }],
  "subject": "[title]",
  "htmlContent": "[htmlContent]"
}`
    },
    deepLink: "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"
  },
  {
    id: "openai-chatbot",
    number: "04",
    badge: "AI & Conversational UX",
    category: "ai",
    title: "How to Build a Conversational Chatbot Using OpenAI & Gemini",
    subtitle: "In-Session Chat History, Dynamic ListView Children & 5-Step Action Flow",
    readTime: "20 min read",
    difficulty: "Intermediate",
    description: "Build a context-aware AI chatbot like ChatGPT without writing backend code. Understand LLM statelessness, format multi-turn message arrays in App State, and wire a 5-step action chain with dynamic UI updates.",
    image: "/images/blog/flutterflow-architecture-pipeline.svg",
    highlights: [
      "The LLM Memory Paradigm: Why passing full chatHistory with each turn is essential",
      "Model Comparison: GPT-4o mini vs. Gemini 2.5 Flash vs. Claude Haiku 4.5",
      "App State: Storing chatHistory as List<JSON> that resets on app exit",
      "Dynamic Children: Generating left/right chat bubbles from JSON list state",
      "5-Step Action Flow: Add user msg -> Clear input -> Call API -> Add AI reply -> Scroll to bottom"
    ],
    keySnippet: {
      lang: "json",
      label: "OpenAI Chat Completions Body Structure",
      code: `{
  "model": "gpt-4o-mini",
  "messages": <messages>,
  "max_tokens": 500
}
// JSON Path Mapping: $.choices[:].message`
    },
    deepLink: "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"
  },
  {
    id: "firebase-custom-claims",
    number: "05",
    badge: "Enterprise Security & RBAC",
    category: "security",
    title: "Firebase Custom Claims with FlutterFlow: Production Role-Based Access Control",
    subtitle: "The Hotel Key Card Analogy, 0-Database Read Costs & Instant Security Rules",
    readTime: "22 min read",
    difficulty: "Intermediate",
    description: "Never store roles solely in a Firestore document where malicious actors can tamper with them. Learn how to set cryptographically signed Custom Claims via Cloud Functions and force-refresh tokens in Dart.",
    image: "/images/blog/flutterflow-firebase-rbac-claims-flow.svg",
    highlights: [
      "Custom Claims vs. Firestore Roles: 0ms overhead, tamper-proof, zero DB read costs",
      "Cloud Function: setCustomClaim using Firebase Admin SDK with security validation",
      "The Chicken-and-Egg Fix: How to bootstrap the very first admin safely",
      "Critical Pattern: Custom Action await user.getIdToken(true) to bypass 1-hour wait",
      "Security Rules: allow write: if request.auth.token.role == 'admin'"
    ],
    keySnippet: {
      lang: "dart",
      label: "Dart Custom Action: refreshUserToken.dart",
      code: `import 'package:firebase_auth/firebase_auth.dart';

Future refreshUserToken() async {
  final user = FirebaseAuth.instance.currentUser;
  if (user == null) return;
  // 'true' forces Firebase to issue a new token with updated claims!
  await user.getIdToken(true);
}`
    },
    deepLink: "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"
  },
  {
    id: "app-store-publishing",
    number: "06",
    badge: "Publishing & Compliance",
    category: "publishing",
    title: "App Store & Google Play Publishing Master Checklist (2026 Edition)",
    subtitle: "Asset Specifications, Xcode ATS, TargetSdk 34 & Closed Testing Mandates",
    readTime: "16 min read",
    difficulty: "Intermediate",
    description: "Avoid the top 10 rejection pitfalls that delay over 40% of first-time launches. From 1024x1024 no-alpha icons to Google's mandatory 20-tester closed test rule and Info.plist privacy descriptions.",
    image: "/images/blog/flutterflow-architecture-pipeline.svg",
    highlights: [
      "Developer Setup: Apple ($99/yr) + Google Play ($25 one-time) + 2FA setup",
      "Graphic Assets: 1024x1024 iOS PNG, 512x512 Android PNG, 1024x500 Feature Graphic",
      "Technical Mandates: Xcode latest, iOS 16+ ATS, Android targetSdk 34+, 64-bit arm64-v8a",
      "Google 20-Tester Mandate: Running closed testing for 14 continuous days",
      "Top 10 Rejection Traps: Broken links, missing demo accounts, and Sign in with Apple"
    ],
    deepLink: "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"
  }
];

// -------------------------------------------------------------
// COMPLETE WIDGET ENCYCLOPEDIA DATA (EVERY WIDGET COVERED)
// -------------------------------------------------------------
const allWidgetsData: WidgetItem[] = [
  // Layout Elements
  {
    name: "Container",
    category: "layout",
    categoryLabel: "Layout Elements",
    description: "The primary styling primitive in FlutterFlow. Wraps a single child and controls dimensions, padding, margins, gradient fills, borders, rounded corners, and drop shadows.",
    keyProperties: ["Width / Height (px, %, or Infinity)", "Padding & Margin", "Border Radius & Border Color", "Box Shadow (blur, spread, offset)", "Gradient & Background Color"],
    bestPractice: "Always wrap items in a Container when you need explicit borders, rounded corners, or background tints. Avoid nesting containers needlessly when Padding or SizedBox suffices.",
    gotcha: "Setting height to Infinity inside an unconstrained Column causes a RenderFlex unbounded height exception."
  },
  {
    name: "Column",
    category: "layout",
    categoryLabel: "Layout Elements",
    description: "Arranges child widgets vertically from top to bottom. Serves as the primary spine of standard pages (login screens, feed lists, setting menus).",
    keyProperties: ["Main Axis Alignment (Start, Center, End, Space Between/Around/Evenly)", "Cross Axis Alignment (Start, Center, End, Stretch)", "Main Axis Size (Min vs Max)"],
    bestPractice: "Use 'Main Axis Size: Min' inside cards or bottom sheets so the column shrink-wraps its children tightly.",
    gotcha: "If content inside a Column exceeds the screen height, it crashes with a yellow-and-black RenderFlex overflow. Use ListView or wrap in SingleChildScrollView."
  },
  {
    name: "Row",
    category: "layout",
    categoryLabel: "Layout Elements",
    description: "Arranges child widgets horizontally side by side from left to right. Ideal for avatar + name headers, stat counters, and horizontal icon groups.",
    keyProperties: ["Main Axis Alignment", "Cross Axis Alignment", "Children Array"],
    bestPractice: "When placing a dynamic text string next to a button or icon, wrap the Text in an 'Expanded' or 'Flexible' widget to prevent horizontal overflow.",
    gotcha: "Long text inside an unconstrained Row will blow past the right screen margin, causing an overflow error."
  },
  {
    name: "Stack",
    category: "layout",
    categoryLabel: "Layout Elements",
    description: "Overlays child widgets on top of each other along the Z-axis (like layers of paper). Indispensable for badges over profile icons and hero text over photography.",
    keyProperties: ["Alignment (Top-Left, Center, etc.)", "Fit (Loose vs Expand)", "Positioned Wrapper (Top, Bottom, Left, Right offsets)"],
    bestPractice: "Wrap inner children in 'Positioned' widgets to pin badges, close buttons, or gradients to exact edges.",
    gotcha: "Overusing Stacks makes layouts brittle on tablets and foldables. Prefer Rows and Columns for responsive structures."
  },
  {
    name: "ListView",
    category: "layout",
    categoryLabel: "Layout Elements",
    description: "A 1D scrollable linear list of widgets. Automatically virtualizes off-screen elements for maximum frame-rate efficiency during long feeds.",
    keyProperties: ["Scroll Direction (Vertical / Horizontal)", "Shrink Wrap (true/false)", "Generate Dynamic Children", "Primary Scroll Controller"],
    bestPractice: "Bind directly to Firestore query collections or App State lists via 'Generate Dynamic Children' for automated list item rendering.",
    gotcha: "When nesting a ListView inside another Column or ListView, you MUST enable 'Shrink Wrap' or the layout engine throws an unbounded viewport error."
  },
  {
    name: "GridView",
    category: "layout",
    categoryLabel: "Layout Elements",
    description: "A 2D scrollable grid displaying items in both rows and columns simultaneously. Perfect for e-commerce product grids, photo galleries, and dashboard cards.",
    keyProperties: ["Cross Axis Count (columns)", "Main Axis Spacing", "Cross Axis Spacing", "Child Aspect Ratio (width / height)"],
    bestPractice: "Set 'Child Aspect Ratio' accurately (e.g. 0.75 for tall product cards with image + title + price) to prevent bottom overflow inside cells.",
    gotcha: "Failing to set Child Aspect Ratio defaults to 1.0 (square), which often truncates card text."
  },
  {
    name: "Wrap",
    category: "layout",
    categoryLabel: "Layout Elements",
    description: "Lays out children in a horizontal flow, but automatically wraps them onto the next line whenever horizontal space is exhausted.",
    keyProperties: ["Direction (Horizontal / Vertical)", "Spacing (gap between items)", "Run Spacing (gap between lines)", "Alignment"],
    bestPractice: "The ultimate widget for tag clouds, interest pills, category filter badges, and user skill chips.",
    gotcha: "Do not use Wrap for uniform tables; use GridView instead."
  },
  {
    name: "Expanded & Flexible",
    category: "layout",
    categoryLabel: "Layout Elements",
    description: "Flexbox utilities used exclusively inside Rows and Columns to dictate how remaining available space is distributed.",
    keyProperties: ["Flex Factor (relative ratio)", "Fit (Tight for Expanded, Loose for Flexible)"],
    bestPractice: "Wrap search bars or titles in an Expanded widget so they stretch across all remaining width next to fixed-width icons.",
    gotcha: "Using Expanded outside a Row, Column, or Flex throws an immediate runtime exception."
  },
  {
    name: "Padding & SizedBox",
    category: "layout",
    categoryLabel: "Layout Elements",
    description: "Spacing utilities. Padding creates inward buffer around any child; SizedBox forces exact fixed width or height spacing between widgets.",
    keyProperties: ["Padding (all, symmetric, directional)", "Width & Height (SizedBox)"],
    bestPractice: "Use SizedBox(height: 16) between form fields instead of adding margin on every field for cleaner maintenance.",
    gotcha: "Avoid massive hardcoded pixel heights that push content below small phone viewports."
  },

  // Base Elements
  {
    name: "Text",
    category: "base",
    categoryLabel: "Base Elements",
    description: "Displays static or dynamic styled text strings on screen. Integrates Google Fonts, theme typography tokens, and variable bindings.",
    keyProperties: ["Font Family & Weight", "Font Size (pt)", "Color (Theme tokens)", "Text Alignment", "Max Lines & Text Overflow (Ellipsis)"],
    bestPractice: "Always set Max Lines (e.g. 2) and Text Overflow to 'Ellipsis (...)' for dynamic titles so unexpected long strings don't break your card heights.",
    gotcha: "Never hardcode font colors like #FFFFFF. Always bind to Theme Text Colors (Primary, Secondary, Alternate) for Dark Mode support."
  },
  {
    name: "RichText",
    category: "base",
    categoryLabel: "Base Elements",
    description: "Combines multiple distinct text spans with unique colors, weights, fonts, and tap actions within a single continuous paragraph.",
    keyProperties: ["Text Spans Array", "Per-Span Style (color, weight)", "Per-Span Tap Action (link redirect)"],
    bestPractice: "Use for legal disclaimers: 'By continuing, you agree to our [Terms] and [Privacy Policy]' where each bracketed item is styled and clickable.",
    gotcha: "Don't create 5 separate Text widgets in a Row when RichText achieves identical flow with zero line-break bugs."
  },
  {
    name: "Image",
    category: "base",
    categoryLabel: "Base Elements",
    description: "Renders graphics from bundled project assets, remote network URLs, or authenticated Firebase/Supabase storage buckets.",
    keyProperties: ["Source (Asset, Network, Uploaded File)", "Box Fit (Cover, Contain, Fill, None)", "Border Radius (999 for circular)", "Placeholder & Error Widget"],
    bestPractice: "Set Box Fit to 'Cover' and provide a lightweight placeholder asset so user cards don't flash blank while loading from CDNs.",
    gotcha: "Circular profile images require setting all four corner radii to 999 or wrapping in a ClipRRect with radius."
  },
  {
    name: "Icon & IconButton",
    category: "base",
    categoryLabel: "Base Elements",
    description: "Vector-based symbols from Material Design, FontAwesome, or custom SVGs that scale crisply to any DPI without pixelation.",
    keyProperties: ["Icon Data", "Size (px)", "Icon Color", "Button Fill & Border (IconButton)"],
    bestPractice: "Always ensure touch targets for IconButtons are at least 44x44 pt to meet Apple and Google accessibility standards.",
    gotcha: "Avoid using low-resolution PNGs for small icons; use native vector icons instead."
  },
  {
    name: "Button",
    category: "base",
    categoryLabel: "Base Elements",
    description: "Interactive button triggering Action Flow chains on tap. Supports loading state spinners, icons, and elevation shadows.",
    keyProperties: ["Text Label", "Leading/Trailing Icon", "Background & Text Color", "Border Radius & Border Width", "Elevation", "Disable Condition"],
    bestPractice: "Bind the 'Disable Condition' to form validation state so users cannot spam submit buttons while an API call is in progress.",
    gotcha: "Leaving tap actions unbound can confuse users. Add feedback (Snack Bar or page navigation) after every button tap."
  },

  // Page Elements
  {
    name: "Scaffold",
    category: "page",
    categoryLabel: "Page Elements",
    description: "The top-level skeleton framing every FlutterFlow screen. Hosts the AppBar, Body, BottomNavigationBar, Drawer, and FloatingActionButton.",
    keyProperties: ["Background Color", "Safe Area (Top/Bottom)", "Hide Keyboard On Tap", "Resize To Avoid Bottom Inset"],
    bestPractice: "Always keep 'Hide Keyboard On Tap' enabled so tapping outside a TextField dismisses the mobile keyboard naturally.",
    gotcha: "Disabling Safe Area can cause top navigation headers to render underneath phone camera notches and dynamic islands."
  },
  {
    name: "AppBar",
    category: "page",
    categoryLabel: "Page Elements",
    description: "The top navigation header. Automatically supplies a back arrow on child screens and hosts page titles and right-side action buttons.",
    keyProperties: ["Title (Text or Custom Widget)", "Leading Widget (Back arrow or Drawer toggle)", "Actions (Icons for search, notifications)", "Elevation (0 for flat modern UI)"],
    bestPractice: "Set Elevation to 0 with a subtle border-bottom for sleek, contemporary mobile aesthetic.",
    gotcha: "Manually wiring back actions on an auto-generated leading back button can cause duplicate page pop transitions."
  },
  {
    name: "NavBar (Bottom Navigation)",
    category: "page",
    categoryLabel: "Page Elements",
    description: "The persistent bottom tab bar. In FlutterFlow, configuring NavBar at the project level handles page switching automatically with zero action flow code.",
    keyProperties: ["Nav Items (Icon, Active Icon, Label)", "Active / Inactive Color", "Show Labels Toggle", "2 to 5 Root Destinations"],
    bestPractice: "Limit bottom navigation to between 2 and 5 primary destinations (Home, Search, Orders, Profile).",
    gotcha: "Never add manual 'Navigate To' actions on bottom navbar items; FlutterFlow manages navbar page stacks natively."
  },
  {
    name: "Drawer & EndDrawer",
    category: "page",
    categoryLabel: "Page Elements",
    description: "Side-sliding navigation panels that reveal additional links, account switchers, and logout buttons when triggered.",
    keyProperties: ["Drawer Width", "Background Color", "Open/Close Action Triggers"],
    bestPractice: "Use Drawer for secondary features (Terms, App Settings, FAQ) to keep the primary bottom navbar uncluttered.",
    gotcha: "Always provide an explicit Close Drawer action on navigation taps to prevent drawer state freezing."
  },

  // Form Elements
  {
    name: "TextField",
    category: "form",
    categoryLabel: "Form Elements",
    description: "Captures user keyboard input for emails, passwords, search queries, bios, and financial numbers.",
    keyProperties: ["Label Text & Hint Text", "Keyboard Type (Email, Phone, Number)", "Password Field (Obscure text toggle)", "Max Lines", "Validation Rules"],
    bestPractice: "Always match Keyboard Type to data (e.g. Email Address) to present the user with the @ symbol on their keyboard.",
    gotcha: "Forgetting to set Max Lines to 1 on single-line inputs allows users to press Enter and create accidental tall inputs."
  },
  {
    name: "PinCode",
    category: "form",
    categoryLabel: "Form Elements",
    description: "Segmented OTP input field for 4-digit or 6-digit SMS verification and two-factor authentication codes.",
    keyProperties: ["Pin Length (4 or 6)", "Box Shape (Circle, Underline, Box)", "Auto Focus", "On Completed Action"],
    bestPractice: "Trigger your verifyOTP action directly in the 'On Completed' event for seamless instant submission.",
    gotcha: "Make sure keyboard type is set to Number to prevent alphabetical keyboard popup."
  },
  {
    name: "Checkbox & Switch (Toggle)",
    category: "form",
    categoryLabel: "Form Elements",
    description: "Boolean true/false selectors. Checkbox is tailored for form submissions; Switch (Toggle) is tailored for instant live settings.",
    keyProperties: ["Initial Value (boolean)", "Active / Inactive Color", "On Changed Action"],
    bestPractice: "Use Switch for live preferences (Dark Mode, Push Notifications). Use Checkbox for form agreements ('I accept the terms').",
    gotcha: "Toggling a Switch should execute an immediate action; a Checkbox should only update state until the submit button is tapped."
  },
  {
    name: "Dropdown",
    category: "form",
    categoryLabel: "Form Elements",
    description: "Compact selection list concealing choices inside a popup menu. Ideal for country codes, categories, and payment methods.",
    keyProperties: ["Options List (Static or Dynamic DB binding)", "Hint Text", "Initial Option", "Searchable Toggle"],
    bestPractice: "Enable 'Searchable' when the options list exceeds 15 items so users can filter by typing.",
    gotcha: "Binding a dynamic list without handling the null initial state can cause blank selection errors."
  },
  {
    name: "ChoiceChips",
    category: "form",
    categoryLabel: "Form Elements",
    description: "Selectable horizontal or wrapped chip buttons for single or multi-select filtering (e.g. clothing sizes: S, M, L, XL).",
    keyProperties: ["Options List", "Allow Multiselect Toggle", "Selected / Unselected Styling", "On Selected Action"],
    bestPractice: "Far superior UX to dropdowns on mobile for choices with 3 to 7 concise options.",
    gotcha: "Ensure multiselect variables are typed as List<String> in App State, not single String."
  },

  // Media & Visualization
  {
    name: "Lottie & Rive Animation",
    category: "media",
    categoryLabel: "Media & Display",
    description: "Vector animation players for lightweight, 60fps interactive animations (success checkmarks, loading spinners, empty states).",
    keyProperties: ["Animation Source (Asset or URL)", "Loop", "Auto Play", "Trigger On Action"],
    bestPractice: "Use Lottie for delightful micro-interactions when actions complete (e.g. order placed checkmark).",
    gotcha: "Hosting unoptimized 5MB Lottie JSONs over network causes frame drops. Always compress animations via dotLottie."
  },
  {
    name: "PDFViewer & WebView",
    category: "media",
    categoryLabel: "Media & Display",
    description: "PDFViewer renders documents directly; WebView embeds external web pages (payment gateways, blogs, terms).",
    keyProperties: ["Document URL / Web URL", "Horizontal/Vertical scroll", "JavaScript Enabled (WebView)", "Bypass Cache"],
    bestPractice: "Use WebView for DocuSeal embedded signing or Stripe hosted billing portals.",
    gotcha: "Apple requires all external web links inside WebViews to comply with App Store Guideline 4.0."
  },
  {
    name: "LineChart & BarChart",
    category: "charts",
    categoryLabel: "Charts & Data",
    description: "Built-in data visualization widgets powered by fl_chart for financial trends, fitness metrics, and analytics.",
    keyProperties: ["Chart Data Points (List of doubles)", "Gradient Fill Area", "Curved Lines Toggle", "Axis Labels & Gridlines"],
    bestPractice: "Format raw database records into chart-ready coordinate arrays using a lightweight Custom Function.",
    gotcha: "Passing null or NaN values in data point coordinates crashes the chart renderer."
  }
];

// -------------------------------------------------------------
// MAJOR INTEGRATIONS PLAYBOOK DATA
// -------------------------------------------------------------
const majorIntegrationsData: IntegrationScenario[] = [
  {
    id: "stripe-all-scenarios",
    title: "Stripe Integration: All 4 Production Scenarios",
    badge: "Payments & Fintech",
    icon: "CreditCard",
    scenario: "Complete guide to Stripe in FlutterFlow: One-Time Payments, Recurring Subscriptions, Stripe Connect Marketplace Splits, and Pre-Authorization Holds.",
    architecture: "Client UI -> Secure Cloud Function Proxy -> Stripe REST API -> Webhook Event Listener -> Firestore/Supabase Database Update.",
    workflowSteps: [
      "Scenario 1 (One-Time): Cloud Function generates PaymentIntent with server-verified items total. FlutterFlow triggers Stripe Payment Sheet.",
      "Scenario 2 (Subscriptions): Cloud Function creates Stripe Checkout session with Price ID. Successful webhook customer.subscription.created grants user premium claim.",
      "Scenario 3 (Connect Marketplace): Express accounts for sellers. Platform fee (e.g. 10%) deducted via application_fee_amount before remaining balance transfers to vendor.",
      "Scenario 4 (Pre-Auth Holds): PaymentIntent created with capture_method: 'manual'. Authorize $50 for ride; capture exact $42.50 upon completion and release remainder.",
      "Webhook Security: Verify stripe-signature header cryptographically with endpoint secret to prevent spoofed order fulfillment."
    ],
    codeSnippet: {
      lang: "javascript",
      title: "Firebase Cloud Function: Pre-Auth Hold & Deferred Capture",
      code: `const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// 1. Authorize Hold on Passenger Card
exports.createPreAuthHold = functions.https.onCall(async (data, context) => {
  const { amountInCents, customerId } = data;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountInCents,
    currency: 'usd',
    customer: customerId,
    capture_method: 'manual', // Holds funds without capturing!
  });
  return { clientSecret: paymentIntent.client_secret, intentId: paymentIntent.id };
});

// 2. Capture Exact Final Fare (Release remainder)
exports.captureFinalFare = functions.https.onCall(async (data, context) => {
  const { intentId, finalAmountCents } = data;
  const captured = await stripe.paymentIntents.capture(intentId, {
    amount_to_capture: finalAmountCents,
  });
  return { status: captured.status };
});`
    },
    commonErrors: "Never pass amounts from the client device—hackers can tamper with the request and buy $100 items for $0.01. Always calculate totals server-side."
  },
  {
    id: "revenuecat-iap",
    title: "RevenueCat In-App Purchases (iOS StoreKit & Android Billing)",
    badge: "Subscriptions & IAP",
    icon: "Smartphone",
    scenario: "Selling digital subscriptions, feature tiers, and consumable coins compliant with Apple Guideline 3.1.1 and Google Play Billing.",
    architecture: "FlutterFlow Native RevenueCat Integration -> Purchases SDK -> Apple StoreKit 2 / Google Play Billing -> Webhook Sync.",
    workflowSteps: [
      "Step 1: Set up App Store Connect Shared Secret and Google Play Service Account Credentials in RevenueCat Dashboard.",
      "Step 2: Define Entitlements (e.g. 'pro_access') and Packages (e.g. '$9.99/mo', '$79.99/yr') inside Offerings.",
      "Step 3: Enable RevenueCat in FlutterFlow Settings and paste your Public API Keys.",
      "Step 4: Present Paywall via FlutterFlow native Paywall Action or custom UI bound to 'Get Customer Info'.",
      "Step 5: Call 'Restore Purchases' on an accessible button in Settings to comply with Apple review requirements."
    ],
    codeSnippet: {
      lang: "dart",
      title: "Custom Action: Check RevenueCat Active Entitlement",
      code: `import 'package:purchases_flutter/purchases_flutter.dart';

Future<bool> checkProEntitlement() async {
  try {
    CustomerInfo customerInfo = await Purchases.getCustomerInfo();
    return customerInfo.entitlements.all['pro_access']?.isActive ?? false;
  } catch (e) {
    return false;
  }
}`
    },
    commonErrors: "Failing to include a working 'Restore Purchases' button on your paywall is the #1 reason Apple rejects subscription apps."
  },
  {
    id: "google-admob",
    title: "Google AdMob Monetization (Banners, Interstitials, Rewarded)",
    badge: "Advertising",
    icon: "Zap",
    scenario: "Monetizing free app tiers with high-eCPM banners, level-completion interstitials, and rewarded videos for in-game credits.",
    architecture: "Google AdMob SDK -> FlutterFlow Native Ad Actions -> User Messaging Platform (UMP) Consent -> ATT Framework (iOS).",
    workflowSteps: [
      "Step 1: Register AdMob App IDs for iOS and Android in FlutterFlow Project Settings.",
      "Step 2: Add Banner Ad widget to bottom of scrollable views with adaptive sizing.",
      "Step 3: Trigger Interstitial Ads between natural user task completions (e.g. after saving an invoice).",
      "Step 4: Use Rewarded Video Ads: Give users 5 free AI credits when they watch a 30-second video.",
      "Step 5: Enforce Google UMP consent form in EU and Apple App Tracking Transparency (ATT) prompt in iOS."
    ],
    codeSnippet: {
      lang: "dart",
      title: "Info.plist Configuration for App Tracking Transparency",
      code: `<key>NSUserTrackingUsageDescription</key>
<string>This identifier will be used to deliver personalized ads to you.</string>
<key>SKAdNetworkItems</key>
<array>
  <dict>
    <key>SKAdNetworkIdentifier</key>
    <string>cstr6suwn9.skadnetwork</string>
  </dict>
</array>`
    },
    commonErrors: "Showing an interstitial ad immediately on app launch or spamming ads during active tasks triggers immediate Play Store de-ranking."
  },
  {
    id: "google-maps-postgis",
    title: "Google Maps & Geolocation (Routing, Markers & PostGIS)",
    badge: "Mobility & Geo",
    icon: "MapPin",
    scenario: "Live driver-passenger tracking, turn-by-turn polyline routes, Places autocomplete, and radius queries for car booking, delivery, and real estate.",
    architecture: "FlutterFlow Google Maps Component + Places API + Supabase PostGIS (ST_DWithin) or GeoFlutterFire.",
    workflowSteps: [
      "Step 1: Enable Google Maps SDK for iOS, Android, and Directions API in Google Cloud Console.",
      "Step 2: Add GoogleMap widget, set Initial Location to 'Current User Location', and enable 'Show User Location' pin.",
      "Step 3: Draw polyline routes between Pickup and Dropoff coordinates using Directions API REST call.",
      "Step 4: Real-time driver vehicle markers: Rotate marker icon smoothly matching compass heading bearing.",
      "Step 5: Query nearby drivers within 5km radius using Supabase PostGIS spatial index: ST_DWithin(location, user_loc, 5000)."
    ],
    codeSnippet: {
      lang: "sql",
      title: "Supabase PostGIS: Find Drivers Within 5km Radius",
      code: `-- Highly performant spatial query with GiST index
CREATE OR REPLACE FUNCTION get_nearby_drivers(lat double precision, lng double precision, radius_meters double precision)
RETURNS SETOF drivers AS $$
BEGIN
  RETURN QUERY
  SELECT * FROM drivers
  WHERE is_online = true
    AND ST_DWithin(
      geom,
      ST_SetSRID(ST_MakePoint(lng, lat), 4326)::geography,
      radius_meters
    )
  ORDER BY geom <-> ST_SetSRID(ST_MakePoint(lng, lat), 4326)::geography;
END;
$$ LANGUAGE plpgsql;`
    },
    commonErrors: "Failing to add iOS Location Usage strings (NSLocationWhenInUseUsageDescription) causes immediate App Store rejection."
  },
  {
    id: "docuseal-signatures",
    title: "DocuSeal Integration: Digital Contracts & PDF Signatures",
    badge: "Legal & Enterprise",
    icon: "FileCheck",
    scenario: "Embedded digital signature flows for tenant leases, NDAs, employee onboarding, and service quotes inside FlutterFlow.",
    architecture: "FlutterFlow App -> DocuSeal REST API -> Embedded Signing WebView -> Webhook Callback -> Signed PDF to Storage.",
    workflowSteps: [
      "Step 1: Create contract template with dynamic merge fields (e.g. {{client_name}}, {{fee}}) in DocuSeal dashboard.",
      "Step 2: Backend Cloud Function calls DocuSeal API /submissions to generate unique secure signing URL.",
      "Step 3: Open signing URL in FlutterFlow WebView widget or external secure browser tab.",
      "Step 4: DocuSeal triggers webhook submission.completed upon signature completion.",
      "Step 5: Serverless function saves verified signed PDF to Firebase Storage and updates user account status."
    ],
    codeSnippet: {
      lang: "json",
      title: "DocuSeal Submissions API Call Payload",
      code: `{
  "template_id": "tpl_tenant_lease_2026",
  "send_email": false,
  "submitters": [
    {
      "role": "Tenant",
      "email": "[userEmail]",
      "fields": [
        { "name": "FullName", "default_value": "[userName]" },
        { "name": "MonthlyRent", "default_value": "$2,400" }
      ]
    }
  ]
}`
    },
    commonErrors: "Do not embed unprotected external iframes without setting correct cross-origin headers."
  },
  {
    id: "gohighlevel-crm",
    title: "GoHighLevel (GHL) CRM Integration: Leads & Automated Pipelines",
    badge: "CRM & Marketing",
    icon: "Magnet",
    scenario: "Two-way synchronization between FlutterFlow mobile apps and GoHighLevel: Lead capture, pipeline stage updates, and automated SMS appointment reminders.",
    architecture: "FlutterFlow Form -> Private API Call (GHL v2 REST API) -> Workflow Automation -> Twilio SMS / Calendar Booking.",
    workflowSteps: [
      "Step 1: Generate Location Private API Key or OAuth Access Token in GoHighLevel Sub-Account.",
      "Step 2: Create API Group in FlutterFlow: https://services.leadconnectorhq.com with Authorization: Bearer [GHL_Key].",
      "Step 3: On contact form submit: Call POST /contacts/upsert to create lead with custom tags (e.g. ['mobile_app_lead']).",
      "Step 4: Move lead through GHL Opportunities Pipeline: POST /opportunities to set deal value and stage.",
      "Step 5: GHL Workflows trigger automated WhatsApp/SMS sequences and calendar reminders."
    ],
    codeSnippet: {
      lang: "json",
      title: "GHL Upsert Contact API Payload",
      code: `{
  "locationId": "[ghlLocationId]",
  "name": "[clientName]",
  "email": "[clientEmail]",
  "phone": "[clientPhone]",
  "tags": ["flutterflow_user", "quote_requested"],
  "customFields": [
    { "id": "field_app_interest", "value": "Mobile App MVP" }
  ]
}`
    },
    commonErrors: "Always include the mandatory 'locationId' header; omitting it returns 400 Bad Request across GHL v2 endpoints."
  },
  {
    id: "offline-realtime-chat",
    title: "Offline-First Real-Time Chat Engine with Optimistic UI",
    badge: "Real-Time & Offline",
    icon: "WifiOff",
    scenario: "Building resilient chat messaging apps that work seamlessly in subways, flights, or spotty cellular connections with instant optimistic message rendering and auto-sync.",
    architecture: "Optimistic UI -> Local SQLite/Hive Queue -> connectivity_plus Stream -> Cloud Firestore / Supabase Realtime -> Online Presence State.",
    workflowSteps: [
      "Step 1: Optimistic UI Rendering: User taps send -> message immediately added to local App State list with status 'pending' (single grey checkmark).",
      "Step 2: Local SQLite / Hive Storage: Message saved to offline queue on device disk so app force-quits don't erase unsent drafts.",
      "Step 3: Connectivity Stream Listener: Custom Action monitors network state using connectivity_plus.",
      "Step 4: Reconnection Drain Queue: When connection returns, process pending queue sequentially to Firestore / Supabase.",
      "Step 5: Real-Time Presence: Update user status ('online', 'last_seen', 'typing') via Firebase Realtime Database with onDisconnect() cleanup."
    ],
    codeSnippet: {
      lang: "dart",
      title: "Custom Action: Network Reconnection Queue Drainer",
      code: `import 'package:connectivity_plus/connectivity_plus.dart';

Future setupOfflineChatSync() async {
  Connectivity().onConnectivityChanged.listen((ConnectivityResult result) async {
    if (result != ConnectivityResult.none) {
      // Network restored: Drain local pending message queue
      await drainOfflineMessageQueue();
    }
  });
}`
    },
    commonErrors: "Failing to generate client-side UUIDs for messages before sending results in duplicate message entries upon network retry."
  }
];

// -------------------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------------------
export default function FlutterFlowTutorialsContent() {
  const [activeTab, setActiveTab] = useState<"modules" | "widgets" | "integrations" | "custom-code" | "database">("modules");
  const [widgetFilter, setWidgetFilter] = useState<string>("all");
  const [widgetSearch, setWidgetSearch] = useState<string>("");
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  // Copy helper
  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  // Filtered widgets
  const filteredWidgets = allWidgetsData.filter(w => {
    const matchesCategory = widgetFilter === "all" || w.category === widgetFilter;
    const matchesSearch = widgetSearch === "" ||
      w.name.toLowerCase().includes(widgetSearch.toLowerCase()) ||
      w.description.toLowerCase().includes(widgetSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#E9EBEF]">
      {/* HERO SECTION */}
      <section className="pt-36 pb-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs md:text-sm font-semibold mb-6 rounded-full bg-[#4A5FBD]/10 border border-[#4A5FBD]/30 text-[#7E95F7]">
              <Sparkles className="w-4 h-4 text-[#06B6D4]" />
              The Complete FlutterFlow Technical Knowledge Base (2026)
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Every Widget. Every Integration. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E95F7] via-[#06B6D4] to-[#10B981]">
                Zero Compromise.
              </span>
            </h1>
            <p className="text-base md:text-lg text-[#8A93A3] leading-relaxed mb-8 max-w-3xl mx-auto">
              The definitive developer manual for FlutterFlow. Deep-dive into all 30+ UI widgets, complete Stripe scenario architectures (one-time, subscriptions, marketplace splits, pre-auth holds), RevenueCat, AdMob, Google Maps PostGIS, DocuSeal, GoHighLevel, offline chat, and custom Dart code.
            </p>
          </motion.div>
        </div>

        {/* PRIMARY HUB NAVIGATION TABS */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-[#12161F] border border-[#232A36] max-w-3xl mx-auto shadow-2xl">
          {[
            { id: "modules", label: "Tutorial Modules", icon: <BookOpen className="w-4 h-4" /> },
            { id: "widgets", label: "Widget Encyclopedia", icon: <Layers className="w-4 h-4" /> },
            { id: "integrations", label: "Major Integrations", icon: <Zap className="w-4 h-4" /> },
            { id: "custom-code", label: "Custom Code & Offline", icon: <Code2 className="w-4 h-4" /> },
            { id: "database", label: "Database Schemas", icon: <Database className="w-4 h-4" /> },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-lg text-xs md:text-sm font-semibold flex items-center gap-2 transition-all ${
                activeTab === tab.id
                  ? "bg-[#4A5FBD] text-white shadow-lg shadow-[#4A5FBD]/30"
                  : "text-[#8A93A3] hover:text-[#E9EBEF] hover:bg-[#1A2232]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TAB 1: CORE TUTORIAL MODULES */}
      {/* ========================================================================= */}
      {activeTab === "modules" && (
        <section className="px-4 md:px-6 max-w-7xl mx-auto mb-24">
          {/* Featured Pillar Banner */}
          <div className="p-1 rounded-2xl bg-gradient-to-r from-[#4A5FBD]/40 via-[#06B6D4]/30 to-[#10B981]/30 mb-12">
            <div className="bg-[#101522] rounded-2xl p-6 md:p-10 border border-[#232A36] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 text-xs font-bold rounded bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30">
                    FEATURED MASTERCLASS 2026
                  </span>
                  <span className="text-xs text-[#8A93A3]">28 min comprehensive read</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#F8FAFC]">
                  The Ultimate FlutterFlow Beginner Guide: Build, Secure &amp; Publish from Scratch
                </h2>
                <p className="text-sm md:text-base text-[#94A3B8] leading-relaxed mb-6">
                  Complete end-to-end masterclass: reactive widget trees, in-memory App State, Brevo transactional email APIs, conversational OpenAI ChatGPT assistants, Firebase Custom Claims RBAC, and the full App Store &amp; Google Play checklist.
                </p>
                <div className="flex flex-wrap gap-2.5 mb-6">
                  {["4 Widget Categories", "Zero-Leak APIs", "OpenAI Chatbot", "Custom Claims RBAC", "App Store Checklist"].map((t, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 rounded bg-[#1E293B] text-[#93C5FD] border border-[#334155]">
                      ✓ {t}
                    </span>
                  ))}
                </div>
                <Link href="/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#60A5FA] hover:text-[#93C5FD] transition-colors cursor-pointer">
                    Read Masterclass Guide <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
              <div className="lg:col-span-5">
                <Link href="/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026" className="block group">
                  <div className="relative rounded-xl overflow-hidden border border-[#232A36] group-hover:border-[#4A5FBD] transition-all shadow-xl">
                    <Image
                      src="/images/blog/flutterflow-beginner-guide-hero.svg"
                      alt="FlutterFlow Beginner Guide Hero"
                      width={600}
                      height={340}
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Module Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorialModules.map((module) => (
              <div
                key={module.id}
                className="bg-[#12161F] rounded-xl border border-[#232A36] overflow-hidden flex flex-col hover:border-[#4A5FBD]/60 transition-all hover:shadow-xl group"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-[#0A0E17] border-b border-[#1F2937]">
                  <Image
                    src={module.image}
                    alt={module.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 text-xs font-mono font-bold rounded-md bg-[#161F30] border border-[#23314B] text-[#60A5FA]">
                        MODULE {module.number}
                      </span>
                      <span
                        className={`px-2.5 py-1 text-xs font-bold rounded-md border ${
                          module.difficulty === "Beginner"
                            ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-300"
                            : "bg-blue-500/20 border-blue-500/50 text-blue-300"
                        }`}
                      >
                        {module.difficulty}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#8A93A3] bg-[#0A0D14] px-2 py-0.5 rounded border border-[#1E293B]">
                      {module.readTime}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#06B6D4] mb-1">{module.badge}</span>
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 group-hover:text-[#60A5FA] transition-colors leading-snug">
                    {module.title}
                  </h3>
                  <p className="text-xs text-[#8A93A3] mb-4 leading-relaxed line-clamp-3">
                    {module.description}
                  </p>

                  <div className="space-y-1.5 mb-5 flex-1">
                    {module.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#CBD5E1]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {module.keySnippet && (
                    <div className="mb-4 rounded-md bg-[#0A0D14] border border-[#1E293B] p-2.5">
                      <div className="text-[10px] font-mono text-[#64748B] mb-1">{module.keySnippet.label}</div>
                      <pre className="text-[10px] font-mono text-[#38BDF8] overflow-x-auto whitespace-pre leading-tight">
                        <code>{module.keySnippet.code}</code>
                      </pre>
                    </div>
                  )}

                  <div className="pt-4 border-t border-[#1F2937] mt-auto flex items-center justify-between">
                    <Link
                      href={module.deepLink || "/blog/flutterflow-beginner-guide-step-by-step-tutorial-2026"}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA] hover:text-[#93C5FD] transition-colors"
                    >
                      Read Guide <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-xs text-[#10B981] font-medium">Free Access</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: WIDGET ENCYCLOPEDIA (EVERY WIDGET COVERED) */}
      {/* ========================================================================= */}
      {activeTab === "widgets" && (
        <section className="px-4 md:px-6 max-w-7xl mx-auto mb-24">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-[#F8FAFC]">FlutterFlow Widget Encyclopedia</h2>
              <p className="text-xs text-[#8A93A3] mt-1">
                Detailed architecture, properties, layout rules, and gotchas for every single FlutterFlow UI primitive.
              </p>
            </div>
            {/* Search input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-3" />
              <input
                type="text"
                value={widgetSearch}
                onChange={(e) => setWidgetSearch(e.target.value)}
                placeholder="Search widgets (e.g. Column, Wrap)..."
                className="w-full pl-9 pr-4 py-2 bg-[#12161F] border border-[#232A36] rounded-lg text-xs text-[#E9EBEF] focus:outline-none focus:border-[#4A5FBD]"
              />
            </div>
          </div>

          {/* Sub-category filter pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: "all", label: "All Widgets" },
              { id: "layout", label: "Layout Elements" },
              { id: "base", label: "Base Elements" },
              { id: "page", label: "Page Elements" },
              { id: "form", label: "Form Elements" },
              { id: "media", label: "Media & Display" },
              { id: "charts", label: "Charts & Data" },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setWidgetFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                  widgetFilter === cat.id
                    ? "bg-[#4A5FBD] text-white"
                    : "bg-[#12161F] text-[#8A93A3] hover:text-[#E9EBEF] border border-[#232A36]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Widget Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWidgets.map((widget, i) => (
              <div
                key={i}
                className="bg-[#12161F] rounded-xl border border-[#232A36] p-6 hover:border-[#4A5FBD]/60 transition-all flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-2.5 py-0.5 rounded bg-[#1E293B] text-[#60A5FA] font-mono font-bold">
                    {widget.name}
                  </span>
                  <span className="text-[11px] text-[#94A3B8]">{widget.categoryLabel}</span>
                </div>

                <p className="text-xs text-[#CBD5E1] leading-relaxed mb-4 flex-1">
                  {widget.description}
                </p>

                <div className="mb-4">
                  <span className="text-[11px] font-bold text-[#A78BFA] uppercase tracking-wider block mb-1.5">
                    Key Config Properties:
                  </span>
                  <ul className="space-y-1">
                    {widget.keyProperties.map((prop, idx) => (
                      <li key={idx} className="text-[11px] text-[#94A3B8] flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#4A5FBD]" />
                        {prop}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-[#0E131E] border border-[#1E2638] text-[11px] space-y-2 mt-auto">
                  <div className="text-[#34D399]">
                    <strong>Best Practice:</strong> {widget.bestPractice}
                  </div>
                  <div className="text-[#FBBF24]">
                    <strong>Common Gotcha:</strong> {widget.gotcha}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: MAJOR INTEGRATIONS PLAYBOOK */}
      {/* ========================================================================= */}
      {activeTab === "integrations" && (
        <section className="px-4 md:px-6 max-w-7xl mx-auto mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#10B981]/15 text-[#34D399] border border-[#10B981]/30 uppercase tracking-wider">
              Battle-Tested Architectures
            </span>
            <h2 className="text-3xl font-extrabold text-[#F8FAFC] mt-3 mb-2">
              Major FlutterFlow Third-Party Integrations
            </h2>
            <p className="text-sm text-[#8A93A3]">
              Step-by-step production implementations for Stripe (all scenarios), RevenueCat, AdMob, Google Maps PostGIS, DocuSeal, and GoHighLevel.
            </p>
          </div>

          {/* Stripe Scenarios Visual Infographic */}
          <div className="mb-14 rounded-2xl overflow-hidden border border-[#232A36] bg-[#12161F] p-4 shadow-2xl">
            <Image
              src="/images/blog/flutterflow-stripe-scenarios.svg"
              alt="Stripe All Scenarios Architecture Matrix"
              width={1000}
              height={580}
              className="w-full h-auto rounded-xl"
            />
            <p className="text-xs text-center text-[#64748B] mt-3">
              Figure 1: Complete Stripe integration matrix in FlutterFlow: One-time checkout, recurring subscriptions, Stripe Connect marketplace splits, and pre-auth holds.
            </p>
          </div>

          {/* Detailed Integration Blocks */}
          <div className="space-y-12">
            {majorIntegrationsData.map((item) => (
              <div
                key={item.id}
                className="bg-[#12161F] rounded-2xl border border-[#232A36] p-6 md:p-8 hover:border-[#4A5FBD]/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#4A5FBD]/20 text-[#7E95F7] border border-[#4A5FBD]/40">
                      {item.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-[#F8FAFC] mt-2">{item.title}</h3>
                  </div>
                  <div className="text-xs text-[#64748B] font-mono bg-[#0B0F19] px-3 py-1.5 rounded-lg border border-[#1E293B]">
                    {item.architecture}
                  </div>
                </div>

                <p className="text-sm text-[#CBD5E1] mb-6 leading-relaxed">
                  {item.scenario}
                </p>

                {/* Workflow steps */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-[#93C5FD] uppercase tracking-wider mb-3">
                    Implementation Execution Steps:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {item.workflowSteps.map((step, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-[#0B0F19] border border-[#1F2937] text-xs text-[#E2E8F0] flex items-start gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#1E293B] text-[#60A5FA] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Snippet Box */}
                <div className="rounded-xl bg-[#090D15] border border-[#1E293B] overflow-hidden mb-6">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-[#101622] border-b border-[#1E293B]">
                    <span className="text-xs font-mono text-[#94A3B8]">{item.codeSnippet.title}</span>
                    <button
                      onClick={() => handleCopy(item.id, item.codeSnippet.code)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#60A5FA] hover:text-[#93C5FD] transition-colors"
                    >
                      {copiedCodeId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#10B981]" /> Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" /> Copy Code
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 text-xs font-mono text-[#38BDF8] overflow-x-auto whitespace-pre leading-relaxed">
                    <code>{item.codeSnippet.code}</code>
                  </pre>
                </div>

                {/* Common Gotcha Box */}
                <div className="p-3.5 rounded-lg bg-[#F59E0B]/10 border border-[#F59E0B]/25 text-xs text-[#FBBF24] flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <strong>Production Warning:</strong> {item.commonErrors}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* TAB 4: CUSTOM CODE & OFFLINE ARCHITECTURE */}
      {/* ========================================================================= */}
      {activeTab === "custom-code" && (
        <section className="px-4 md:px-6 max-w-7xl mx-auto mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/30 uppercase tracking-wider">
              Engineering Extensibility
            </span>
            <h2 className="text-3xl font-extrabold text-[#F8FAFC] mt-3 mb-2">
              Custom Code, Widgets, Actions &amp; Offline Sync
            </h2>
            <p className="text-sm text-[#8A93A3]">
              Break free from visual limitations with custom Dart code, pub.dev packages, and offline-first queue synchronization.
            </p>
          </div>

          {/* Offline Chat Architecture Infographic */}
          <div className="mb-14 rounded-2xl overflow-hidden border border-[#232A36] bg-[#12161F] p-4 shadow-2xl">
            <Image
              src="/images/blog/flutterflow-offline-chat-architecture.svg"
              alt="FlutterFlow Offline Chat Pipeline"
              width={1000}
              height={550}
              className="w-full h-auto rounded-xl"
            />
            <p className="text-xs text-center text-[#64748B] mt-3">
              Figure 2: Real-time and offline chat pipeline: Zero-latency optimistic UI writes, local SQLite queue, reconnection stream listener, and cloud delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Custom Functions */}
            <div className="bg-[#12161F] rounded-xl border border-[#232A36] p-6">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#3B82F6]/20 text-[#60A5FA] border border-[#3B82F6]/40">
                Custom Functions
              </span>
              <h3 className="text-lg font-bold text-[#F8FAFC] mt-3 mb-2">Pure Computational Logic</h3>
              <p className="text-xs text-[#8A93A3] leading-relaxed mb-4">
                Synchronous pure Dart functions. Ideal for calculating taxes, formatting currency, parsing dates, and filtering arrays. Must return immediately without async/await.
              </p>
              <pre className="p-3 rounded-lg bg-[#090D15] text-[11px] font-mono text-[#38BDF8] overflow-x-auto leading-relaxed border border-[#1E293B]">
{`String formatCurrency(double amount) {
  return "\\$" + amount.toStringAsFixed(2);
}`}
              </pre>
            </div>

            {/* Custom Actions */}
            <div className="bg-[#12161F] rounded-xl border border-[#232A36] p-6">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#10B981]/20 text-[#34D399] border border-[#10B981]/40">
                Custom Actions
              </span>
              <h3 className="text-lg font-bold text-[#F8FAFC] mt-3 mb-2">Asynchronous Side-Effects</h3>
              <p className="text-xs text-[#8A93A3] leading-relaxed mb-4">
                Asynchronous Dart functions that execute in Action Flow Editor chains. Ideal for device hardware (NFC, Bluetooth, Camera), native SDKs, and custom network requests.
              </p>
              <pre className="p-3 rounded-lg bg-[#090D15] text-[11px] font-mono text-[#34D399] overflow-x-auto leading-relaxed border border-[#1E293B]">
{`Future<String> triggerVibration() async {
  HapticFeedback.heavyImpact();
  return 'vibrated';
}`}
              </pre>
            </div>

            {/* Custom Widgets */}
            <div className="bg-[#12161F] rounded-xl border border-[#232A36] p-6">
              <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-[#8B5CF6]/20 text-[#C4B5FD] border border-[#8B5CF6]/40">
                Custom Widgets
              </span>
              <h3 className="text-lg font-bold text-[#F8FAFC] mt-3 mb-2">Visual Component Libraries</h3>
              <p className="text-xs text-[#8A93A3] leading-relaxed mb-4">
                Full Flutter StatefulWidget components. Import any package from pub.dev to render signature pads, audio spectrum visualizers, or custom 3D carousels.
              </p>
              <pre className="p-3 rounded-lg bg-[#090D15] text-[11px] font-mono text-[#C4B5FD] overflow-x-auto leading-relaxed border border-[#1E293B]">
{`class SignatureCanvas extends 
    StatefulWidget { ... }`}
              </pre>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* TAB 5: DATABASE SCHEMAS & COMPARISONS */}
      {/* ========================================================================= */}
      {activeTab === "database" && (
        <section className="px-4 md:px-6 max-w-7xl mx-auto mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F59E0B]/15 text-[#FBBF24] border border-[#F59E0B]/30 uppercase tracking-wider">
              Data Architecture
            </span>
            <h2 className="text-3xl font-extrabold text-[#F8FAFC] mt-3 mb-2">
              Choosing Your Database: Firestore NoSQL vs. Supabase PostgreSQL
            </h2>
            <p className="text-sm text-[#8A93A3]">
              Understanding document vs relational schemas, composite indexing, and row-level security tradeoffs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Firestore */}
            <div className="p-8 rounded-2xl bg-[#12161F] border border-[#232A36]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#F8FAFC]">Cloud Firestore (NoSQL)</h3>
                <span className="text-xs px-2.5 py-1 rounded bg-[#3B82F6]/20 text-[#60A5FA]">Document Store</span>
              </div>
              <p className="text-xs text-[#8A93A3] mb-6 leading-relaxed">
                Collection and document-based JSON tree. Excellent for rapid prototyping, real-time listeners, and automatic horizontal scaling with zero infrastructure setup.
              </p>
              <ul className="space-y-2.5 text-xs text-[#CBD5E1] mb-6">
                <li>• <strong>Data Structure:</strong> Hierarchical documents and subcollections.</li>
                <li>• <strong>Query Model:</strong> Shallow queries without table joins. Denormalization is expected.</li>
                <li>• <strong>Real-time Sync:</strong> Built-in out of the box with <code>snapshots()</code> stream.</li>
                <li>• <strong>Security Layer:</strong> <code>firestore.rules</code> with <code>request.auth</code> and custom JWT claims.</li>
                <li>• <strong>Best For:</strong> Chat apps, social feeds, rapid MVP builds, user preference stores.</li>
              </ul>
            </div>

            {/* Supabase */}
            <div className="p-8 rounded-2xl bg-[#12161F] border border-[#232A36]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-[#F8FAFC]">Supabase (PostgreSQL)</h3>
                <span className="text-xs px-2.5 py-1 rounded bg-[#10B981]/20 text-[#34D399]">Relational SQL</span>
              </div>
              <p className="text-xs text-[#8A93A3] mb-6 leading-relaxed">
                Full open-source PostgreSQL database. Unmatched for relational foreign keys, complex joins, PostGIS spatial queries, and pgvector embeddings.
              </p>
              <ul className="space-y-2.5 text-xs text-[#CBD5E1] mb-6">
                <li>• <strong>Data Structure:</strong> Strict relational tables with typed columns &amp; foreign keys.</li>
                <li>• <strong>Query Model:</strong> Full SQL syntax, foreign table joins, aggregates, and stored procedures (RPC).</li>
                <li>• <strong>Geospatial &amp; AI:</strong> PostGIS (<code>ST_DWithin</code>) and <code>pgvector</code> extensions.</li>
                <li>• <strong>Security Layer:</strong> PostgreSQL Row Level Security (RLS) policies evaluated at database kernel.</li>
                <li>• <strong>Best For:</strong> B2B SaaS, multi-tenant organizations, fintech, mobility, AI semantic search.</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CALL TO ACTION */}
      <section className="px-4 md:px-6 max-w-3xl mx-auto pb-24">
        <div className="p-8 md:p-10 rounded-2xl bg-[#12161F] border border-[#232A36]">
          <h2 className="text-3xl font-bold mb-2 text-center text-[#E9EBEF]">
            Want KinetixSoft to Architect Your App?
          </h2>
          <p className="text-center text-sm mb-8 text-[#8A93A3] max-w-lg mx-auto">
            Skip the trial and error. Partner with KinetixSoft for turnkey FlutterFlow mobile development, custom API integrations, and enterprise security.
          </p>
          <ContactForm defaultService="flutterflow" />
        </div>
      </section>
    </div>
  );
}
