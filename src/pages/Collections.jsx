import React from 'react';
import ProductCard from '../components/ProductCard';

const Collections = () => {
    const products = [
        { title: "Core Tee - Bone", price: "$45", placeholder: "Bone Tee" },
        { title: "Core Tee - Charcoal", price: "$45", placeholder: "Charcoal Tee" },
        { title: "Heavyweight Hoodie", price: "$95", placeholder: "Hoodie" },
        { title: "Tailored Trousers", price: "$140", placeholder: "Trousers" },
        { title: "Canvas Tote", price: "$35", placeholder: "Tote" },
        { title: "Wool Beanie", price: "$30", placeholder: "Beanie" }
    ];

    return (
        <section className="section">
            <div className="container">
                <div className="mb-xl">
                    <h1 className="text-hero mb-md">All Goods</h1>
                    <p className="text-body text-muted" style={{ maxWidth: '600px' }}>
                        Curated essentials for a modular wardrobe. Built for durability and ease.
                    </p>
                </div>

                <div className="grid grid-2" style={{ gap: '64px 32px' }}>
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            title={product.title}
                            price={product.price}
                            imagePlaceholder={product.placeholder}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collections;
