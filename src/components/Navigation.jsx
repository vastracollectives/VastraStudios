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
                        <Link to="/collections" className="nav-link">The Drop</Link>
                        <Link to="/archive" className="nav-link">Archive</Link>
                        <Link to="/library" className="nav-link">The Library</Link>
                        <Link to="/contact" className="btn btn-primary">
                            Member Access
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
                <Link to="/collections" onClick={() => setIsOpen(false)} className="nav-mobile-link">The Drop</Link>
                <Link to="/archive" onClick={() => setIsOpen(false)} className="nav-mobile-link">Archive</Link>
                <Link to="/library" onClick={() => setIsOpen(false)} className="nav-mobile-link">The Library</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="nav-mobile-link">Connect</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary mt-md">
                    Member Access
                </Link>
            </div>
        </>
    );
};

export default Navigation;
