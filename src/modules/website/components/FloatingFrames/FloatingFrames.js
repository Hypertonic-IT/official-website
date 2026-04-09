import React, { useEffect, useState } from 'react';
import './FloatingFrames.css';

const FloatingFrames = () => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        const newElements = Array.from({ length: 15 }).map((_, i) => {
            const types = ['code', 'frame', 'accent', 'bracket', 'binary'];
            const type = types[i % 5];
            return {
                id: i,
                type,
                top: Math.random() * 90 + 5,
                left: Math.random() * 90 + 5,
                delay: Math.random() * -25,
                duration: 20 + Math.random() * 15,
                depth: Math.random() * -150 - 50,
                rotate: Math.random() * 360,
                opacity: type === 'accent' ? 0.3 : 0.15,
            };
        });
        setElements(newElements);
    }, []);

    return (
        <div className="floating-tech-container">
            <div className="tech-grid-overlay"></div>
            {elements.map((el) => (
                <div
                    key={el.id}
                    className={`tech-el ${el.type}`}
                    style={{
                        top: `${el.top}vh`,
                        left: `${el.left}vw`,
                        opacity: el.opacity,
                        transform: `translateZ(${el.depth}px) rotate(${el.type === 'accent' ? 0 : el.rotate}deg)`,
                        animation: `floatAnim ${el.duration}s ease-in-out infinite ${el.delay}s`,
                    }}
                >
                    {el.type === 'code' && (
                        <div className="code-snippet">
                            <div className="code-header"><span></span><span></span><span></span></div>
                            <div className="code-line"></div>
                            <div className="code-line indent"></div>
                            <div className="code-line indent medium"></div>
                            <div className="code-line short"></div>
                        </div>
                    )}
                    {el.type === 'frame' && (
                        <div className="tech-frame-inner">
                            <div className="corner tl"></div>
                            <div className="corner br"></div>
                            <div className="frame-cross"></div>
                        </div>
                    )}
                    {el.type === 'bracket' && (
                        <div className="tech-bracket">{"{ }"}</div>
                    )}
                    {el.type === 'binary' && (
                        <div className="tech-binary">10101010</div>
                    )}
                    {el.type === 'accent' && (
                        <div className="tech-accent-inner">
                            <span className="accent-dot"></span>
                        </div>
                    )}
                </div>
            ))}
            <div className="vignette-overlay"></div>
        </div>
    );
};

export default FloatingFrames;
