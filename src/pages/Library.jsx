import React from 'react';
import editorial1 from '../images/editorial_1.png';
import editorial2 from '../images/editorial_2.png';
import vastraOrigin from '../images/vastra_origin.png';
import vastraProcess from '../images/vastra_process.png';

const Library = () => {
    return (
        <section className="section-lg">
            <div className="container">
                <header className="mb-xl" style={{ paddingBottom: '64px' }}>
                    <span className="tag">Volume 01: Foundations</span>
                    <h1 className="text-hero mb-lg font-serif italic" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', letterSpacing: '-0.03em', lineHeight: '0.9' }}>
                        Mission & Philosophy.
                    </h1>
                </header>

                <div className="flex flex-col" style={{ gap: '160px' }}>
                    {/* Chapter 01: Origin */}
                    <div className="grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
                        <div>
                            <div className="flex items-center gap-md mb-md">
                                <span className="text-label" style={{ opacity: 0.4 }}>01 / Origin</span>
                                <div style={{ height: '1px', flex: 1, background: 'var(--border-color)' }}></div>
                            </div>
                            <h2 className="text-h1 mb-lg font-serif italic">Silence in the noise.</h2>
                            <p className="text-body text-muted mb-md" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
                                Vastra Studios was born from a desire to bridge the gap between digital precision and physical craft.
                                We sought to apply the same principles of systems design to the clothing we wear every day—focusing on the "long haul" rather than the "next trend."
                            </p>
                            <p className="text-body text-muted">
                                Our journey began in a cold-concrete studio with three industrial sewing machines and a singular goal:
                                to strip away the noise of fast fashion and return to the "architectural essential." We view garments not as products, but as structures for living.
                            </p>
                        </div>
                        <div className="pdp-image-container" style={{ aspectRatio: '3/4', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
                            <img src={vastraOrigin} alt="The Studio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ padding: '20px', background: 'var(--white)' }}>
                                <span className="text-label block" style={{ fontSize: '9px', opacity: 0.5 }}>FIG. 01: ARCHITECTURAL STUDIO STUDY</span>
                            </div>
                        </div>
                    </div>

                    {/* Chapter 02: Process */}
                    <div className="grid grid-2 grid-reverse" style={{ gap: '80px', alignItems: 'center' }}>
                        <div>
                            <div className="flex items-center gap-md mb-md">
                                <span className="text-label" style={{ opacity: 0.4 }}>02 / Process</span>
                                <div style={{ height: '1px', flex: 1, background: 'var(--border-color)' }}></div>
                            </div>
                            <h2 className="text-h1 mb-lg font-serif italic">Architectural Integrity.</h2>
                            <p className="text-body text-muted mb-md">
                                Every garment is a structural study. We focus on weight, drape, and the architectural volume of the body.
                                Our materials are sourced from heritage mills in Japan and India, chosen for their ability to gather character over decades, not seasons.
                            </p>
                            <p className="text-body text-muted">
                                We operate on a "Drop & Archive" model. Once a collection is sold out, it is archived as a technical reference,
                                creating a permanent record of our evolving aesthetic.
                            </p>
                        </div>
                        <div className="pdp-image-container" style={{ aspectRatio: '3/4', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
                            <img src={vastraProcess} alt="Textile study" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ padding: '20px', background: 'var(--white)' }}>
                                <span className="text-label block" style={{ fontSize: '9px', opacity: 0.5 }}>FIG. 02: STRUCTURAL DRAPE STUDY</span>
                            </div>
                        </div>
                    </div>

                    {/* Chapter 03: Collective */}
                    <div className="grid grid-2" style={{ gap: '80px', alignItems: 'center' }}>
                        <div>
                            <div className="flex items-center gap-md mb-md">
                                <span className="text-label" style={{ opacity: 0.4 }}>03 / The Collective</span>
                                <div style={{ height: '1px', flex: 1, background: 'var(--border-color)' }}></div>
                            </div>
                            <h2 className="text-h1 mb-lg font-serif italic">Beyond Apparel.</h2>
                            <p className="text-body text-muted">
                                Vastra Studios is the physical heartbeat of the VASTRA group—a multidisciplinary collective of creators.
                                We share resources, aesthetics, and philosophies across digital, physical, and visual mediums,
                                ensuring that every piece of 'Monolith' carries the weight of the entire collective.
                            </p>
                        </div>
                        <div className="pdp-image-container" style={{ aspectRatio: '3/4', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
                            <img src={editorial1} alt="Collective study" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            <div style={{ padding: '20px', background: 'var(--white)' }}>
                                <span className="text-label block" style={{ fontSize: '9px', opacity: 0.5 }}>FIG. 03: MULTIDISCIPLINARY OUTPUT STUDY</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Library;
