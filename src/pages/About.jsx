import React from 'react';
import logo from '../images/logo.png';

const About = () => {
    return (
        <section className="section">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h1 className="text-hero mb-md">A study in<br />essentialism.</h1>
                    <p className="text-body text-muted" style={{ fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
                        Vastra Studios is more than a clothing brand. It is an exploration of the relationship
                        between the garment and the wearer.
                    </p>
                </div>

                <div className="grid grid-2" style={{ alignItems: 'center', gap: '80px' }}>
                    <div style={{ aspectHeight: '1/1', background: 'var(--white)', border: '1px solid var(--border-color)', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <img src={logo} alt="Vastra Studios Logo" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                    </div>

                    <div>
                        <div style={{ marginBottom: '48px' }}>
                            <span className="text-label" style={{ display: 'block', marginBottom: '16px' }}>Our Philosophy</span>
                            <h2 className="text-h2 mb-md">Conscious Construction.</h2>
                            <p className="text-body text-muted">
                                Every stitch has a purpose. We believe in "slow fashion"—the idea that a few well-made pieces are better than a closet full of the temporary.
                                Our palette is inspired by the natural world: the whites of sun-bleached bone and the deep shadows of charcoal.
                            </p>
                        </div>

                        <div>
                            <span className="text-label" style={{ display: 'block', marginBottom: '16px' }}>The Collective</span>
                            <h2 className="text-h2 mb-md">VASTRA Group.</h2>
                            <p className="text-body text-muted">
                                Vastra Studios is the creative nucleus of the VASTRA collective.
                                While Vastra Labs builds the digital systems, the Studios build the physical identity.
                            </p>
                            <p className="text-body mt-md">
                                <strong>Vastra Studios</strong> — Apparel & Object.<br />
                                <strong>Vastra Labs</strong> — Digital Systems.<br />
                                <strong>Vastra Edits</strong> — Visual Media.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
