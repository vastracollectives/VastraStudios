import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount, setIsCartOpen } = useCart();

    return (
        <>
            <nav className="nav">
                <div className="nav-inner">
                    <Link to="/" className="nav-brand">
                        Vastra Studios
                    </Link>

                    <div className="nav-links">
                        <Link to="/collections" className="nav-link">The Drop</Link>
                        <Link to="/archive" className="nav-link">Archive</Link>
                        <Link to="/library" className="nav-link">The Library</Link>

                        <button
                            className="nav-cart"
                            onClick={() => setIsCartOpen(true)}
                            aria-label="Open cart"
                        >
                            <ShoppingBag size={20} strokeWidth={1.5} />
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </button>

                        <Link to="/contact" className="btn btn-primary">
                            Member Access
                        </Link>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <button
                            className="nav-cart"
                            style={{ display: 'flex', md: { display: 'none' } }}
                            onClick={() => setIsCartOpen(true)}
                        >
                            <ShoppingBag size={20} />
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </button>

                        <button
                            className="nav-toggle"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
                <Link to="/collections" onClick={() => setIsOpen(false)} className="nav-mobile-link">The Drop</Link>
                <Link to="/archive" onClick={() => setIsOpen(false)} className="nav-mobile-link">Archive</Link>
                <Link to="/library" onClick={() => setIsOpen(false)} className="nav-mobile-link">The Library</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary mt-md">
                    Member Access
                </Link>
            </div>
        </>
    );
};

export default Navigation;
