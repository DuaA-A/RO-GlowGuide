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
                    label="About Us"
                    title="The Team Behind"
                    titleHighlight="LumeGuide."
                    subtitle="A multidisciplinary team united by a single purpose: making expert skincare and haircare knowledge accessible, beautiful, and clinically sound."
                />

                {/* ── Team Leader ────────────────────────────────────────────── */}
                {leader && (
                    <div className="mt-16 flex justify-center">
                        <div className="w-full max-w-sm">
                            <TeamMemberCard member={leader} />
                        </div>
                    </div>
                )}

                {/* ── Team Grid ──────────────────────────────────────────────── */}
                <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    {members.map((member, i) => (
                        <TeamMemberCard key={member.id} member={member} index={i} />
                    ))}
                </div>

                {/* ── Mission Statement ───────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-24 bg-linen border border-warm-beige rounded-2xl p-10 md:p-14"
                >
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-xs uppercase tracking-[0.25em] text-gold mb-6">Our Story</p>
                        <h2 className="font-heading text-espresso mb-6" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
                            Why We Built LumeGuide
                        </h2>
                        <div className="section-divider mx-auto mb-8" />
                        <p className="text-mink leading-relaxed mb-5 text-sm">
                            We noticed that navigating skincare and haircare can be genuinely overwhelming — conflicting advice, ingredient confusion, and a market driven by aesthetics over science.
                        </p>
                        <p className="text-mink leading-relaxed mb-5 text-sm">
                            <strong className="font-medium text-espresso">LumeGuide</strong> was built to change that. We combine clinical precision with elegant, accessible design to create a resource that anyone can use — whether you're discovering your skin type for the first time, or a medical professional seeking detailed ingredient data.
                        </p>
                        <p className="text-mink leading-relaxed text-sm">
                            Every guide, product profile, and routine we publish is reviewed for accuracy and presented honestly. Our mission is to empower, not to sell.
                        </p>
                    </div>
                </motion.div>

                {/* ── Values ─────────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <SectionHeader
                        label="What We Stand For"
                        title="Our Core"
                        titleHighlight="Values."
                    />

                    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="luxury-card p-7 text-center"
                            >
                                <div className="w-10 h-10 rounded-xl bg-espresso mx-auto mb-5 flex items-center justify-center">
                                    <span className="text-gold text-sm">✦</span>
                                </div>
                                <h4 className="font-heading text-espresso text-xl mb-3">{value.title}</h4>
                                <p className="text-taupe text-sm leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ── Contact CTA ─────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 bg-espresso rounded-2xl p-10 md:p-14 text-center"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-cream/40 mb-4">Get in Touch</p>
                    <h3 className="font-heading text-cream mb-4">Have Questions or Feedback?</h3>
                    <p className="text-cream/60 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
                        We love hearing from our community — whether you have a question, a collaboration idea, or simply want to share your experience.
                    </p>
                    <a
                        href="mailto:hello@lumeguide.com"
                        className="btn-gold inline-flex items-center gap-2"
                    >
                        Contact Us
                    </a>
                </motion.div>

            </div>
        </div>
    );
}
