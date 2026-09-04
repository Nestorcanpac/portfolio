import React, { useEffect, useRef } from 'react';

const DotGrid = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let mouseX = -1000;
        let mouseY = -1000;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        // Configuration
        const spacing = 60; // Space between dots (increased for less clutter)
        const baseRadius = 1.5; // Normal dot size
        const maxRadius = 4; // Max dot size on hover
        const hoverRadius = 100; // Distance of effect

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Set color to white - mix-blend-mode: difference will handle the contrast
            ctx.fillStyle = '#ffffff';

            for (let x = 0; x < canvas.width; x += spacing) {
                for (let y = 0; y < canvas.height; y += spacing) {
                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    let radius = baseRadius;
                    let offsetX = 0;
                    let offsetY = 0;

                    if (distance < hoverRadius) {
                        // Scale radius based on proximity
                        // (1 - distance/hoverRadius) gives 1 at center, 0 at edge
                        const scale = 1 + (maxRadius / baseRadius - 1) * (1 - distance / hoverRadius);
                        radius = baseRadius * scale;

                        // Repulsion effect: move dots away from mouse
                        // Force decreases with distance
                        const force = (hoverRadius - distance) / hoverRadius;
                        const repulsionStrength = 20; // Max pixels to move
                        const angle = Math.atan2(dy, dx);

                        offsetX = Math.cos(angle) * force * repulsionStrength;
                        offsetY = Math.sin(angle) * force * repulsionStrength;
                    }

                    ctx.beginPath();
                    ctx.arc(x + offsetX, y + offsetY, radius, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        handleResize();
        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 1, // On top of background, behind content
                mixBlendMode: 'difference' // Inverts color based on background
            }}
        />
    );
};

export default DotGrid;
