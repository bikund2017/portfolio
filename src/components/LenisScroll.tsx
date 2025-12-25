import { useEffect, useRef, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProps {
    children: ReactNode;
}

function SmoothScroll({ children }: SmoothScrollProps): React.ReactElement {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
            wheelMultiplier: 1.2,
        });

        function raf(time: number): void {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        lenisRef.current = lenis;

        return () => {
            lenis.destroy();
        };
    }, []);

    return <div>{children}</div>;
}

export default SmoothScroll;
