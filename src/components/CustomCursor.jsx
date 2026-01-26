import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [cursorType, setCursorType] = useState('default');

    // Smooth motion values
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring configuration for lagging/smooth effect
    const springConfig = { damping: 25, stiffness: 250 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = target.closest('button, a, input, select, .project-card, .nav-cart');
            const isImage = target.closest('img, .pdp-image-container');

            if (isClickable) {
                setCursorType('pointer');
            } else if (isImage) {
                setCursorType('image');
            } else {
                setCursorType('default');
            }
        };

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    // Size and background logic
    const variants = {
        default: {
            width: 8,
            height: 8,
            backgroundColor: 'var(--text-charcoal)',
            mixBlendMode: 'normal'
        },
        pointer: {
            width: 48,
            height: 48,
            backgroundColor: 'transparent',
            border: '1px solid var(--text-charcoal)',
            mixBlendMode: 'normal'
        },
        image: {
            width: 80,
            height: 80,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            mixBlendMode: 'difference',
            border: 'none'
        }
    };

    return (
        <motion.div
            className="custom-cursor"
            style={{
                translateX: cursorX,
                translateY: cursorY,
                left: -4, // Half of default width to center
                top: -4,  // Half of default height to center
                position: 'fixed',
                pointerEvents: 'none',
                zIndex: 9999,
                borderRadius: '50%',
                ...variants[cursorType]
            }}
            transition={{
                width: { type: 'spring', ...springConfig },
                height: { type: 'spring', ...springConfig },
                backgroundColor: { duration: 0.2 }
            }}
        />
    );
};

export default CustomCursor;
