import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data';
import { useCart } from '../context/CartContext';
import TechnicalAccordion from '../components/TechnicalAccordion';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [activeIndex, setActiveIndex] = useState(0);

    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="container section-lg text-center">
                <h2 className="text-h2 mb-md">Product Not Found</h2>
                <Link to="/collections" className="btn btn-outline">Back to Collections</Link>
            </div>
        );
    }

    const images = [product.imageSrc, product.imageSecondary].filter(Boolean);

    const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="section">
            <div className="container">
                {/* Breadcrumbs */}
                <nav className="breadcrumbs">
                    <Link to="/" className="breadcrumb-link">Vastra</Link>
                    <span className="breadcrumb-separator">/</span>
                    <Link to="/collections" className="breadcrumb-link">Collections</Link>
                    <span className="breadcrumb-separator">/</span>
                    <span className="breadcrumb-current">{product.title}</span>
                </nav>

                <div className="pdp-grid">
                    {/* Premium Gallery Column */}
                    <div className="pdp-gallery-frame">
                        <div className="pdp-gallery-main">
                            {images.map((img, idx) => (
                                <div
                                    key={idx}
                                    className={`pdp-gallery-image ${idx === activeIndex ? 'active' : ''}`}
                                >
                                    <img src={img} alt={`${product.title} view ${idx + 1}`} />
                                </div>
                            ))}

                            {images.length > 1 && (
                                <>
                                    <div className="pdp-gallery-nav">
                                        <button onClick={prevImage} className="gallery-nav-btn" aria-label="Previous image">
                                            <ChevronLeft size={20} strokeWidth={1} />
                                        </button>
                                        <button onClick={nextImage} className="gallery-nav-btn" aria-label="Next image">
                                            <ChevronRight size={20} strokeWidth={1} />
                                        </button>
                                    </div>
                                    <div className="pdp-gallery-counter">
                                        <span>{String(activeIndex + 1).padStart(2, '0')}</span>
                                        <span className="separator">/</span>
                                        <span>{String(images.length).padStart(2, '0')}</span>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Info Column */}
                    <div className="pdp-info">
                        <span className={`tag ${product.status === 'Sold Out' ? 'tag-sold-out' : 'tag-active'}`}>
                            {product.status}
                        </span>
                        <h1 className="pdp-title font-serif italic">{product.title}</h1>
                        <p className="pdp-price">{product.price}</p>

                        <p className="pdp-description">
                            {product.description}
                        </p>

                        <TechnicalAccordion
                            specs={product.technicalSpecs}
                            care={product.careInstructions}
                        />

                        {/* Distribution Notice */}
                        <div className="distribution-notice">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                <MapPin size={14} style={{ color: 'var(--text-muted)' }} />
                                <span className="text-label" style={{ fontSize: '0.7rem' }}>Regional Distribution</span>
                            </div>
                            <p className="text-small italic font-serif" style={{ color: 'var(--text-charcoal)', opacity: 0.8, lineHeight: '1.6' }}>
                                Currently in "Friends & Family" phase. Orders are available for local collection in <strong>Edison, NJ</strong> and <strong>Hyderabad, India</strong> only.
                            </p>
                        </div>

                        <button
                            className="btn btn-primary w-full"
                            style={{ width: '100%', gap: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            onClick={() => addToCart(product)}
                            disabled={product.status === 'Sold Out'}
                        >
                            <ShoppingBag size={18} />
                            {product.status === 'Sold Out' ? 'Sold Out' : 'Add to Bag'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
