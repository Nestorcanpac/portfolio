import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const Typewriter = ({ text, speed = 50, delay = 0 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
        if (!isInView) return;

        const initialDelayTimeout = setTimeout(() => {
            if (currentIndex < text.length) {
                const typingTimeout = setTimeout(() => {
                    setCurrentIndex(prev => prev + 1);
                }, speed);
                return () => clearTimeout(typingTimeout);
            } else {
                setIsComplete(true);
            }
        }, currentIndex === 0 ? delay : 0);

        return () => clearTimeout(initialDelayTimeout);
    }, [currentIndex, isInView, text, speed, delay]);

    return (
        <span ref={ref}>
            {text.slice(0, currentIndex)}
            {!isComplete && <span className="cursor">|</span>}
            <span style={{ opacity: 0 }}>{text.slice(currentIndex)}</span>
            <style jsx>{`
        .cursor {
          display: inline-block;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          color: #FF0055;
          position: absolute;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
        </span>
    );
};

export default Typewriter;
