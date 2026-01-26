import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';

const Collections = () => {
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

                <div className="grid grid-2" style={{ gap: '80px 48px' }}>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            imageSrc={product.imageSrc}
                            imagePlaceholder={product.title}
                            status={product.status}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Collections;
