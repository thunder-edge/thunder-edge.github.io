import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Thunder - Edge Runtime for JavaScript & TypeScript" },
    {
      name: "description",
      content:
        "A Rust-powered edge runtime built on the Deno stack. Run isolated JavaScript and TypeScript functions with per-request V8 sandboxing, sub-millisecond cold starts, and built-in observability.",
    },
    { property: "og:title", content: "Thunder Edge Runtime" },
    {
      property: "og:description",
      content:
        "Deploy serverless JavaScript and TypeScript functions at the edge with per-request V8 isolate sandboxing.",
    },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
};

function ThunderLogo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 2L6 18h8l-2 12L26 14h-8l2.5-12z"
        fill="url(#tlogo)"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="tlogo"
          x1="6"
          y1="2"
          x2="26"
          y2="30"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#ffd43b" />
          <stop offset="50%" stopColor="#f59f00" />
          <stop offset="100%" stopColor="#ff922b" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GitHubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "V8 Isolate Sandbox",
    desc: "Each function runs in its own V8 isolate with strict memory, CPU, and network limits. Full multi-tenant isolation out of the box.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Web Standards First",
    desc: "Write functions using standard fetch, Request, Response, crypto, WebSocket and 60+ Web APIs with 78% full compatibility.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Fast Cold Starts",
    desc: "V8 snapshots and ESZIP bundling for fast startup. Isolate pooling and context-first scheduling for warm request routing.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Dual-Listener Architecture",
    desc: "Separate admin (port 9000) and ingress (port 8080) listeners. Deploy functions via admin API, invoke through ingress routing.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "Built-in Observability",
    desc: "OpenTelemetry traces, metrics, and logs. Per-function metrics, saturation scoring, and Prometheus-compatible endpoint.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Node.js Compatibility",
    desc: "42 built-in Node.js modules through the Deno compatibility layer. Use npm packages and familiar Node APIs.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Built-in Testing",
    desc: "Import from thunder:testing to write unit and integration tests. Assertions, mocking, snapshots, and parameterized tests.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Hot-Reload Dev Mode",
    desc: "thunder watch monitors source files and automatically rebuilds and redeploys on every change for a tight feedback loop.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Ed25519 Bundle Signing",
    desc: "Cryptographic signatures on deployed bundles ensure only trusted code reaches production. Key rotation supported.",
  },
];

const SECURITY_ITEMS = [
  { icon: "\u{1F6E1}", title: "V8 Isolate Sandbox", desc: "Strong memory isolation between functions with dedicated heap and global scope." },
  { icon: "\u{1F512}", title: "SSRF Protection", desc: "Outbound fetch blocked from private IP ranges. DNS rebinding protection included." },
  { icon: "\u{1F511}", title: "API Key Auth", desc: "Admin endpoints protected by API key. Management never shares a port with user traffic." },
  { icon: "\u{1F510}", title: "TLS Encryption", desc: "Rustls-based HTTPS with runtime certificate rotation and TLS 1.2/1.3." },
  { icon: "\u270D", title: "Bundle Signing", desc: "Ed25519 signatures ensure only trusted build pipelines can deploy code." },
  { icon: "\u{1F4C3}", title: "Resource Limits", desc: "Hard limits on heap, CPU time, wall-clock timeout, body size, and concurrency." },
  { icon: "\u{1F4C1}", title: "VFS Sandboxing", desc: "No host filesystem access. Functions read from ESZIP bundle via read-only virtual FS." },
  { icon: "\u2744", title: "Global Freezing", desc: "Critical global objects and prototypes frozen before user code to prevent pollution." },
  { icon: "\u{1F310}", title: "Network Manifest", desc: "Per-function allowlists for outbound hostnames with least-privilege network policy." },
];

const TECH_STACK = [
  { label: "Rust", desc: "Systems language" },
  { label: "Tokio", desc: "Async runtime" },
  { label: "V8 / deno_core", desc: "JS engine" },
  { label: "Hyper + Tower", desc: "HTTP stack" },
  { label: "Rustls", desc: "TLS" },
  { label: "ESZIP", desc: "Module bundling" },
  { label: "OpenTelemetry", desc: "Observability" },
  { label: "Ed25519", desc: "Bundle signing" },
];

export default function Index() {
  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0f", color: "#e8e8ed", fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* ===== NAVBAR ===== */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px", background: "rgba(10, 10, 15, 0.85)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderBottom: "1px solid #1a1a2a" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 12, fontWeight: 700, fontSize: "1.25rem", letterSpacing: "-0.02em", color: "#e8e8ed", textDecoration: "none" }}>
          <ThunderLogo />
          <span>Thunder</span>
        </a>
        <ul style={{ display: "flex", alignItems: "center", gap: 32, listStyle: "none", margin: 0, padding: 0 }} className="hidden md:flex">
          <li><a href="#features" style={{ fontSize: "0.875rem", fontWeight: 500, color: "#9595a8", textDecoration: "none" }}>Features</a></li>
          <li><a href="#quick-start" style={{ fontSize: "0.875rem", fontWeight: 500, color: "#9595a8", textDecoration: "none" }}>Quick Start</a></li>
          <li><a href="#install" style={{ fontSize: "0.875rem", fontWeight: 500, color: "#9595a8", textDecoration: "none" }}>Install</a></li>
          <li><a href="#architecture" style={{ fontSize: "0.875rem", fontWeight: 500, color: "#9595a8", textDecoration: "none" }}>Architecture</a></li>
          <li><a href="https://thunder-edge.github.io/docs" style={{ fontSize: "0.875rem", fontWeight: 500, color: "#9595a8", textDecoration: "none" }}>Docs</a></li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="https://github.com/thunder-edge/runtime" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: "#9595a8", textDecoration: "none" }} className="hidden sm:block">
            <GitHubIcon className="w-5 h-5" />
          </a>
          <a href="#quick-start" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 20px", background: "#f59f00", color: "#0a0a0f", borderRadius: 8, fontSize: "0.875rem", fontWeight: 600, textDecoration: "none" }}>
            Get Started
          </a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", paddingTop: 160, paddingBottom: 96, paddingLeft: 24, paddingRight: 24, minHeight: "100vh", overflow: "hidden" }}>
        {/* Background effects */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-30%", left: "50%", transform: "translateX(-50%)", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(245, 159, 0, 0.1) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(255, 146, 43, 0.05) 0%, transparent 60%)" }} />
          <div className="hero-grid-pattern" style={{ position: "absolute", inset: 0 }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 900, width: "100%" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", background: "rgba(245, 159, 0, 0.1)", border: "1px solid rgba(245, 159, 0, 0.25)", borderRadius: 100, fontSize: "0.875rem", fontWeight: 500, color: "#fcc419", marginBottom: 32 }}>
            <span style={{ fontSize: "1rem" }}>&#9889;</span> Rust-powered Edge Runtime
          </div>

          <h1 style={{ fontSize: "clamp(3rem, 7vw, 4.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 24 }}>
            Run JavaScript at the
            <br />
            <span className="gradient-text">Edge, Securely</span>
          </h1>

          <p style={{ fontSize: "1.25rem", lineHeight: 1.7, color: "#9595a8", maxWidth: 700, margin: "0 auto 40px" }}>
            Thunder is a high-performance edge runtime built on the Deno stack.
            Deploy isolated JavaScript and TypeScript functions with per-request
            V8 sandboxing, sub-millisecond cold starts, and built-in
            observability.
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="#quick-start" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: "#f59f00", color: "#0a0a0f", borderRadius: 12, fontSize: "1rem", fontWeight: 600, textDecoration: "none", boxShadow: "0 0 30px rgba(245, 159, 0, 0.25)" }}>
              Quick Start <span>&#8594;</span>
            </a>
            <a href="https://github.com/thunder-edge/runtime" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: "#1a1a24", color: "#e8e8ed", border: "1px solid #222233", borderRadius: 12, fontSize: "1rem", fontWeight: 600, textDecoration: "none" }}>
              <GitHubIcon className="w-5 h-5" />
              View on GitHub
            </a>
          </div>

          {/* Terminal */}
          <div style={{ marginTop: 64, maxWidth: 640, width: "100%", marginLeft: "auto", marginRight: "auto" }}>
            <div style={{ background: "#0d0d14", border: "1px solid #222233", borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.3), 0 0 60px rgba(245, 159, 0, 0.08)", textAlign: "left" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "14px 20px", background: "#111118", borderBottom: "1px solid #222233" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                <span style={{ marginLeft: 8, fontSize: "0.75rem", color: "#6b6b80", fontFamily: "'JetBrains Mono', monospace" }}>terminal</span>
              </div>
              <div style={{ padding: 20, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem", lineHeight: 1.8, color: "#c4c4d4", overflowX: "auto" }}>
                <div><span style={{ color: "#6b6b80" }}># Install Thunder</span></div>
                <div><span style={{ color: "#fcc419", userSelect: "none" }}>$ </span>curl -fsSL https://raw.githubusercontent.com/thunder-edge/runtime/main/install.sh | bash</div>
                <br />
                <div><span style={{ color: "#6b6b80" }}># Start the server</span></div>
                <div><span style={{ color: "#fcc419", userSelect: "none" }}>$ </span>thunder start</div>
                <div><span style={{ color: "#6b6b80", fontStyle: "italic" }}>&nbsp;&nbsp;Thunder edge runtime started</span></div>
                <div><span style={{ color: "#6b6b80", fontStyle: "italic" }}>&nbsp;&nbsp;Admin listener: http://0.0.0.0:9000</span></div>
                <div><span style={{ color: "#6b6b80", fontStyle: "italic" }}>&nbsp;&nbsp;Ingress listener: http://0.0.0.0:8080</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" style={{ padding: "112px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#fcc419", marginBottom: 16 }}>Features</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 16 }}>
            Everything you need to run
            <br />
            functions at the edge
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#9595a8", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Built for multi-tenant workloads with strong isolation,
            observability, and developer experience at its core.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {FEATURES.map((f) => (
            <div key={f.title} style={{ background: "#13131d", border: "1px solid #222233", borderRadius: 16, padding: 28, position: "relative", overflow: "hidden" }}>
              <div style={{ width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(245, 159, 0, 0.1)", borderRadius: 12, marginBottom: 20, color: "#fcc419" }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: 8, letterSpacing: "-0.01em" }}>{f.title}</h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "#9595a8" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== QUICK START ===== */}
      <section id="quick-start" style={{ background: "#111118", borderTop: "1px solid #222233", borderBottom: "1px solid #222233" }}>
        <div style={{ padding: "112px 24px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#fcc419", marginBottom: 16 }}>Quick Start</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>Deploy in minutes</h2>
            <p style={{ fontSize: "1.1rem", color: "#9595a8", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              Write a function, bundle it, deploy it. Three commands to go from
              zero to production.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 48, alignItems: "start" }}>
            <div style={{ paddingTop: 4 }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 16, letterSpacing: "-0.01em" }}>How it works</h3>
              <p style={{ color: "#9595a8", lineHeight: 1.7, marginBottom: 32, fontSize: "0.95rem" }}>
                Thunder uses a simple deploy model: you write a function that
                handles HTTP requests, bundle it into an ESZIP package, and
                deploy it to a running Thunder server via the admin API.
              </p>
              <ol style={{ display: "flex", flexDirection: "column", gap: 16, listStyle: "none", margin: 0, padding: 0 }}>
                {[
                  { n: "1", label: "Write", text: "an edge function using standard Request/Response APIs or thunder:http helpers" },
                  { n: "2", label: "Bundle", text: "with thunder bundle to create a self-contained ESZIP package" },
                  { n: "3", label: "Deploy", text: "via a single HTTP request to the admin API -- no restarts needed" },
                  { n: "4", label: "Invoke", text: "through the ingress listener. Thunder routes by URL path automatically" },
                ].map((s) => (
                  <li key={s.n} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                    <span style={{ width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(245, 159, 0, 0.1)", borderRadius: "50%", fontSize: "0.75rem", fontWeight: 700, color: "#fcc419", flexShrink: 0, marginTop: 2 }}>{s.n}</span>
                    <span style={{ fontSize: "0.9rem", color: "#9595a8", lineHeight: 1.6 }}>
                      <strong style={{ color: "#e8e8ed" }}>{s.label}</strong> {s.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {/* Code example */}
              <div style={{ background: "#0d0d14", border: "1px solid #222233", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", background: "#1a1a24", borderBottom: "1px solid #222233" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: "#6b6b80" }}>hello.ts</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#fcc419", background: "rgba(245, 159, 0, 0.1)", padding: "2px 8px", borderRadius: 4 }}>TypeScript</span>
                </div>
                <pre style={{ padding: 20, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem", lineHeight: 1.75, color: "#c4c4d4", overflowX: "auto", margin: 0 }}>
                  <code dangerouslySetInnerHTML={{ __html:
`<span class="syntax-keyword">import</span> { <span class="syntax-type">JSONResponse</span>, <span class="syntax-type">HTTP</span> } <span class="syntax-keyword">from</span> <span class="syntax-string">"thunder:http"</span>;

<span class="syntax-keyword">export default</span> <span class="syntax-keyword">function</span> <span class="syntax-function">handler</span>(<span class="syntax-param">req</span>: <span class="syntax-type">Request</span>) {
  <span class="syntax-keyword">return</span> <span class="syntax-function">JSONResponse</span>({
    <span class="syntax-property">message</span>: <span class="syntax-string">"Hello from Thunder!"</span>,
    <span class="syntax-property">timestamp</span>: <span class="syntax-function">Date</span>.<span class="syntax-function">now</span>(),
  }).<span class="syntax-function">status</span>(<span class="syntax-type">HTTP</span>.<span class="syntax-property">Ok</span>)
    .<span class="syntax-function">header</span>(<span class="syntax-string">"x-powered-by"</span>, <span class="syntax-string">"thunder"</span>)
    .<span class="syntax-function">toResponse</span>();
}`
                  }} />
                </pre>
              </div>

              {/* Deploy commands */}
              <div style={{ background: "#0d0d14", border: "1px solid #222233", borderRadius: 16, overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 20px", background: "#1a1a24", borderBottom: "1px solid #222233" }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.8rem", color: "#6b6b80" }}>Deploy & Invoke</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "#fcc419", background: "rgba(245, 159, 0, 0.1)", padding: "2px 8px", borderRadius: 4 }}>Bash</span>
                </div>
                <pre style={{ padding: 20, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem", lineHeight: 1.75, color: "#c4c4d4", overflowX: "auto", margin: 0 }}>
                  <code dangerouslySetInnerHTML={{ __html:
`<span class="syntax-comment"># Bundle the function</span>
<span style="color:#fcc419;user-select:none">$ </span>thunder bundle --entrypoint ./hello.ts --output ./hello.eszip

<span class="syntax-comment"># Deploy to admin API</span>
<span style="color:#fcc419;user-select:none">$ </span>curl -X POST http://localhost:9000/_internal/functions \\
  -H <span class="syntax-string">"x-function-name: hello"</span> \\
  --data-binary @hello.eszip

<span class="syntax-comment"># Invoke through ingress</span>
<span style="color:#fcc419;user-select:none">$ </span>curl http://localhost:8080/hello
<span style="color:#6b6b80;font-style:italic">{"message":"Hello from Thunder!","timestamp":1710268800}</span>`
                  }} />
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSTALL ===== */}
      <section id="install" style={{ padding: "112px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#fcc419", marginBottom: 16 }}>Installation</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>Get up and running</h2>
          <p style={{ fontSize: "1.1rem", color: "#9595a8", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Install the Thunder binary in seconds, or build from source if you prefer.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          <div style={{ background: "#13131d", border: "1px solid #222233", borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8 }}>Install Script (Recommended)</h3>
            <p style={{ fontSize: "0.9rem", color: "#9595a8", lineHeight: 1.6, marginBottom: 20 }}>
              Download the latest prebuilt binary for Linux or macOS. The script auto-detects your platform.
            </p>
            <div style={{ background: "#0d0d14", border: "1px solid #222233", borderRadius: 10, padding: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.825rem", color: "#c4c4d4", lineHeight: 1.7, overflowX: "auto" }}>
              <span style={{ color: "#fcc419", userSelect: "none" }}>$ </span>curl -fsSL https://raw.githubusercontent.com/<br />
              &nbsp;&nbsp;thunder-edge/runtime/main/install.sh | bash
            </div>
          </div>

          <div style={{ background: "#13131d", border: "1px solid #222233", borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8 }}>Build from Source</h3>
            <p style={{ fontSize: "0.9rem", color: "#9595a8", lineHeight: 1.6, marginBottom: 20 }}>
              Build Thunder from source with the Rust toolchain. Requires Rust stable.
            </p>
            <div style={{ background: "#0d0d14", border: "1px solid #222233", borderRadius: 10, padding: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.825rem", color: "#c4c4d4", lineHeight: 1.7, overflowX: "auto" }}>
              <div><span style={{ color: "#fcc419", userSelect: "none" }}>$ </span>git clone https://github.com/thunder-edge/runtime.git</div>
              <div><span style={{ color: "#fcc419", userSelect: "none" }}>$ </span>cd runtime</div>
              <div><span style={{ color: "#fcc419", userSelect: "none" }}>$ </span>cargo build --release --locked</div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24, marginTop: 24 }}>
          <div style={{ background: "#13131d", border: "1px solid #222233", borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8 }}>Verify Installation</h3>
            <p style={{ fontSize: "0.9rem", color: "#9595a8", lineHeight: 1.6, marginBottom: 20 }}>
              After installing, confirm that the binary is available.
            </p>
            <div style={{ background: "#0d0d14", border: "1px solid #222233", borderRadius: 10, padding: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.825rem", color: "#c4c4d4" }}>
              <span style={{ color: "#fcc419", userSelect: "none" }}>$ </span>thunder --help
            </div>
          </div>

          <div style={{ background: "#13131d", border: "1px solid #222233", borderRadius: 16, padding: 32 }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: 8 }}>System Requirements</h3>
            <p style={{ fontSize: "0.9rem", color: "#9595a8", lineHeight: 1.6, marginBottom: 20 }}>
              Supports Linux x86_64, macOS x86_64 (Intel), and macOS aarch64 (Apple Silicon).
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["Linux x86_64", "macOS Intel", "macOS Apple Silicon"].map((p) => (
                <span key={p} style={{ display: "inline-flex", alignItems: "center", padding: "6px 14px", background: "#1a1a24", border: "1px solid #222233", borderRadius: 100, fontSize: "0.8rem", fontWeight: 500, color: "#9595a8" }}>{p}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARCHITECTURE ===== */}
      <section id="architecture" style={{ background: "#111118", borderTop: "1px solid #222233", borderBottom: "1px solid #222233" }}>
        <div style={{ padding: "112px 24px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#fcc419", marginBottom: 16 }}>Architecture</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>Built for performance and isolation</h2>
            <p style={{ fontSize: "1.1rem", color: "#9595a8", maxWidth: 640, margin: "0 auto", lineHeight: 1.7 }}>
              A single Rust binary with dual HTTP listeners, an in-process isolate pool, and ESZIP-based module bundling.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 48, alignItems: "center" }}>
            {/* Diagram */}
            <div style={{ background: "#0d0d14", border: "1px solid #222233", borderRadius: 16, padding: 32, display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center" }}>
                <div style={{ background: "#1a1a24", border: "1px solid #222233", borderRadius: 12, padding: "12px 20px", fontSize: "0.875rem", fontWeight: 600, textAlign: "center", minWidth: 120 }}>Client</div>
                <span style={{ color: "#6b6b80", fontSize: "1.2rem" }}>&#8594;</span>
                <div style={{ background: "rgba(245, 159, 0, 0.1)", border: "1px solid rgba(245, 159, 0, 0.3)", borderRadius: 12, padding: "12px 20px", fontSize: "0.875rem", fontWeight: 600, color: "#fcc419", textAlign: "center", minWidth: 120 }}>Ingress :8080</div>
              </div>
              <div style={{ textAlign: "center", color: "#6b6b80", fontSize: "1.2rem" }}>&#8595;</div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ background: "rgba(255, 212, 59, 0.08)", border: "1px solid rgba(255, 212, 59, 0.2)", borderRadius: 12, padding: "12px 20px", fontSize: "0.875rem", fontWeight: 600, color: "#ffd43b", textAlign: "center", minWidth: 160 }}>Function Registry</div>
              </div>
              <div style={{ textAlign: "center", color: "#6b6b80", fontSize: "1.2rem" }}>&#8595;</div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ background: "rgba(245, 159, 0, 0.1)", border: "1px solid rgba(245, 159, 0, 0.3)", borderRadius: 12, padding: "12px 20px", fontSize: "0.875rem", fontWeight: 600, color: "#fcc419", textAlign: "center", minWidth: 120 }}>Isolate Pool</div>
              </div>
              <div style={{ textAlign: "center", color: "#6b6b80", fontSize: "1.2rem" }}>&#8595;</div>
              <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                <div style={{ background: "#1a1a24", border: "1px solid #222233", borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", fontWeight: 600, textAlign: "center" }}>V8 Isolate</div>
                <span style={{ color: "#6b6b80", fontSize: "1.2rem" }}>&#8594;</span>
                <div style={{ background: "#1a1a24", border: "1px solid #222233", borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", fontWeight: 600, textAlign: "center" }}>JS/TS Handler</div>
                <span style={{ color: "#6b6b80", fontSize: "1.2rem" }}>&#8594;</span>
                <div style={{ background: "rgba(245, 159, 0, 0.1)", border: "1px solid rgba(245, 159, 0, 0.3)", borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", fontWeight: 600, color: "#fcc419", textAlign: "center" }}>Response</div>
              </div>
              <div style={{ borderTop: "1px solid #222233", paddingTop: 20, marginTop: 4 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
                  <div style={{ background: "#1a1a24", border: "1px solid #222233", borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", fontWeight: 600, textAlign: "center" }}>Operator</div>
                  <span style={{ color: "#6b6b80", fontSize: "1.2rem" }}>&#8594;</span>
                  <div style={{ background: "rgba(255, 212, 59, 0.08)", border: "1px solid rgba(255, 212, 59, 0.2)", borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", fontWeight: 600, color: "#ffd43b", textAlign: "center" }}>Admin :9000</div>
                  <span style={{ color: "#6b6b80", fontSize: "1.2rem" }}>&#8594;</span>
                  <div style={{ background: "#1a1a24", border: "1px solid #222233", borderRadius: 12, padding: "12px 16px", fontSize: "0.875rem", fontWeight: 600, textAlign: "center" }}>Deploy / Manage</div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: 16, letterSpacing: "-0.01em" }}>Dual-Listener Design</h3>
              <p style={{ color: "#9595a8", lineHeight: 1.7, marginBottom: 20, fontSize: "0.95rem" }}>
                Thunder runs two separate HTTP listeners. The{" "}
                <strong style={{ color: "#e8e8ed" }}>Ingress listener</strong> (port 8080) routes public traffic to deployed functions. The{" "}
                <strong style={{ color: "#e8e8ed" }}>Admin listener</strong> (port 9000) exposes management endpoints for deploying, updating, and removing functions, checking health, and reading metrics.
              </p>
              <p style={{ color: "#9595a8", lineHeight: 1.7, marginBottom: 32, fontSize: "0.95rem" }}>
                Both listeners share a function registry backed by an in-process isolate pool. Changes via the admin API take effect immediately -- no server restarts required.
              </p>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: 16, letterSpacing: "-0.01em" }}>Technology Stack</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {TECH_STACK.map((t) => (
                  <span key={t.label} title={t.desc} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#1a1a24", border: "1px solid #222233", borderRadius: 100, fontSize: "0.875rem", fontWeight: 500, color: "#9595a8" }}>
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECURITY ===== */}
      <section id="security" style={{ padding: "112px 24px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#fcc419", marginBottom: 16 }}>Security</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>Defense in depth</h2>
          <p style={{ fontSize: "1.1rem", color: "#9595a8", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
            Multiple independent layers of protection. A breach in any single layer does not compromise the system.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {SECURITY_ITEMS.map((s) => (
            <div key={s.title} style={{ background: "#13131d", border: "1px solid #222233", borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: "1.5rem", marginBottom: 12 }}>{s.icon}</div>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 600, marginBottom: 6 }}>{s.title}</h4>
              <p style={{ fontSize: "0.825rem", lineHeight: 1.6, color: "#9595a8" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CLI COMMANDS ===== */}
      <section style={{ background: "#111118", borderTop: "1px solid #222233", borderBottom: "1px solid #222233" }}>
        <div style={{ padding: "112px 24px", maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ display: "inline-block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#fcc419", marginBottom: 16 }}>CLI</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>One binary, all commands</h2>
            <p style={{ fontSize: "1.1rem", color: "#9595a8", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              A single CLI binary to start, bundle, watch, test, and check your edge functions.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
            {[
              { cmd: "thunder start", desc: "Start the edge runtime server with admin and ingress listeners.", flags: "--admin-port, --ingress-port, --tls-cert, --api-key" },
              { cmd: "thunder bundle", desc: "Package a JS/TS function into an ESZIP or V8 snapshot bundle.", flags: "--entrypoint, --output, --format" },
              { cmd: "thunder watch", desc: "Start dev mode with file watching and automatic hot-reload.", flags: "--entrypoint, --admin-port" },
              { cmd: "thunder test", desc: "Run tests using the built-in thunder:testing library.", flags: "--file, --filter, --timeout" },
              { cmd: "thunder check", desc: "Type-check TypeScript functions without running them.", flags: "--entrypoint" },
              { cmd: "thunder deploy", desc: "Bundle and deploy a function to a running Thunder server.", flags: "--entrypoint, --name, --server" },
            ].map((c) => (
              <div key={c.cmd} style={{ background: "#13131d", border: "1px solid #222233", borderRadius: 16, padding: 24 }}>
                <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.875rem", fontWeight: 600, color: "#fcc419" }}>{c.cmd}</code>
                <p style={{ fontSize: "0.9rem", color: "#9595a8", lineHeight: 1.6, marginTop: 12, marginBottom: 12 }}>{c.desc}</p>
                <p style={{ fontSize: "0.75rem", color: "#6b6b80", fontFamily: "'JetBrains Mono', monospace" }}>{c.flags}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ textAlign: "center", padding: "128px 24px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(245, 159, 0, 0.06) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>Ready to deploy at the edge?</h2>
          <p style={{ fontSize: "1.1rem", color: "#9595a8", maxWidth: 500, margin: "0 auto 40px", lineHeight: 1.7 }}>
            Get started with Thunder in minutes. Write your first edge function, bundle it, and deploy -- all from your terminal.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
            <a href="https://thunder-edge.github.io/docs" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: "#f59f00", color: "#0a0a0f", borderRadius: 12, fontSize: "1rem", fontWeight: 600, textDecoration: "none", boxShadow: "0 0 30px rgba(245, 159, 0, 0.25)" }}>
              Read the Docs <span>&#8594;</span>
            </a>
            <a href="https://github.com/thunder-edge/runtime" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", background: "#1a1a24", color: "#e8e8ed", border: "1px solid #222233", borderRadius: 12, fontSize: "1rem", fontWeight: 600, textDecoration: "none" }}>
              <GitHubIcon className="w-5 h-5" />
              Star on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer style={{ borderTop: "1px solid #222233", background: "#111118", padding: "64px 24px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 48 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontWeight: 700, fontSize: "1.15rem", marginBottom: 16 }}>
                <ThunderLogo size={24} />
                <span>Thunder</span>
              </div>
              <p style={{ fontSize: "0.875rem", color: "#9595a8", lineHeight: 1.7, maxWidth: 300 }}>
                A Rust-powered edge runtime built on the Deno stack. Secure, fast, and observable serverless functions at the edge.
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b6b80", marginBottom: 20 }}>Documentation</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", margin: 0, padding: 0 }}>
                <li><a href="https://thunder-edge.github.io/docs" style={{ fontSize: "0.875rem", color: "#9595a8", textDecoration: "none" }}>Overview</a></li>
                <li><a href="https://thunder-edge.github.io/docs/getting-started/quick-start/" style={{ fontSize: "0.875rem", color: "#9595a8", textDecoration: "none" }}>Quick Start</a></li>
                <li><a href="https://thunder-edge.github.io/docs/installation/install/" style={{ fontSize: "0.875rem", color: "#9595a8", textDecoration: "none" }}>Installation</a></li>
                <li><a href="https://thunder-edge.github.io/docs/api/cli/" style={{ fontSize: "0.875rem", color: "#9595a8", textDecoration: "none" }}>CLI Reference</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b6b80", marginBottom: 20 }}>Guides</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", margin: 0, padding: 0 }}>
                <li><a href="https://thunder-edge.github.io/docs/guides/your-first-function/" style={{ fontSize: "0.875rem", color: "#9595a8", textDecoration: "none" }}>Your First Function</a></li>
                <li><a href="https://thunder-edge.github.io/docs/guides/testing/" style={{ fontSize: "0.875rem", color: "#9595a8", textDecoration: "none" }}>Testing</a></li>
                <li><a href="https://thunder-edge.github.io/docs/guides/observability/" style={{ fontSize: "0.875rem", color: "#9595a8", textDecoration: "none" }}>Observability</a></li>
                <li><a href="https://thunder-edge.github.io/docs/examples/overview/" style={{ fontSize: "0.875rem", color: "#9595a8", textDecoration: "none" }}>Examples</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b6b80", marginBottom: 20 }}>Project</h4>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, listStyle: "none", margin: 0, padding: 0 }}>
                <li><a href="https://github.com/thunder-edge/runtime" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.875rem", color: "#9595a8", textDecoration: "none" }}>GitHub</a></li>
                <li><a href="https://github.com/thunder-edge/runtime/issues" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.875rem", color: "#9595a8", textDecoration: "none" }}>Issues</a></li>
                <li><a href="https://github.com/thunder-edge/runtime/releases" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.875rem", color: "#9595a8", textDecoration: "none" }}>Releases</a></li>
                <li><a href="https://thunder-edge.github.io/docs/architecture/security-model/" style={{ fontSize: "0.875rem", color: "#9595a8", textDecoration: "none" }}>Security</a></li>
              </ul>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 32, borderTop: "1px solid #222233", flexWrap: "wrap", gap: 16 }}>
            <span style={{ fontSize: "0.8rem", color: "#6b6b80" }}>Thunder Edge Runtime. Built with Rust by Globo.</span>
            <a href="https://github.com/thunder-edge/runtime" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: "#6b6b80", textDecoration: "none" }}>
              <GitHubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
