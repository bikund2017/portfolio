import { motion } from "framer-motion";
import ProjectCard, { ProjectData } from "./ProjectCard";
import weather_forcast from "../assets/weather-app.png";

// Add your projects here - just copy the template and fill in your details
const projects: ProjectData[] = [
    {
        title: "Weather Forecast App",
        subtitle: "Real-time Weather Application",
        type: "FULL STACK",
        description:
            "A modern web application that provides real-time weather updates, hourly forecasts, and location-based weather data. Built with React and Node.js with API integration.",
        demo: "https://modern-weather-forecast-app.vercel.app/",
        image: weather_forcast,
        github: "https://github.com/bikund2017/realtime-weather-forecast",
        tech: ["React", "Node.js", "Express", "API", "CSS"],
    },
    // Add more projects below:
    // {
    //     title: "Project Name",
    //     subtitle: "Short description",
    //     type: "FULL STACK", // or "FRONTEND" or "BACKEND"
    //     description: "Detailed description of the project...",
    //     demo: "https://your-demo-link.com",
    //     image: your_image_import,
    //     github: "https://github.com/your-username/repo",
    //     tech: ["React", "Node.js", "MongoDB"],
    // },
];

export default function Projects(): React.ReactElement {
    return (
        <section
            id="Projects"
            className="bg-[#0d1117] text-white px-6 py-24 relative"
        >
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

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
                        <span className="text-green-500">$</span> ls projects/
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                        My Projects
                    </h2>
                    <p className="text-[#7d8590] max-w-xl mx-auto">
                        Projects I've built while learning web development.
                    </p>
                </motion.div>

                {/* Projects Column */}
                <div className="flex flex-col gap-10 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Empty State - shows when no projects */}
                {projects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-[#7d8590] font-mono">
                            No projects yet. Add your first project in Projects.tsx!
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
