const fs = require('fs');

const widgetTaxonomySvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 580" width="1000" height="580">
  <defs>
    <linearGradient id="wtBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#090D16" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>
    <linearGradient id="colGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E293B" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>
  </defs>

  <rect width="1000" height="580" rx="16" fill="url(#wtBg)" stroke="#1E293B" stroke-width="1.5" />

  <!-- Title and Description -->
  <g transform="translate(50, 40)">
    <rect width="180" height="26" rx="13" fill="#6366F1" fill-opacity="0.15" stroke="#6366F1" stroke-opacity="0.4" />
    <text x="90" y="17" fill="#818CF8" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="0.5">WIDGET TAXONOMY</text>
    <text x="0" y="58" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="24" font-weight="800">The FlutterFlow UI Component Architecture</text>
    <text x="0" y="84" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">Mental Model: Layouts frame the room; Base elements are the furniture; Page elements form the walls; Forms capture intent.</text>
  </g>

  <!-- 4 Columns of Widget Categories -->
  <!-- Category 1: Layout Elements -->
  <g transform="translate(50, 150)">
    <rect width="205" height="380" rx="12" fill="url(#colGrad1)" stroke="#3B82F6" stroke-opacity="0.4" stroke-width="1.5" />
    <rect x="15" y="15" width="32" height="32" rx="8" fill="#3B82F6" fill-opacity="0.2" />
    <text x="31" y="36" fill="#60A5FA" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">01</text>
    <text x="55" y="30" fill="#F1F5F9" font-family="sans-serif" font-size="14" font-weight="700">Layout Elements</text>
    <text x="55" y="45" fill="#64748B" font-family="sans-serif" font-size="10">Spatial Organizers</text>

    <!-- Items -->
    <g transform="translate(15, 65)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Row (Horizontal)</text>
    </g>
    <g transform="translate(15, 107)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Column (Vertical)</text>
    </g>
    <g transform="translate(15, 149)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Stack (Layered Z-Index)</text>
    </g>
    <g transform="translate(15, 191)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Container (Box/Styling)</text>
    </g>
    <g transform="translate(15, 233)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">ListView (1D Scrollable)</text>
    </g>
    <g transform="translate(15, 275)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">GridView (2D Scrollable)</text>
    </g>
    <g transform="translate(15, 317)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Wrap (Multi-Line Flow)</text>
    </g>
  </g>

  <!-- Category 2: Base Elements -->
  <g transform="translate(280, 150)">
    <rect width="205" height="380" rx="12" fill="url(#colGrad1)" stroke="#10B981" stroke-opacity="0.4" stroke-width="1.5" />
    <rect x="15" y="15" width="32" height="32" rx="8" fill="#10B981" fill-opacity="0.2" />
    <text x="31" y="36" fill="#34D399" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">02</text>
    <text x="55" y="30" fill="#F1F5F9" font-family="sans-serif" font-size="14" font-weight="700">Base Elements</text>
    <text x="55" y="45" fill="#64748B" font-family="sans-serif" font-size="10">Visual &amp; Interactive</text>

    <g transform="translate(15, 65)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Text (Static / Dynamic)</text>
    </g>
    <g transform="translate(15, 107)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Rich Text (Span Styles)</text>
    </g>
    <g transform="translate(15, 149)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Image (Asset/Net/GCS)</text>
    </g>
    <g transform="translate(15, 191)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Icon (Vector / Material)</text>
    </g>
    <g transform="translate(15, 233)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Button (Action Trigger)</text>
    </g>
    <g transform="translate(15, 275)">
      <rect width="175" height="76" rx="6" fill="#10B981" fill-opacity="0.1" stroke="#10B981" stroke-opacity="0.3" />
      <text x="12" y="22" fill="#34D399" font-family="sans-serif" font-size="10" font-weight="700">GOLDEN RULE:</text>
      <text x="12" y="38" fill="#CBD5E1" font-family="sans-serif" font-size="9.5">Never hardcode colors (#hex).</text>
      <text x="12" y="52" fill="#CBD5E1" font-family="sans-serif" font-size="9.5">Always bind to Theme Colors</text>
      <text x="12" y="66" fill="#CBD5E1" font-family="sans-serif" font-size="9.5">for instant global rebranding.</text>
    </g>
  </g>

  <!-- Category 3: Page Elements -->
  <g transform="translate(510, 150)">
    <rect width="205" height="380" rx="12" fill="url(#colGrad1)" stroke="#8B5CF6" stroke-opacity="0.4" stroke-width="1.5" />
    <rect x="15" y="15" width="32" height="32" rx="8" fill="#8B5CF6" fill-opacity="0.2" />
    <text x="31" y="36" fill="#A78BFA" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">03</text>
    <text x="55" y="30" fill="#F1F5F9" font-family="sans-serif" font-size="14" font-weight="700">Page Elements</text>
    <text x="55" y="45" fill="#64748B" font-family="sans-serif" font-size="10">Scaffold Chrome</text>

    <g transform="translate(15, 65)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Scaffold (Root Frame)</text>
    </g>
    <g transform="translate(15, 107)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">AppBar (Top Nav / Actions)</text>
    </g>
    <g transform="translate(15, 149)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">NavBar (2-5 Tab Roots)</text>
    </g>
    <g transform="translate(15, 191)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Drawer / EndDrawer</text>
    </g>
    <g transform="translate(15, 233)">
      <rect width="175" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">FloatingActionButton</text>
    </g>
    <g transform="translate(15, 275)">
      <rect width="175" height="76" rx="6" fill="#8B5CF6" fill-opacity="0.1" stroke="#8B5CF6" stroke-opacity="0.3" />
      <text x="12" y="22" fill="#C4B5FD" font-family="sans-serif" font-size="10" font-weight="700">AUTOMATIC ROUTING:</text>
      <text x="12" y="38" fill="#CBD5E1" font-family="sans-serif" font-size="9.5">NavBar handles page</text>
      <text x="12" y="52" fill="#CBD5E1" font-family="sans-serif" font-size="9.5">switching natively without</text>
      <text x="12" y="66" fill="#CBD5E1" font-family="sans-serif" font-size="9.5">manual Action Flow wiring.</text>
    </g>
  </g>

  <!-- Category 4: Form Elements -->
  <g transform="translate(740, 150)">
    <rect width="210" height="380" rx="12" fill="url(#colGrad1)" stroke="#F59E0B" stroke-opacity="0.4" stroke-width="1.5" />
    <rect x="15" y="15" width="32" height="32" rx="8" fill="#F59E0B" fill-opacity="0.2" />
    <text x="31" y="36" fill="#FBBF24" font-family="sans-serif" font-size="14" font-weight="bold" text-anchor="middle">04</text>
    <text x="55" y="30" fill="#F1F5F9" font-family="sans-serif" font-size="14" font-weight="700">Form Elements</text>
    <text x="55" y="45" fill="#64748B" font-family="sans-serif" font-size="10">Data Capture &amp; Input</text>

    <g transform="translate(15, 65)">
      <rect width="180" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">TextField (Keyboard input)</text>
    </g>
    <g transform="translate(15, 107)">
      <rect width="180" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Checkbox (Boolean agree)</text>
    </g>
    <g transform="translate(15, 149)">
      <rect width="180" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Dropdown (Compact list)</text>
    </g>
    <g transform="translate(15, 191)">
      <rect width="180" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Toggle/Switch (Live on/off)</text>
    </g>
    <g transform="translate(15, 233)">
      <rect width="180" height="34" rx="6" fill="#1E293B" stroke="#334155" />
      <text x="12" y="21" fill="#F8FAFC" font-family="monospace" font-size="11">Form (Group Validation)</text>
    </g>
    <g transform="translate(15, 275)">
      <rect width="180" height="76" rx="6" fill="#F59E0B" fill-opacity="0.1" stroke="#F59E0B" stroke-opacity="0.3" />
      <text x="12" y="22" fill="#FBBF24" font-family="sans-serif" font-size="10" font-weight="700">CHECKBOX VS TOGGLE:</text>
      <text x="12" y="38" fill="#CBD5E1" font-family="sans-serif" font-size="9.5">Use Toggle for immediate</text>
      <text x="12" y="52" fill="#CBD5E1" font-family="sans-serif" font-size="9.5">system settings (Dark mode).</text>
      <text x="12" y="66" fill="#CBD5E1" font-family="sans-serif" font-size="9.5">Use Checkbox for form submit.</text>
    </g>
  </g>
</svg>`;

const rbacFlowSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 540" width="1000" height="540">
  <defs>
    <linearGradient id="rbacBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070A12" />
      <stop offset="100%" stop-color="#0E1626" />
    </linearGradient>
  </defs>

  <rect width="1000" height="540" rx="16" fill="url(#rbacBg)" stroke="#1F2937" stroke-width="1.5" />

  <!-- Header -->
  <g transform="translate(50, 40)">
    <rect width="190" height="26" rx="13" fill="#10B981" fill-opacity="0.15" stroke="#10B981" stroke-opacity="0.4" />
    <text x="95" y="17" fill="#34D399" font-family="system-ui, sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="0.5">SECURITY ARCHITECTURE</text>
    <text x="0" y="58" fill="#F8FAFC" font-family="system-ui, sans-serif" font-size="24" font-weight="800">Firebase Custom Claims (RBAC) Token Lifecycle</text>
    <text x="0" y="84" fill="#94A3B8" font-family="system-ui, sans-serif" font-size="13">The Hotel Key Card Model: Zero database reads during authorization checks in Firestore Security Rules.</text>
  </g>

  <!-- Flow Steps -->
  <g transform="translate(50, 140)">
    <!-- Step 1 -->
    <g transform="translate(0, 0)">
      <rect width="200" height="230" rx="12" fill="#111827" stroke="#374151" stroke-width="1.5" />
      <circle cx="35" cy="35" r="16" fill="#3B82F6" fill-opacity="0.2" />
      <text x="35" y="40" fill="#60A5FA" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">1</text>
      <text x="60" y="40" fill="#F9FAFB" font-family="sans-serif" font-size="14" font-weight="700">Admin Action</text>

      <text x="20" y="75" fill="#9CA3AF" font-family="sans-serif" font-size="11" font-weight="600">TRIGGER:</text>
      <text x="20" y="93" fill="#E5E7EB" font-family="sans-serif" font-size="11">Admin taps 'Make Admin'</text>
      <text x="20" y="109" fill="#E5E7EB" font-family="sans-serif" font-size="11">in FlutterFlow Admin Page.</text>

      <rect x="15" y="125" width="170" height="85" rx="6" fill="#1F2937" />
      <text x="25" y="145" fill="#60A5FA" font-family="monospace" font-size="10">// Custom Action</text>
      <text x="25" y="162" fill="#E5E7EB" font-family="monospace" font-size="9.5">setCustomClaim(</text>
      <text x="25" y="178" fill="#E5E7EB" font-family="monospace" font-size="9.5">  targetUid, 'admin'</text>
      <text x="25" y="194" fill="#E5E7EB" font-family="monospace" font-size="9.5">)</text>
    </g>

    <!-- Arrow 1 to 2 -->
    <path d="M210,115 H235" stroke="#60A5FA" stroke-width="2" stroke-dasharray="4,4" />
    <polygon points="235,110 245,115 235,120" fill="#60A5FA" />

    <!-- Step 2 -->
    <g transform="translate(250, 0)">
      <rect width="210" height="230" rx="12" fill="#111827" stroke="#8B5CF6" stroke-width="1.5" />
      <circle cx="35" cy="35" r="16" fill="#8B5CF6" fill-opacity="0.2" />
      <text x="35" y="40" fill="#C4B5FD" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">2</text>
      <text x="60" y="40" fill="#F9FAFB" font-family="sans-serif" font-size="14" font-weight="700">Cloud Function</text>

      <text x="20" y="75" fill="#9CA3AF" font-family="sans-serif" font-size="11" font-weight="600">SERVER ENFORCED:</text>
      <text x="20" y="93" fill="#E5E7EB" font-family="sans-serif" font-size="11">Firebase Admin SDK sets</text>
      <text x="20" y="109" fill="#E5E7EB" font-family="sans-serif" font-size="11">claims directly on Auth user.</text>

      <rect x="15" y="125" width="180" height="85" rx="6" fill="#1F2937" />
      <text x="25" y="145" fill="#A78BFA" font-family="monospace" font-size="10">// Node.js Admin SDK</text>
      <text x="25" y="162" fill="#E5E7EB" font-family="monospace" font-size="9.5">admin.auth()</text>
      <text x="25" y="178" fill="#E5E7EB" font-family="monospace" font-size="9.5">.setCustomUserClaims(</text>
      <text x="25" y="194" fill="#E5E7EB" font-family="monospace" font-size="9.5">  uid, { role: 'admin' })</text>
    </g>

    <!-- Arrow 2 to 3 -->
    <path d="M470,115 H495" stroke="#8B5CF6" stroke-width="2" stroke-dasharray="4,4" />
    <polygon points="495,110 505,115 495,120" fill="#8B5CF6" />

    <!-- Step 3 -->
    <g transform="translate(510, 0)">
      <rect width="200" height="230" rx="12" fill="#111827" stroke="#F59E0B" stroke-width="1.5" />
      <circle cx="35" cy="35" r="16" fill="#F59E0B" fill-opacity="0.2" />
      <text x="35" y="40" fill="#FBBF24" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">3</text>
      <text x="60" y="40" fill="#F9FAFB" font-family="sans-serif" font-size="14" font-weight="700">Token Refresh</text>

      <text x="20" y="75" fill="#9CA3AF" font-family="sans-serif" font-size="11" font-weight="600">CRITICAL PATTERN:</text>
      <text x="20" y="93" fill="#E5E7EB" font-family="sans-serif" font-size="11">Default token takes 1 hr.</text>
      <text x="20" y="109" fill="#E5E7EB" font-family="sans-serif" font-size="11">Force refresh immediately!</text>

      <rect x="15" y="125" width="170" height="85" rx="6" fill="#1F2937" />
      <text x="25" y="145" fill="#FBBF24" font-family="monospace" font-size="10">// Custom Action (Dart)</text>
      <text x="25" y="162" fill="#E5E7EB" font-family="monospace" font-size="9.5">await FirebaseAuth</text>
      <text x="25" y="178" fill="#E5E7EB" font-family="monospace" font-size="9.5">  .instance.currentUser</text>
      <text x="25" y="194" fill="#E5E7EB" font-family="monospace" font-size="9.5">  ?.getIdToken(true);</text>
    </g>

    <!-- Arrow 3 to 4 -->
    <path d="M720,115 H745" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4,4" />
    <polygon points="745,110 755,115 745,120" fill="#F59E0B" />

    <!-- Step 4 -->
    <g transform="translate(760, 0)">
      <rect width="210" height="230" rx="12" fill="#111827" stroke="#10B981" stroke-width="1.5" />
      <circle cx="35" cy="35" r="16" fill="#10B981" fill-opacity="0.2" />
      <text x="35" y="40" fill="#34D399" font-family="sans-serif" font-size="13" font-weight="bold" text-anchor="middle">4</text>
      <text x="60" y="40" fill="#F9FAFB" font-family="sans-serif" font-size="14" font-weight="700">Firestore Rules</text>

      <text x="20" y="75" fill="#9CA3AF" font-family="sans-serif" font-size="11" font-weight="600">ZERO DB READS:</text>
      <text x="20" y="93" fill="#E5E7EB" font-family="sans-serif" font-size="11">Rules inspect token claim</text>
      <text x="20" y="109" fill="#E5E7EB" font-family="sans-serif" font-size="11">at native gateway speed.</text>

      <rect x="15" y="125" width="180" height="85" rx="6" fill="#1F2937" />
      <text x="25" y="145" fill="#34D399" font-family="monospace" font-size="10">// firestore.rules</text>
      <text x="25" y="162" fill="#E5E7EB" font-family="monospace" font-size="9.5">allow write: if</text>
      <text x="25" y="178" fill="#E5E7EB" font-family="monospace" font-size="9.5">  request.auth.token</text>
      <text x="25" y="194" fill="#E5E7EB" font-family="monospace" font-size="9.5">  .role == 'admin';</text>
    </g>
  </g>

  <!-- Bottom Comparison Strip -->
  <g transform=\"translate(50, 400)\">
    <rect width="900" height="100" rx="10" fill="#111827" stroke="#1F2937" />
    <text x="25" y="32" fill="#38BDF8" font-family="sans-serif" font-size="13" font-weight="700">CUSTOM CLAIMS VS FIRESTORE ROLE FIELDS (SPEED &amp; SECURITY BENCHMARK):</text>
    <text x="25" y="58" fill="#94A3B8" font-family="sans-serif" font-size="12">&#8226; <tspan fill="#F8FAFC" font-weight="600">Firestore Doc Roles:</tspan> Requires an extra billable get() read on every security rule check; vulnerable to client overwrite without strict rules; slow offline.</text>
    <text x="25" y="80" fill="#94A3B8" font-family="sans-serif" font-size="12">&#8226; <tspan fill="#10B981" font-weight="600">Firebase Custom Claims (Recommended):</tspan> 0ms overhead, cryptographically signed inside JWT ID token, 100% tamper-proof, zero DB cost.</text>
  </g>
</svg>`;

fs.writeFileSync('public/images/blog/flutterflow-widget-taxonomy.svg', widgetTaxonomySvg, 'utf8');
fs.writeFileSync('public/images/blog/flutterflow-firebase-rbac-claims-flow.svg', rbacFlowSvg, 'utf8');
console.log('Successfully generated widget taxonomy and RBAC claims SVGs!');
