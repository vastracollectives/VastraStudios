import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, MapPin } from 'lucide-react';
import { products } from '../data';
import { useCart } from '../context/CartContext';
import TechnicalAccordion from '../components/TechnicalAccordion';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();

    const product = products.find(p => p.id === id);

    if (!product) {
        return (
            <div className="container section-lg text-center">
                <h2 className="text-h2 mb-md">Product Not Found</h2>
                <Link to="/collections" className="btn btn-outline">Back to Collections</Link>
            </div>
        );
    }

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
                    {/* Image Column */}
                    <div className="pdp-image-scroll">
                        <div className="pdp-image-container">
                            <img src={product.imageSrc} alt={product.title} />
                        </div>
                        {/* Secondary view placeholder */}
                        <div className="pdp-image-container" style={{ filter: 'grayscale(1)', opacity: 0.5 }}>
                            <img src={product.imageSrc} alt={`${product.title} detail`} />
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
                        <div className="distribution-notice" style={{ marginBottom: '32px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <MapPin size={14} style={{ color: 'var(--text-muted)' }} />
                                <span className="text-label" style={{ fontSize: '0.7rem' }}>Regional Distribution</span>
                            </div>
                            <p className="text-small italic font-serif" style={{ color: 'var(--text-charcoal)', opacity: 0.8 }}>
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
