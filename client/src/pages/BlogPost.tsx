import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BackgroundElements } from "@/components/BackgroundElements";
import { Calendar, User, ArrowLeft, Clock, ArrowRight } from "lucide-react";
import { Link, useRoute } from "wouter";

const BLOG_POSTS: Record<string, {
  title: string; date: string; author: string; readTime: string;
  category: string; categoryColor: string; related: string[]; content: string;
}> = {
  "podio-workspace-guide": {
    title: "How to Build a Podio Workspace Your Team Actually Uses",
    date: "Jun 10, 2026",
    author: "KinetixSoft Team",
    readTime: "6 min read",
    category: "Podio",
    categoryColor: "bg-green-500/10 border-green-500/20 text-green-300",
    related: ["automating-crm-podio", "future-of-low-code"],
    content: `
      <p>Most Podio workspaces fail not because Podio is the wrong tool, but because the workspace was built around what the platform offers instead of how the team works. The result is a system everyone technically has access to but nobody actually opens.</p>

      <h3>Start With the Process, Not the App Builder</h3>
      <p>The most common mistake: opening Podio's app builder before mapping the actual workflow. Before you create a single field, you should be able to answer: what does a piece of work look like when it enters this workspace, what happens to it in the middle, and what does done look like? If you can't describe that in plain language, building in Podio will just digitize the confusion.</p>
      <p>Spend time with the people who'll use the workspace. Watch how they work today — not how the org chart says they should work. The real workflow is usually different, and your Podio structure needs to match the real one.</p>

      <h3>Design the Data Before You Design the Interface</h3>
      <p>Podio is fundamentally a database with a UI on top. If the data model is wrong — fields that overlap, relationships that don't reflect reality, statuses that mean different things to different people — the interface will be confusing no matter how well it's built.</p>
      <p>Before building, define: what are the main objects in your process (contacts, deals, projects, tasks)? How do they relate to each other? What fields does each object actually need, versus what fields would be nice to have? Fewer, better-defined fields beat a sprawling form every time.</p>

      <h3>Automation Should Remove Real Work, Not Just Move It</h3>
      <p>Podio's workflow automation is powerful, but it's easy to build automations that technically trigger but don't actually save anyone time. The test: can you point to a specific manual step this automation replaces? If the answer is "it sends a notification," ask whether that notification actually needed to be sent, or whether it's just adding noise.</p>
      <p>The automations worth building are the ones that replace a decision someone was making manually and repeatedly: routing a new lead to the right person, changing a status when a task completes, generating a document when a deal closes. Those save real time. A notification that fires every time any field changes does not.</p>

      <h3>Roll Out in Phases, Not All at Once</h3>
      <p>A workspace that covers every process in the business from day one will overwhelm your team. Start with the one workflow that has the most friction today. Get that working well, get the team comfortable, then add the next one. Adoption compounds — a team that trusts the first workspace will use the second one. A team that was forced into a complex workspace on day one will find workarounds.</p>

      <h3>The Maintenance Question</h3>
      <p>Podio workspaces drift. A field gets added for a one-off project and never removed. A status option gets added and the old one stays. An automation fires into a view nobody checks. Budget time for a workspace audit every quarter: remove what isn't used, consolidate what overlaps, and make sure the automations are still doing what they were intended to do. A maintained workspace stays useful. An unmaintained one becomes the thing everyone works around.</p>
    `
  },

  "flutterflow-production-apps": {
    title: "What It Really Takes to Ship a FlutterFlow App to Production",
    date: "Jun 8, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "FlutterFlow",
    categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    related: ["future-of-low-code", "lovable-ai-apps"],
    content: `
      <p>FlutterFlow's pitch is accurate: you can build a working app UI faster than with traditional development. What the pitch leaves out is everything that happens between "working UI" and "production app." That gap is where most FlutterFlow projects stall.</p>

      <h3>The Data Model Is Where Most Apps Break</h3>
      <p>FlutterFlow makes it easy to start building screens before you've thought carefully about the database. This is a trap. A screen is easy to change. A data model that's been in production for three months with real user data is not.</p>
      <p>Before building a single screen, design the database schema on paper: what collections do you need, what fields go in each, how do documents relate to each other? Think about how that schema will look when you have a thousand users instead of ten. The screens follow from the data model — not the other way around.</p>

      <h3>Authentication Needs More Thought Than FlutterFlow's Defaults Give It</h3>
      <p>FlutterFlow's Firebase auth integration gets you a login screen quickly. It does not get you a complete authentication system. Out of the box, you still need to design: what happens when a user is deleted, what happens when a session expires mid-flow, how you handle users who sign up with email and then try to sign in with Google using the same address, and how you protect data so users can only see what belongs to them.</p>
      <p>Firestore security rules are especially easy to overlook. The default rules in a new Firebase project are either wide open or locked entirely — neither is right for production. Writing proper security rules that match your app's permission model takes time and needs to be done before launch, not after.</p>

      <h3>Custom Functions Are Not Optional for Complex Apps</h3>
      <p>FlutterFlow's visual logic handles most common cases well. For anything non-standard — complex calculations, specific API authentication flows, custom file handling, device-specific behavior — you'll need custom actions written in Dart. This is normal, not a failure of the platform. But it means your team needs someone comfortable writing Dart code, or you'll hit walls at predictable points in the build.</p>

      <h3>App Store Submission Takes Longer Than You Think</h3>
      <p>Apple's review process is real, and apps get rejected for specific, non-obvious reasons: missing privacy policy links, screenshot specifications, app description requirements, and functional requirements that depend on what your app does. Plan for at least a week of back-and-forth on the first submission. Have your privacy policy, terms of service, and app store assets ready before you submit — doing this after a rejection wastes review cycles.</p>

      <h3>Performance on Real Devices, Not Just the Emulator</h3>
      <p>FlutterFlow apps perform well in most cases, but there are specific patterns that cause slowdowns on older hardware: large lists without lazy loading, heavy animations on every screen, Firebase listeners that aren't properly cancelled. Test on a real device — specifically an older, lower-spec device — before launch. If it's fast there, it'll be fast everywhere.</p>

      <h3>What "Production-Ready" Actually Means</h3>
      <p>A production-ready FlutterFlow app has: a tested data model, security rules that match the permission model, proper error handling so a failed network call shows a message instead of a blank screen, analytics so you can see how the app is used, and a plan for pushing updates. None of these come automatically. All of them are achievable. The projects that ship are the ones that budget time for them.</p>
    `
  },

  "retool-internal-tools": {
    title: "Why Your Team Keeps Going Back to SQL (And How Retool Fixes That)",
    date: "Jun 6, 2026",
    author: "KinetixSoft Team",
    readTime: "5 min read",
    category: "Retool",
    categoryColor: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    related: ["future-of-low-code", "podio-workspace-guide"],
    content: `
      <p>If your ops, support, or finance team is running SQL queries to do their job, the problem isn't that they're technical. The problem is that nobody built them a proper interface. Raw SQL access to a production database is a workaround, not a workflow — and it's one that breaks down the moment the person who knows the queries leaves the team.</p>

      <h3>What "Internal Tool" Actually Means</h3>
      <p>An internal tool is any interface that lets non-engineers safely interact with production data. That means: a support rep can look up a user account and reset a flag without filing an engineering ticket. An ops manager can approve a batch of records without exporting a CSV, making changes in Excel, and importing it back. A finance team can see a live reconciliation view without waiting for a weekly report.</p>
      <p>Most companies have these needs and handle them badly — through a combination of direct database access, shared spreadsheets, and Slack threads asking engineers to "just make this one change." The cost of that approach is hidden until something goes wrong: a wrong record updated, a report based on stale data, an engineer spending half their week on requests that could be self-serve.</p>

      <h3>Why Retool Is the Right Tool for Most of This</h3>
      <p>Retool connects directly to your existing databases and APIs. There's no migration, no new data model to maintain in parallel, no syncing between systems. You write the query you'd have written in a SQL client, and Retool turns it into a table with buttons. The data your team is already working with appears in an interface they can use without knowing SQL.</p>
      <p>The other reason Retool is the right default: it's fast to build in. Most internal tools don't need custom-built software — they need a form, a table, some filters, and a few action buttons. Retool handles that in hours instead of weeks.</p>

      <h3>The Permissions Problem (And Why It Matters More Than You Think)</h3>
      <p>Internal tools touch sensitive data. The wrong person approving the wrong record, or a junior team member accidentally bulk-updating a field, is a real risk. Retool has role-based permissions built in: you can control who sees which apps, who can run which queries, and which actions are available to which roles. This isn't optional — it should be designed before a single screen is built.</p>
      <p>Audit trails are the other piece most teams overlook. When something goes wrong (and it will), you want to know who did what and when. Retool can log actions to a database table or external service. Set this up from the start.</p>

      <h3>When Retool Is Not the Answer</h3>
      <p>Retool is the right choice when the data already exists somewhere and you need a faster, safer way to work with it. It's not the right choice when you're building something user-facing (customers will see it), when you need complex custom logic that doesn't fit Retool's model, or when the underlying data is so poorly structured that no interface will make it usable. Fix the data problem before building the interface.</p>

      <h3>Starting Small</h3>
      <p>The best internal tool project starts with one workflow, not all of them. Pick the one that causes the most friction today — the thing your team does manually more than once a week, the request that engineers dread, the process where mistakes are most costly. Build that first. Get it working well. Then expand from there. Internal tools that try to do everything on day one end up doing nothing well.</p>
    `
  },

  "lovable-ai-apps": {
    title: "From Prompt to Product: What AI-Generated Apps Still Get Wrong",
    date: "Jun 4, 2026",
    author: "KinetixSoft Team",
    readTime: "6 min read",
    category: "Lovable",
    categoryColor: "bg-rose-500/10 border-rose-500/20 text-rose-300",
    related: ["replit-ai-agents", "flutterflow-production-apps"],
    content: `
      <p>AI-assisted development tools like Lovable have genuinely changed what's possible in the first 48 hours of a project. A working app UI, connected to a backend, with basic auth — in a day or two. That's real, and it's useful. What's also real: the typical AI-generated first draft has predictable failure modes that show up the moment it meets real users.</p>

      <h3>The Data Model Problem</h3>
      <p>AI code generators improvise the database schema from the prompts you give them. That's fast, but the resulting schema is usually optimized for the first feature you described, not for the second, third, and fourth features that will follow. Relationships between tables are often missing or wrong. Fields that should be normalized are duplicated. Columns that will need to be indexed for performance aren't.</p>
      <p>The fix isn't complicated, but it requires doing it deliberately: before prompting, design the schema on paper. What are the main entities? How do they relate? What queries will the app need to run? A schema that's been thought through before the first prompt is generated will hold up. One that was improvised will need to be rebuilt once the app is real.</p>

      <h3>Authentication Is Usually Half-Done</h3>
      <p>AI tools generate the happy path for auth: sign up, log in, log out. What they reliably miss: what happens when a user resets their password while logged in on another device, what happens when an email confirmation link is clicked twice, how to handle accounts that should have access to multiple organizations, and — most importantly — the row-level security rules that ensure users can only see their own data.</p>
      <p>That last one is critical and routinely missing from AI-generated apps. Without proper database-level access controls, the only thing preventing one user from reading another user's data is the frontend code — which is not a security boundary. Fix this before the app has real users, not after.</p>

      <h3>Edge Cases Don't Show Up in Demos</h3>
      <p>A demo user creates an account, fills in a form, sees a result. That path works. What AI-generated apps miss: the user who submits the form twice by double-clicking, the user on a slow connection whose request times out and gets no feedback, the user who enters a value in an unexpected format, the user who navigates back mid-flow and breaks the app state. These aren't edge cases in practice — they're what real users do.</p>
      <p>Testing with real users before launch, even informally, surfaces these problems faster than any code review. Find five people who match your target user and watch them use the app without helping them. You'll find the failure points in an hour.</p>

      <h3>What AI Tools Are Actually Good At</h3>
      <p>AI tools are genuinely fast at generating UI components, wiring up common CRUD operations, and scaffolding the structure of an app. They're also good at iteration once you can point at something and say "change this." The workflow that works: use the AI to get a working first draft fast, then apply human judgment to the data model, auth, edge cases, and security — the things the AI consistently gets wrong. That combination is faster than building from scratch and more reliable than shipping the AI output directly.</p>

      <h3>The Production Checklist</h3>
      <p>Before an AI-generated app goes live: review the database schema and fix the relationships, add row-level security rules, test every form for double-submission and network failures, add error states to every component that makes a network call, and set up basic monitoring so you know when things break. This list isn't long. It's not complicated. But it's the work that separates apps that hold up from apps that break in the first week.</p>
    `
  },

  "replit-ai-agents": {
    title: "Building AI Agents That Run in the Background Without Breaking",
    date: "Jun 2, 2026",
    author: "KinetixSoft Team",
    readTime: "8 min read",
    category: "Replit",
    categoryColor: "bg-orange-500/10 border-orange-500/20 text-orange-300",
    related: ["lovable-ai-apps", "future-of-low-code"],
    content: `
      <p>An AI agent that works in a demo and one that runs reliably in production are very different things. The demo version runs once, on clean data, with you watching. The production version runs hundreds of times a day, on messy real-world inputs, while you're asleep. The gap between those two situations is where most agent projects break.</p>

      <h3>What Makes an Agent Different From a Script</h3>
      <p>A script runs, does a thing, and stops. An agent makes decisions. It reads input, decides what to do, takes an action, and often loops or branches based on what happened. That decision-making is what makes agents useful — and what makes them harder to make reliable. A script that fails fails predictably. An agent that fails can fail in ways that are hard to reproduce, hard to debug, and potentially harmful if it takes the wrong action at scale.</p>
      <p>This isn't a reason not to build agents. It's a reason to build them carefully, with the failure modes in mind from the start.</p>

      <h3>Design the Boundaries First</h3>
      <p>Before writing any agent logic, define what the agent is allowed to do and what it isn't. An agent that triages support tickets should be able to read tickets, score them, and route them — but should it be able to close tickets? Update user accounts? Send emails directly? Every capability is also a potential failure mode. The narrower the agent's allowed actions, the more predictable its behavior.</p>
      <p>This also means designing what happens when the agent hits a case it can't handle. Not all inputs fit the expected pattern. An agent that handles unexpected inputs gracefully — by flagging them for human review instead of guessing — is dramatically safer than one that always tries to make a decision.</p>

      <h3>Structured Output Is Not Optional</h3>
      <p>If your agent is using an LLM to make decisions, the output format matters enormously. Free-text LLM output that you then parse with string matching will break the moment the model produces a slightly different format. Use structured output — JSON schemas, function calling, or whatever structured format your LLM provider supports — and validate that output before acting on it. An agent that validates its own decisions before executing them is safer than one that trusts its own output blindly.</p>

      <h3>Logging Is How You Debug Production Agents</h3>
      <p>You cannot watch an agent running in production the way you watched it in development. Logging is how you see what it's doing. Log every input the agent receives, every decision it makes, every action it takes, and every error it encounters. This sounds like a lot, but it's the only way to answer the question "why did the agent do that" when something unexpected happens at 2am.</p>
      <p>Structured logs — JSON format, with consistent fields — are far easier to search and analyze than plain text logs. Set up a log destination before the agent goes live, not after.</p>

      <h3>Failure Modes to Test Before Launch</h3>
      <p>Rate limiting: what happens when your agent hits the API rate limit of an external service? Malformed input: what happens when the input doesn't match the expected format? Slow responses: what happens when an external API takes 30 seconds instead of 2? Empty results: what happens when there's nothing to process? Duplicate runs: what happens if the agent is triggered twice for the same input?</p>
      <p>Test each of these explicitly. Most of them won't come up in normal operation, but all of them will come up eventually, and an agent that handles them gracefully is one you can trust running unattended.</p>

      <h3>Rollout in Stages</h3>
      <p>Don't deploy an agent to full production load on day one. Start with a small percentage of real traffic — or better, run the agent in shadow mode, where it makes decisions but doesn't act on them, and you compare what it would have done to what a human did. Shadow mode is the single best way to validate that an agent is behaving correctly on real data before giving it real autonomy.</p>
      <p>Once you're confident in the behavior at low volume, increase gradually. Monitor closely at each stage. The failure modes that only appear at scale are the ones shadow mode will catch.</p>
    `
  },

  "future-of-low-code": {
    title: "The Future of Low-Code Development",
    date: "Jan 12, 2026",
    author: "KinetixSoft Team",
    readTime: "5 min read",
    category: "Industry",
    categoryColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    related: ["flutterflow-production-apps", "retool-internal-tools"],
    content: `
      <p>The landscape of software development is undergoing a seismic shift. Low-code and no-code platforms are no longer just toys for simple prototypes; they are becoming the backbone of enterprise-grade solutions.</p>

      <h3>Why the Shift?</h3>
      <p>Traditional development cycles are often slow and expensive. Platforms like FlutterFlow and Retool allow teams to bridge the gap between design and production with unprecedented speed. By handling the boilerplate, these tools free up developers to focus on what truly matters: business logic and user experience.</p>

      <h3>The Hybrid Approach</h3>
      <p>We believe the future isn't "no code" or "all code" — it's hybrid. Using FlutterFlow for the UI while injecting custom Dart for complex logic, or using Retool to manage data while maintaining strict SQL controls, is how modern high-performance apps are built. The platforms provide the 80%; skilled engineers handle the 20% that differentiates a real product from a demo.</p>

      <h3>AI Makes It Faster, Not Simpler</h3>
      <p>AI integration into these platforms — Lovable, Replit, and others — accelerates the first draft dramatically. But it doesn't eliminate the need for judgment. Someone still needs to design the data model, handle the edge cases, and decide what the product should actually do. AI handles more of the typing; the thinking is still required.</p>

      <h3>What's Next?</h3>
      <p>As AI integration becomes standard within these platforms, we'll see even faster iteration cycles. The barrier to entry for building complex software is falling, but the need for skilled architects who understand how to leverage these platforms effectively is higher than ever. The teams that win are the ones who know which platform to choose for which problem — and how to go past the first-draft output to ship something real.</p>
    `
  },

  "automating-crm-podio": {
    title: "Automating Your CRM with Podio",
    date: "Jan 10, 2026",
    author: "KinetixSoft Team",
    readTime: "7 min read",
    category: "Podio",
    categoryColor: "bg-green-500/10 border-green-500/20 text-green-300",
    related: ["podio-workspace-guide", "retool-internal-tools"],
    content: `
      <p>Podio is often misunderstood as just another project management tool. In reality, it's a flexible database that can be transformed into a bespoke CRM tailored to your specific business needs.</p>

      <h3>The Power of Workflow Automation</h3>
      <p>Automation is the secret sauce. With Podio's built-in workflow automation, you can trigger complex actions based on simple data changes. A lead changes status? Automatically generate a contract, notify the sales team, and set a follow-up reminder — all without anyone touching the system manually. The result is a CRM that does work rather than just tracking it.</p>

      <h3>Five Automations Worth Building</h3>
      <p><strong>Lead routing:</strong> When a new contact is created, automatically assign it to the right salesperson based on territory, industry, or deal size — no manual triage required.</p>
      <p><strong>Follow-up reminders:</strong> When a deal stage changes, schedule a task for the assigned rep at the right interval. No more leads going cold because someone forgot to follow up.</p>
      <p><strong>Contract generation:</strong> When a deal is marked as won, automatically create a document with the client details pre-filled and route it to the right person for review.</p>
      <p><strong>Status notifications:</strong> When a project milestone changes, notify the relevant stakeholders directly — removing the need for manual update emails.</p>
      <p><strong>Data quality checks:</strong> When a record is updated, check that required fields are filled and flag records that are incomplete before they cause reporting problems downstream.</p>

      <h3>Centralizing Communication</h3>
      <p>One of the biggest leaks in business efficiency is scattered communication. By integrating your email and messaging directly into Podio items, you ensure that everyone has the context they need to move projects forward — without digging through inboxes or Slack threads to reconstruct what happened.</p>

      <h3>Scaling with Data</h3>
      <p>Custom calculation fields allow for real-time reporting without manual exports. Know your conversion rates, project margins, and team velocity at a glance — in the same place where the work actually happens. The goal is a CRM where the reporting is a side effect of doing the work, not a separate effort that someone has to remember to update.</p>
    `
  }
};

const ALL_SLUGS_META: Record<string, { title: string; category: string; categoryColor: string }> = {
  "podio-workspace-guide":    { title: "How to Build a Podio Workspace Your Team Actually Uses", category: "Podio",       categoryColor: "bg-green-500/10 border-green-500/20 text-green-300" },
  "flutterflow-production-apps": { title: "What It Really Takes to Ship a FlutterFlow App to Production", category: "FlutterFlow", categoryColor: "bg-blue-500/10 border-blue-500/20 text-blue-300" },
  "retool-internal-tools":    { title: "Why Your Team Keeps Going Back to SQL (And How Retool Fixes That)", category: "Retool",      categoryColor: "bg-violet-500/10 border-violet-500/20 text-violet-300" },
  "lovable-ai-apps":          { title: "From Prompt to Product: What AI-Generated Apps Still Get Wrong", category: "Lovable",     categoryColor: "bg-rose-500/10 border-rose-500/20 text-rose-300" },
  "replit-ai-agents":         { title: "Building AI Agents That Run in the Background Without Breaking", category: "Replit",      categoryColor: "bg-orange-500/10 border-orange-500/20 text-orange-300" },
  "future-of-low-code":       { title: "The Future of Low-Code Development",              category: "Industry",    categoryColor: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300" },
  "automating-crm-podio":     { title: "Automating Your CRM with Podio",                  category: "Podio",       categoryColor: "bg-green-500/10 border-green-500/20 text-green-300" },
};

function AccentBar({ category }: { category: string }) {
  const grad =
    category === "Podio"       ? "from-green-500 to-cyan-500"   :
    category === "FlutterFlow" ? "from-blue-500 to-cyan-500"    :
    category === "Retool"      ? "from-violet-500 to-indigo-500":
    category === "Lovable"     ? "from-rose-500 to-purple-500"  :
    category === "Replit"      ? "from-orange-500 to-red-500"   :
                                 "from-cyan-500 to-blue-500";
  return <div className={`h-1 w-full bg-gradient-to-r ${grad} mb-8 rounded-full`} />;
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = params?.slug ? BLOG_POSTS[params.slug] : null;

  if (!post) {
    return (
      <div className="min-h-screen relative bg-[#0B0F19]">
        <BackgroundElements />
        <Navigation />
        <main className="pt-32 pb-24 px-4 text-center relative z-10">
          <h1 className="text-2xl text-white mb-4">Post not found</h1>
          <Link href="/blog" className="text-cyan-400 hover:underline">← Back to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen relative bg-[#0B0F19]">
      <BackgroundElements />
      <Navigation />

      <main className="pt-36 pb-24 px-4 md:px-6 max-w-3xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors text-sm">
            <ArrowLeft size={14} /> Back to Blog
          </Link>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${post.categoryColor}`}>{post.category}</span>
            <span className="flex items-center gap-1 text-xs text-white/40"><Calendar size={11} /> {post.date}</span>
            <span className="flex items-center gap-1 text-xs text-white/40"><Clock size={11} /> {post.readTime}</span>
            <span className="flex items-center gap-1 text-xs text-white/40"><User size={11} /> {post.author}</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Accent bar */}
          <AccentBar category={post.category} />

          {/* Body */}
          <div className="glass-card p-8 md:p-12 border border-white/10 rounded-3xl mb-10">
            <div
              className="prose prose-invert max-w-none
                prose-headings:text-white prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-4
                prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Related posts */}
          {post.related.length > 0 && (
            <div className="mb-10">
              <h3 className="text-lg font-bold text-white mb-4">Related Posts</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {post.related.map(slug => {
                  const meta = ALL_SLUGS_META[slug];
                  if (!meta) return null;
                  return (
                    <Link key={slug} href={`/blog/${slug}`} className="glass-panel rounded-xl border border-white/10 p-4 hover:border-white/20 transition-colors group block" data-testid={`link-related-${slug}`}>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${meta.categoryColor} mb-2 inline-block`}>{meta.category}</span>
                      <p className="text-sm text-white font-semibold leading-snug group-hover:text-cyan-300 transition-colors">{meta.title}</p>
                      <span className="text-xs text-cyan-400 mt-2 flex items-center gap-1">Read <ArrowRight size={11} /></span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="glass-panel rounded-2xl border border-white/10 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Ready to build something?</h3>
              <p className="text-muted-foreground text-sm">Talk to our team about your project — we'll recommend the right platform and approach.</p>
            </div>
            <Link href="/contact">
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-sm hover:opacity-90 transition-opacity whitespace-nowrap" data-testid="button-blog-cta">
                Start a Project
              </button>
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
