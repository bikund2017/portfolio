import { useRef, useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactTerminal(): React.ReactElement {
    const formRef = useRef<HTMLFormElement>(null);
    const [outputLines, setOutputLines] = useState<string[]>([]);
    const [startedPush, setStartedPush] = useState<boolean>(false);
    const [isPushing, setIsPushing] = useState<boolean>(false);
    const [showOutput, setShowOutput] = useState<boolean>(false);

    const handlePush = async (): Promise<void> => {
        setStartedPush(true);
        setShowOutput(true);
        setOutputLines(["$ git push origin message-to-bikund"]);

        const fakeOutput: string[] = [
            "Enumerating objects: 3, done.",
            "Counting objects: 100% (3/3), done.",
            "Compressing objects: 100% (2/2), done.",
            "Writing objects: 100% (3/3), 1.23 KiB | 1.23 MiB/s, done.",
            "To: bikund.dev",
            "✅ Message sent successfully!",
        ];

        setIsPushing(true);

        for (let i = 0; i < fakeOutput.length; i++) {
            await new Promise<void>((res) => setTimeout(res, 800));
            setOutputLines((prev) => [...prev, fakeOutput[i]]);
        }

        setTimeout(() => {
            setIsPushing(false);

            setTimeout(() => {
                setShowOutput(false);
                setTimeout(() => {
                    setStartedPush(false);
                    setOutputLines([]);
                }, 500);
            }, 3000);

        }, fakeOutput.length * 500 + 500);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!formRef.current) return;

        const formData = new FormData(formRef.current);
        fetch("https://formspree.io/f/mgvageav", {
            method: "POST",
            body: formData,
        });

        setTimeout(() => formRef.current?.reset(), 100);
        handlePush();
    };

    return (
        <div className="relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transition-all hover:shadow-white/10 hover:border-white/20">

            {/* Title */}
            <p className="text-white mb-6 text-lg flex items-center gap-2">
                <span className="animate-pulse text-white">$</span>
                <span className="typewriter text-gray-300">Let's make this commit count.</span>
            </p>

            {/* Contact Form */}
            <form
                ref={formRef}
                onSubmit={handleSubmit}
                method="POST"
                target="dummyFrame"
                className="flex flex-col gap-5"
            >
                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-400 font-mono">
                        $ git config --global user.name
                    </label>
                    <input
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="bg-black border border-white/20 text-white px-4 py-2 rounded-md focus:outline-none focus:border-white/50 placeholder-gray-500 font-sans transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-400 font-mono">
                        $ git config --global user.email
                    </label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="bg-black border border-white/20 text-white px-4 py-2 rounded-md focus:outline-none focus:border-white/50 placeholder-gray-500 font-sans transition-colors"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-sm text-gray-400 font-mono">
                        $ echo "your message" &gt; message.txt
                    </label>
                    <textarea
                        name="message"
                        rows={4}
                        required
                        placeholder="Write your message..."
                        className="bg-black border border-white/20 text-white px-4 py-2 rounded-md resize-none focus:outline-none focus:border-white/50 placeholder-gray-500 font-sans transition-colors"
                    />
                </div>

                {/* Push Button */}
                <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={isPushing}
                    className="w-full bg-white text-black font-semibold py-3 rounded-lg transition-all shadow-md hover:shadow-white/20 font-mono disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                    🚀 git push origin message-to-bikund
                </motion.button>

                <iframe name="dummyFrame" style={{ display: "none" }} />
            </form>

            {/* Terminal Output */}
            <AnimatePresence>
                {startedPush && showOutput && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6 bg-black text-white text-sm font-mono px-4 py-3 rounded-md border border-white/10 shadow-inner"
                    >
                        {outputLines.map((line, idx) => (
                            <motion.p
                                key={idx}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: idx * 0.2 }}
                                className={
                                    line.includes("✅")
                                        ? "text-white font-semibold"
                                        : "text-gray-400"
                                }
                            >
                                {line}
                            </motion.p>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
