import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

function GithubStats(): React.ReactElement {
    return (
        <section className="relative bg-[#0d1117] py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="font-mono text-sm text-[#7d8590] mb-4">
                        <span className="text-green-500">$</span> git log --oneline
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                        GitHub Activity
                    </h2>
                    <p className="text-[#7d8590] max-w-xl mx-auto">
                        My open source contributions and coding activity.
                    </p>
                </motion.div>

                {/* GitHub Calendar Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="terminal-card overflow-hidden"
                >
                    {/* Terminal Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            </div>
                            <span className="font-mono text-sm text-[#7d8590]">
                                contributions.sh
                            </span>
                        </div>
                        <a
                            href="https://github.com/bikund2017"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-[#7d8590] hover:text-green-400 transition-colors font-mono"
                        >
                            <FaGithub className="w-4 h-4" />
                            <span>@bikund2017</span>
                            <HiOutlineExternalLink className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Calendar */}
                    <div className="p-6">
                        <div className="overflow-x-auto pb-4">
                            <div className="min-w-[750px]">
                                <GitHubCalendar
                                    username="bikund2017"
                                    colorScheme="dark"
                                    blockSize={14}
                                    blockMargin={4}
                                    fontSize={14}
                                    theme={{
                                        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353']
                                    }}
                                />
                            </div>
                        </div>

                        {/* Legend */}
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#30363d]">
                            <span className="text-xs font-mono text-[#7d8590]">
                                Less
                            </span>
                            <div className="flex gap-1">
                                {['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'].map((color, i) => (
                                    <div
                                        key={i}
                                        className="w-3 h-3 rounded-sm"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                            <span className="text-xs font-mono text-[#7d8590]">
                                More
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* View Profile Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-8"
                >
                    <a
                        href="https://github.com/bikund2017"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#21262d] text-white font-mono text-sm rounded-lg border border-[#30363d] hover:bg-[#30363d] hover:border-green-500/50 transition-all"
                    >
                        <FaGithub className="w-5 h-5" />
                        <span>View Full Profile</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default GithubStats;
