import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router";
import { ArrowRight, Shield, Sparkle, Leaf, Microscope } from "lucide-react";
import { HeroSlider } from "../components/HeroSlider";
import { SectionHeader } from "../components/SectionHeader";

const features = [
  {
    icon: Microscope,
    title: "Science-Backed",
    description:
      "Every recommendation is grounded in peer-reviewed dermatological and trichological research — not trends.",
    color: "#9E7B4F",
    bg: "rgba(190,155,112,0.18)",
    hoverBg: "rgba(190,155,112,0.34)",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "We prioritise gentle, effective formulas with transparent ingredient profiling and medical contraindication data.",
    color: "#B87070",
    bg: "rgba(215,155,140,0.18)",
    hoverBg: "rgba(215,155,140,0.36)",
  },
  {
    icon: Leaf,
    title: "Holistic Approach",
    description:
      "We address skin and hair holistically — types, conditions, routines, and targeted products in one place.",
    color: "#6B8C6B",
    bg: "rgba(150,180,150,0.18)",
    hoverBg: "rgba(150,180,150,0.34)",
  },
  {
    icon: Sparkle,
    title: "Expert Curated",
    description:
      "Our multidisciplinary team curates content that bridges medical accuracy with practical everyday use.",
    color: "#A87850",
    bg: "rgba(200,165,120,0.20)",
    hoverBg: "rgba(200,165,120,0.38)",
  },
];

const offers = [
  {
    number: "01",
    title: "Skin & Hair Type Education",
    description:
      "Detailed guides on skin types, acne conditions, hair types, and scalp conditions — with characteristics and care tips for each.",
    link: "/skincare/types",
    accent: "#9E7B4F",
    bg: "rgba(190,155,112,0.14)",
    hoverBg: "rgba(190,155,112,0.28)",
  },
  {
    number: "02",
    title: "Targeted Routines",
    description:
      "Step-by-step morning and evening routines for every skin and hair type, from basic maintenance to intensive care.",
    link: "/skincare/solutions",
    accent: "#B87070",
    bg: "rgba(210,150,140,0.14)",
    hoverBg: "rgba(210,150,140,0.28)",
  },
  {
    number: "03",
    title: "Product Catalogue",
    description:
      "A curated, searchable catalogue of skincare and haircare products with complete ingredient, benefit, and medical detail pages.",
    link: "/skincare/products",
    accent: "#6B8C6B",
    bg: "rgba(145,175,145,0.14)",
    hoverBg: "rgba(145,175,145,0.28)",
  },
  {
    number: "04",
    title: "Medical Details",
    description:
      "Every product includes an expandable clinical section with mechanism of action, contraindications, and safety data for professionals.",
    link: "/about",
    accent: "#A87850",
    bg: "rgba(195,158,112,0.14)",
    hoverBg: "rgba(195,158,112,0.28)",
  },
];

// Marquee ticker items
const TICKER = [
  "Skincare", "✦", "Haircare", "✦", "Routines", "✦",
  "Products", "✦", "Expert Guides", "✦", "Evidence-Based", "✦",
  "Skincare", "✦", "Haircare", "✦", "Routines", "✦",
  "Products", "✦", "Expert Guides", "✦", "Evidence-Based", "✦",
];

function MarqueeTicker() {
  return (
    <div className="overflow-hidden py-3 border-y border-warm-beige bg-ivory select-none">
      <motion.div
        className="flex items-center gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {TICKER.map((item, i) => (
          <span
            key={i}
            className={`text-xs uppercase tracking-[0.22em] flex-shrink-0 ${item === "✦" ? "text-gold" : "text-taupe"
              }`}
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// Floating orb for visual depth
function FloatOrb({
  size,
  color,
  style,
}: {
  size: number;
  color: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, background: color, ...style }}
      animate={{ y: [0, -18, 0], scale: [1, 1.04, 1] }}
      transition={{ duration: 6 + size * 0.02, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

export function Home() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const ctaY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <HeroSlider />

      {/* ── Marquee ticker ───────────────────────────────────────────────── */}
      <MarqueeTicker />

      {/* ── Two Worlds Section ───────────────────────────────────────────── */}
      <section className="py-28 bg-ivory relative overflow-hidden">
        {/* Soft floating orbs for depth */}
        <FloatOrb size={340} color="#F0DDD130" style={{ top: "-80px", left: "-100px" }} />
        <FloatOrb size={220} color="#D0DAC930" style={{ bottom: "-60px", right: "-60px" }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="Our Expertise"
            title="One Platform,"
            titleHighlight="Two Worlds."
            subtitle="Whether you're navigating a complex skincare concern or building a transformative hair routine, RO brings clinical expertise and elegant guidance together in one beautifully structured space."
          />

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {/* Skincare card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative rounded-2xl overflow-hidden border border-warm-beige"
              style={{ minHeight: 340 }}
            >
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #F5E8DF 0%, #EDD5C8 100%)" }} />
              <motion.div
                className="absolute inset-0"
                style={{ backgroundImage: "radial-gradient(ellipse at 80% 20%, #C9A87C18 0%, transparent 60%)" }}
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Shimmer line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, #C9A87C70, transparent)" }}
                animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              <div className="relative z-10 p-10 h-full flex flex-col justify-between" style={{ minHeight: 340 }}>
                <div>
                  <span className="badge-skincare inline-block mb-4">Skincare</span>
                  <h3
                    className="font-heading text-espresso mb-4"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontStyle: "italic" }}
                  >
                    Radiant, Healthy Skin
                  </h3>
                  <p className="text-mink text-sm leading-relaxed max-w-sm">
                    From skin types and conditions to targeted solutions and product discoveries — your complete skincare companion.
                  </p>
                </div>
                <Link
                  to="/skincare/types"
                  className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.15em] hover:gap-4 transition-all duration-300 font-medium"
                >
                  Explore Skincare
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Haircare card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="group relative rounded-2xl overflow-hidden border border-warm-beige"
              style={{ minHeight: 340 }}
            >
              <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #E8EDE4 0%, #D8E3D4 100%)" }} />
              <motion.div
                className="absolute inset-0"
                style={{ backgroundImage: "radial-gradient(ellipse at 20% 80%, #A8907E18 0%, transparent 60%)" }}
                animate={{ opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              />
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, #A8907E60, transparent)" }}
                animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
              />
              <div className="relative z-10 p-10 h-full flex flex-col justify-between" style={{ minHeight: 340 }}>
                <div>
                  <span className="badge-haircare inline-block mb-4">Haircare</span>
                  <h3
                    className="font-heading text-espresso mb-4"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontStyle: "italic" }}
                  >
                    Thriving, Beautiful Hair
                  </h3>
                  <p className="text-mink text-sm leading-relaxed max-w-sm">
                    Hair types, scalp conditions, targeted routines, and expertly chosen products — everything your hair needs.
                  </p>
                </div>
                <Link
                  to="/haircare/types"
                  className="inline-flex items-center gap-2 text-mink text-xs uppercase tracking-[0.15em] hover:gap-4 hover:text-gold transition-all duration-300 font-medium"
                >
                  Explore Haircare
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features / Why RO ────────────────────────────────────────────── */}
      <section className="py-28 bg-cream relative overflow-hidden">
        <FloatOrb size={280} color="#E2C99A18" style={{ top: "20%", right: "-80px" }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="Why RO"
            title="The Standard"
            titleHighlight="of Care."
            subtitle="We combine clinical rigour with approachable, beautifully designed guidance — so every user finds what they need, whether casual or professional."
          />

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-7 group relative overflow-hidden rounded-2xl border border-transparent cursor-default"
                  style={{ background: feature.bg, transition: "background 0.3s ease" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = feature.hoverBg; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = feature.bg; }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${feature.color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: feature.color }} />
                  </div>
                  <h4 className="font-heading text-espresso text-xl mb-3">{feature.title}</h4>
                  <p className="text-mink text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Stats band ───────────────────────────────────────────────────── */}
      <section className="py-14 bg-cream border-y border-warm-beige">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: "50+", label: "Products Curated" },
            { value: "12", label: "Skin & Hair Types" },
            { value: "30+", label: "Expert Routines" },
            { value: "100%", label: "Science-Backed" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <p
                className="font-heading text-espresso mb-1"
                style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontStyle: "italic", fontWeight: 300 }}
              >
                {stat.value}
              </p>
              <p className="text-taupe text-xs uppercase tracking-[0.18em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── What We Offer ────────────────────────────────────────────────── */}
      <section className="py-28 bg-ivory relative overflow-hidden">
        <FloatOrb size={300} color="#F0DDD120" style={{ bottom: 0, left: "-80px" }} />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="What We Offer"
            title="Complete"
            titleHighlight="Guidance."
            subtitle="From foundational knowledge to expert product selection — an end-to-end resource for both skincare and haircare."
          />

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {offers.map((offer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <Link to={offer.link} className="block h-full">
                  <motion.div
                    className="p-8 relative overflow-hidden rounded-2xl h-full"
                    style={{ background: offer.bg, transition: "background 0.3s ease" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = offer.hoverBg; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = offer.bg; }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-start gap-5 relative">
                      <div
                        className="text-4xl font-heading font-thin leading-none flex-shrink-0 mt-1"
                        style={{ color: offer.accent }}
                      >
                        {offer.number}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading text-espresso text-xl mb-3 hover:text-gold transition-colors duration-200">
                          {offer.title}
                        </h4>
                        <p className="text-mink text-sm leading-relaxed">{offer.description}</p>
                        <div className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em]" style={{ color: offer.accent }}>
                          Learn more <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #F0DDD1 0%, #F3EDE4 40%, #E8EDE4 100%)" }} ref={ctaRef}>
        {/* Subtle animated glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #C9A87C20 0%, transparent 50%), radial-gradient(circle at 80% 20%, #D0DAC930 0%, transparent 50%)",
            y: ctaY,
          }}
        />
        {/* Decorative rings */}
        <motion.div
          className="absolute rounded-full border pointer-events-none"
          style={{ width: 500, height: 500, top: "50%", left: "50%", x: "-50%", y: "-50%", borderColor: "#C9A87C18" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute rounded-full border pointer-events-none"
          style={{ width: 340, height: 340, top: "50%", left: "50%", x: "-50%", y: "-50%", borderColor: "#A8907E14" }}
          animate={{ rotate: -360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-taupe mb-5">Begin Your Journey</p>
            <h2
              className="font-heading text-espresso mb-6"
              style={{ fontWeight: 300, letterSpacing: "0.02em" }}
            >
              Discover What Your{" "}
              <span className="italic" style={{ color: "#9E7B4F" }}>Skin & Hair</span>{" "}
              Truly Needs
            </h2>
            <p className="text-mink text-lg leading-relaxed mb-10">
              Start with understanding your skin type or hair type, then build your personalised routine from science-backed foundations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/skincare/types" className="btn-gold">
                Explore Skincare
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/haircare/types" className="btn-outline">
                Explore Haircare
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
