import { motion } from "framer-motion";

interface SectionHeaderProps {
    command: string;
    title: string;
    description: string;
    className?: string;
}

export default function SectionHeader({
    command,
    title,
    description,
    className = ''
}: SectionHeaderProps): React.ReactElement {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-center mb-16 ${className}`}
        >
            <div className="font-mono text-sm text-[#7d8590] mb-4">
                <span className="text-green-500">$</span> {command}
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                {title}
            </h2>
            <p className="text-[#7d8590] max-w-xl mx-auto">
                {description}
            </p>
        </motion.div>
    );
}
