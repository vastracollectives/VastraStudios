import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-ticker">
                <div className="ticker-track">
                    <span>VASTRA STUDIOS</span>
                    <span>BUILT FOR THE LONG HAUL</span>
                    <span>EDISON NJ</span>
                    <span>HYDERABAD IN</span>
                    <span>ESTABLISHED IN THE VOID</span>
                    <span>VASTRA STUDIOS</span>
                    <span>BUILT FOR THE LONG HAUL</span>
                    <span>EDISON NJ</span>
                    <span>HYDERABAD IN</span>
                    <span>ESTABLISHED IN THE VOID</span>
                </div>
            </div>
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <h3 className="footer-brand-name font-serif italic" style={{ fontSize: '1.5rem' }}>Vastra Studios</h3>
                        <p className="footer-brand-text">
                            A multidisciplinary apparel house focusing on the intersection of culture, craft, and conscience.
                            Part of the Vastra Group.
                        </p>
                        <span className="footer-copyright">
                            © {currentYear} Vastra Studios.
                        </span>
                    </div>

                    <div className="footer-links">
                        <div className="footer-col">
                            <span className="footer-col-title">Browse</span>
                            <div className="footer-col-links">
                                <Link to="/collections" className="footer-col-link">The Drop</Link>
                                <Link to="/archive" className="footer-col-link">The Archive</Link>
                                <Link to="/service" className="footer-col-link">Care Guide</Link>
                            </div>
                        </div>

                        <div className="footer-col">
                            <span className="footer-col-title">Collective</span>
                            <div className="footer-col-links">
                                <Link to="/library" className="footer-col-link">Mission</Link>
                                <Link to="/library" className="footer-col-link">Origin</Link>
                                <Link to="/contact" className="footer-col-link">Connect</Link>
                            </div>
                        </div>

                        <div className="footer-col">
                            <span className="footer-col-title">Terms</span>
                            <div className="footer-col-links">
                                <Link to="/legal" className="footer-col-link">Privacy</Link>
                                <Link to="/legal" className="footer-col-link">Terms</Link>
                                <Link to="/service" className="footer-col-link">Returns</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
