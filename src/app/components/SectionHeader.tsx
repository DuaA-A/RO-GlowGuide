import { motion } from "motion/react";
import { Link } from "react-router";

interface SectionHeaderProps {
    label?: string;         // small eyebrow text (e.g. "Our Mission")
    title: string;          // main heading
    titleHighlight?: string; // highlighted portion rendered in gold gradient
    subtitle?: string;      // paragraph below heading
    centered?: boolean;
    className?: string;
}

export function SectionHeader({
    label,
    title,
    titleHighlight,
    subtitle,
    centered = true,
    className = "",
}: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`${centered ? "text-center" : ""} ${className}`}
        >
            {label && (
                <p
                    className="text-xs uppercase tracking-[0.2em] text-gold mb-4 font-body"
                    style={{ fontWeight: 500 }}
                >
                    {label}
                </p>
            )}

            <h2 className="font-heading text-espresso mb-3">
                {titleHighlight ? (
                    <>
                        {title}{" "}
                        <span className="text-gold-gradient">{titleHighlight}</span>
                    </>
                ) : (
                    title
                )}
            </h2>

            <div className={`section-divider ${centered ? "mx-auto" : ""}`} />

            {subtitle && (
                <p className={`text-mink text-lg leading-relaxed mt-6 ${centered ? "max-w-2xl mx-auto" : "max-w-2xl"}`}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
