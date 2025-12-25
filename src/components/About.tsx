import { motion } from "framer-motion";
import { useState } from "react";
import { HiMail, HiLocationMarker, HiArrowRight, HiTerminal } from "react-icons/hi";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import SnowParticles from "./SnowParticle";

interface SocialLink {
    icon: React.ReactElement;
    href: string;
    label: string;
}

const socialLinks: SocialLink[] = [
    { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/bikund2017", label: "GitHub" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/bikund2017/", label: "LinkedIn" },
    { icon: <FaTwitter className="w-5 h-5" />, href: "https://x.com/bikund2017", label: "Twitter" },
];

const codeSnippet = `// About Me
const bikund = {
  role: "Final Year Student",
  focus: ["Web Development", "Full Stack"],
  learning: ["React", "Node.js", "MongoDB"],
  goal: "Build awesome web apps!"
};

// Let's connect!
console.log("Open to opportunities 👇");`;

export default function About(): React.ReactElement {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await fetch("https://formspree.io/f/mgvageav", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' },
        });

        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section
            id="About1"
            className="relative overflow-hidden bg-[#0d1117] py-24 px-6"
        >
            <SnowParticles />
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
                        <span className="text-green-500">$</span> cat contact.txt
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-[#7d8590] max-w-xl mx-auto">
                        Looking for an internship or entry-level opportunity? I'd love to hear from you!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left Column - Code & Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {/* Code Block */}
                        <div className="terminal-card overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                </div>
                                <span className="font-mono text-sm text-[#7d8590] ml-4">about.js</span>
                            </div>
                            <pre className="p-4 text-sm font-mono text-[#7d8590] overflow-x-auto">
                                <code>{codeSnippet}</code>
                            </pre>
                        </div>

                        {/* Contact Info */}
                        <a
                            href="mailto:bikund2017@gmail.com"
                            className="flex items-center gap-4 p-4 terminal-card hover:border-green-500 transition-colors group"
                        >
                            <div className="p-3 rounded-lg bg-green-500/10 text-green-400 group-hover:bg-green-500/20 transition-colors">
                                <HiMail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-[#7d8590] font-mono mb-1">EMAIL</p>
                                <p className="text-[#e6edf3] font-mono">bikund2017@gmail.com</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-4 p-4 terminal-card">
                            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                                <HiLocationMarker className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-[#7d8590] font-mono mb-1">LOCATION</p>
                                <p className="text-[#e6edf3] font-mono">India</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-4 terminal-card text-[#7d8590] hover:text-green-400 hover:border-green-500 transition-colors"
                                    title={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <div className="terminal-card overflow-hidden">
                            {/* Terminal Header */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                                </div>
                                <span className="font-mono text-sm text-[#7d8590] ml-4 flex items-center gap-2">
                                    <HiTerminal className="w-4 h-4" />
                                    contact-form
                                </span>
                            </div>

                            <div className="p-6">
                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="p-8 text-center"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                            <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <h4 className="text-xl font-semibold text-white mb-2 font-mono">
                                            Message Sent!
                                        </h4>
                                        <p className="text-[#7d8590] font-mono text-sm">
                                            Thanks for reaching out! I'll get back to you soon.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-xs text-[#7d8590] mb-2 font-mono uppercase">
                                                    Name
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-lg bg-[#161b22] border border-[#30363d] text-[#e6edf3] placeholder-[#484f58] focus:outline-none focus:border-green-500 transition-colors font-mono"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs text-[#7d8590] mb-2 font-mono uppercase">
                                                    Email
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-lg bg-[#161b22] border border-[#30363d] text-[#e6edf3] placeholder-[#484f58] focus:outline-none focus:border-green-500 transition-colors font-mono"
                                                    placeholder="your@email.com"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs text-[#7d8590] mb-2 font-mono uppercase">
                                                Message
                                            </label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                className="w-full px-4 py-3 rounded-lg bg-[#161b22] border border-[#30363d] text-[#e6edf3] placeholder-[#484f58] focus:outline-none focus:border-green-500 transition-colors resize-none font-mono"
                                                placeholder="Your message..."
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.01 }}
                                            whileTap={{ scale: 0.99 }}
                                            className="w-full py-4 px-6 rounded-lg bg-green-500 text-black font-semibold flex items-center justify-center gap-2 hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-mono"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                    </svg>
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <HiArrowRight className="w-5 h-5" />
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
