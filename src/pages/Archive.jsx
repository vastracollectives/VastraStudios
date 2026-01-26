import React from 'react';
import ProductCard from '../components/ProductCard';

const Archive = () => {
    const pastSeasons = [
        {
            name: "Season 00: Proto",
            year: "2024",
            description: "The foundational study. Exploration of raw textures and silhouette.",
            curatorNote: "Proto was an exercise in pure construction. We stripped away the brand markers to focus entirely on the hand-feel of high-density loopback cotton and the structural integrity of double-needle stitching.",
            items: [
                { title: "Raw Hem Tee", specs: "280GSM Jersey", material: "Organic Cotton", placeholder: "Proto Tee 01" },
                { title: "Structure Pant", specs: "400GSM Twill", material: "Heavy Drill", placeholder: "Proto Pant 02" },
                { title: "Draft Mockneck", specs: "320GSM Rib", material: "Mercerized Cotton", placeholder: "Proto Mock 03" }
            ]
        },
        {
            name: "Season -01: Void",
            year: "2023",
            description: "A deep dive into monochromatic Charcoal. Embracing the darkness of the craft.",
            curatorNote: "The Void collection explored the nuances of black and grey. By removing color, we forced the eye to find detail in the drape, the texture of the weave, and the rhythm of the hardware.",
            items: [
                { title: "Ghost Hoodie", specs: "500GSM Loopback", material: "Japanese Terry", placeholder: "Void Hoodie" },
                { title: "Shadow Cap", specs: "Structured 6-Panel", material: "Nylon Core", placeholder: "Void Cap" },
                { title: "Night Tunic", specs: "Assymetrical Cut", material: "Heavy Poplin", placeholder: "Void Tunic" }
            ]
        }
    ];

    return (
        <section className="section-lg">
            <div className="container">
                <div className="mb-xl">
                    <span className="tag">Permanent Record</span>
                    <h1 className="text-hero mb-md">The Archive.</h1>
                    <p className="text-body text-muted" style={{ maxWidth: '600px' }}>
                        A collective memory of past explorations. These items are the foundation of the Vastra aesthetic, preserved as technical references for future silhouttes.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '160px' }}>
                    {pastSeasons.map((season, sIdx) => (
                        <div key={sIdx}>
                            <div className="grid grid-2 mb-xl" style={{ gap: '80px', alignItems: 'start' }}>
                                <div>
                                    <span className="text-label" style={{ color: 'var(--text-muted)' }}>Release Year: {season.year}</span>
                                    <h2 className="text-h1 font-serif italic mb-sm">{season.name}</h2>
                                    <p className="text-body text-muted">{season.description}</p>
                                </div>
                                <div style={{ borderLeft: '1px solid var(--border-color)', paddingLeft: '40px' }}>
                                    <span className="text-label block mb-xs">Curator’s Note</span>
                                    <p className="text-small italic font-serif" style={{ color: 'var(--text-charcoal)', opacity: 0.8, lineHeight: '1.6' }}>
                                        "{season.curatorNote}"
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-3" style={{ gap: '64px 32px' }}>
                                {season.items.map((item, iIdx) => (
                                    <div key={iIdx} className="archive-item-group">
                                        <ProductCard
                                            title={item.title}
                                            price="Out of Stock"
                                            imagePlaceholder={item.placeholder}
                                            archive={true}
                                        />
                                        <div style={{ marginTop: '20px', padding: '16px 0', borderTop: '1px solid var(--border-color)' }}>
                                            <div className="flex justify-between text-label" style={{ fontSize: '9px', opacity: 0.6 }}>
                                                <span>{item.specs}</span>
                                                <span className="text-right">{item.material}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Archive;
