import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import Pfp from "../assets/Pfp.png";
import { TypeAnimation } from 'react-type-animation';
import { FaNodeJs, FaReact, FaGitAlt, FaDatabase, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import { HiArrowDown, HiDocumentDownload } from "react-icons/hi";

const techBadges = [
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
    { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
    { icon: FaGitAlt, name: "Git", color: "#F05032" },
    { icon: FaDatabase, name: "SQL", color: "#336791" },
];

const highlights = [
    { value: "BCA", label: "Final Year" },
    { value: "5+", label: "Projects" },
    { value: "Full Stack", label: "Developer" },
    { value: "Open", label: "To Work" },
];

function Hero(): React.ReactElement {
    const containerRef = useRef<HTMLDivElement>(null);
    const x: MotionValue<number> = useMotionValue(0);
    const y: MotionValue<number> = useMotionValue(0);
    const rotateX = useTransform(y, [0, 1], [5, -5]);
    const rotateY = useTransform(x, [0, 1], [-5, 5]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent): void => {
            if (!containerRef.current) return;
            const bounds = containerRef.current.getBoundingClientRect();
            const xVal = (e.clientX - bounds.left) / bounds.width;
            const yVal = (e.clientY - bounds.top) / bounds.height;
            x.set(xVal);
            y.set(yVal);
        };

        const el = containerRef.current;
        if (el) {
            el.addEventListener("mousemove", handleMouseMove);
            return () => el.removeEventListener("mousemove", handleMouseMove);
        }
    }, [x, y]);

    return (
        <div
            ref={containerRef}
            className="modern-gradient grid-pattern relative min-h-screen flex flex-col items-center justify-center px-6 lg:px-20 overflow-hidden pt-20"
        >

            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
                {/* Text Section */}
                <div className="flex flex-col items-center lg:items-start gap-6 z-10 text-center lg:text-left">
                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30"
                    >
                        <span className="status-online" />
                        <span className="text-green-400 text-sm font-mono">Available for opportunities</span>
                    </motion.div>

                    {/* Role Animation */}
                    <div className="text-lg sm:text-xl text-green-400 font-mono">
                        <span className="text-[#7d8590]">$</span>{" "}
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                2000,
                                'Web Developer',
                                2000,
                                'CS Student',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                        <span className="cursor-blink" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4">
                            Hi, I'm{" "}
                            <span className="text-green-400 terminal-glow">Bikund Kumar</span>
                        </h1>

                        <p className="text-lg md:text-xl text-[#7d8590] max-w-2xl mb-8">
                            Final year <span className="text-[#e6edf3]">BCA</span> student passionate about building{" "}
                            <span className="text-[#e6edf3]">web applications</span>.
                            I love turning ideas into reality with clean code and modern technologies.
                        </p>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
                            {techBadges.map((badge, i) => (
                                <motion.div
                                    key={badge.name}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + i * 0.05 }}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] hover:border-green-500/50 transition-colors"
                                >
                                    <badge.icon className="w-4 h-4" style={{ color: badge.color }} />
                                    <span className="text-xs font-mono text-[#7d8590]">{badge.name}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <motion.a
                                href="#About1"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
                            >
                                <span>Get in Touch</span>
                            </motion.a>
                            <motion.a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 bg-[#21262d] text-white font-semibold rounded-lg border border-[#30363d] hover:bg-[#30363d] transition-colors flex items-center justify-center gap-2"
                            >
                                <HiDocumentDownload className="w-5 h-5" />
                                <span>Resume</span>
                            </motion.a>
                            <motion.a
                                href="#Projects"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-3 bg-[#21262d] text-white font-semibold rounded-lg border border-[#30363d] hover:bg-[#30363d] transition-colors"
                            >
                                View Projects
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Profile + Highlights */}
                <motion.div
                    className="relative z-10 flex flex-col items-center gap-8"
                    style={{ rotateX, rotateY }}
                >
                    {/* Profile Image */}
                    <div className="relative">
                        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-xl animate-pulse" />
                        <motion.img
                            src={Pfp}
                            alt="Bikund Kumar"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="w-48 sm:w-56 lg:w-64 rounded-full relative z-10 border-2 border-green-500/30 grayscale hover:grayscale-0 transition-all duration-500"
                        />
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-2 gap-3">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + i * 0.1 }}
                                className="metric-card p-4 text-center"
                            >
                                <div className="text-2xl font-bold text-green-400 font-mono">{item.value}</div>
                                <div className="text-xs text-[#7d8590] font-mono">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <a href="#Technologies" className="text-[#7d8590] hover:text-green-400 transition-colors">
                    <HiArrowDown size={24} />
                </a>
            </motion.div>
        </div>
    );
}

export default Hero;
