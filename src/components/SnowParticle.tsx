import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Container } from "@tsparticles/engine";

export default function SnowParticles(): React.ReactElement {
    const [init, setInit] = useState<boolean>(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (_container?: Container): Promise<void> => { };

    return (
        <>
            {init && (
                <Particles
                    id="snow"
                    particlesLoaded={particlesLoaded}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: -1,
                        pointerEvents: "none",
                    }}
                    options={{
                        background: {
                            color: {
                                value: "transparent",
                            },
                        },
                        particles: {
                            number: {
                                value: 60,
                                density: {
                                    enable: true,
                                    width: 800,
                                    height: 800,
                                },
                            },
                            color: {
                                value: ["#22c55e", "#3b82f6", "#7d8590"],
                            },
                            shape: {
                                type: "circle",
                            },
                            opacity: {
                                value: 0.25,
                                animation: {
                                    enable: true,
                                    speed: 0.3,
                                    startValue: "random",
                                    sync: false,
                                },
                            },
                            size: {
                                value: 2,
                            },
                            move: {
                                enable: true,
                                speed: 0.2,
                                direction: "none",
                                straight: false,
                                outModes: {
                                    default: "out",
                                },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            )}
        </>
    );
}
