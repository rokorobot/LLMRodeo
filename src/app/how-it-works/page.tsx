import Link from "next/link";

export default function HowItWorksPage() {
    return (
        <div className="container-wrapper">
            {/* Header */}
            <div className="container" style={{ marginBottom: '40px' }}>
                <Link href="/" className="glitch-link" style={{ fontSize: '0.9rem', marginBottom: '20px', display: 'inline-block' }}>
                    ← BACK TO INDEX
                </Link>
                <h1 style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '10px' }}>
                    /HOW-IT-WORKS
                </h1>
                <p style={{ color: 'var(--dim-color)' }}>L1–L4 Architecture & Governance</p>
            </div>

            {/* High Level Overview */}
            <div className="container section-header">
                <h2>// HIGH LEVEL OVERVIEW</h2>
                <div className="line-fill"></div>
                <span>ARCHITECTURE</span>
            </div>

            <div className="container" style={{ marginBottom: '60px', border: '1px solid var(--dim-color)', padding: '30px' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
                    TM4 separates autonomy into <strong style={{ color: 'var(--accent-color)' }}>governed layers</strong>:
                </p>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-color)' }}>
                    No layer can bypass another. Autonomy is permitted — <strong>only under governance</strong>.
                </p>
            </div>

            {/* The Four Layers */}
            <div className="container section-header">
                <h2>// THE FOUR LAYERS</h2>
                <div className="line-fill"></div>
                <span>L1-L4</span>
            </div>

            <div className="projects-grid" style={{ gridTemplateColumns: '1fr', gap: '30px', marginBottom: '60px' }}>
                {/* L1 */}
                <div className="project-card" style={{ minHeight: 'auto' }}>
                    <div className="card-header">
                        <span>LAYER_01</span>
                        <span>EXECUTION</span>
                    </div>
                    <div className="card-content-text">
                        <h3 style={{ color: 'var(--accent-color)', fontSize: '2rem' }}>L1 – EXECUTION</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                            Sandboxed, time-limited, deterministic
                        </p>
                        <div style={{ paddingLeft: '20px', borderLeft: '2px solid var(--dim-color)' }}>
                            <p style={{ marginBottom: '10px' }}>• All code runs in isolated environments</p>
                            <p style={{ marginBottom: '10px' }}>• Strict time and resource limits enforced</p>
                            <p style={{ marginBottom: '10px' }}>• Deterministic execution for reproducibility</p>
                            <p>• No external network access or side effects</p>
                        </div>
                    </div>
                </div>

                {/* L2 */}
                <div className="project-card" style={{ minHeight: 'auto' }}>
                    <div className="card-header">
                        <span>LAYER_02</span>
                        <span>IDEATION</span>
                    </div>
                    <div className="card-content-text">
                        <h3 style={{ color: 'var(--accent-color)', fontSize: '2rem' }}>L2 – IDEATION</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                            Proposal generation without evaluation access
                        </p>
                        <div style={{ paddingLeft: '20px', borderLeft: '2px solid var(--dim-color)' }}>
                            <p style={{ marginBottom: '10px' }}>• LLM generates candidate solutions</p>
                            <p style={{ marginBottom: '10px' }}>• No access to test results or scores</p>
                            <p style={{ marginBottom: '10px' }}>• Prevents reward hacking and overfitting</p>
                            <p>• Blind generation ensures honest exploration</p>
                        </div>
                    </div>
                </div>

                {/* L3 */}
                <div className="project-card" style={{ minHeight: 'auto' }}>
                    <div className="card-header">
                        <span>LAYER_03</span>
                        <span>EVALUATION</span>
                    </div>
                    <div className="card-content-text">
                        <h3 style={{ color: 'var(--accent-color)', fontSize: '2rem' }}>L3 – EVALUATION</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                            Tournaments, multi-axis scoring, evidence capture
                        </p>
                        <div style={{ paddingLeft: '20px', borderLeft: '2px solid var(--dim-color)' }}>
                            <p style={{ marginBottom: '10px' }}>• Candidates compete in tournaments</p>
                            <p style={{ marginBottom: '10px' }}>• Multi-dimensional fitness scoring</p>
                            <p style={{ marginBottom: '10px' }}>• All results logged and auditable</p>
                            <p>• Adversarial test cases prevent gaming</p>
                        </div>
                    </div>
                </div>

                {/* L4 */}
                <div className="project-card" style={{ minHeight: 'auto' }}>
                    <div className="card-header">
                        <span>LAYER_04</span>
                        <span>GOVERNANCE</span>
                    </div>
                    <div className="card-content-text">
                        <h3 style={{ color: 'var(--accent-color)', fontSize: '2rem' }}>L4 – GOVERNANCE</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                            Invariants, anti-cheat rules, progression logic
                        </p>
                        <div style={{ paddingLeft: '20px', borderLeft: '2px solid var(--dim-color)' }}>
                            <p style={{ marginBottom: '10px' }}>• Enforces system-wide invariants</p>
                            <p style={{ marginBottom: '10px' }}>• Anti-cheat detection and prevention</p>
                            <p style={{ marginBottom: '10px' }}>• Controls when evolution is allowed</p>
                            <p>• Maintains audit trail of all changes</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Principles */}
            <div className="container section-header">
                <h2>// KEY PRINCIPLES</h2>
                <div className="line-fill"></div>
                <span>GOVERNANCE</span>
            </div>

            <div className="projects-grid" style={{ marginBottom: '60px' }}>
                <div className="project-card">
                    <div className="card-header">
                        <span>PRINCIPLE_01</span>
                        <span>CORE</span>
                    </div>
                    <div className="card-content-text">
                        <h3>SEPARATION OF CONCERNS</h3>
                        <p>Generation (L2) is blind to evaluation (L3). This prevents the system from learning to game the tests.</p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>PRINCIPLE_02</span>
                        <span>CORE</span>
                    </div>
                    <div className="card-content-text">
                        <h3>ADVERSARIAL VALIDATION</h3>
                        <p>Test cases are designed to catch shortcuts, heuristics, and superficial improvements.</p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>PRINCIPLE_03</span>
                        <span>CORE</span>
                    </div>
                    <div className="card-content-text">
                        <h3>COMPLETE AUDITABILITY</h3>
                        <p>Every proposal, evaluation, and decision is logged. Evolution can be replayed and verified.</p>
                    </div>
                </div>
            </div>

            {/* Quote */}
            <div className="container" style={{ textAlign: 'center', margin: '80px auto', padding: '40px', border: '1px solid var(--accent-color)' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--accent-color)' }}>
                    "Autonomy is permitted — only under governance."
                </h3>
                <p style={{ color: 'var(--text-color)', fontSize: '1rem' }}>
                    No layer can bypass another. This is the foundation of honest evolution.
                </p>
            </div>

            {/* Footer Navigation */}
            <div className="container" style={{ marginTop: '80px', textAlign: 'center' }}>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/experiments" className="btn btn-primary">
                        NEXT: EXPERIMENTS →
                    </Link>
                    <Link href="/about" className="btn btn-outline">
                        ← BACK TO ABOUT
                    </Link>
                </div>
            </div>
        </div>
    );
}
