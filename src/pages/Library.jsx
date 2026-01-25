import React from 'react';

const Library = () => {
    return (
        <section className="section-lg">
            <div className="container">
                <div className="editorial-grid">
                    <div className="editorial-col-8">
                        <span className="tag">The Library</span>
                        <h1 className="text-hero mb-lg">Mission & Origin</h1>

                        <div style={{ marginBottom: '80px' }}>
                            <h2 className="text-h2 mb-md font-serif italic">Our Origin</h2>
                            <p className="text-body text-muted mb-md">
                                Vastra Studios was born from a desire to bridge the gap between digital precision and physical craft.
                                Founded as a sister project to Vastra Labs, we sought to apply the same principles of systems design
                                to the clothing we wear every day.
                            </p>
                            <p className="text-body text-muted">
                                We began in a small studio with three industrial sewing machines and a singular goal:
                                to strip away the noise of fast fashion and return to the "essential."
                            </p>
                        </div>

                        <div style={{ marginBottom: '80px' }}>
                            <h2 className="text-h2 mb-md font-serif italic">The Mission</h2>
                            <p className="text-body text-muted mb-md">
                                Every garment is a study. Every drop is a chapter. Our mission is to provide a curated
                                modular wardrobe for the modern individual—those who value silence, quality, and longevity.
                            </p>
                            <p className="text-body text-muted">
                                We operate on a "Drop & Archive" model. Once a collection is sold out, it enters
                                the Archive, making room for the next exploration of color and form.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-h2 mb-md font-serif italic">The Collective</h2>
                            <p className="text-body text-muted">
                                Vastra Studios is part of the VASTRA group—a multidisciplinary collective of creators.
                                We share resources, aesthetics, and philosophies across digital, physical, and visual mediums.
                            </p>
                        </div>
                    </div>

                    <div className="editorial-col-4" style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '100px' }}>
                        <div style={{ aspectHeight: '4/5', background: 'var(--white)', border: '1px solid var(--border-color)', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="text-label">Process Image 01</span>
                        </div>
                        <div style={{ aspectHeight: '4/5', background: 'var(--white)', border: '1px solid var(--border-color)', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <span className="text-label">Detail Study 02</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Library;
