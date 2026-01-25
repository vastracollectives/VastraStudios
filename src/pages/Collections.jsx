import React from 'react';
import ProductCard from '../components/ProductCard';

const Collections = () => {
    const activeDrop = [
        { title: "Heavyweight Hoodie", price: "$95", placeholder: "Bone Hoodie", status: "Active" },
        { title: "Heavyweight Hoodie", price: "$95", placeholder: "Charcoal Hoodie", status: "Active" },
        { title: "Structure Pant", price: "$140", placeholder: "Bone Pant", status: "Limited" },
        { title: "Structure Pant", price: "$140", placeholder: "Charcoal Pant", status: "Sold Out" },
        { title: "Core Longsleeve", price: "$65", placeholder: "Bone LS", status: "Active" },
        { title: "Core Longsleeve", price: "$65", placeholder: "Charcoal LS", status: "Sold Out" }
    ];

    return (
        <section className="section-lg">
            <div className="container">
                <div className="mb-xl">
                    <span className="tag">Current Drop</span>
                    <h1 className="text-hero mb-md">Season 01:<br />Monolith</h1>
                    <p className="text-body text-muted" style={{ maxWidth: '600px' }}>
                        A study in weight and structure. Our primary collection focuses on architectural silhouettes
                        and premium, durable textiles.
                    </p>
                </div>

                <div className="grid grid-2" style={{ gap: '64px 32px' }}>
                    {activeDrop.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            price={product.price}
                            imageSrc={null} // Placeholders for now
                            imagePlaceholder={product.placeholder}
                            status={product.status}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collections;
