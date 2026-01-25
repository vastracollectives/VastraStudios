import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <h3 className="footer-brand-name">Vastra Studios</h3>
                        <p className="footer-brand-text">
                            Premium apparel designed for the modern individual. Culture, craft, and conscience.
                        </p>
                        <span className="footer-copyright">
                            © {currentYear} Vastra Studios. All rights reserved.
                        </span>
                    </div>

                    <div className="footer-links">
                        <div className="footer-col">
                            <span className="footer-col-title">Shop</span>
                            <div className="footer-col-links">
                                <Link to="/collections" className="footer-col-link">New Arrivals</Link>
                                <Link to="/collections" className="footer-col-link">Essentials</Link>
                                <Link to="/lookbook" className="footer-col-link">Lookbook</Link>
                            </div>
                        </div>

                        <div className="footer-col">
                            <span className="footer-col-title">Company</span>
                            <div className="footer-col-links">
                                <Link to="/about" className="footer-col-link">Story</Link>
                                <Link to="/contact" className="footer-col-link">Contact</Link>
                                <Link to="/legal" className="footer-col-link">Privacy</Link>
                            </div>
                        </div>

                        <div className="footer-col">
                            <span className="footer-col-title">Social</span>
                            <div className="footer-col-links">
                                <a href="https://instagram.com/Vastra.Studios" target="_blank" rel="noopener noreferrer" className="footer-col-link">Instagram</a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-col-link">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
