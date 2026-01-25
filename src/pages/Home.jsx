import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Feather, Award } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-label">Vastra Studios</span>
                    <h1 className="text-hero hero-title">
                        Culture, craft,<br />and conscience.
                    </h1>
                    <p className="hero-subtitle">
                        Premium apparel for the modern individual. Designed with intention, made with care.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/collections" className="btn btn-primary">
                            Explore Collections
                        </Link>
                        <Link to="/lookbook" className="btn btn-outline">
                            View Lookbook
                        </Link>
                    </div>
                </div>
                <div className="hero-bg"></div>
            </section>

            {/* Values Section */}
            <section className="value-section">
                <div className="container">
                    <div className="grid grid-3">
                        <div className="value-card">
                            <Scissors size={28} strokeWidth={1.5} className="value-icon" />
                            <h3 className="value-title">Bespoke Quality</h3>
                            <p className="value-text">
                                Every piece is constructed with precision and high-grade materials that last.
                            </p>
                        </div>
                        <div className="value-card">
                            <Feather size={28} strokeWidth={1.5} className="value-icon" />
                            <h3 className="value-title">Ethical Sourcing</h3>
                            <p className="value-text">
                                We partner with manufacturers who value human dignity and environmental stewardship.
                            </p>
                        </div>
                        <div className="value-card">
                            <Award size={28} strokeWidth={1.5} className="value-icon" />
                            <h3 className="value-title">Timeless Design</h3>
                            <p className="value-text">
                                We don't follow trends. We build icons that remain relevant for years to come.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Collection Section */}
            <section className="section">
                <div className="container">
                    <div className="featured-header">
                        <h2 className="text-h1">Season 01</h2>
                        <Link to="/collections" className="featured-link">
                            Shop All <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-2">
                        <ProductCard
                            title="The Core Tee"
                            price="$45.00"
                            imagePlaceholder="Core Tee"
                        />
                        <ProductCard
                            title="Linen Overshirt"
                            price="$110.00"
                            imagePlaceholder="Overshirt"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="cta-banner">
                <div className="container">
                    <h2 className="text-h1 cta-title">Join the collective.</h2>
                    <p className="cta-text">
                        Sign up for early access to new drops and limited editions.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                        Subscribe
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
