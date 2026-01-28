import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data';
import editorial1 from '../images/editorial_1.png';
import editorial3 from '../images/editorial_3.png';

const Home = () => {
    return (
        <>
            {/* Editorial Hero */}
            <section className="hero" style={{ paddingTop: '160px' }}>
                <div className="hero-content">
                    <span className="tag">Season 01: Basics</span>
                    <h1 className="text-hero hero-title font-serif italic" style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', lineHeight: '0.9', marginBottom: '48px' }}>
                        Heavyweight<br />Silence.
                    </h1>
                    <p className="hero-subtitle" style={{ maxWidth: '500px' }}>
                        Architectural apparel designed to withstand the noise. Our primary drop is now available for member early access.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/collections" className="btn btn-primary">
                            Enter the Drop
                        </Link>
                        <Link to="/library" className="btn btn-outline">
                            The Philosophy
                        </Link>
                    </div>
                </div>
                <div className="hero-bg" style={{
                    backgroundImage: `url(${editorial3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: '0.15',
                    filter: 'grayscale(1)',
                    zIndex: '0'
                }}></div>
            </section>

            {/* Split Editorial Section */}
            <section className="section-lg" style={{ background: 'var(--white)' }}>
                <div className="container">
                    <div className="editorial-grid" style={{ alignItems: 'center' }}>
                        <div className="editorial-col-6">
                            <div style={{ height: '600px', background: 'var(--bg-bone)', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                                <img src={editorial1} alt="Season Campaign" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div className="editorial-col-6" style={{ paddingLeft: '40px' }}>
                            <span className="tag">Process</span>
                            <h2 className="text-h1 mb-md">Built for the long haul.</h2>
                            <p className="text-body text-muted mb-lg">
                                We don't believe in disposability. Vastra Studios garments are constructed using high-GSM Japanese cotton
                                and reinforced stitching. They are designed to age with the wearer, gathering character rather than wear.
                            </p>
                            <Link to="/library" className="featured-link">
                                Read our Mission <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Current Spotlight */}
            <section className="section-lg">
                <div className="container">
                    <div className="featured-header">
                        <div>
                            <span className="tag">Limited Edition</span>
                            <h2 className="text-h1">Essential Edits</h2>
                        </div>
                        <Link to="/collections" className="featured-link">
                            View Season 01 <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-3" style={{ gap: '32px' }}>
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

            {/* Archive Tease */}
            <section className="section-lg" style={{ borderTop: '1px solid var(--border-color)', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <h2 className="text-h2 mb-md font-serif italic">From the Depths.</h2>
                        <p className="text-body text-muted mb-lg">
                            Explore the evolution of our silhouettes. View the pieces that defined our early experiments.
                        </p>
                        <Link to="/archive" className="btn btn-outline">
                            Browse the Archive
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
