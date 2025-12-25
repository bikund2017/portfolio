import { useEffect, useState } from "react";

interface Position {
    x: number;
    y: number;
}

const CustomCursor = (): React.ReactElement => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent): void => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 w-5 h-5 rounded-full bg-white pointer-events-none mix-blend-difference z-[9999] transition-transform duration-75 ease-out"
            style={{
                transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
            }}
        />
    );
};

export default CustomCursor;
