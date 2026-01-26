import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const TechnicalAccordion = ({ specs, care }) => {
    const [openSection, setOpenSection] = useState('specs');

    const toggle = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="technical-accordion">
            {/* Specifications */}
            <div className="accordion-item">
                <button
                    className="accordion-trigger"
                    onClick={() => toggle('specs')}
                >
                    <span className="text-label">Technical Specifications</span>
                    {openSection === 'specs' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openSection === 'specs' && (
                    <div className="accordion-content">
                        {specs.map((spec, idx) => (
                            <div key={idx} className="pdp-detail-item">
                                <span>{spec.label}</span>
                                <span>{spec.value}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Care Instructions */}
            <div className="accordion-item">
                <button
                    className="accordion-trigger"
                    onClick={() => toggle('care')}
                >
                    <span className="text-label">Garment Care</span>
                    {openSection === 'care' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openSection === 'care' && (
                    <div className="accordion-content">
                        <p className="text-small text-muted" style={{ lineHeight: '1.6' }}>
                            {care}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TechnicalAccordion;
