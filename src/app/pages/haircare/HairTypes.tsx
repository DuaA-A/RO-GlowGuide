import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams, Link } from "react-router";
import { Check, ChevronRight } from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader";
import { hairTypes, scalpConditions } from "../../data/haircare";

type Tab = "types" | "conditions";

function PlaceholderImage({ label }: { label: string }) {
    return (
        <div className="w-full h-full bg-gradient-to-br from-sage/40 to-linen flex items-center justify-center">
            <p className="text-taupe text-xs text-center px-4">{label}<br /><span className="opacity-50">Image Placeholder</span></p>
        </div>
    );
}

const severityColor = {
    Mild: { bg: "bg-[#F0E8DF]", text: "text-[#7A5C40]", border: "border-[#D9CFC3]" },
    Moderate: { bg: "bg-[#EDE7DC]", text: "text-[#7A6858]", border: "border-[#C4B5A0]" },
    Severe: { bg: "bg-[#E8E0D8]", text: "text-[#5C4F42]", border: "border-[#9E8E7E]" },
    Varies: { bg: "bg-linen", text: "text-taupe", border: "border-warm-beige" },
};

export function HairTypes() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialTab = (searchParams.get("tab") as Tab) || "types";
    const [activeTab, setActiveTab] = useState<Tab>(initialTab);

    const handleTabChange = (tab: Tab) => {
        setActiveTab(tab);
        const newParams = new URLSearchParams(searchParams);
        newParams.set("tab", tab);
        setSearchParams(newParams, { replace: true });
    };

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                {/* Header */}
                <SectionHeader
                    label="Haircare Guide"
                    title="Know Your"
                    titleHighlight="Hair."
                    subtitle="Identifying your hair type and understanding any scalp conditions is the foundation of a targeted, effective haircare routine."
                />

                {/* Tabs */}
                <div className="flex justify-center mt-12 mb-14">
                    <div className="inline-flex bg-ivory border border-warm-beige rounded-full p-1 shadow-sm">
                        {(["types", "conditions"] as Tab[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
                                className={`relative px-7 py-2.5 rounded-full text-sm transition-all duration-300 ${activeTab === tab ? "text-cream shadow-sm" : "text-taupe hover:text-espresso"
                                    }`}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="hair-tab-pill"
                                        className="absolute inset-0 rounded-full bg-espresso"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                                <span className="relative z-10 capitalize">
                                    {tab === "types" ? "Hair Types" : "Scalp Conditions"}
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
                            {hairTypes.map((hair, i) => (
                                <motion.div
                                    key={hair.id}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                    className="luxury-card overflow-hidden"
                                >
                                    <div className={`grid ${hair.image ? 'md:grid-cols-5' : 'grid-cols-1'} gap-0`}>
                                        {/* Image */}
                                        {hair.image && (
                                            <div className="md:col-span-2 relative h-64 md:h-full min-h-[320px]">
                                                <img src={hair.image} alt={hair.name} className="w-full h-full object-cover" />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className={`${hair.image ? 'md:col-span-3' : 'md:col-span-5'} p-8 md:p-10`}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="badge-haircare">{hair.name}</span>
                                            </div>
                                            <h3 className="font-heading text-espresso mb-3">{hair.name}</h3>
                                            <p className="text-xs uppercase tracking-[0.15em] text-espresso/70 mb-2">{hair.pattern}</p>
                                            <p className="text-espresso/90 text-sm leading-relaxed mb-6">{hair.description}</p>

                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.15em] text-gold mb-3">Characteristics</p>
                                                    <ul className="space-y-2">
                                                        {hair.characteristics.map((c, idx) => (
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
                                                        {hair.tips.map((t, idx) => (
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
                                                    to={`/haircare/solutions?type=${hair.id}`}
                                                    className="btn-wine text-[10px] py-2 px-6"
                                                >
                                                    View routine for {hair.name.toLowerCase()} →
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
                            {scalpConditions.map((condition, i) => {
                                const sev = severityColor[condition.severity];
                                return (
                                    <motion.div
                                        key={condition.id}
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08, duration: 0.5 }}
                                        className="luxury-card overflow-hidden"
                                    >
                                        <div className={`grid ${condition.image ? 'md:grid-cols-5' : 'grid-cols-1'} gap-0`}>
                                            {/* Image */}
                                            {condition.image && (
                                                <div className="md:col-span-2 relative h-64 md:h-full min-h-[320px]">
                                                    <img src={condition.image} alt={condition.name} className="w-full h-full object-cover" />
                                                    {/* Severity badge inside if it has image */}
                                                    <div className="absolute top-4 right-4 z-10">
                                                        <span className={`text-xs px-3 py-1 rounded-full border ${sev.bg} ${sev.text} ${sev.border}`}>
                                                            {condition.severity}
                                                        </span>
                                                    </div>
                                                </div>
                                            )}

                                            <div className={`${condition.image ? 'md:col-span-3' : 'md:col-span-5'} p-8 md:p-10`}>
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="font-heading text-espresso mb-3">{condition.name}</h3>
                                                    {!condition.image && (
                                                        <span className={`text-xs px-3 py-1 rounded-full border ${sev.bg} ${sev.text} ${sev.border}`}>
                                                            {condition.severity}
                                                        </span>
                                                    )}
                                                </div>
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
                                                        to={`/haircare/solutions?condition=${condition.id}`}
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

            </div>
        </div>
    );
}
