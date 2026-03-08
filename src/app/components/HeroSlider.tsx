import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
    id: string;
    eyebrow: string;
    heading: string;
    headingItalic: string;
    description: string;
    ctaLabel: string;
    ctaPath: string;
    secondaryLabel: string;
    secondaryPath: string;
    accentColor: string;
    photo?: string;
}

const slides: HeroSlide[] = [
    {
        id: "skincare",
        eyebrow: "Skincare",
        heading: "Radiant Skin Is",
        headingItalic: "Within Reach.",
        description:
            "Understand your unique skin type, build an expert-crafted routine, and discover products formulated to deliver real, visible results.",
        ctaLabel: "Discover Your Skin Type",
        ctaPath: "/skincare/types",
        secondaryLabel: "Explore Products",
        secondaryPath: "/skincare/products",
        accentColor: "#5C2D3E",
        photo: "/images/heroSkinCareModel.png",
    },
    {
        id: "haircare",
        eyebrow: "Haircare",
        heading: "Beautiful Hair,",
        headingItalic: "By Design.",
        description:
            "Know your hair type, treat your scalp, and follow targeted routines with professional-grade products chosen for your strands.",
        ctaLabel: "Discover Your Hair Type",
        ctaPath: "/haircare/types",
        secondaryLabel: "Explore Products",
        secondaryPath: "/haircare/products",
        accentColor: "#5C2D3E",
        photo: "/images/hero-hairCare.png",
    },
];

const INTERVAL_MS = 9000;

export function HeroSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [direction, setDirection] = useState<1 | -1>(1);

    const goTo = useCallback((idx: number, dir: 1 | -1 = 1) => {
        setDirection(dir);
        setActiveIndex(idx);
    }, []);

    const advance = useCallback(() => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % slides.length);
    }, []);

    useEffect(() => {
        if (isPaused) return;
        const t = setTimeout(advance, INTERVAL_MS);
        return () => clearTimeout(t);
    }, [activeIndex, isPaused, advance]);

    const slide = slides[activeIndex];

    const textVariants = {
        enter: (d: number) => ({ opacity: 0, y: d > 0 ? 28 : -28 }),
        center: { opacity: 1, y: 0 },
        exit: (d: number) => ({ opacity: 0, y: d > 0 ? -18 : 18 }),
    };

    return (
        <section
            className="relative overflow-hidden"
            style={{
                minHeight: "100vh",
                /* ONE unified warm nude gradient — no split */
                background: "linear-gradient(135deg, #FDF8F3 0%, #F5EAE0 35%, #EDE0D4 65%, #E5D4C4 100%)",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* ── Full-page subtle dot texture ──────────────────────────────────── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle, ${slide.accentColor}18 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                }}
            />

            {/* ── Ambient background glows (float over unified bg, no hard edges) ── */}
            {/* Top-left warm glow */}
            <motion.div
                className="absolute rounded-full blur-3xl pointer-events-none"
                style={{ width: 500, height: 500, top: "-120px", left: "-100px", background: "rgba(240,218,195,0.55)" }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Bottom-right warm glow */}
            <motion.div
                className="absolute rounded-full blur-3xl pointer-events-none"
                style={{ width: 420, height: 420, bottom: "-80px", right: "-60px", background: "rgba(210,175,145,0.45)" }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
            {/* Centre atmospheric glow */}
            <motion.div
                className="absolute rounded-full blur-3xl pointer-events-none"
                style={{ width: 600, height: 400, top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(255,245,235,0.35)" }}
                animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            {/* ── Decorative rings — centred on the RIGHT half, not a separate panel ── */}
            <div
                className="absolute hidden lg:flex items-center justify-center pointer-events-none"
                style={{ top: 0, bottom: 0, right: 0, width: "48%" }}
            >
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ x: slide.id === "haircare" ? 0 : -50 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Outer ring */}
                    <motion.div
                        className="absolute rounded-full"
                        style={{ width: 480, height: 480, border: `1.5px solid ${slide.accentColor}40` }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Tick marks on outer ring */}
                    {[0, 90, 180, 270].map((angle, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                width: 6, height: 6,
                                borderRadius: "1px",
                                background: slide.accentColor,
                                opacity: 0.6,
                                top: "50%", left: "50%",
                                transformOrigin: "0 0",
                                transform: `rotate(${angle}deg) translate(237px, -3px)`,
                            }}
                        />
                    ))}

                    {/* Mid ring */}
                    <motion.div
                        className="absolute rounded-full"
                        style={{ width: 320, height: 320, border: `1px solid ${slide.accentColor}35` }}
                        animate={{ rotate: -360 }}
                        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Inner ring */}
                    <motion.div
                        className="absolute rounded-full"
                        style={{ width: 200, height: 200, border: `1px solid ${slide.accentColor}28` }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Pulsing centre jewel */}
                    <motion.div
                        className="absolute rounded-full"
                        style={{
                            width: 14, height: 14,
                            background: slide.accentColor,
                            boxShadow: `0 0 0 8px ${slide.accentColor}28, 0 0 36px 10px ${slide.accentColor}35`,
                        }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Floating orbs — with generous padding inside the ring area */}
                    <motion.div
                        className="absolute rounded-full"
                        style={{ width: 72, height: 72, background: `${slide.accentColor}50`, top: "18%", right: "22%" }}
                        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.div
                        className="absolute rounded-full"
                        style={{ width: 44, height: 44, background: `${slide.accentColor}40`, bottom: "22%", right: "30%" }}
                        animate={{ y: [0, -14, 0], scale: [1, 1.12, 1] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    />
                    <motion.div
                        className="absolute rounded-full"
                        style={{ width: 28, height: 28, background: `${slide.accentColor}35`, top: "58%", right: "14%" }}
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />

                    {/* Sparkle dots */}
                    {[
                        { x: "20%", y: "14%", s: 5, d: 0 },
                        { x: "78%", y: "20%", s: 4, d: 0.8 },
                        { x: "8%", y: "68%", s: 5, d: 1.4 },
                        { x: "82%", y: "70%", s: 4, d: 2.1 },
                        { x: "50%", y: "88%", s: 5, d: 0.4 },
                        { x: "35%", y: "8%", s: 4, d: 1.8 },
                        { x: "65%", y: "40%", s: 3, d: 2.6 },
                        { x: "42%", y: "55%", s: 3, d: 1.1 },
                        { x: "72%", y: "55%", s: 4, d: 3.2 },
                    ].map((dot, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full pointer-events-none sparkle-blink"
                            style={{
                                width: dot.s,
                                height: dot.s,
                                left: dot.x,
                                top: dot.y,
                                background: slide.accentColor,
                                animationDelay: `${dot.d}s`,
                            }}
                        />
                    ))}

                    {/* Shimmer lines */}
                    <motion.div
                        className="absolute pointer-events-none"
                        style={{
                            height: "1px", left: "10%", right: "10%", top: "30%",
                            background: `linear-gradient(90deg, transparent, ${slide.accentColor}65, transparent)`,
                            transformOrigin: "left",
                        }}
                        animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute pointer-events-none"
                        style={{
                            height: "1px", left: "18%", right: "18%", bottom: "28%",
                            background: `linear-gradient(90deg, transparent, ${slide.accentColor}50, transparent)`,
                            transformOrigin: "left",
                        }}
                        animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
                    />

                    {/* Category badge */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`tag-${slide.id}`}
                            className="absolute bottom-12 right-10 z-30 flex items-center gap-2 px-5 py-2.5 rounded-full"
                            style={{
                                background: "rgba(255,252,248,0.80)",
                                border: `1px solid ${slide.accentColor}45`,
                                backdropFilter: "blur(12px)",
                            }}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.span
                                className="w-2 h-2 rounded-full"
                                style={{ background: slide.accentColor }}
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <span className="text-xs uppercase tracking-[0.18em] font-medium font-body" style={{ color: slide.accentColor }}>
                                {slide.eyebrow}
                            </span>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
                {/* Photo — sits on top of decorations when provided */}
                {slide.photo && (
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={`photo-${slide.id}`}
                            src={slide.photo}
                            alt={`${slide.eyebrow} model`}
                            className="absolute select-none"
                            style={{
                                inset: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                objectPosition: "center",
                                padding: "5rem 3rem",
                                zIndex: 10,
                                filter: `drop-shadow(0 32px 60px rgba(0,0,0,0.10)) drop-shadow(0 6px 18px ${slide.accentColor}30)`,
                            }}
                            initial={{ opacity: 0, scale: 0.94, y: 24 }}
                            animate={{
                                opacity: 1,
                                scale: 1.1, // Increased size for both based on user request
                                y: 0,
                                x: slide.id === "haircare" ? -160 : -50 // Large shift for hair, small shift for skin
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                            draggable={false}
                        />
                    </AnimatePresence>
                )}
            </div>

            {/* ── Content: centred within the full-width single background ──────── */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
                    <div className="flex flex-col lg:flex-row items-center gap-16 pt-24 pb-16">

                        {/* Text block — centred on mobile, left-aligned on desktop */}
                        <div className="flex-1 flex justify-center lg:justify-start">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={`text-${slide.id}`}
                                    custom={direction}
                                    variants={{
                                        enter: (d: number) => ({ opacity: 0, y: d > 0 ? 28 : -28 }),
                                        center: { opacity: 1, y: 0 },
                                        exit: (d: number) => ({ opacity: 0, y: d > 0 ? -18 : 18 }),
                                    }}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                                    className="max-w-lg text-center lg:text-left"
                                >
                                    {/* Eyebrow */}
                                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                                        <motion.div
                                            style={{ height: "1px", background: slide.accentColor, width: 32, originX: 0 }}
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.5, delay: 0.15 }}
                                        />
                                        <span className="text-xs uppercase tracking-[0.3em] font-body font-medium text-hero-gold">
                                            {slide.eyebrow}
                                        </span>
                                    </div>

                                    <h1 className="font-heading text-espresso mb-1"
                                        style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)", lineHeight: 1.06, fontWeight: 300 }}>
                                        {slide.heading}
                                    </h1>
                                    <h1 className="font-heading mb-7 text-hero-gold"
                                        style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)", lineHeight: 1.06, fontWeight: 500, fontStyle: "italic" }}>
                                        {slide.headingItalic}
                                    </h1>

                                    <p className="text-mink text-base leading-relaxed mb-10 max-w-sm mx-auto lg:mx-0">
                                        {slide.description}
                                    </p>

                                    {/* CTAs */}
                                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
                                        <Link to={slide.ctaPath} className="btn-wine">
                                            {slide.ctaLabel} <ArrowRight className="w-4 h-4" />
                                        </Link>
                                        <Link to={slide.secondaryPath} className="btn-outline">
                                            {slide.secondaryLabel}
                                        </Link>
                                    </div>

                                    {/* Slide controls */}
                                    <div className="flex items-center justify-center lg:justify-start gap-4">
                                        <button onClick={() => goTo((activeIndex - 1 + slides.length) % slides.length, -1)}
                                            className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-105"
                                            style={{ borderColor: `${slide.accentColor}60`, color: slide.accentColor }} aria-label="Previous">
                                            <ChevronLeft className="w-4 h-4" />
                                        </button>
                                        <div className="flex items-center gap-2">
                                            {slides.map((s, i) => (
                                                <button key={s.id} onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
                                                    className="relative h-0.5 rounded-full overflow-hidden transition-all duration-300"
                                                    style={{ width: i === activeIndex ? 36 : 14, background: `${slide.accentColor}28` }}
                                                    aria-label={`Slide ${i + 1}`}>
                                                    {i === activeIndex && (
                                                        <motion.div key={`prog-${activeIndex}`}
                                                            className="absolute inset-y-0 left-0 rounded-full"
                                                            style={{ background: slide.accentColor }}
                                                            initial={{ width: "0%" }} animate={{ width: "100%" }}
                                                            transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }} />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                        <button onClick={() => goTo((activeIndex + 1) % slides.length, 1)}
                                            className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-105"
                                            style={{ borderColor: `${slide.accentColor}60`, color: slide.accentColor }} aria-label="Next">
                                            <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Right visual area placeholder — decorative rings live in the absolute layer above */}
                        {/* This spacer keeps the two-column layout balanced on desktop */}
                        <div className="hidden lg:block flex-shrink-0" style={{ width: "44%" }} />
                    </div>
                </div>
            </div>
        </section>
    );
}
