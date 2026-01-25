import React from 'react';

const Lookbook = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="mb-xl">
                    <h1 className="text-hero mb-md">Volume 01:<br />Essential Silence</h1>
                    <p className="text-body text-muted">An exploration of neutral tones and organic textures.</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
                    <div style={{ height: '70vh', background: 'var(--white)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="text-label">Cover Image - Essential Silence</span>
                    </div>

                    <div className="grid grid-2" style={{ gap: '32px' }}>
                        <div style={{ height: '500px', background: 'var(--white)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="text-label">Detail Study 01</span>
                        </div>
                        <div style={{ height: '500px', background: 'var(--white)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="text-label">Detail Study 02</span>
                        </div>
                    </div>

                    <div style={{ height: '70vh', background: 'var(--white)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="text-label">Lifestyle Image 01</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Lookbook;
