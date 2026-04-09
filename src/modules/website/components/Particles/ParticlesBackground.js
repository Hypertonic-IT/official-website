import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = ({ id = "tsparticles", color = "#ffffff", zIndex = -1, position = "fixed" }) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        // console.log(container);
    };

    const options = {
        background: { color: { value: "transparent" } },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "grab" },
                resize: true,
            },
            modes: {
                push: { quantity: 4 },
                grab: { distance: 150, links: { opacity: 0.8 } },
            },
        },
        particles: {
            color: { value: color },
            links: {
                color: color,
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: { default: "bounce" },
                random: false,
                speed: 1.5,
                straight: false,
            },
            number: {
                density: { enable: true, area: 800 },
                value: 80,
            },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };

    if (init) {
        return (
            <Particles
                id={id}
                particlesLoaded={particlesLoaded}
                options={options}
                style={{
                    position: position,
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: zIndex,
                }}
            />
        );
    }

    return null;
};

export default ParticlesBackground;
