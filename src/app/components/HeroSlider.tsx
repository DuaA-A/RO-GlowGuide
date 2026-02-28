import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroSlide {
  id: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  description: string;
  ctaLabel: string;
  ctaPath: string;
  secondaryLabel: string;
  secondaryPath: string;
  accentColor: string;
  bgFrom: string;
  bgTo: string;
  // 📸 NOTE FOR USER: Changed back to Unsplash as previous HTML page URLs were invalid/broken.
  photo: string;
  icons: { emoji: string; label: string }[];
}

const slides: HeroSlide[] = [
  {
    id: "skincare",
    eyebrow: "Skincare",
    heading: "Your Skin,",
    subheading: "Perfected.",
    description:
      "Discover your skin type, understand your skin's unique needs, and explore science-backed products crafted for your complexion.",
    ctaLabel: "Discover Your Skin Type",
    ctaPath: "/skincare/types",
    secondaryLabel: "Explore Products",
    secondaryPath: "/skincare/products",
    accentColor: "#C9A87C",
    bgFrom: "#FDF9F6",
    bgTo: "#FAF0E8",
    photo:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=700&q=85&fit=crop&crop=face,center",
    icons: [
      { emoji: "💧", label: "Hydration" },
      { emoji: "🌿", label: "Natural" },
      { emoji: "✨", label: "Glow" },
      { emoji: "🌸", label: "Gentle" },
      { emoji: "🔬", label: "Science" },
      { emoji: "🍯", label: "Nourish" },
    ],
  },
  {
    id: "haircare",
    eyebrow: "Haircare",
    heading: "Your Hair,",
    subheading: "Transformed.",
    description:
      "Understand your hair type and scalp health, unlock targeted routines, and find professional-grade products tailored to your strands.",
    ctaLabel: "Discover Your Hair Type",
    ctaPath: "/haircare/types",
    secondaryLabel: "Explore Products",
    secondaryPath: "/haircare/products",
    accentColor: "#A8907E",
    bgFrom: "#FDF9F6",
    bgTo: "#F2EDE7",
    photo:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&q=85&fit=crop&crop=face,center",
    icons: [
      { emoji: "🌿", label: "Botanical" },
      { emoji: "💆", label: "Scalp Care" },
      { emoji: "✨", label: "Shine" },
      { emoji: "🌺", label: "Floral" },
      { emoji: "💎", label: "Luxury" },
      { emoji: "🧴", label: "Treatment" },
    ],
  },
];

const INTERVAL_MS = 9000;

// Positions where icons orbit around the photo circle
const ORBIT_POSITIONS = [
  { angle: 30, radius: 0.56 },
  { angle: 100, radius: 0.54 },
  { angle: 160, radius: 0.57 },
  { angle: 220, radius: 0.55 },
  { angle: 280, radius: 0.56 },
  { angle: 340, radius: 0.54 },
];

function FloatingBeautyIcon({
  emoji,
  label,
  posX,
  posY,
  delay,
  accentColor,
}: {
  emoji: string;
  label: string;
  posX: string;
  posY: string;
  delay: number;
  accentColor: string;
}) {
  return (
    <motion.div
      className="absolute flex flex-col items-center gap-1 pointer-events-none"
      style={{ left: posX, top: posY, transform: "translate(-50%, -50%)" }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="w-11 h-11 rounded-full flex items-center justify-center shadow-md text-xl backdrop-blur-sm"
        style={{
          background: "rgba(255,255,255,0.92)",
          border: `1.5px solid ${accentColor}40`,
          boxShadow: `0 4px 20px ${accentColor}25`,
        }}
        animate={{ y: [0, -7, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {emoji}
      </motion.div>
      <motion.span
        className="text-[9px] uppercase tracking-[0.12em] font-body"
        style={{ color: accentColor, opacity: 0.8 }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
}

function SlidePhoto({ slide }: { slide: HeroSlide }) {
  const panelW = 450;
  const panelH = 580;
  const cx = panelW / 2;
  const cy = panelH / 2 - 20;
  const maxR = Math.min(panelW, panelH) * 0.5;

  return (
    <div className="relative" style={{ width: panelW, height: panelH }}>
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: maxR * 1.6,
          height: maxR * 1.6,
          top: cy - maxR * 0.8,
          left: cx - maxR * 0.8,
          background: `radial-gradient(circle, ${slide.accentColor}22 0%, transparent 70%)`,
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: maxR * 1.3,
          height: maxR * 1.3,
          top: cy - maxR * 0.65,
          left: cx - maxR * 0.65,
          border: `1px dashed ${slide.accentColor}50`,
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: maxR * 1.1,
          height: maxR * 1.1,
          top: cy - maxR * 0.55,
          left: cx - maxR * 0.55,
          border: `1.5px solid ${slide.accentColor}30`,
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <div
        className="absolute overflow-hidden rounded-full shadow-[0_20px_80px_rgba(0,0,0,0.10)]"
        style={{
          width: maxR * 0.92,
          height: maxR * 0.92,
          top: cy - maxR * 0.46,
          left: cx - maxR * 0.46,
          border: `3px solid rgba(255,255,255,0.9)`,
        }}
      >
        <img
          src={slide.photo}
          alt={slide.eyebrow}
          className="w-full h-full object-cover object-top"
        />
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at 50% 80%, ${slide.accentColor}18 0%, transparent 60%)`,
          }}
        />
      </div>
      <AnimatePresence mode="wait">
        {slide.icons.map((icon, i) => {
          const { angle, radius } = ORBIT_POSITIONS[i] || { angle: i * 60, radius: 0.55 };
          const rad = (angle * Math.PI) / 180;
          const px = cx + Math.cos(rad) * maxR * radius;
          const py = cy + Math.sin(rad) * maxR * radius;
          return (
            <FloatingBeautyIcon
              key={`${slide.id}-${i}`}
              emoji={icon.emoji}
              label={icon.label}
              posX={`${(px / panelW) * 100}%`}
              posY={`${(py / panelH) * 100}%`}
              delay={i * 0.12}
              accentColor={slide.accentColor}
            />
          );
        })}
      </AnimatePresence>
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * 360;
        const rad = (angle * Math.PI) / 180;
        const r = maxR * 0.68;
        return (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: 4,
              height: 4,
              background: slide.accentColor,
              opacity: 0.35,
              left: cx + Math.cos(rad) * r - 2,
              top: cy + Math.sin(rad) * r - 2,
            }}
            animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.4, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
          />
        );
      })}
    </div>
  );
}

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
    const timer = setTimeout(advance, INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [activeIndex, isPaused, advance]);

  const slide = slides[activeIndex];

  const contentVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -32 : 32 }),
  };

  return (
    <section
      className="relative min-h-[105vh] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={`bg-${slide.id}`}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${slide.bgFrom} 0%, ${slide.bgTo} 60%, #F5EDE5 100%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #4A3728 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-6">
          <div className="flex-1 min-w-0 lg:max-w-[52%]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`text-${slide.id}`}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-px w-8" style={{ background: slide.accentColor }} />
                  <p
                    className="text-xs uppercase tracking-[0.35em] font-body font-medium"
                    style={{ color: slide.accentColor }}
                  >
                    {slide.eyebrow}
                  </p>
                </div>
                <h1
                  className="font-heading text-espresso mb-1"
                  style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1.04, fontWeight: 300 }}
                >
                  {slide.heading}
                </h1>
                <h1
                  className="font-heading mb-7"
                  style={{
                    fontSize: "clamp(3rem, 7vw, 6rem)",
                    lineHeight: 1.04,
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: slide.accentColor,
                  }}
                >
                  {slide.subheading}
                </h1>
                <p className="text-base leading-relaxed mb-10 max-w-md" style={{ color: "#836B58" }}>
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-14">
                  <Link to={slide.ctaPath} className="btn-gold">
                    {slide.ctaLabel}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to={slide.secondaryPath} className="btn-outline">
                    {slide.secondaryLabel}
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => goTo((activeIndex - 1 + slides.length) % slides.length, -1)}
                    className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-105"
                    style={{ borderColor: `${slide.accentColor}60`, color: slide.accentColor }}
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="flex items-center gap-2">
                    {slides.map((s, i) => (
                      <button
                        key={s.id}
                        onClick={() => goTo(i, i > activeIndex ? 1 : -1)}
                        className="relative h-0.5 rounded-full overflow-hidden transition-all duration-400"
                        style={{
                          width: i === activeIndex ? 40 : 16,
                          background: i === activeIndex ? "transparent" : `${slide.accentColor}30`,
                        }}
                      >
                        {i === activeIndex && (
                          <motion.div
                            key={`prog-${activeIndex}`}
                            className="absolute inset-y-0 left-0 rounded-full"
                            style={{ background: slide.accentColor }}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => goTo((activeIndex + 1) % slides.length, 1)}
                    className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 hover:scale-105"
                    style={{ borderColor: `${slide.accentColor}60`, color: slide.accentColor }}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex-shrink-0 hidden lg:flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={`photo-${slide.id}`}
                initial={{ opacity: 0, scale: 0.92, x: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              >
                <SlidePhoto slide={slide} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
