import React from 'react';
import ProductCard from '../components/ProductCard';

const Archive = () => {
    const pastSeasons = [
        {
            name: "Season 00: Proto",
            description: "The foundational study. Exploration of raw textures and silhouette.",
            items: [
                { title: "Raw Hem Tee", price: "Archived", placeholder: "Proto Tee 01" },
                { title: "Structure Pant", price: "Archived", placeholder: "Proto Pant 02" }
            ]
        },
        {
            name: "Season -01: Void",
            description: "A deep dive into monochromatic Charcoal. Embracing the darkness of the craft.",
            items: [
                { title: "Ghost Hoodie", price: "Archived", placeholder: "Void Hoodie" },
                { title: "Shadow Cap", price: "Archived", placeholder: "Void Cap" },
                { title: "Night Tunic", price: "Archived", placeholder: "Void Tunic" }
            ]
        }
    ];

    return (
        <section className="section-lg">
            <div className="container">
                <div className="mb-xl">
                    <span className="tag">Permanent Record</span>
                    <h1 className="text-hero mb-md">The Archive</h1>
                    <p className="text-body text-muted" style={{ maxWidth: '600px' }}>
                        A collective memory of past explorations. These items are no longer available for purchase,
                        serving as the foundation of our evolving aesthetic.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
                    {pastSeasons.map((season, sIdx) => (
                        <div key={sIdx}>
                            <div className="mb-lg">
                                <h2 className="text-h2 mb-sm">{season.name}</h2>
                                <p className="text-body text-muted" style={{ maxWidth: '500px' }}>{season.description}</p>
                            </div>
                            <div className="grid grid-2" style={{ gap: '48px 32px' }}>
                                {season.items.map((item, iIdx) => (
                                    <ProductCard
                                        key={iIdx}
                                        title={item.title}
                                        price={item.price}
                                        imagePlaceholder={item.placeholder}
                                        archive={true}
                                    />
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
