import { motion } from "motion/react";
import { SectionHeader } from "../components/SectionHeader";
import { TeamMemberCard } from "../components/TeamMemberCard";
import { teamMembers } from "../data/team";
import { useLanguage } from "../context/LanguageContext";

export function About() {
    const { t, isAr } = useLanguage();
    const leader = teamMembers.find((m) => m.isLeader);
    const members = teamMembers.filter((m) => !m.isLeader);

    const values = [
        {
            title: t("about.value1.title"),
            description: t("about.value1.desc"),
        },
        {
            title: t("about.value2.title"),
            description: t("about.value2.desc"),
        },
        {
            title: t("about.value3.title"),
            description: t("about.value3.desc"),
        },
        {
            title: t("about.value4.title"),
            description: t("about.value4.desc"),
        },
    ];

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* ── Header ─────────────────────────────────────────────────── */}
                <SectionHeader
                    label={t("about.header.label")}
                    title={t("about.header.title")}
                    titleHighlight={t("about.header.titleHighlight")}
                    subtitle={t("about.header.subtitle")}
                />

                {/* ── MTI College Section ─────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 mb-20 flex flex-col items-center text-center"
                >
                    {/* Pulsing glow aura wrapper */}
                    <div className="relative mb-8 flex items-center justify-center">
                        {/* Outer pulsing glow layers */}
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: "220px",
                                height: "220px",
                                background: "radial-gradient(circle, transparent 38%, rgba(201,168,124,0.65) 46%, transparent 75%)",


                                animation: "logo-aura 2.8s ease-in-out infinite",

                            }}
                        />
                        <div
                            className="absolute rounded-full"
                            style={{
                                width: "190px",
                                height: "190px",
                                background: "radial-gradient(circle, transparent 38%, rgba(226,201,154,0.45) 47%, transparent 80%)",


                                animation: "logo-aura 2.8s ease-in-out infinite 0.5s",

                            }}
                        />
                        {/* Logo image circle */}
                        <div
                            className="relative z-10 w-40 h-40 rounded-full overflow-hidden bg-white flex items-center justify-center"
                            style={{
                                boxShadow: "0 0 0 3px rgba(212,160,23,0.6), 0 0 24px rgba(139,26,44,0.4), 0 0 48px rgba(61,26,38,0.2)",
                                animation: "border-glow 2.8s ease-in-out infinite",
                            }}
                        >
                            <img
                                src="/images/team/mti_logo.jpeg"
                                alt="MTI University Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>
                    <h3 className="text-wine-dark font-heading text-2xl mb-2">{t("about.mti.name")}</h3>
                    <p className="text-taupe text-sm max-w-md">{t("about.mti.full")}</p>
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
                        <p className="text-xs uppercase tracking-[0.25em] text-gold-light mb-6 font-medium">{t("about.mission.label")}</p>
                        <h2 className="font-heading text-cream mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            {t("about.mission.title")}
                        </h2>
                        <div className="section-divider mx-auto mb-10 w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                        <p className="text-cream/90 leading-relaxed mb-6 text-base md:text-lg">
                            {t("about.mission.p1")}
                        </p>
                        <p className="text-cream/90 leading-relaxed text-base md:text-lg">
                            {t("about.mission.p2")}
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
                        label={t("about.principles.label")}
                        title={t("about.principles.title")}
                        titleHighlight={t("about.principles.titleHighlight")}
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
                        <p className="text-xs uppercase tracking-[0.3em] text-gold/60 mb-6 font-semibold">{t("about.survey.label")}</p>
                        <h3 className="font-heading text-cream mb-6 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                            {t("about.survey.title")}
                        </h3>
                        <p className="text-cream/80 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed font-light">
                            {t("about.survey.desc")}
                        </p>
                        <a
                            href="#" // REPLACE WITH SURVEY LINK
                            className="btn-wine scale-110 hover:scale-115 transition-transform duration-300"
                        >
                            {t("about.survey.cta")}
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
