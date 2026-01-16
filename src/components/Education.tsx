import { motion } from "framer-motion";
import { FaCalendarAlt, FaMapMarkerAlt, FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import TerminalHeader from "./common/TerminalHeader";
import SectionHeader from "./common/SectionHeader";
import { fadeInUpSlow, fadeInUp } from "../utils/animations";

const education = {
    degree: "Bachelor of Computer Application",
    institution: "GL BAJAJ Institute of Management",
    location: "Greater Noida, Uttar Pradesh",
    duration: "2023 - 2026",
    status: "Final Year",
};

// Add your certificates here
const certificates = [
    {
        name: "C++ DSA",
        issuer: "Apna College",
        date: "2024",
        credentialUrl: "https://drive.google.com/file/d/1sXJt4H78lzvfIGj09wWaMD4gzhc3Xnm5/view?usp=sharing",
    },
    {
        name: "Operating System Basics",
        issuer: "Cisco",
        date: "2024",
        credentialUrl: "https://drive.google.com/file/d/1I5uvovz-FVIeJb9Pc7g31aegknWADAym/view?usp=sharing",
    },
    {
        name: "Beginner's Guide to Linux Kernel Development LFD103",
        issuer: "The Linux Foundation",
        date: "2023",
        credentialUrl: "https://drive.google.com/file/d/1yet0LPHajkFS9Re5YWxnphl-NoECf1VA/view?usp=sharing",
    },
    {
        name: "Claude Code in Action",
        issuer: "Anthropic",
        date: "2025",
        credentialUrl: "https://drive.google.com/file/d/1HTbmeWlqoCuVUfyulT67mCHgewZw87dW/view?usp=sharing",
    }
];



export default function Education(): React.ReactElement {
    return (
        <section id="Education" className="relative bg-[#0d1117] py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <SectionHeader
                    command="cat education.txt"
                    title="Education & Certificates"
                    description="My academic background."
                />

                {/* Education Card */}
                <motion.div
                    variants={fadeInUpSlow}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="terminal-card overflow-hidden mb-8"
                >
                    {/* Terminal Header */}
                    <TerminalHeader title="academic-profile.md" />

                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            {/* Icon */}
                            <div className="p-4 rounded-2xl bg-green-500/10 text-green-400">
                                <HiAcademicCap className="w-10 h-10" />
                            </div>

                            {/* Details */}
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-green-500/10 text-green-400 border border-green-500/30">
                                        {education.status}
                                    </span>
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                    {education.degree}
                                </h3>
                                <p className="text-lg text-green-400 font-mono mb-4">
                                    {education.institution}
                                </p>

                                <div className="flex flex-wrap gap-4 text-sm text-[#7d8590]">
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-green-500" />
                                        <span>{education.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-green-500" />
                                        <span>{education.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Certificates Section */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    {/* Section Subheader */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-3 h-3 rounded-full bg-green-500" style={{ boxShadow: '0 0 10px #22c55e' }} />
                        <h3 className="text-xl font-semibold text-white font-mono">Certifications</h3>
                        <div className="flex-1 h-px bg-[#30363d]" />
                    </div>

                    {/* Certificates Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {certificates.map((cert, i) => (
                            <motion.a
                                key={cert.name}
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={fadeInUpSlow}
                                initial="initial"
                                whileInView="animate"
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="group block bg-[#161b22] rounded-xl border border-[#30363d] p-5 hover:border-green-500/50 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    {/* Certificate Icon */}
                                    <div className="flex-shrink-0 p-3 rounded-lg bg-green-500/10 text-green-400 group-hover:bg-green-500/20 transition-colors">
                                        <FaCertificate className="w-6 h-6" />
                                    </div>

                                    {/* Certificate Content */}
                                    <div className="flex-1 min-w-0">
                                        <h4 className="text-base font-semibold text-white mb-1.5 group-hover:text-green-400 transition-colors leading-tight">
                                            {cert.name}
                                        </h4>

                                        <p className="text-sm text-green-400 font-mono mb-3">
                                            {cert.issuer}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            {/* Date Tag */}
                                            <span className="px-2.5 py-1 text-xs rounded-md bg-[#21262d] text-[#7d8590] border border-[#30363d] font-mono">
                                                {cert.date}
                                            </span>

                                            {/* View Link */}
                                            <span className="inline-flex items-center gap-1.5 text-xs text-[#7d8590] group-hover:text-green-400 transition-colors font-mono">
                                                View Certificate
                                                <FaExternalLinkAlt className="w-3 h-3" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
