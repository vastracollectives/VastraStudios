import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="nav">
                <div className="nav-inner">
                    <Link to="/" className="nav-brand">
                        Vastra Studios
                    </Link>

                    <div className="nav-links">
                        <Link to="/collections" className="nav-link">Collections</Link>
                        <Link to="/lookbook" className="nav-link">Lookbook</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/contact" className="btn btn-primary">
                            Pre-Order
                        </Link>
                    </div>

                    <button
                        className="nav-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
                <Link to="/collections" onClick={() => setIsOpen(false)} className="nav-mobile-link">Collections</Link>
                <Link to="/lookbook" onClick={() => setIsOpen(false)} className="nav-mobile-link">Lookbook</Link>
                <Link to="/about" onClick={() => setIsOpen(false)} className="nav-mobile-link">About</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary mt-md">
                    Pre-Order
                </Link>
            </div>
        </>
    );
};

export default Navigation;
