import React from 'react';

const ProductCard = ({ title, price, imageSrc, imagePlaceholder, className }) => {
    return (
        <div className={`project-card group ${className || ''}`}>
            <div className="project-card-image">
                <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    {imageSrc ? (
                        <img
                            src={imageSrc}
                            alt={title}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    ) : (
                        <div className="portfolio-placeholder">
                            <span className="portfolio-placeholder-title">{imagePlaceholder || title}</span>
                            <span className="portfolio-placeholder-status">Summer 2024</span>
                        </div>
                    )}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>

            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-category">{price}</p>
            </div>
        </div>
    );
};

export default ProductCard;
