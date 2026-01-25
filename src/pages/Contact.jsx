import React from 'react';

const Contact = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="grid grid-2" style={{ gap: '80px' }}>
                    <div>
                        <h1 className="text-hero mb-md">Connect.</h1>
                        <p className="text-body text-muted mb-xl">
                            General inquiries, press, and wholesale.
                        </p>

                        <div style={{ marginBottom: '32px' }}>
                            <span className="text-label" style={{ display: 'block', marginBottom: '8px' }}>Email</span>
                            <a href="mailto:hello@vastrastudios.com" className="text-h3">hello@vastrastudios.com</a>
                        </div>

                        <div>
                            <span className="text-label" style={{ display: 'block', marginBottom: '8px' }}>Instagram</span>
                            <a href="https://instagram.com/Vastra.Studios" target="_blank" rel="noopener noreferrer" className="text-h3">@vastra.studios</a>
                        </div>
                    </div>

                    <div style={{ background: 'var(--white)', padding: '48px', border: '1px solid var(--border-color)' }}>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-input" placeholder="Your name" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-input" placeholder="hello@example.com" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <select className="form-input">
                                    <option>Customer Support</option>
                                    <option>Wholesale Inquiry</option>
                                    <option>Press</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea className="form-textarea" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
