import React from 'react';
import ProductCard from '../components/ProductCard';
import editorial1 from '../images/editorial_1.png';
import editorial2 from '../images/editorial_2.png';
import longsleeve from '../images/apparel_longsleeve.png';

const Collections = () => {
    const activeDrop = [
        { title: "Heavyweight Hoodie", price: "$95", imageSrc: editorial1, placeholder: "Hoodie", status: "Active" },
        { title: "Structure Pant", price: "$140", imageSrc: editorial2, placeholder: "Pant", status: "Limited" },
        { title: "Core Longsleeve", price: "$65", imageSrc: longsleeve, placeholder: "Longsleeve", status: "Active" }
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
                            imageSrc={product.imageSrc}
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
