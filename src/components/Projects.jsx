import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import weather_forcast from "../assets/weather-app.png";

const projects = [
  {
    title: "WeatherForecast",
    subtitle: "Real-time Weather App",
    year: "2025",
    description:
      "A web application providing real-time weather updates and forecasts using APIs.",
    demo: "https://modern-weather-forecast-app.vercel.app/",
    image: weather_forcast,
    github: "https://github.com/bikund2017/realtime-weather-forecast",
    tech: ["OpenWeatherMap API", "ExpressJS", "Geolocation", "JavaScript"],
    color: "#00FF00",
  },
];

export default function Projects() {
  return (
    <section
      id="Projects"
      className="bg-[#0B2447] text-white px-6 py-24 min-h-screen"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-4xl sm:text-6xl pulse-glow font-bold mb-20 relative flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#0072ff]"
      >
        My Projects
        {/* Glow underline pulse */}
        <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 h-[3px] w-32 bg-gradient-to-r from-[#00c6ff] via-[#2C74B3] to-[#00c6ff] blur-sm animate-pulse rounded-full" />
        {/* Soft neon reflection */}
        <span className="absolute -bottom-6 left-1/2 w-40 h-6 blur-[40px] opacity-40 rounded-full -translate-x-1/2 bg-[#00c6ff]" />
      </motion.h2>

      <div className="space-y-20 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
            className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md hover:shadow-2xl group transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* Left Glow Bar */}
            <div
              className="absolute left-0 top-0 h-full w-1.5 rounded-tr-lg rounded-br-lg animate-pulse"
              style={{ backgroundColor: project.color }}
            />

            {/* Glow Aura on Hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 blur-[90px] rounded-2xl -z-10"
              style={{ backgroundColor: project.color }}
            />

            {/* Card content */}
            <div className="relative z-10 p-6 sm:p-10 flex flex-col lg:flex-row gap-10 items-center">
              {/* Text Section */}
              <div className="flex-1">
                <h3 className="text-xl sm:text-3xl font-bold text-white">
                  {project.title}
                </h3>
                <p
                  className="text-sm sm:text-base font-semibold mb-4"
                  style={{ color: project.color }}
                >
                  {project.subtitle} - {project.year}
                </p>
                <p className="text-white/90 mb-5 text-sm sm:text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs sm:text-sm rounded-full font-medium border"
                      style={{
                        color: project.color,
                        borderColor: `${project.color}60`,
                        backgroundColor: `${project.color}10`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6 text-lg">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-cyan-400"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href="https://github.com/bikund2017/realtime-weather-forecast"
                    className="flex items-center gap-2 hover:text-cyan-400"
                  >
                    <FaGithub /> Source Code
                  </a>
                </div>
              </div>

              {/* Image Section */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="w-full lg:w-[450px] aspect-video overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => window.open(project.demo, "_blank")}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain w-full h-full rounded-xl"
                  style={{ objectPosition: "top center" }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
