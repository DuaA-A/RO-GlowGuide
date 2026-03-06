import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { Check, ChevronRight, AlertCircle } from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader";
import { skinTypes, skinConditions } from "../../data/skincare";

type Tab = "types" | "conditions";

function PlaceholderImage({ label }: { label: string }) {
    return (
        <div className="w-full h-full bg-gradient-to-br from-blush to-linen flex items-center justify-center">
            <p className="text-taupe text-xs text-center px-4">{label}<br /><span className="opacity-50">Image Placeholder</span></p>
        </div>
    );
}

const severityColor = {
    Mild: { bg: "bg-[#F0E8DF]", text: "text-[#7A5C40]", border: "border-[#D9CFC3]" },
    Moderate: { bg: "bg-[#EDE7DC]", text: "text-[#7A6858]", border: "border-[#C4B5A0]" },
    Severe: { bg: "bg-[#E8E0D8]", text: "text-[#5C4F42]", border: "border-[#9E8E7E]" },
};

export function SkinTypes() {
    const [activeTab, setActiveTab] = useState<Tab>("types");

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* Header */}
                <SectionHeader
                    label="Skincare Guide"
                    title="Know Your"
                    titleHighlight="Skin."
                    subtitle="Understanding your skin type and conditions is the essential first step to building an effective, personalised skincare routine."
                />

                {/* Tabs */}
                <div className="flex justify-center mt-12 mb-14">
                    <div className="inline-flex bg-ivory border border-warm-beige rounded-full p-1 shadow-sm">
                        {(["types", "conditions"] as Tab[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative px-7 py-2.5 rounded-full text-sm transition-all duration-300 ${activeTab === tab
                                    ? "text-cream shadow-sm"
                                    : "text-taupe hover:text-espresso"
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="skin-tab-pill"
                                        className="absolute inset-0 rounded-full bg-espresso"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10 capitalize">
                                    {tab === "types" ? "Skin Types" : "Skin Conditions"}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    {activeTab === "types" && (
                        <motion.div
                            key="types"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-6"
                        >
                            {skinTypes.map((skin, i) => (
                                <motion.div
                                    key={skin.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                    className="luxury-card overflow-hidden"
                                >
                                    <div className="grid md:grid-cols-5 gap-0">
                                        {/* Image */}
                                        <div className="md:col-span-2 relative h-56 md:h-auto">
                                            {skin.image ? (
                                                <img src={skin.image} alt={skin.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <PlaceholderImage label={skin.name} />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="md:col-span-3 p-8 md:p-10">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="badge-skincare">{skin.name}</span>
                                            </div>
                                            <h3 className="font-heading text-espresso mb-3">{skin.name}</h3>
                                            <p className="text-espresso/90 text-sm md:text-base leading-relaxed mb-6">
                                                {skin.description}</p>

                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.15em] text-gold mb-3">Characteristics</p>
                                                    <ul className="space-y-2">
                                                        {skin.characteristics.map((c, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-espresso/80">
                                                                <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                                                                {c}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.15em] text-gold mb-3">Care Tips</p>
                                                    <ul className="space-y-2">
                                                        {skin.tips.map((t, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-espresso/80">
                                                                <ChevronRight className="w-3.5 h-3.5 text-sand flex-shrink-0 mt-0.5" />
                                                                {t}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="mt-6 pt-5 border-t border-warm-beige">
                                                <Link
                                                    to={`/skincare/solutions?type=${skin.id}`}
                                                    className="btn-wine text-[10px] py-2 px-6"
                                                >
                                                    View routine for {skin.name.toLowerCase()} →
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === "conditions" && (
                        <motion.div
                            key="conditions"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-6"
                        >
                            {skinConditions.map((condition, i) => {
                                const sev = severityColor[condition.severity];
                                return (
                                    <motion.div
                                        key={condition.id}
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08, duration: 0.5 }}
                                        className="luxury-card overflow-hidden"
                                    >
                                        <div className="grid md:grid-cols-5 gap-0">
                                            {/* Image */}
                                            <div className="md:col-span-2 relative h-56 md:h-auto">
                                                {condition.image ? (
                                                    <img src={condition.image} alt={condition.name} className="w-full h-full object-cover" />
                                                ) : (
                                                    <PlaceholderImage label={condition.name} />
                                                )}
                                                {/* Severity badge */}
                                                <div className="absolute top-4 right-4">
                                                    <span className={`text-xs px-3 py-1 rounded-full border ${sev.bg} ${sev.text} ${sev.border}`}>
                                                        {condition.severity}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="md:col-span-3 p-8 md:p-10">
                                                <p className="text-xs uppercase tracking-[0.15em] text-wine-dark/70 mb-2">{condition.type}</p>
                                                <h3 className="font-heading text-espresso mb-3">{condition.name}</h3>
                                                <p className="text-espresso/90 text-sm md:text-base leading-relaxed mb-6">{condition.description}</p>

                                                <div className="grid sm:grid-cols-2 gap-6">
                                                    <div>
                                                        <p className="text-xs uppercase tracking-[0.15em] text-gold mb-3">Common Causes</p>
                                                        <ul className="space-y-2">
                                                            {condition.causes.map((c, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-espresso/80">
                                                                    <ChevronRight className="w-3.5 h-3.5 text-sand flex-shrink-0 mt-0.5" />
                                                                    {c}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    {condition.tips && condition.tips.length > 0 && (
                                                        <div>
                                                            <p className="text-xs uppercase tracking-[0.15em] text-gold mb-3">Clinical Tips</p>
                                                            <ul className="space-y-2">
                                                                {condition.tips.map((t, idx) => (
                                                                    <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-espresso/80">
                                                                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                                                                        {t}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="mt-6 pt-5 border-t border-warm-beige">
                                                    <Link
                                                        to={`/skincare/solutions?condition=${condition.id}`}
                                                        className="btn-wine text-[10px] py-2 px-6"
                                                    >
                                                        View treatment routine →
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Disclaimer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-linen border border-warm-beige rounded-2xl p-6 flex gap-5 items-start"
                >
                    <AlertCircle className="w-5 h-5 text-taupe flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm font-medium text-espresso mb-1">Important Note</p>
                        <p className="text-sm text-mink leading-relaxed">
                            This information is for educational purposes only. Severe or persistent skin concerns should be evaluated by a qualified dermatologist. Nothing on this platform constitutes professional medical advice.
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
