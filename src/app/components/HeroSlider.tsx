import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

interface HeroSlide {
    id: string;
    category: "skincare" | "haircare";
    eyebrow: string;
    heading: string;
    subheading: string;
    description: string;
    ctaLabel: string;
    ctaPath: string;
    secondaryLabel: string;
    secondaryPath: string;
    image: string; // placeholder path or URL
    accentColor: string; // tailwind css var ref
}

const slides: HeroSlide[] = [
    {
        id: "skincare",
        category: "skincare",
        eyebrow: "Skincare",
        heading: "Your Skin,",
        subheading: "Perfected.",
        description:
            "Discover your skin type, understand your skin's unique needs, and explore science-backed products crafted for your complexion. Your journey to radiant, healthy skin begins here.",
        ctaLabel: "Discover Your Skin Type",
        ctaPath: "/skincare/types",
        secondaryLabel: "Explore Products",
        secondaryPath: "/skincare/products",
        image: "", // PLACEHOLDER: Replace with skincare model PNG/JPG path
        accentColor: "#E8D5C4", // blush
    },
    {
        id: "haircare",
        category: "haircare",
        eyebrow: "Haircare",
        heading: "Your Hair,",
        subheading: "Transformed.",
        description:
            "Understand your hair type and scalp health, unlock targeted routines, and find professional-grade products tailored to your strands. Beautifully healthy hair, by design.",
        ctaLabel: "Discover Your Hair Type",
        ctaPath: "/haircare/types",
        secondaryLabel: "Explore Products",
        secondaryPath: "/haircare/products",
        image: "", // PLACEHOLDER: Replace with haircare model PNG/JPG path
        accentColor: "#C5CEC0", // sage
    },
];

const INTERVAL_MS = 10000; // 10 seconds

// Progress dots
function ProgressDots({
    count,
    active,
    onSelect,
}: {
    count: number;
    active: number;
    onSelect: (i: number) => void;
}) {
    return (
        <div className="flex items-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onSelect(i)}
                    className="relative h-0.5 rounded-full overflow-hidden transition-all duration-300"
                    style={{ width: i === active ? 40 : 20 }}
                    aria-label={`Go to slide ${i + 1}`}
                >
                    <div className="absolute inset-0 bg-cream/30 rounded-full" />
                    {i === active && (
                        <motion.div
                            key={`progress-${i}`}
                            className="absolute inset-y-0 left-0 bg-cream rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
                        />
                    )}
                    {i !== active && (
                        <div className="absolute inset-0 bg-cream/50 rounded-full" />
                    )}
                </button>
            ))}
        </div>
    );
}

// Placeholder image
function HeroImagePlaceholder({ category }: { category: "skincare" | "haircare" }) {
    return (
        <div
            className={`absolute inset-0 flex items-end justify-center ${category === "skincare"
                    ? "bg-gradient-to-br from-[#3D2B1F] via-[#5C3D2E] to-[#2A1A10]"
                    : "bg-gradient-to-br from-[#2E3A2D] via-[#3D4E3C] to-[#1E2A1E]"
                }`}
        >
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-20">
                <p className="text-cream text-xs tracking-[0.3em] uppercase">
                    {category === "skincare" ? "Skincare Model" : "Haircare Model"}
                </p>
                <p className="text-cream/60 text-xs mt-1">Placeholder — Replace with your image</p>
            </div>
        </div>
    );
}

export function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const advance = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const timer = setTimeout(advance, INTERVAL_MS);
        return () => clearTimeout(timer);
    }, [activeIndex, isPaused, advance]);

    const currentSlide = slides[activeIndex];

    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background layer — crossfades between slides */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlide.id + "-bg"}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                >
                    {currentSlide.image ? (
                        <img
                            src={currentSlide.image}
                            alt={currentSlide.category}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <HeroImagePlaceholder category={currentSlide.category} />
                    )}
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-espresso/80 via-espresso/50 to-espresso/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Subtle decorative side accent */}
            <div
                className="absolute right-0 top-0 bottom-0 w-1 opacity-60"
                style={{ background: `linear-gradient(to bottom, transparent, ${currentSlide.accentColor}, transparent)` }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 w-full">
                <div className="max-w-2xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide.id + "-content"}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Eyebrow */}
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                className="text-xs uppercase tracking-[0.35em] text-cream/60 mb-4 font-body"
                            >
                                <span
                                    className="inline-block w-8 h-px mr-3 align-middle"
                                    style={{ backgroundColor: currentSlide.accentColor }}
                                />
                                {currentSlide.eyebrow}
                            </motion.p>

                            {/* Heading */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.7 }}
                                className="font-heading text-cream mb-2"
                                style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", lineHeight: 1.05, fontWeight: 300 }}
                            >
                                {currentSlide.heading}
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                                className="font-heading mb-8"
                                style={{
                                    fontSize: "clamp(3.5rem, 8vw, 7rem)",
                                    lineHeight: 1.05,
                                    fontWeight: 400,
                                    fontStyle: "italic",
                                    color: currentSlide.accentColor,
                                }}
                            >
                                {currentSlide.subheading}
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.7 }}
                                className="text-cream/70 text-lg leading-relaxed mb-10 max-w-lg"
                            >
                                {currentSlide.description}
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="flex flex-wrap gap-4"
                            >
                                <Link to={currentSlide.ctaPath} className="btn-gold">
                                    {currentSlide.ctaLabel}
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    to={currentSlide.secondaryPath}
                                    className="inline-flex items-center gap-2 px-7 py-3.5 border border-cream/30 text-cream rounded-full text-sm font-body tracking-[0.1em] uppercase hover:bg-cream/10 hover:border-cream/60 transition-all duration-300"
                                >
                                    {currentSlide.secondaryLabel}
                                </Link>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Progress controls */}
                    <div className="mt-16 flex items-center gap-6">
                        <ProgressDots
                            count={slides.length}
                            active={activeIndex}
                            onSelect={setActiveIndex}
                        />
                        <span className="text-cream/40 text-xs tracking-widest">
                            {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                        </span>
                    </div>
                </div>
            </div>

            {/* Category toggle tabs — bottom right */}
            <div className="absolute bottom-10 right-8 z-10 hidden md:flex flex-col gap-2">
                {slides.map((slide, i) => (
                    <button
                        key={slide.id}
                        onClick={() => setActiveIndex(i)}
                        className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 text-right ${i === activeIndex
                                ? "text-cream font-medium"
                                : "text-cream/40 hover:text-cream/70"
                            }`}
                    >
                        {slide.eyebrow}
                    </button>
                ))}
            </div>
        </section>
    );
}
