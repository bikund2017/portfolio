import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import TerminalHeader from './common/TerminalHeader';
import SectionHeader from './common/SectionHeader';
import { fadeInUpSlow, fadeIn } from '../utils/animations';

function GithubStats(): React.ReactElement {
    return (
        <section className="relative bg-[#0d1117] py-24 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-30" />

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                {/* Section Header */}
                <SectionHeader
                    command="git log --oneline"
                    title="GitHub Activity"
                    description="My open source contributions and coding activity."
                    className="mb-12"
                />

                {/* GitHub Calendar Card */}
                <motion.div
                    variants={fadeInUpSlow}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="terminal-card overflow-hidden"
                >
                    {/* Terminal Header */}
                    <TerminalHeader title="contributions.sh">
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
                    </TerminalHeader>

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
                    variants={fadeIn}
                    initial="initial"
                    whileInView="animate"
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
