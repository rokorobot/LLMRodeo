import Link from "next/link";

export default function Home() {
  const now = new Date();
  const currentYear = now.getFullYear();

  return (
    <div className="container-wrapper">
      <div className="container hero-card">
        <div className="sidebar">
          <div className="vertical-text">TM4 // GOVERNANCE FRAMEWORK</div>
        </div>
        <div className="main-content">
          <div className="header-row">
            <div className="logo-section">
              <div className="logo-icon">
                <div className="tri-outer"></div>
              </div>
              <div className="logo-text">
                <h1 style={{ color: "var(--accent-color)" }}>
                  LMMRodeo
                </h1>
                <p>TM4 OFFICIAL REFERENCE</p>
              </div>
            </div>
            <div className="meta-info">
              <div className="meta-item">
                <span className="label">FRAMEWORK</span>
                <span className="value-text">TM4</span>
              </div>
              <div className="meta-item">
                <span className="label">STATUS</span>
                <div className="value-text">OPERATIONAL</div>
              </div>
              <div className="meta-item lab-test">
                <span className="label">ANTI-CHEAT</span>
                <div className="value">ON</div>
              </div>
            </div>
          </div>

          <div className="content-row">
            <div className="primary-info">
              <div className="huge-text">TM4</div>
              <div className="sub-info">
                <div className="date">EST. {currentYear}</div>
                <div className="dot-matrix"></div>
              </div>
              <h2 className="hero-title">
                THINKING MACHINE 4.0
                <br />
                <span style={{ fontSize: '0.6em', color: 'var(--text-color)', opacity: 0.8 }}>
                  A GOVERNANCE FRAMEWORK FOR
                  <br />
                  HONEST AUTONOMOUS EVOLUTION
                </span>
              </h2>
            </div>
            <div className="secondary-info">
              <div className="routing-info">
                <span className="label">SYSTEM</span>
                <div className="corner-marker">¬</div>
              </div>
              <div className="huge-text-pge">GOV</div>
              <div className="barcode-section">
                <span className="label">FRAMEWORK NOT ACTOR</span>
                <div className="barcode"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Corner Markers */}
        <div className="corner top-left"></div>
        <div className="corner top-right"></div>
        <div className="corner bottom-left"></div>
        <div className="corner bottom-right"></div>
      </div>

      {/* SECTION: DEFINITION */}
      <div className="container section-header" style={{ marginTop: '60px' }}>
        <h2>// THE DEFINITION</h2>
        <div className="line-fill"></div>
        <span>001</span>
      </div>

      <div className="projects-grid">
        <div className="project-card">
          <div className="card-header">
            <span>WHAT_IS_NOT</span>
            <span>CRITICAL</span>
          </div>
          <div className="card-content-text">
            <h3>TM4 IS NOT AN AGENT</h3>
            <p>It is not a chatbot, a planner, or a self-directed research system. This prevents the agent demo trap.</p>
            <div className="technical-detail">
              <span>ENTITY_TYPE: NULL</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="card-header">
            <span>WHAT_IS</span>
            <span>CORE</span>
          </div>
          <div className="card-content-text">
            <h3>GOVERNANCE FRAMEWORK</h3>
            <p>TM4 defines the rules under which agents and LLM-based systems are allowed to evolve — without cheating.</p>
            <div className="technical-detail">
              <span>FUNCTION: LAW</span>
            </div>
          </div>
        </div>

        <div className="project-card">
          <div className="card-header">
            <span>LOCATION</span>
            <span>HOST</span>
          </div>
          <div className="card-content-text">
            <h3>LMMRODEO IS THE ARENA</h3>
            <p>The host. The public reference point. Not "the AI", but the place where AI evolution is judged.</p>
            <div className="technical-detail">
              <span>ROLE: SUBSTRATE</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION: WHY TM4 EXISTS */}
      <div className="container section-header">
        <h2>// RATIONALE</h2>
        <div className="line-fill"></div>
        <span>002</span>
      </div>

      <div className="container" style={{ marginBottom: '40px', border: '1px solid var(--dim-color)', padding: '30px' }}>
        <h3 style={{ marginBottom: '20px', color: 'var(--accent-color)' }}>ELIMINATING ILLUSORY PROGRESS</h3>
        <p style={{ maxWidth: '800px' }}>
          Modern AI systems often <em>appear</em> to improve while quietly relying on:
        </p>
        <ul style={{ listStyle: 'none', paddingLeft: '20px', marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>
          <li style={{ marginBottom: '10px' }}>:: REWARD HACKING</li>
          <li style={{ marginBottom: '10px' }}>:: HEURISTIC SHORTCUTS</li>
          <li style={{ marginBottom: '10px' }}>:: PROMPT LEAKAGE</li>
          <li style={{ marginBottom: '10px' }}>:: SUPERFICIAL STRUCTURAL CHANGES</li>
        </ul>
        <p style={{ borderLeft: '2px solid var(--accent-color)', paddingLeft: '15px', fontStyle: 'italic', color: 'var(--text-color)' }}>
          TM4 was built to eliminate illusory progress. Governance precedes capability.
        </p>
      </div>


      {/* SECTION: ARCHITECTURE */}
      <div className="container section-header">
        <h2>// ARCHITECTURE</h2>
        <div className="line-fill"></div>
        <span>L1-L4</span>
      </div>

      <div className="projects-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className="project-card">
          <div className="card-header">
            <span>LAYER_01</span>
            <span>BASE</span>
          </div>
          <h3>L1 – EXECUTION</h3>
          <p>Sandboxed, time-limited, deterministic.</p>
        </div>
        <div className="project-card">
          <div className="card-header">
            <span>LAYER_02</span>
            <span>GEN</span>
          </div>
          <h3>L2 – IDEATION</h3>
          <p>Proposal generation without evaluation access.</p>
        </div>
        <div className="project-card">
          <div className="card-header">
            <span>LAYER_03</span>
            <span>EVAL</span>
          </div>
          <h3>L3 – EVALUATION</h3>
          <p>Tournaments, multi-axis scoring, evidence capture.</p>
        </div>
        <div className="project-card">
          <div className="card-header">
            <span>LAYER_04</span>
            <span>META</span>
          </div>
          <h3>L4 – GOVERNANCE</h3>
          <p>Invariants, anti-cheat rules, progression logic.</p>
        </div>
      </div>

      {/* SECTION: PHILOSOPHY */}
      <div className="container" style={{ textAlign: 'center', margin: '80px auto' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
          "TM4 is the evolutionary constitution under which agents <br /> are allowed to exist."
        </h3>
        <p style={{ color: 'var(--dim-color)' }}>
          If honest evolution cannot be enforced on simple artifacts, it cannot be enforced on agents.
        </p>
      </div>

      {/* NAV LINKS */}
      <div className="container section-header">
        <h2>// SYSTEM MAP</h2>
        <div className="line-fill"></div>
        <span>NAV</span>
      </div>

      <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <Link href="/about" className="project-card nav-card">
          <h3>/ABOUT</h3>
          <p>What TM4 is / is not</p>
        </Link>
        <Link href="/how-it-works" className="project-card nav-card">
          <h3>/HOW-IT-WORKS</h3>
          <p>L1–L4 Architecture</p>
        </Link>
        <Link href="/experiments" className="project-card nav-card">
          <h3>/EXPERIMENTS</h3>
          <p>Validation Lineage</p>
        </Link>
        <Link href="/publishing" className="project-card nav-card">
          <h3>/PUBLISHING</h3>
          <p>Whitepapers & Diagrams</p>
        </Link>
        <Link href="/status" className="project-card nav-card">
          <h3>/STATUS</h3>
          <p>Proven & Next</p>
        </Link>
      </div>

      {/* FOOTER */}
      <div className="container footer-section">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>FRAMEWORK RESOURCES</h3>
            <p>ACCESS POINTS:</p>
            <Link href="/publishing" className="glitch-link">
              WHITE_PAPER_DB
            </Link>
            <a href="https://github.com/rokorobotic" target="_blank" className="glitch-link">
              SOURCE_CODE
            </a>
          </div>
          <div className="footer-col status-col">
            <h3>SYSTEM METRICS</h3>
            <div className="status-row">
              <span>FRAMEWORK</span>
              <span className="dynamic-value">OPERATIONAL</span>
            </div>
            <div className="status-row">
              <span>GRADIENT</span>
              <span className="dynamic-value">HONEST</span>
            </div>
            <div className="status-row">
              <span>IGNITION</span>
              <span className="secure">READY</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ flexDirection: 'column', alignItems: 'center', gap: '20px', marginTop: '40px' }}>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', textAlign: 'center', color: 'var(--text-color)' }}>
            TM4 does not promise intelligence.
            <br />
            It promises that learning cannot be faked.
          </p>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--dim-color)' }}>
            <span>TM4 // THINKING MACHINE 4.0 © {currentYear}</span>
            <span>END_OF_LINE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
