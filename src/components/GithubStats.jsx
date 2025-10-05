import { motion } from 'framer-motion';
import GitHubCalendar from 'react-github-calendar';

function GithubStats() {
    return (
        <section className="relative bg-[#0B2447] py-24 overflow-hidden">

            {/* ⚡ Neon Top Slice */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                viewport={{ once: true }}
                className="h-1 bg-cyan-400 shadow-[0_0_10px_#00ffff] absolute top-0 left-0"
            />

            {/* 🎯 Animated Content */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="relative z-10 container mx-auto px-4"
            >
                <h1 className="text-4xl sm:text-6xl font-bold text-center mb-12 bg-gradient-to-r pulse-glow from-[#00c6ff] to-[#0072ff] text-transparent bg-clip-text glow-text">
                    Coding Stats
                </h1>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=bikund2017&show_icons=true&theme=tokyonight"
                        alt="GitHub Stats"
                        className="w-full max-w-md rounded-xl shadow-lg"
                    />
                    <div className="github-graph text-cyan-600 max-w-full h-auto mt-6">
                        <GitHubCalendar username="bikund2017" />
                    </div>
                </div>
            </motion.div>

            {/* ⚡ Neon Bottom Slice */}
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.2 }}
                viewport={{ once: true }}
                className="h-1 bg-cyan-400 shadow-[0_0_10px_#00ffff] absolute bottom-0 left-0"
            />
        </section>
    );
}

export default GithubStats;
