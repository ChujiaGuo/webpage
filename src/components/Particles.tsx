'use client'

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
    type Container,
    type ISourceOptions,
    MoveDirection,
    OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const particlesConfig = {
    fpsLimit: 120,
    interactivity: {
        events: {

        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
        },
        move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
                default: OutMode.out,
            },
            random: false,
            speed: 0,
            straight: false,
        },
        number: {
            density: {
                enable: true,
            },
            value: 80,
        },
        opacity: {
            value: 0.2,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}

export default function ParticleBackground() {
    const [_, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
    };

    const options: ISourceOptions = useMemo(
        () => (particlesConfig),
        [],
    );

    return (
        <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
        />
    );
};