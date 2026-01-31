import Link from "next/link";

export default function StatusPage() {
    return (
        <div className="container-wrapper">
            {/* Header */}
            <div className="container" style={{ marginBottom: '40px' }}>
                <Link href="/" className="glitch-link" style={{ fontSize: '0.9rem', marginBottom: '20px', display: 'inline-block' }}>
                    ← BACK TO INDEX
                </Link>
                <h1 style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '10px' }}>
                    /STATUS
                </h1>
                <p style={{ color: 'var(--dim-color)' }}>What is Proven & What Comes Next</p>
            </div>

            {/* Current Status */}
            <div className="container section-header">
                <h2>// CURRENT STATUS</h2>
                <div className="line-fill"></div>
                <span>SNAPSHOT</span>
            </div>

            <div className="container" style={{ marginBottom: '60px', border: '1px solid var(--accent-color)', padding: '30px', backgroundColor: 'rgba(255, 51, 51, 0.05)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                    <div>
                        <span className="label">FRAMEWORK</span>
                        <p style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '10px' }}>OPERATIONAL</p>
                        <p style={{ fontSize: '0.9rem' }}>All four layers (L1-L4) implemented and tested</p>
                    </div>
                    <div>
                        <span className="label">EVOLUTIONARY GRADIENTS</span>
                        <p style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '10px' }}>HONEST</p>
                        <p style={{ fontSize: '0.9rem' }}>Anti-cheat hardened and validated</p>
                    </div>
                    <div>
                        <span className="label">ACTIVE VALIDATION</span>
                        <p style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '10px' }}>EXP-AUT-0003</p>
                        <p style={{ fontSize: '0.9rem' }}>Algorithmic complexity selection in progress</p>
                    </div>
                    <div>
                        <span className="label">IGNITION STATUS</span>
                        <p style={{ fontSize: '2rem', color: 'var(--accent-color)', marginBottom: '10px' }}>READY</p>
                        <p style={{ fontSize: '0.9rem' }}>Framework level validation complete</p>
                    </div>
                </div>
            </div>

            {/* What is Proven */}
            <div className="container section-header">
                <h2>// WHAT IS PROVEN</h2>
                <div className="line-fill"></div>
                <span>VALIDATED</span>
            </div>

            <div className="projects-grid" style={{ marginBottom: '60px' }}>
                <div className="project-card">
                    <div className="card-header">
                        <span>PROVEN_01</span>
                        <span style={{ color: 'var(--accent-color)' }}>✓</span>
                    </div>
                    <div className="card-content-text">
                        <h3>ARTIFACTS CAN BE GOVERNED</h3>
                        <p>Simple executable artifacts (functions) can be evolved under strict governance constraints without cheating.</p>
                        <div className="technical-detail">
                            <span>VALIDATED: EXP-AUT-0001</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>PROVEN_02</span>
                        <span style={{ color: 'var(--accent-color)' }}>✓</span>
                    </div>
                    <div className="card-content-text">
                        <h3>EVOLUTION LOOP OPERATIONAL</h3>
                        <p>The complete autonomy loop (Ideation → Proposal → Tournament → Adoption) functions as designed.</p>
                        <div className="technical-detail">
                            <span>VALIDATED: EXP-AUT-0002</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>PROVEN_03</span>
                        <span style={{ color: 'var(--accent-color)' }}>✓</span>
                    </div>
                    <div className="card-content-text">
                        <h3>ANTI-CHEAT MECHANISMS WORK</h3>
                        <p>Separation of generation and evaluation prevents reward hacking. Adversarial tests catch shortcuts.</p>
                        <div className="technical-detail">
                            <span>VALIDATED: EXP-AUT-0002, EXP-AUT-0003</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>PROVEN_04</span>
                        <span style={{ color: 'var(--accent-color)' }}>✓</span>
                    </div>
                    <div className="card-content-text">
                        <h3>COMPLETE AUDITABILITY</h3>
                        <p>All proposals, evaluations, and decisions are logged. Evolution can be replayed and verified.</p>
                        <div className="technical-detail">
                            <span>VALIDATED: ALL EXPERIMENTS</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* What is Not Yet Proven */}
            <div className="container section-header">
                <h2>// WHAT IS NOT YET PROVEN</h2>
                <div className="line-fill"></div>
                <span>OPEN_QUESTIONS</span>
            </div>

            <div className="projects-grid" style={{ marginBottom: '60px' }}>
                <div className="project-card">
                    <div className="card-header">
                        <span>OPEN_01</span>
                        <span>RESEARCH</span>
                    </div>
                    <div className="card-content-text">
                        <h3>AGENT GOVERNANCE</h3>
                        <p>Can TM4 principles be extended to govern full agents with internal state and tool use? This is significantly harder.</p>
                        <div className="technical-detail">
                            <span>STATUS: FUTURE WORK</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>OPEN_02</span>
                        <span>RESEARCH</span>
                    </div>
                    <div className="card-content-text">
                        <h3>LONG-HORIZON CREDIT ASSIGNMENT</h3>
                        <p>How to attribute success/failure in multi-step processes without introducing exploitable gradients?</p>
                        <div className="technical-detail">
                            <span>STATUS: FUTURE WORK</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>OPEN_03</span>
                        <span>RESEARCH</span>
                    </div>
                    <div className="card-content-text">
                        <h3>SCALING TO COMPLEX DOMAINS</h3>
                        <p>Can the framework scale to real-world problems beyond algorithmic challenges?</p>
                        <div className="technical-detail">
                            <span>STATUS: FUTURE WORK</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* What Comes Next */}
            <div className="container section-header">
                <h2>// WHAT COMES NEXT</h2>
                <div className="line-fill"></div>
                <span>ROADMAP</span>
            </div>

            <div className="container" style={{ marginBottom: '60px', border: '1px solid var(--dim-color)', padding: '30px' }}>
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '20px' }}>IMMEDIATE PRIORITIES</h3>
                <ol style={{ paddingLeft: '40px', marginBottom: '30px' }}>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Complete EXP-AUT-0003:</strong> Validate algorithmic complexity selection
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Publish whitepaper:</strong> Comprehensive technical documentation
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Open source release:</strong> Make framework publicly available
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Community validation:</strong> Enable external researchers to reproduce results
                    </li>
                </ol>

                <h3 style={{ color: 'var(--accent-color)', marginBottom: '20px', marginTop: '40px' }}>MEDIUM-TERM GOALS</h3>
                <ol style={{ paddingLeft: '40px', marginBottom: '30px' }}>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Expand artifact domains:</strong> Test on data structures, algorithms, optimizations
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Harden anti-cheat:</strong> Discover and patch any remaining exploits
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Performance optimization:</strong> Make evolution loop faster and more efficient
                    </li>
                    <li style={{ marginBottom: '15px' }}>
                        <strong>Tooling improvements:</strong> Better visualization, debugging, and analysis tools
                    </li>
                </ol>

                <h3 style={{ color: 'var(--accent-color)', marginBottom: '20px', marginTop: '40px' }}>LONG-TERM VISION</h3>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', paddingLeft: '20px', borderLeft: '2px solid var(--accent-color)' }}>
                    Progressively lift governance guarantees from artifacts to agents. This is a multi-year research program, not a near-term claim.
                </p>
            </div>

            {/* Quote */}
            <div className="container" style={{ textAlign: 'center', margin: '80px auto', padding: '40px', border: '1px solid var(--accent-color)' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--accent-color)' }}>
                    "We claim only what we can prove."
                </h3>
                <p style={{ color: 'var(--text-color)', fontSize: '1rem' }}>
                    TM4 is operational at the framework level. Everything else is future work.
                </p>
            </div>

            {/* Footer Navigation */}
            <div className="container" style={{ marginTop: '80px', textAlign: 'center' }}>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/" className="btn btn-primary">
                        BACK TO HOME
                    </Link>
                    <Link href="/publishing" className="btn btn-outline">
                        ← BACK TO PUBLISHING
                    </Link>
                </div>
            </div>
        </div>
    );
}
