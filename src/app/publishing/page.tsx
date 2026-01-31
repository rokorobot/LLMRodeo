import Link from "next/link";

export default function PublishingPage() {
    return (
        <div className="container-wrapper">
            {/* Header */}
            <div className="container" style={{ marginBottom: '40px' }}>
                <Link href="/" className="glitch-link" style={{ fontSize: '0.9rem', marginBottom: '20px', display: 'inline-block' }}>
                    ← BACK TO INDEX
                </Link>
                <h1 style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '10px' }}>
                    /PUBLISHING
                </h1>
                <p style={{ color: 'var(--dim-color)' }}>Whitepapers, Diagrams & Documentation</p>
            </div>

            {/* Available Resources */}
            <div className="container section-header">
                <h2>// AVAILABLE RESOURCES</h2>
                <div className="line-fill"></div>
                <span>DOCUMENTATION</span>
            </div>

            <div className="projects-grid" style={{ marginBottom: '60px' }}>
                <div className="project-card">
                    <div className="card-header">
                        <span>DOC_TYPE</span>
                        <span>ONE-PAGER</span>
                    </div>
                    <div className="card-content-text">
                        <h3>TM4 ONE-PAGER</h3>
                        <p>Executive summary of the TM4 framework. What it is, what it isn't, and why it matters.</p>
                        <div className="technical-detail">
                            <span>STATUS: AVAILABLE</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>DOC_TYPE</span>
                        <span>LEAFLET</span>
                    </div>
                    <div className="card-content-text">
                        <h3>TM4 LEAFLET</h3>
                        <p>Detailed overview of the four-layer architecture and governance principles.</p>
                        <div className="technical-detail">
                            <span>STATUS: AVAILABLE</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>DOC_TYPE</span>
                        <span>WHITEPAPER</span>
                    </div>
                    <div className="card-content-text">
                        <h3>TM4 WHITEPAPER</h3>
                        <p>Comprehensive technical specification including implementation details, validation results, and future roadmap.</p>
                        <div className="technical-detail">
                            <span>STATUS: IN PROGRESS</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Diagrams & Visuals */}
            <div className="container section-header">
                <h2>// DIAGRAMS & VISUALS</h2>
                <div className="line-fill"></div>
                <span>ARCHITECTURE</span>
            </div>

            <div className="projects-grid" style={{ marginBottom: '60px' }}>
                <div className="project-card">
                    <div className="card-header">
                        <span>DIAGRAM</span>
                        <span>ARCHITECTURE</span>
                    </div>
                    <div className="card-content-text">
                        <h3>L1-L4 LAYER DIAGRAM</h3>
                        <p>Visual representation of the four governance layers and their interactions.</p>
                        <div className="technical-detail">
                            <span>FORMAT: SVG / PNG</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>DIAGRAM</span>
                        <span>FLOW</span>
                    </div>
                    <div className="card-content-text">
                        <h3>EVOLUTION LOOP FLOWCHART</h3>
                        <p>Step-by-step visualization of the autonomy loop: Ideation → Proposal → Tournament → Adoption.</p>
                        <div className="technical-detail">
                            <span>FORMAT: SVG / PNG</span>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>DIAGRAM</span>
                        <span>CONCEPT</span>
                    </div>
                    <div className="card-content-text">
                        <h3>ANTI-CHEAT MECHANISMS</h3>
                        <p>Illustration of how TM4 prevents reward hacking, prompt leakage, and other forms of gaming.</p>
                        <div className="technical-detail">
                            <span>FORMAT: SVG / PNG</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Research Papers */}
            <div className="container section-header">
                <h2>// RESEARCH PAPERS</h2>
                <div className="line-fill"></div>
                <span>ACADEMIC</span>
            </div>

            <div className="container" style={{ marginBottom: '60px', border: '1px solid var(--dim-color)', padding: '30px' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '30px' }}>
                    Academic publications and preprints related to TM4 and governed autonomous evolution:
                </p>
                <div style={{ paddingLeft: '20px', borderLeft: '2px solid var(--dim-color)' }}>
                    <div style={{ marginBottom: '30px' }}>
                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>
                            "Thinking Machine 4.0: A Framework for Governed Autonomous Evolution"
                        </h4>
                        <p style={{ color: 'var(--dim-color)', fontSize: '0.9rem', marginBottom: '5px' }}>
                            Authors: TBD | Status: In Preparation
                        </p>
                        <p>
                            Comprehensive introduction to the TM4 framework, including architecture, anti-cheat mechanisms, and validation results.
                        </p>
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>
                            "Artifacts Before Agents: A Methodological Approach to AI Governance"
                        </h4>
                        <p style={{ color: 'var(--dim-color)', fontSize: '0.9rem', marginBottom: '5px' }}>
                            Authors: TBD | Status: Planned
                        </p>
                        <p>
                            Argues for validating governance frameworks on simple artifacts before attempting to govern complex agents.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ color: 'var(--accent-color)', marginBottom: '10px' }}>
                            "Adversarial Validation in Evolutionary Systems"
                        </h4>
                        <p style={{ color: 'var(--dim-color)', fontSize: '0.9rem', marginBottom: '5px' }}>
                            Authors: TBD | Status: Planned
                        </p>
                        <p>
                            Techniques for designing test cases that detect and prevent reward hacking in evolutionary AI systems.
                        </p>
                    </div>
                </div>
            </div>

            {/* Access Information */}
            <div className="container section-header">
                <h2>// ACCESS INFORMATION</h2>
                <div className="line-fill"></div>
                <span>DOWNLOAD</span>
            </div>

            <div className="container" style={{ marginBottom: '60px', border: '1px solid var(--accent-color)', padding: '30px', backgroundColor: 'rgba(255, 51, 51, 0.05)' }}>
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '20px' }}>OPEN ACCESS POLICY</h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                    All TM4 documentation, diagrams, and research papers are released under open access licenses.
                </p>
                <p style={{ marginBottom: '20px' }}>
                    <strong>Why?</strong> Because governance frameworks must be transparent, auditable, and reproducible.
                </p>
                <div style={{ paddingLeft: '20px', borderLeft: '2px solid var(--accent-color)', marginTop: '30px' }}>
                    <p style={{ marginBottom: '10px' }}>→ Source code: <a href="https://github.com/rokorobotic" target="_blank" style={{ color: 'var(--accent-color)' }}>GitHub</a></p>
                    <p style={{ marginBottom: '10px' }}>→ Documentation: Available on this site</p>
                    <p>→ Papers: Preprints on arXiv (when available)</p>
                </div>
            </div>

            {/* Quote */}
            <div className="container" style={{ textAlign: 'center', margin: '80px auto', padding: '40px', border: '1px solid var(--accent-color)' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--accent-color)' }}>
                    "Transparency is not optional."
                </h3>
                <p style={{ color: 'var(--text-color)', fontSize: '1rem' }}>
                    A governance framework that cannot be audited cannot be trusted.
                </p>
            </div>

            {/* Footer Navigation */}
            <div className="container" style={{ marginTop: '80px', textAlign: 'center' }}>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/status" className="btn btn-primary">
                        NEXT: STATUS →
                    </Link>
                    <Link href="/experiments" className="btn btn-outline">
                        ← BACK TO EXPERIMENTS
                    </Link>
                </div>
            </div>
        </div>
    );
}
