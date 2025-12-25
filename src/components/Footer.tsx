import { FaGithub, FaTwitter, FaLinkedin, FaReact, FaNodeJs } from "react-icons/fa";
import { SiLeetcode, SiMongodb } from "react-icons/si";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { HiArrowUp, HiTerminal } from "react-icons/hi";

interface SocialLink {
    icon: IconType;
    href: string;
    label: string;
}

const socialLinks: SocialLink[] = [
    { icon: FaGithub, href: "https://github.com/bikund2017", label: "GitHub" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/bikund2017/", label: "LeetCode" },
    { icon: FaTwitter, href: "https://x.com/bikund2017", label: "Twitter" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/bikund2017/", label: "LinkedIn" },
];

const navLinks = [
    { name: "Home", href: "#Home" },
    { name: "Skills", href: "#Technologies" },
    { name: "Projects", href: "#Projects" },
    { name: "Contact", href: "#About1" },
];

export default function Footer(): React.ReactElement {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-[#0d1117] border-t border-[#30363d]">
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Terminal Style Header */}
                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-[#30363d]">
                    <div className="flex items-center gap-2">
                        <HiTerminal className="w-5 h-5 text-green-500" />
                        <span className="font-mono text-sm text-[#7d8590]">
                            <span className="text-green-400">bikund@portfolio</span>
                            <span className="text-[#7d8590]">:</span>
                            <span className="text-blue-400">~/footer</span>
                            <span className="text-[#7d8590]">$</span>
                        </span>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="status-online" />
                            <span className="text-xl font-bold text-white font-mono">
                                Bikund Kumar
                            </span>
                        </div>
                        <p className="text-[#7d8590] text-sm mb-4 font-mono">
                            Final Year Student | Full Stack Developer
                        </p>
                        <div className="flex items-center gap-2 text-xs text-[#7d8590] font-mono">
                            <FaReact className="text-[#61DAFB]" />
                            <span>React</span>
                            <span className="text-[#30363d]">|</span>
                            <FaNodeJs className="text-[#339933]" />
                            <span>Node.js</span>
                            <span className="text-[#30363d]">|</span>
                            <SiMongodb className="text-[#47A248]" />
                            <span>MongoDB</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xs font-mono text-[#7d8590] uppercase tracking-wider mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-[#7d8590] hover:text-green-400 transition-colors font-mono"
                                    >
                                        <span className="text-green-500">./</span>{link.name.toLowerCase()}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-xs font-mono text-[#7d8590] uppercase tracking-wider mb-4">
                            Connect
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {socialLinks.map(({ icon: Icon, href, label }) => (
                                <motion.a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-2 rounded-lg bg-[#161b22] border border-[#30363d] text-[#7d8590] hover:text-green-400 hover:border-green-500/50 transition-colors"
                                    title={label}
                                >
                                    <Icon className="w-4 h-4" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#30363d]">
                    <p className="text-xs text-[#7d8590] font-mono">
                        <span className="text-green-400">$</span> echo "© {new Date().getFullYear()} Bikund Kumar"
                    </p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#161b22] border border-[#30363d] text-[#7d8590] hover:text-green-400 hover:border-green-500/50 transition-colors text-xs font-mono"
                    >
                        <span>Back to top</span>
                        <HiArrowUp className="w-3 h-3" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}
