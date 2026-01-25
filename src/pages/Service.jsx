import React from 'react';

const Service = () => {
    return (
        <section className="section-lg">
            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <span className="tag">Client Services</span>
                    <h1 className="text-hero mb-xl">Care & Support</h1>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                        <section>
                            <h2 className="text-h2 mb-md font-serif italic">Shipping</h2>
                            <p className="text-body text-muted mb-md">
                                Each Vastra Studios garment is constructed to order to ensure zero waste. Please allow 14-21 business days for production and quality inspection before shipping.
                            </p>
                            <div style={{ padding: '24px', borderLeft: '2px solid var(--text-charcoal)', background: 'rgba(255,255,255,0.5)' }}>
                                <p className="text-small">
                                    <strong>Global Tracking:</strong> You will receive a courier tracking link as soon as your order leaves the studio.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-h2 mb-md font-serif italic">Returns & Exchanges</h2>
                            <p className="text-body text-muted mb-md">
                                We stand by the quality of our craft. If your item does not meet expectations, we offer returns for store credit or even exchanges within 14 days of receipt.
                            </p>
                            <ul className="text-body text-muted" style={{ listStyle: 'disc', paddingLeft: '20px' }}>
                                <li className="mb-sm">Items must be unworn and in original packaging.</li>
                                <li className="mb-sm">Tags must remain attached.</li>
                                <li>Custom orders are final sale.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-h2 mb-md font-serif italic">Garment Care</h2>
                            <p className="text-body text-muted">
                                To preserve the life of your Bone and Charcoal pieces, we recommend cold water washing on a gentle cycle and air drying only.
                                Avoid industrial cleaners or high heat.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
