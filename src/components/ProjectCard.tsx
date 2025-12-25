import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export interface ProjectData {
    title: string;
    subtitle: string;
    type: "FULL STACK" | "FRONTEND" | "BACKEND";
    description: string;
    demo: string;
    image: string;
    github: string;
    tech: string[];
}

interface ProjectCardProps {
    project: ProjectData;
    index?: number;
}

const projectTypeColors: { [key: string]: string } = {
    "FULL STACK": "#22c55e",
    "FRONTEND": "#3b82f6",
    "BACKEND": "#f59e0b",
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps): React.ReactElement {
    const typeColor = projectTypeColors[project.type] || "#22c55e";
    const isEven = index % 2 === 0;

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group bg-[#161b22] rounded-xl border border-[#30363d] overflow-hidden hover:border-green-500/50 transition-all duration-300"
        >
            {/* Two Column Layout */}
            <div className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                {/* Image Side */}
                <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="block relative overflow-hidden md:w-1/2"
                >
                    <div className="aspect-video md:aspect-auto md:h-full bg-[#21262d]">
                        <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="flex items-center gap-2 px-5 py-2.5 bg-green-500 text-black font-semibold rounded-lg">
                            <HiArrowUpRight className="w-5 h-5" />
                            View Live
                        </span>
                    </div>
                </a>

                {/* Content Side */}
                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                    {/* Type Badge */}
                    <div className="mb-3">
                        <span
                            className="inline-block px-3 py-1 rounded-full text-xs font-mono font-medium"
                            style={{
                                backgroundColor: `${typeColor}15`,
                                color: typeColor,
                                border: `1px solid ${typeColor}40`
                            }}
                        >
                            {project.type}
                        </span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                        {project.title}
                    </h3>
                    <p className="text-sm text-green-400 font-mono mb-3">
                        {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-[#7d8590] mb-5 leading-relaxed">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-xs rounded-md bg-[#21262d] text-[#7d8590] border border-[#30363d] font-mono"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-colors"
                        >
                            <span>Live Demo</span>
                            <HiArrowUpRight className="w-4 h-4" />
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#21262d] text-white rounded-lg border border-[#30363d] hover:bg-[#30363d] hover:border-[#484f58] transition-colors"
                        >
                            <FaGithub className="w-5 h-5" />
                            <span>Code</span>
                        </a>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
