import React from 'react';

const Legal = () => {
    return (
        <section className="section-lg">
            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <span className="tag">Compliance</span>
                    <h1 className="text-hero mb-xl">Legal</h1>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                        <section>
                            <h2 className="text-h2 mb-md font-serif italic">Privacy Policy</h2>
                            <p className="text-body text-muted mb-md">
                                Vastra Studios ("we," "us," or "our") is committed to protecting your privacy. This policy explains how we collect and use your data when you interact with our collective.
                            </p>
                            <h3 className="text-h3 mb-sm">Data Collection</h3>
                            <p className="text-body text-muted mb-md">
                                We collect information provided directly by you, such as your name, shipping address, and email when you register for Member Access or place an order.
                            </p>
                            <h3 className="text-h3 mb-sm">Cookies</h3>
                            <p className="text-body text-muted">
                                Our site uses essential cookies to manage your session and shopping experience. We do not use third-party tracking pixels for advertising purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-h2 mb-md font-serif italic">Terms of Service</h2>
                            <p className="text-body text-muted mb-md">
                                By accessing Vastra Studios, you agree to abide by our terms of conduct and sales.
                            </p>
                            <h3 className="text-h3 mb-sm">Seasonal Drops</h3>
                            <p className="text-body text-muted mb-md">
                                Items in the "Current Drop" are limited in quantity. Placing an item in your cart does not reserve it; only a completed checkout guarantees your purchase. Once a season enters the Archive, it will not be restocked.
                            </p>
                            <h3 className="text-h3 mb-sm">Intellectual Property</h3>
                            <p className="text-body text-muted">
                                All designs, imagery, and text on this site are the sole property of the VASTRA group. Reproduction without express written consent is prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-h2 mb-md font-serif italic">Ethics Statement</h2>
                            <p className="text-body text-muted">
                                Vastra Studios operates on a zero-waste philosophy. We maintain transparent relationships with our partners and ensure a living wage is paid throughout our supply chain.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legal;
