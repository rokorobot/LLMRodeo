"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // Simulate form submission (you'll need to implement actual backend)
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", subject: "", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container-wrapper">
            {/* Header */}
            <div className="container" style={{ marginBottom: '40px' }}>
                <Link href="/" className="glitch-link" style={{ fontSize: '0.9rem', marginBottom: '20px', display: 'inline-block' }}>
                    ← BACK TO INDEX
                </Link>
                <h1 style={{ fontSize: '3rem', color: 'var(--accent-color)', marginBottom: '10px' }}>
                    /CONTACT
                </h1>
                <p style={{ color: 'var(--dim-color)' }}>Get in Touch with the TM4 Team</p>
            </div>

            {/* Contact Information */}
            <div className="container section-header">
                <h2>// REACH OUT</h2>
                <div className="line-fill"></div>
                <span>COMMUNICATION</span>
            </div>

            <div className="container" style={{ marginBottom: '60px', border: '1px solid var(--dim-color)', padding: '30px' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                    Have questions about TM4? Want to collaborate? Found an issue?
                </p>
                <p style={{ color: 'var(--dim-color)' }}>
                    Fill out the form below and we'll get back to you as soon as possible.
                </p>
            </div>

            {/* Contact Form */}
            <div className="container" style={{ marginBottom: '60px' }}>
                <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {/* Name Field */}
                    <div style={{ marginBottom: '30px' }}>
                        <label htmlFor="name" style={{ display: 'block', marginBottom: '10px', color: 'var(--accent-color)', fontSize: '0.9rem' }}>
                            NAME *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '15px',
                                backgroundColor: 'var(--bg-color)',
                                border: '1px solid var(--dim-color)',
                                color: 'var(--text-color)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.3s',
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--dim-color)'}
                        />
                    </div>

                    {/* Email Field */}
                    <div style={{ marginBottom: '30px' }}>
                        <label htmlFor="email" style={{ display: 'block', marginBottom: '10px', color: 'var(--accent-color)', fontSize: '0.9rem' }}>
                            EMAIL *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '15px',
                                backgroundColor: 'var(--bg-color)',
                                border: '1px solid var(--dim-color)',
                                color: 'var(--text-color)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.3s',
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--dim-color)'}
                        />
                    </div>

                    {/* Subject Field */}
                    <div style={{ marginBottom: '30px' }}>
                        <label htmlFor="subject" style={{ display: 'block', marginBottom: '10px', color: 'var(--accent-color)', fontSize: '0.9rem' }}>
                            SUBJECT *
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            style={{
                                width: '100%',
                                padding: '15px',
                                backgroundColor: 'var(--bg-color)',
                                border: '1px solid var(--dim-color)',
                                color: 'var(--text-color)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.3s',
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--dim-color)'}
                        />
                    </div>

                    {/* Message Field */}
                    <div style={{ marginBottom: '30px' }}>
                        <label htmlFor="message" style={{ display: 'block', marginBottom: '10px', color: 'var(--accent-color)', fontSize: '0.9rem' }}>
                            MESSAGE *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={8}
                            style={{
                                width: '100%',
                                padding: '15px',
                                backgroundColor: 'var(--bg-color)',
                                border: '1px solid var(--dim-color)',
                                color: 'var(--text-color)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.3s',
                                resize: 'vertical',
                            }}
                            onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                            onBlur={(e) => e.target.style.borderColor = 'var(--dim-color)'}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === "sending"}
                        style={{
                            padding: '15px 40px',
                            backgroundColor: status === "sending" ? 'var(--dim-color)' : 'var(--accent-color)',
                            color: status === "sending" ? 'var(--text-color)' : 'var(--bg-color)',
                            border: 'none',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '1rem',
                            cursor: status === "sending" ? 'not-allowed' : 'pointer',
                            transition: 'all 0.3s',
                            fontWeight: 'bold',
                        }}
                        onMouseEnter={(e) => {
                            if (status !== "sending") {
                                e.currentTarget.style.backgroundColor = '#cc0000';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (status !== "sending") {
                                e.currentTarget.style.backgroundColor = 'var(--accent-color)';
                            }
                        }}
                    >
                        {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
                    </button>

                    {/* Status Messages */}
                    {status === "success" && (
                        <div style={{
                            marginTop: '20px',
                            padding: '15px',
                            backgroundColor: 'rgba(51, 255, 51, 0.1)',
                            border: '1px solid #33ff33',
                            color: '#33ff33',
                        }}>
                            ✓ MESSAGE SENT SUCCESSFULLY. WE'LL BE IN TOUCH SOON.
                        </div>
                    )}

                    {status === "error" && (
                        <div style={{
                            marginTop: '20px',
                            padding: '15px',
                            backgroundColor: 'rgba(255, 51, 51, 0.1)',
                            border: '1px solid var(--accent-color)',
                            color: 'var(--accent-color)',
                        }}>
                            ✗ ERROR SENDING MESSAGE. PLEASE TRY AGAIN.
                        </div>
                    )}
                </form>
            </div>

            {/* Alternative Contact Methods */}
            <div className="container section-header">
                <h2>// ALTERNATIVE CHANNELS</h2>
                <div className="line-fill"></div>
                <span>OPTIONS</span>
            </div>

            <div className="projects-grid" style={{ marginBottom: '60px' }}>
                <div className="project-card">
                    <div className="card-header">
                        <span>CHANNEL</span>
                        <span>GITHUB</span>
                    </div>
                    <div className="card-content-text">
                        <h3>OPEN AN ISSUE</h3>
                        <p>For bug reports, feature requests, or technical discussions, open an issue on our GitHub repository.</p>
                        <div className="technical-detail">
                            <a href="https://github.com/rokorobotic" target="_blank" style={{ color: 'var(--accent-color)' }}>
                                → GITHUB ISSUES
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>CHANNEL</span>
                        <span>EMAIL</span>
                    </div>
                    <div className="card-content-text">
                        <h3>DIRECT EMAIL</h3>
                        <p>Prefer email? Send us a message directly at our contact address.</p>
                        <div className="technical-detail">
                            <a href="mailto:contact@lmmrodeo.com" style={{ color: 'var(--accent-color)' }}>
                                → contact@lmmrodeo.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <div className="card-header">
                        <span>CHANNEL</span>
                        <span>RESEARCH</span>
                    </div>
                    <div className="card-content-text">
                        <h3>COLLABORATION</h3>
                        <p>Interested in research collaboration or academic partnerships? Let's talk.</p>
                        <div className="technical-detail">
                            <span>STATUS: OPEN TO PROPOSALS</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Navigation */}
            <div className="container" style={{ marginTop: '80px', textAlign: 'center' }}>
                <Link href="/" className="btn btn-primary">
                    BACK TO HOME
                </Link>
            </div>
        </div>
    );
}
