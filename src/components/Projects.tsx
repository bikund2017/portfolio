import { motion } from "framer-motion";
import ProjectCard, { ProjectData } from "./ProjectCard";
import SectionHeader from "./common/SectionHeader";
import weather_forcast from "../assets/weather-app.png";
import park_ride from "../assets/park-ride.png";
import connectnow from "../assets/connectnow.png";
const projects: ProjectData[] = [
    {
        title: "Park & Ride+ Delhi NCR",
        subtitle: "IoT-Enabled Real-time Parking & Transit System",
        type: "IOT",
        description:
            "A full-stack IoT web application integrating Arduino Mega 2560 with IR sensors for real-time parking detection. Features live parking availability updates, interactive Google Maps, community reporting with image uploads, and Firebase-powered authentication. Deployed on Vercel with serverless functions.",
        demo: "https://park-ride-new1.vercel.app/",
        image: park_ride,
        github: "https://github.com/bikund2017/Park-Ride",
        tech: ["Arduino", "React", "Node.js", "Firebase", "Google Maps API", "Vercel", "Express", "SerialPort"],
    },
    {
        title: "ConnectNow",
        subtitle: "Real-time Chat Application with Instant Messaging & File Sharing",
        type: "FULL STACK",
        description:
            "A real-time chat application featuring instant messaging with typing indicators, file & image sharing via Cloudinary, multi-user chat rooms, and persistent message history (7 days). Built with Socket.io for WebSocket communication, MongoDB Atlas for data storage, and deployed on Vercel (client) and Render (server).",
        demo: "https://connectnow-drab.vercel.app",
        image: connectnow,
        github: "https://github.com/bikund2017/ConnectNow",
        tech: ["Next.js", "React", "TypeScript", "Socket.io", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
    },
    {
        title: "Weather Forecast App",
        subtitle: "Real-time Weather Application",
        type: "FRONTEND",
        description:
            "A modern web application that provides real-time weather updates, hourly forecasts, and location-based weather data. Built with React and Node.js with API integration.",
        demo: "https://modern-weather-forecast-app.vercel.app/",
        image: weather_forcast,
        github: "https://github.com/bikund2017/realtime-weather-forecast",
        tech: ["React", "Node.js", "Express", "API", "CSS"],
    },
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
                <SectionHeader
                    command="ls projects/"
                    title="My Projects"
                    description="Projects I've built while learning web development."
                />

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
