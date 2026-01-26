import React, { useState } from 'react';
import { Shield, Lock, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <section className="section-lg" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <div className="grid grid-2" style={{ gap: '100px', alignItems: 'center' }}>
                    <div>
                        <span className="tag">The Collective</span>
                        <h1 className="text-hero font-serif italic mb-lg" style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', lineHeight: '1.1' }}>
                            Member Access.
                        </h1>
                        <p className="text-body mb-xl" style={{ maxWidth: '500px' }}>
                            Vastra Studios operates on an incremental drop basis. Members receive early access codes
                            to "The Drop" 24 hours before public release.
                        </p>

                        <div style={{ borderTop: '1px solid var(--border-color)', marginTop: '48px' }}>
                            <div style={{ borderBottom: '1px solid var(--border-color)', padding: '24px 0', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <Shield size={20} className="text-muted" style={{ flexShrink: 0 }} />
                                <div>
                                    <span className="text-label block" style={{ marginBottom: '4px' }}>Privacy Priority</span>
                                    <p className="text-small text-muted">No newsletters. Only active drop notifications.</p>
                                </div>
                            </div>
                            <div style={{ borderBottom: '1px solid var(--border-color)', padding: '24px 0', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <MapPin size={20} className="text-muted" style={{ flexShrink: 0 }} />
                                <div>
                                    <span className="text-label block" style={{ marginBottom: '4px' }}>Regional Priority</span>
                                    <p className="text-small text-muted">First access for Edison, NJ and Hyderabad locals.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'var(--white)', padding: '64px', border: '1px solid var(--border-color)', position: 'relative' }}>
                        {isSubmitted ? (
                            <div className="text-center py-xl">
                                <div className="mb-lg">
                                    <Lock size={64} style={{ color: 'var(--text-charcoal)', margin: '0 auto' }} />
                                </div>
                                <h1 className="text-h3 font-serif italic mb-md">Request Received.</h1>
                                <p className="text-body text-muted">If approved, your access code will arrive via email.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="mb-lg">
                                    <h2 className="text-h3 font-serif italic mb-sm">Join the Waitlist</h2>
                                    <p className="text-small text-muted">Secure your place for Season 01: Monolith</p>
                                </div>
                                <div className="form-group mb-md">
                                    <label className="text-label">Name</label>
                                    <input type="text" placeholder="Full name" required />
                                </div>
                                <div className="form-group mb-md">
                                    <label className="text-label">Email Address</label>
                                    <input type="email" placeholder="name@example.com" required />
                                </div>
                                <div className="form-group mb-xl">
                                    <label className="text-label">Primary Region</label>
                                    <select required>
                                        <option value="us">United States (Edison, NJ)</option>
                                        <option value="in">India (Hyderabad)</option>
                                        <option value="other">International</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary w-full" style={{ width: '100%', gap: '12px' }}>
                                    Request Access <ArrowRight size={18} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
