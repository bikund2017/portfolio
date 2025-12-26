import { motion, useInView } from 'framer-motion';
import { useRef, ReactElement } from 'react';
import {
    FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase, 
    FaAws,
    FaDocker,
} from 'react-icons/fa';
import {
    SiJavascript, SiTypescript, SiMongodb, SiExpress, SiTailwindcss, SiCplusplus, SiVercel, SiPostman, SiFirebase, SiCloudinary, SiArduino, SiGooglemaps
} from 'react-icons/si';
import SnowParticles from './SnowParticle';

const skillCategories = [
    {
        name: "Frontend",
        color: "#22c55e",
        skills: [
            { name: 'React', icon: <FaReact className="w-8 h-8" style={{ color: '#61DAFB' }} /> },
            { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" style={{ color: '#F7DF1E' }} /> },
            { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8" style={{ color: '#E34F26' }} /> },
            { name: 'CSS3', icon: <FaCss3Alt className="w-8 h-8" style={{ color: '#1572B6' }} /> },
            { name: 'Tailwind', icon: <SiTailwindcss className="w-8 h-8" style={{ color: '#06B6D4' }} /> },
        ]
    },
    {
        name: "Backend",
        color: "#3b82f6",
        skills: [
            { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" style={{ color: '#339933' }} /> },
            { name: 'Express', icon: <SiExpress className="w-8 h-8" style={{ color: '#FFFFFF' }} /> },
            { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" style={{ color: '#47A248' }} /> },
            { name: 'SQL', icon: <FaDatabase className="w-8 h-8" style={{ color: '#336791' }} /> },
        ]
    },
    {
        name: "Programming",
        color: "#f59e0b",
        skills: [
            { name: 'C++', icon: <SiCplusplus className="w-8 h-8" style={{ color: '#00599C' }} /> },
            { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" style={{ color: '#3178C6' }} /> }
        ]
    },
    {
        name: "Tools",
        color: "#b70bf5ff",
        skills: [
            { name: 'Git', icon: <FaGitAlt className="w-8 h-8" style={{ color: '#F05032' }} /> },
            { name: 'AWS', icon: <FaAws className="w-8 h-8" style={{ color: '#FF9900' }} /> },
            { name: 'Vercel', icon: <SiVercel className="w-8 h-8" style={{ color: '#000000' }} /> },
            { name: 'Docker', icon: <FaDocker className="w-8 h-8" style={{ color: '#032a72ff' }} /> },
            { name: 'Postman', icon: <SiPostman className="w-8 h-8" style={{ color: '#e05320' }} /> },
        ]
    },
    {
        name: "IoT & Cloud",
        color: "#06b6d4",
        skills: [
            { name: 'Arduino', icon: <SiArduino className="w-8 h-8" style={{ color: '#00979D' }} /> },
            { name: 'Firebase', icon: <SiFirebase className="w-8 h-8" style={{ color: '#FFCA28' }} /> },
            { name: 'Cloudinary', icon: <SiCloudinary className="w-8 h-8" style={{ color: '#3448C5' }} /> },
            { name: 'Google Maps', icon: <SiGooglemaps className="w-8 h-8" style={{ color: '#4285F4' }} /> },
        ]
    }
];

interface SkillCardProps {
    skill: { name: string; icon: ReactElement };
    index: number;
}

function SkillCard({ skill, index }: SkillCardProps): React.ReactElement {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: '-50px 0px', amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="terminal-card p-6 flex flex-col items-center gap-3 group cursor-pointer"
        >
            <div className="opacity-70 group-hover:opacity-100 transition-opacity group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                {skill.icon}
            </div>
            <span className="text-sm font-mono text-[#7d8590] group-hover:text-[#e6edf3] transition-colors">
                {skill.name}
            </span>
        </motion.div>
    );
}

export default function Skills(): React.ReactElement {
    return (
        <section id="Technologies" className="relative py-24 px-6 min-h-screen overflow-hidden bg-[#0d1117]">
            <SnowParticles />

            {/* Background Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-50" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="font-mono text-sm text-[#7d8590] mb-4">
                        <span className="text-green-500">$</span> cat skills.json
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Tech Stack
                    </h2>
                    <p className="text-[#7d8590] max-w-xl mx-auto">
                        Technologies I've learned and used to build projects during my CS journey.
                    </p>
                </motion.div>

                {/* Skills by Category */}
                <div className="space-y-12">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: category.color, boxShadow: `0 0 10px ${category.color}` }}
                                />
                                <h3 className="text-xl font-semibold text-white font-mono">
                                    {category.name}
                                </h3>
                                <div className="flex-1 h-px bg-[#30363d]" />
                            </div>

                            {/* Skills Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {category.skills.map((skill, index) => (
                                    <SkillCard
                                        key={skill.name}
                                        skill={skill}
                                        index={index}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Learning Status */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30">
                        <span className="status-online" />
                        <span className="font-mono text-sm text-green-400">
                            Always learning new things
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
