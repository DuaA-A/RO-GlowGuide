import { motion } from "motion/react";
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
    category: "both",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "We prioritise gentle, effective formulas with transparent ingredient profiling and medical contraindication data.",
    category: "skincare",
  },
  {
    icon: Leaf,
    title: "Holistic Approach",
    description:
      "We address skin and hair holistically — types, conditions, routines, and targeted products in one place.",
    category: "haircare",
  },
  {
    icon: Sparkle,
    title: "Expert Curated",
    description:
      "Our multidisciplinary team of specialists curates content that bridges medical accuracy with practical everyday use.",
    category: "both",
  },
];

const offers = [
  {
    number: "01",
    title: "Skin & Hair Type Education",
    description:
      "Detailed guides on skin types, acne conditions, hair types, and scalp conditions — with characteristics and care tips for each.",
    link: "/skincare/types",
    accent: "#E8D5C4",
  },
  {
    number: "02",
    title: "Targeted Routines",
    description:
      "Step-by-step morning and evening routines for every skin and hair type, from basic maintenance to intensive care.",
    link: "/skincare/solutions",
    accent: "#D9CFC3",
  },
  {
    number: "03",
    title: "Product Catalogue",
    description:
      "A curated, searchable catalogue of skincare and haircare products with complete ingredient, benefit, and medical detail pages.",
    link: "/skincare/products",
    accent: "#C5CEC0",
  },
  {
    number: "04",
    title: "Medical Details",
    description:
      "Every product includes an expandable clinical section with mechanism of action, contraindications, and safety data for professionals.",
    link: "/about",
    accent: "#C4B5A0",
  },
];

export function Home() {
  return (
    <div className="overflow-hidden">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <HeroSlider />

      {/* ── Two Worlds Section ───────────────────────────────────────────── */}
      <section className="py-28 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="Our Expertise"
            title="One Platform,"
            titleHighlight="Two Worlds."
            subtitle="Whether you're navigating a complex skincare concern or building a transformative hair routine, LumeGuide brings clinical expertise and elegant guidance together in one beautifully structured space."
          />

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {/* Skincare card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden"
              style={{ minHeight: 340 }}
            >
              {/* Bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-espresso to-mink" />
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at 70% 30%, #E8D5C4 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10 p-10 h-full flex flex-col justify-between" style={{ minHeight: 340 }}>
                <div>
                  <span className="badge-skincare inline-block mb-4">Skincare</span>
                  <h3
                    className="font-heading text-cream mb-4"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontStyle: "italic" }}
                  >
                    Radiant, Healthy Skin
                  </h3>
                  <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
                    From skin types and conditions to targeted solutions and product discoveries — your complete skincare companion.
                  </p>
                </div>
                <Link
                  to="/skincare/types"
                  className="inline-flex items-center gap-2 text-blush text-xs uppercase tracking-[0.15em] hover:gap-4 transition-all duration-300 group/link"
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
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden"
              style={{ minHeight: 340 }}
            >
              {/* Bg */}
              <div className="absolute inset-0" style={{ background: "#2E3A2D" }} />
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at 30% 70%, #C5CEC0 0%, transparent 60%)",
                }}
              />
              <div className="relative z-10 p-10 h-full flex flex-col justify-between" style={{ minHeight: 340 }}>
                <div>
                  <span className="badge-haircare inline-block mb-4">Haircare</span>
                  <h3
                    className="font-heading text-cream mb-4"
                    style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontStyle: "italic" }}
                  >
                    Thriving, Beautiful Hair
                  </h3>
                  <p className="text-cream/70 text-sm leading-relaxed max-w-sm">
                    Hair types, scalp conditions, targeted routines, and expertly chosen products — everything your hair needs.
                  </p>
                </div>
                <Link
                  to="/haircare/types"
                  className="inline-flex items-center gap-2 text-sage text-xs uppercase tracking-[0.15em] hover:gap-4 transition-all duration-300"
                >
                  Explore Haircare
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features / Why LumeGuide ─────────────────────────────────────── */}
      <section className="py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <SectionHeader
            label="Why LumeGuide"
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="luxury-card p-7 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-linen flex items-center justify-center mb-5 group-hover:bg-espresso transition-colors duration-300">
                    <Icon className="w-5 h-5 text-gold group-hover:text-gold transition-colors" />
                  </div>
                  <h4 className="font-heading text-espresso text-xl mb-3">{feature.title}</h4>
                  <p className="text-taupe text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What We Offer ────────────────────────────────────────────────── */}
      <section className="py-28 bg-linen">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
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
                className="group"
              >
                <Link to={offer.link} className="block">
                  <div className="luxury-card p-8 group-hover:border-gold transition-colors duration-300">
                    <div className="flex items-start gap-5">
                      <div
                        className="text-4xl font-heading font-thin leading-none flex-shrink-0 mt-1"
                        style={{ color: offer.accent }}
                      >
                        {offer.number}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-heading text-espresso text-xl mb-3 group-hover:text-gold transition-colors duration-200">
                          {offer.title}
                        </h4>
                        <p className="text-taupe text-sm leading-relaxed">{offer.description}</p>
                        <div className="mt-4 inline-flex items-center gap-2 text-xs text-taupe uppercase tracking-[0.12em] group-hover:text-gold transition-colors duration-200">
                          Learn more <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────────────────────────── */}
      <section className="py-28 bg-espresso relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, #D4B483 0%, transparent 50%), radial-gradient(circle at 80% 20%, #E8D5C4 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-cream/40 mb-5">Begin Your Journey</p>
            <h2
              className="font-heading text-cream mb-6"
              style={{ fontWeight: 300, letterSpacing: "0.02em" }}
            >
              Discover What Your{" "}
              <span className="italic text-gold-gradient">Skin & Hair</span>{" "}
              Truly Needs
            </h2>
            <p className="text-cream/60 text-lg leading-relaxed mb-10">
              Start with understanding your skin type or hair type, then build your personalised routine from science-backed foundations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/skincare/types" className="btn-gold">
                Explore Skincare
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/haircare/types" className="btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)", color: "#FAF7F4" }}>
                Explore Haircare
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
