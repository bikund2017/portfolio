import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navItems = [
    { name: "Home", href: "#Home" },
    { name: "Skills", href: "#Technologies" },
    { name: "Projects", href: "#Projects" },
    { name: "Stats", href: "#Coding Stats" },
    { name: "Contact", href: "#About1" },
];

function Header(): React.ReactElement {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-[#0d1117]/95 backdrop-blur-md border-b border-[#30363d]"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <a href="#Home" className="text-xl font-bold text-white">
                    BK
                </a>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex items-center gap-1">
                    {navItems.map((item) => (
                        <motion.li key={item.name}>
                            <a
                                href={item.href}
                                className="px-4 py-2 text-[#7d8590] hover:text-[#e6edf3] transition-colors font-mono text-sm relative group"
                            >
                                <span className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    ./
                                </span>
                                {item.name.toLowerCase()}
                            </a>
                        </motion.li>
                    ))}
                    <li className="ml-4">
                        <a
                            href="https://github.com/bikund2017"
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 bg-green-500/10 text-green-400 border border-green-500/30 rounded-lg font-mono text-sm hover:bg-green-500/20 transition-colors"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden p-2 text-[#7d8590] hover:text-white transition-colors"
                >
                    {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-full left-0 right-0 bg-[#161b22] border-b border-[#30363d] lg:hidden"
                        >
                            <ul className="p-4 space-y-2">
                                {navItems.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="block px-4 py-3 text-[#7d8590] hover:text-[#e6edf3] hover:bg-[#21262d] rounded-lg transition-colors font-mono text-sm"
                                        >
                                            <span className="text-green-500">$ </span>
                                            cd /{item.name.toLowerCase()}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default Header;
