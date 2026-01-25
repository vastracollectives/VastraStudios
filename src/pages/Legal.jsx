import React from 'react';

const Legal = () => {
    return (
        <section className="section">
            <div className="container">
                <div style={{ maxWidth: '800px' }}>
                    <h1 className="text-h1 mb-lg">Legal</h1>

                    <div style={{ marginBottom: '48px' }}>
                        <h2 className="text-h3 mb-md">Privacy Policy</h2>
                        <p className="text-body text-muted">
                            Vastra Studios respects your privacy. We collect minimal data for shipping and customer support.
                            Your information is never sold to third parties.
                        </p>
                    </div>

                    <div style={{ marginBottom: '48px' }}>
                        <h2 className="text-h3 mb-md">Terms of Service</h2>
                        <p className="text-body text-muted">
                            All apparel is sold as-is. Returns are accepted within 14 days of receipt for store credit only.
                            Limit 2 items per customer for limited releases.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-h3 mb-md">Shipping</h2>
                        <p className="text-body text-muted">
                            Each garment is made to order. Please allow 2-3 weeks for construction and shipping.
                            Global shipping available. Customs and duties are the responsibility of the customer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Legal;
