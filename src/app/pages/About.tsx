import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { TeamMemberCard } from "../components/TeamMemberCard";
import { teamMembers } from "../data/team";

export function About() {
    const leader = teamMembers.find((m) => m.isLeader);
    const members = teamMembers.filter((m) => !m.isLeader);

    const values = [
        {
            title: "Evidence-Based",
            description: "Every recommendation is grounded in peer-reviewed research. We never prioritise trends over science.",
        },
        {
            title: "Transparent",
            description: "Full ingredient transparency, clear medical data, and no sponsored product placements.",
        },
        {
            title: "Inclusive",
            description: "We design for all skin types, hair textures, tones, and backgrounds — beauty has no single definition.",
        },
        {
            title: "Accessible",
            description: "Expert knowledge presented clearly for everyone — from curious beginners to trained professionals.",
        },
    ];

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* ── Header ─────────────────────────────────────────────────── */}
                <SectionHeader
                    label="About the Project"
                    title="Faculty of"
                    titleHighlight="Pharmacy."
                    subtitle="A professional graduation project by the Pharmacist Team at MTI College, dedicated to clinical precision in beauty and health."
                />

                {/* ── MTI College Section ─────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 mb-20 flex flex-col items-center text-center"
                >
                    <div className="w-40 h-40 mb-6 rounded-2xl flex items-center justify-center border border-gold/20 shadow-2xl overflow-hidden bg-white">
                        <img
                            src="/images/team/mti_logo.jpeg"
                            alt="MTI University Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h3 className="text-wine-dark font-heading text-2xl mb-2">MTI University</h3>
                    <p className="text-taupe text-sm max-w-md">Modern University for Technology & Information</p>
                </motion.div>

                {/* ── Team Grid ──────────────────────────────────────────────── */}
                <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, i) => (
                        <TeamMemberCard key={member.id} member={member} index={i} />
                    ))}
                </div>

                {/* ── Mission Statement ───────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 bg-wine-dark border border-gold/20 rounded-2xl p-10 md:p-14 shadow-2xl relative overflow-hidden"
                >
                    {/* Subtle decorative glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] -mr-32 -mt-32 rounded-full" />

                    <div className="max-w-3xl mx-auto text-center relative z-10">
                        <p className="text-xs uppercase tracking-[0.25em] text-gold-light mb-6 font-medium">Research Project</p>
                        <h2 className="font-heading text-cream mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            Clinical Intelligence in Cosmetics
                        </h2>
                        <div className="section-divider mx-auto mb-10 w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                        <p className="text-cream/90 leading-relaxed mb-6 text-base md:text-lg">
                            This platform represents the culmination of our research into dermatological and trichological sciences. We identified a critical gap between clinical knowledge and consumer understanding.
                        </p>
                        <p className="text-cream/90 leading-relaxed text-base md:text-lg">
                            As a team of pharmacists from <strong className="font-medium text-gold-light">MTI College</strong>, we built LumeGuide to provide a professional, evidence-based resource that empowers users to make informed decisions about their skin and hair health through pharmacological accuracy.
                        </p>
                    </div>
                </motion.div>

                {/* ── Values ─────────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-28"
                >
                    <SectionHeader
                        label="Our Principles"
                        title="Pharmacist"
                        titleHighlight="Standards."
                    />

                    <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="luxury-card p-8 text-center bg-white border-wine/10"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-wine mx-auto mb-6 flex items-center justify-center shadow-lg shadow-wine/20">
                                    <span className="text-gold-light text-xl">✦</span>
                                </div>
                                <h4 className="font-heading text-wine-dark text-2xl mb-4 font-medium">{value.title}</h4>
                                <p className="text-mink text-base leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Feedback CTA ─────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 bg-wine border border-wine-light/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
                >
                    {/* Animated background element */}
                    <div className="absolute inset-0 bg-gradient-to-br from-wine-dark/40 via-transparent to-wine/40 opacity-50" />

                    <div className="relative z-10">
                        <p className="text-xs uppercase tracking-[0.3em] text-gold/60 mb-6 font-semibold">Community Impact</p>
                        <h3 className="font-heading text-cream mb-6 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                            Share Your Feedback
                        </h3>
                        <p className="text-cream/80 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed font-light">
                            As part of our graduation project, your feedback is vital. Please help us evaluate the impact of this resource by participating in our research survey.
                        </p>
                        <a
                            href="#" // REPLACE WITH SURVEY LINK
                            className="btn-wine scale-110 hover:scale-115 transition-transform duration-300"
                        >
                            Take Survey
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
