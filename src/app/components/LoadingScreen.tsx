import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
    const [visible, setVisible] = useState(true);
    const [phase, setPhase] = useState<"logo" | "exit">("logo");

    useEffect(() => {
        // After 2.4s show exit animation, then unmount
        const t1 = setTimeout(() => setPhase("exit"), 2400);
        const t2 = setTimeout(() => setVisible(false), 3100);
        return () => { clearTimeout(t1); clearTimeout(t2); };
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
                    style={{ background: "#FDF9F6" }}
                >
                    {/* Soft radial glow behind logo */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background:
                                "radial-gradient(ellipse 60% 50% at 50% 50%, #F0DDD1 0%, transparent 70%)",
                        }}
                    />

                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full pointer-events-none"
                            style={{
                                width: [6, 4, 8, 5, 7, 4][i],
                                height: [6, 4, 8, 5, 7, 4][i],
                                background: i % 2 === 0 ? "#C9A87C" : "#F0DDD1",
                                left: `${15 + i * 13}%`,
                                top: `${20 + (i % 3) * 20}%`,
                                opacity: 0.3,
                            }}
                            animate={{
                                y: [0, -20, 0],
                                opacity: [0.2, 0.5, 0.2],
                            }}
                            transition={{
                                duration: 2 + i * 0.3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.2,
                            }}
                        />
                    ))}

                    {/* Logo group */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={
                            phase === "logo"
                                ? { opacity: 1, scale: 1, y: 0 }
                                : { opacity: 0, scale: 1.05, y: -12 }
                        }
                        transition={
                            phase === "logo"
                                ? { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
                                : { duration: 0.5, ease: "easeIn" }
                        }
                        className="relative flex flex-col items-center gap-6"
                    >
                        {/* Circle logo mark */}
                        <motion.div
                            className="relative"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                        >
                            {/* Rotating dashed ring */}
                            <svg width="80" height="80" viewBox="0 0 80 80" className="absolute inset-0">
                                <circle
                                    cx="40"
                                    cy="40"
                                    r="36"
                                    fill="none"
                                    stroke="#C9A87C"
                                    strokeWidth="0.8"
                                    strokeDasharray="4 6"
                                    opacity="0.5"
                                />
                            </svg>
                            {/* Static inner circle */}
                            <div className="w-20 h-20 flex items-center justify-center">
                                <div
                                    className="w-14 h-14 rounded-full flex items-center justify-center"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #4A3728 0%, #836B58 100%)",
                                        boxShadow: "0 8px 32px rgba(74,55,40,0.18)",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: '"Cormorant Garamond", Georgia, serif',
                                            fontSize: "1.3rem",
                                            fontStyle: "italic",
                                            fontWeight: 400,
                                            color: "#FDF9F6",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        ✦
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Brand name */}
                        <div className="flex flex-col items-center gap-1">
                            <motion.span
                                initial={{ opacity: 0, letterSpacing: "0.6em" }}
                                animate={
                                    phase === "logo"
                                        ? { opacity: 1, letterSpacing: "0.25em" }
                                        : { opacity: 0, letterSpacing: "0.5em" }
                                }
                                transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                                style={{
                                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                                    fontSize: "clamp(2.4rem, 6vw, 3.5rem)",
                                    fontStyle: "italic",
                                    fontWeight: 300,
                                    color: "#4A3728",
                                    display: "block",
                                }}
                            >
                                RO
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 8 }}
                                animate={phase === "logo" ? { opacity: 1, y: 0 } : { opacity: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                style={{
                                    fontFamily: '"Inter", system-ui, sans-serif',
                                    fontSize: "0.62rem",
                                    letterSpacing: "0.42em",
                                    color: "#A8907E",
                                    textTransform: "uppercase",
                                    display: "block",
                                }}
                            >
                                Beauty Guide
                            </motion.span>
                        </div>
                    </motion.div>

                    {/* Loading bar */}
                    <motion.div
                        className="absolute bottom-16 left-1/2 -translate-x-1/2"
                        style={{ width: 80 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: phase === "logo" ? 1 : 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div
                            className="h-px rounded-full overflow-hidden"
                            style={{ background: "#E5D8CB" }}
                        >
                            <motion.div
                                className="h-full rounded-full"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #C9A87C, #E2C99A)",
                                }}
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
