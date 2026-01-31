import Link from "next/link";

export default function ExperimentsPage() {
    return (
        <div className="container-wrapper">
            {/* Header */}
            <div className="container" style={{ marginBottom: '40px' }}>
                <Link href="/" className="glitch-link" style={{ fontSize: '0.9rem', marginBottom: '20px', display: 'inline-block' }}>
                    ← BACK TO INDEX
                </Link>
                <h1 style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '10px' }}>
                    /EXPERIMENTS
                </h1>
                <p style={{ color: 'var(--dim-color)' }}>Validation Lineage</p>
            </div>

            {/* Current Status */}
            <div className="container section-header">
                <h2>// CURRENT STATUS</h2>
                <div className="line-fill"></div>
                <span>ACTIVE</span>
            </div>

            <div className="container" style={{ marginBottom: '60px', border: '1px solid var(--accent-color)', padding: '30px', backgroundColor: 'rgba(255, 51, 51, 0.05)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <div>
                        <span className="label">FRAMEWORK</span>
                        <p style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>OPERATIONAL</p>
                    </div>
                    <div>
                        <span className="label">EVOLUTIONARY GRADIENTS</span>
                        <p style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>HONEST & ANTI-CHEAT HARDENED</p>
                    </div>
                    <div>
                        <span className="label">ACTIVE VALIDATION</span>
                        <p style={{ fontSize: '1.5rem', color: 'var(--accent-color)' }}>EXP-AUT-0003</p>
                    </div>
                </div>
                <p style={{ fontSize: '1.2rem', fontStyle: 'italic', textAlign: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--dim-color)' }}>
                    TM4 is <strong style={{ color: 'var(--accent-color)' }}>Ignition Ready</strong> at the framework level.
                </p>
            </div>

            {/* Experiment Lineage */}
            <div className="container section-header">
                <h2>// EXPERIMENT LINEAGE</h2>
                <div className="line-fill"></div>
                <span>VALIDATION_HISTORY</span>
            </div>

            <div className="projects-grid" style={{ gridTemplateColumns: '1fr', gap: '30px', marginBottom: '60px' }}>
                {/* EXP-AUT-0003 */}
                <div className="project-card" style={{ minHeight: 'auto', borderColor: 'var(--accent-color)' }}>
                    <div className="card-header">
                        <span>EXP-AUT-0003</span>
                        <span style={{ color: 'var(--accent-color)' }}>ACTIVE</span>
                    </div>
                    <div className="card-content-text">
                        <h3 style={{ color: 'var(--accent-color)', fontSize: '1.8rem' }}>ALGORITHMIC COMPLEXITY SELECTION</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                            Current validation experiment testing the framework's ability to discover and select algorithmically superior solutions.
                        </p>
                        <div style={{ paddingLeft: '20px', borderLeft: '2px solid var(--accent-color)' }}>
                            <p style={{ marginBottom: '10px' }}><strong>Objective:</strong> Evolve O(log n) Fibonacci implementation from O(n) baseline</p>
                            <p style={{ marginBottom: '10px' }}><strong>Method:</strong> Multi-axis scoring (correctness + performance)</p>
                            <p style={{ marginBottom: '10px' }}><strong>Anti-cheat:</strong> Adversarial test cases, contract enforcement</p>
                            <p><strong>Status:</strong> Evolutionary gradient refined, tournament active</p>
                        </div>
                        <div className="technical-detail" style={{ marginTop: '20px' }}>
                            <span>VALIDATION_TARGET: ALGORITHMIC_EVOLUTION</span>
                        </div>
                    </div>
                </div>

                {/* EXP-AUT-0002 */}
                <div className="project-card" style={{ minHeight: 'auto' }}>
                    <div className="card-header">
                        <span>EXP-AUT-0002</span>
                        <span>COMPLETED</span>
                    </div>
                    <div className="card-content-text">
                        <h3 style={{ fontSize: '1.8rem' }}>EVOLUTION LOOP INTEGRATION</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                            Validated the complete autonomy loop: Ideation → Proposal → Tournament → Adoption.
                        </p>
                        <div style={{ paddingLeft: '20px', borderLeft: '2px solid var(--dim-color)' }}>
                            <p style={{ marginBottom: '10px' }}><strong>Result:</strong> ✓ Loop operational</p>
                            <p style={{ marginBottom: '10px' }}><strong>Result:</strong> ✓ Anti-cheat constraints enforced</p>
                            <p><strong>Result:</strong> ✓ Genome evolution auditable</p>
                        </div>
                        <div className="technical-detail" style={{ marginTop: '20px' }}>
                            <span>VALIDATION_TARGET: AUTONOMOUS_LOOP</span>
                        </div>
                    </div>
                </div>

                {/* EXP-AUT-0001 */}
                <div className="project-card" style={{ minHeight: 'auto' }}>
                    <div className="card-header">
                        <span>EXP-AUT-0001</span>
                        <span>COMPLETED</span>
                    </div>
                    <div className="card-content-text">
                        <h3 style={{ fontSize: '1.8rem' }}>BASELINE ARTIFACT GOVERNANCE</h3>
                        <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                            Established that simple artifacts (functions) can be governed under TM4 constraints.
                        </p>
                        <div style={{ paddingLeft: '20px', borderLeft: '2px solid var(--dim-color)' }}>
                            <p style={{ marginBottom: '10px' }}><strong>Result:</strong> ✓ Artifacts inspectable</p>
                            <p style={{ marginBottom: '10px' }}><strong>Result:</strong> ✓ Behavior reproducible</p>
                            <p><strong>Result:</strong> ✓ Cheating detectable</p>
                        </div>
                        <div className="technical-detail" style={{ marginTop: '20px' }}>
                            <span>VALIDATION_TARGET: ARTIFACT_GOVERNANCE</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Methodology */}
            <div className="container section-header">
                <h2>// EXPERIMENTAL METHODOLOGY</h2>
                <div className="line-fill"></div>
                <span>PROCESS</span>
            </div>

            <div className="container" style={{ marginBottom: '60px', border: '1px solid var(--dim-color)', padding: '30px' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                    All experiments follow a rigorous validation protocol:
                </p>
                <ol style={{ paddingLeft: '40px', marginBottom: '20px' }}>
                    <li style={{ marginBottom: '15px' }}><strong>Hypothesis:</strong> Clear statement of what is being validated</li>
                    <li style={{ marginBottom: '15px' }}><strong>Anti-cheat design:</strong> Identify potential shortcuts and design countermeasures</li>
                    <li style={{ marginBottom: '15px' }}><strong>Execution:</strong> Run under full governance constraints</li>
                    <li style={{ marginBottom: '15px' }}><strong>Evidence collection:</strong> Log all proposals, evaluations, and decisions</li>
                    <li style={{ marginBottom: '15px' }}><strong>Analysis:</strong> Verify no cheating occurred, measure genuine progress</li>
                    <li style={{ marginBottom: '15px' }}><strong>Documentation:</strong> Publish results, artifacts, and audit trails</li>
                </ol>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', paddingTop: '20px', borderTop: '1px solid var(--dim-color)' }}>
                    If the experiment can be gamed, it is redesigned until it cannot.
                </p>
            </div>

            {/* Quote */}
            <div className="container" style={{ textAlign: 'center', margin: '80px auto', padding: '40px', border: '1px solid var(--accent-color)' }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '20px', color: 'var(--accent-color)' }}>
                    "Progress must be proven, not assumed."
                </h3>
                <p style={{ color: 'var(--text-color)', fontSize: '1rem' }}>
                    Every claim of improvement is backed by auditable evidence.
                </p>
            </div>

            {/* Footer Navigation */}
            <div className="container" style={{ marginTop: '80px', textAlign: 'center' }}>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link href="/publishing" className="btn btn-primary">
                        NEXT: PUBLISHING →
                    </Link>
                    <Link href="/how-it-works" className="btn btn-outline">
                        ← BACK TO HOW IT WORKS
                    </Link>
                </div>
            </div>
        </div>
    );
}
