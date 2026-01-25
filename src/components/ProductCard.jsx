import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, price, imageSrc, imagePlaceholder, status, archive, className }) => {
    const cardContent = (
        <div className={`project-card group ${archive ? 'archive-card' : ''} ${className || ''}`}>
            <div className="project-card-image">
                {/* Status Tag */}
                {status && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className={`tag ${status === 'Sold Out' ? 'tag-sold-out' : 'tag-active'}`}>
                            {status}
                        </span>
                    </div>
                )}

                {/* Image Container */}
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
                        </div>
                    )}
                </div>

                {/* Sold Out Overlay */}
                {status === 'Sold Out' && (
                    <div className="status-overlay">
                        <span className="status-label">Sold Out</span>
                    </div>
                )}

                {/* Archive Overlay */}
                {archive && !status && (
                    <div className="status-overlay">
                        <span className="status-label">Archived</span>
                    </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
            </div>

            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <p className="project-card-category">{price}</p>
            </div>
        </div>
    );

    if (archive || status === 'Sold Out') {
        return cardContent;
    }

    return (
        <Link to={`/product/${id}`}>
            {cardContent}
        </Link>
    );
};

export default ProductCard;
