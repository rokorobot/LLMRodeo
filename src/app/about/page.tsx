import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container-wrapper">
            {/* Header */}
            <div className="container" style={{ marginBottom: '40px' }}>
                <Link href="/" className="glitch-link" style={{ fontSize: '0.9rem', marginBottom: '20px', display: 'inline-block' }}>
                    ← BACK TO INDEX
                </Link>
                <h1 style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '10px' }}>
                    /ABOUT
                </h1>
                <p style={{ color: 'var(--dim-color)' }}>Philosophy & Scope</p>
            </div>

            {/* What TM4 Is */}
            <div className="container section-header">
                <h2>// WHAT TM4 IS</h2>
                <div className="line-fill"></div>
                <span>DEFINITION</span>
            </div>

            <div className="container" style={{ marginBottom: '60px', border: '1px solid var(--dim-color)', padding: '30px' }}>
                <p style={{ fontSize: '1.2rem', marginBottom: '30px', lineHeight: '1.6' }}>
                    TM4 is a <strong style={{ color: 'var(--accent-color)' }}>governance and evolutionary framework</strong> that:
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: '20px', marginBottom: '20px' }}>
                    <li style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '2px solid var(--accent-color)' }}>
                        → Defines what counts as real improvement
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '2px solid var(--accent-color)' }}>
                        → Enforces strict anti-cheat constraints
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '2px solid var(--accent-color)' }}>
                        → Evaluates progress under adversarial selection pressure
                    </li>
                    <li style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '2px solid var(--accent-color)' }}>
                        → Records auditable evolutionary evidence
                    </li>
                </ul>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--text-color)', borderTop: '1px solid var(--dim-color)', paddingTop: '20px', marginTop: '20px' }}>
                    TM4 does <strong>not</strong> act in the world. It governs <em>how learning is allowed to happen</em>.
                </p>
            </div>

            {/* What TM4 Is Not */}
            <div className="container section-header">
                <h2>// WHAT TM4 IS NOT</h2>
                <div className="line-fill"></div>
                <span>BOUNDARIES</span>
            </div>

            <div className="projects-grid" style={{ marginBottom: '60px' }}>
                <div className="project-card">
                    <div className="card-header">
                        <span>NOT_01</span>
                        <span>AGENT</span>
                    </div>
                    <div className="card-content-text">
                        <h3>NOT A GENERAL AUTONOMOUS AGENT</h3>
                        <p>TM4 does not claim to be a self-directed system that acts independently in the world.</p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>NOT_02</span>
                        <span>PLANNER</span>
                    </div>
                    <div className="card-content-text">
                        <h3>NOT A LONG-HORIZON PLANNER</h3>
                        <p>TM4 is not designed for multi-step planning or complex task orchestration.</p>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>NOT_03</span>
                        <span>RESEARCH</span>
                    </div>
                    <div className="card-content-text">
                        <h3>NOT A SELF-DIRECTED RESEARCH SYSTEM</h3>
                        <p>Those systems may be developed <em>under TM4</em> — but TM4 itself remains neutral, external, and governing.</p>
                    </div>
                </div>
            </div>

            {/* Quote */}
            <div className="container" style={{ textAlign: 'center', margin: '80px auto', padding: '40px', border: '1px solid var(--accent-color)' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--accent-color)' }}>
                    "TM4 is the evolutionary constitution under which agents are allowed to exist."
                </h3>
                <p style={{ color: 'var(--text-color)', fontSize: '1rem' }}>
                    Framework, not actor. Governance, not capability.
                </p>
            </div>

            {/* Why Start With Simple Artifacts */}
            <div className="container section-header">
                <h2>// WHY START WITH SIMPLE ARTIFACTS</h2>
                <div className="line-fill"></div>
                <span>METHODOLOGY</span>
            </div>

            <div className="container" style={{ marginBottom: '60px', border: '1px solid var(--dim-color)', padding: '30px' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                    TM4 is intentionally validated on <strong style={{ color: 'var(--accent-color)' }}>minimal executable artifacts</strong> (e.g. short functions).
                </p>
                <p style={{ marginBottom: '20px' }}>This is a methodological choice:</p>
                <ul style={{ listStyle: 'none', paddingLeft: '20px' }}>
                    <li style={{ marginBottom: '10px' }}>:: Artifacts are inspectable</li>
                    <li style={{ marginBottom: '10px' }}>:: Behavior is reproducible</li>
                    <li style={{ marginBottom: '10px' }}>:: Cheating can be conclusively detected</li>
                </ul>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--dim-color)' }}>
                    If honest evolution cannot be enforced here, it cannot be enforced at higher levels.
                </p>
            </div>

            {/* Agents Come Later */}
            <div className="container section-header">
                <h2>// AGENTS COME LATER — CAREFULLY</h2>
                <div className="line-fill"></div>
                <span>ROADMAP</span>
            </div>

            <div className="container" style={{ marginBottom: '60px', border: '1px solid var(--dim-color)', padding: '30px' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                    Agents are significantly harder to govern than artifacts. They introduce:
                </p>
                <ul style={{ listStyle: 'none', paddingLeft: '20px', marginBottom: '30px' }}>
                    <li style={{ marginBottom: '10px', color: 'var(--accent-color)' }}>⚠ Hidden internal state</li>
                    <li style={{ marginBottom: '10px', color: 'var(--accent-color)' }}>⚠ Long-horizon credit assignment</li>
                    <li style={{ marginBottom: '10px', color: 'var(--accent-color)' }}>⚠ Tool-mediated side effects</li>
                </ul>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>
                    TM4 does <strong>not</strong> claim to solve agent control.
                </p>
                <p style={{ fontSize: '1.1rem', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--dim-color)' }}>
                    Instead, it provides a framework to <strong style={{ color: 'var(--accent-color)' }}>progressively lift governance guarantees</strong> as complexity increases.
                </p>
            </div>

            {/* Footer Navigation */}
            <div className="container" style={{ marginTop: '80px', textAlign: 'center' }}>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/how-it-works" className="btn btn-primary">
                        NEXT: HOW IT WORKS →
                    </Link>
                    <Link href="/" className="btn btn-outline">
                        ← BACK TO HOME
                    </Link>
                </div>
            </div>
        </div>
    );
}
