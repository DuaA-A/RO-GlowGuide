import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams, Link } from "react-router";
import { Check, ChevronRight } from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader";
import { skinTypes, skinConditions } from "../../data/skincare";
import { useLanguage } from "../../context/LanguageContext";
import { skinTypesAr, skinConditionsAr } from "../../data/skincare_ar";

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
    Varies: { bg: "bg-linen", text: "text-taupe", border: "border-warm-beige" },
};

export function SkinTypes() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialTab = (searchParams.get("tab") as Tab) || "types";
    const [activeTab, setActiveTab] = useState<Tab>(initialTab);
    const { t, isAr } = useLanguage();

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
                    label={t("skincare.types.label")}
                    title={t("skincare.types.title")}
                    titleHighlight={t("skincare.types.titleHighlight")}
                    subtitle={t("skincare.types.subtitle")}
                />

                {/* Tabs */}
                <div className="flex justify-center mt-12 mb-14">
                    <div className="inline-flex bg-ivory border border-warm-beige rounded-full p-1 shadow-sm">
                        {(["types", "conditions"] as Tab[]).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => handleTabChange(tab)}
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
                                    {tab === "types" ? t("skincare.types.title") + " " + t("skincare.types.titleHighlight") : t("skincare.conditions.title") + " " + t("skincare.conditions.titleHighlight")}
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
                                    <div className={`grid ${skin.image ? 'md:grid-cols-5' : 'grid-cols-1'} gap-0`}>
                                        {/* Image */}
                                        {skin.image && (
                                            <div className="md:col-span-2 relative h-64 md:h-full min-h-[320px]">
                                                <img src={skin.image} alt={skin.name} className="w-full h-full object-cover" />
                                            </div>
                                        )}

                                        {/* Content */}
                                        <div className={`${skin.image ? 'md:col-span-3' : 'md:col-span-5'} p-8 md:p-10`}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className="badge-skincare">{skin.name}</span>
                                            </div>
                                            <h3 className="font-heading text-espresso mb-3">{skin.name}</h3>
                                            <p className="text-espresso/90 text-sm md:text-base leading-relaxed mb-6">
                                                {isAr ? skinTypesAr[skin.id]?.description : skin.description}</p>

                                            <div className="grid sm:grid-cols-2 gap-6">
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.15em] text-gold mb-3">{t("label.characteristics")}</p>
                                                    <ul className="space-y-2">
                                                        {(isAr ? skinTypesAr[skin.id]?.characteristics ?? skin.characteristics : skin.characteristics).map((c, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-espresso/80">
                                                                <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                                                                {c}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.15em] text-gold mb-3">{t("label.tips")}</p>
                                                    <ul className="space-y-2">
                                                        {(isAr ? skinTypesAr[skin.id]?.tips ?? skin.tips : skin.tips).map((tip, idx) => (
                                                            <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-espresso/80">
                                                                <ChevronRight className="w-3.5 h-3.5 text-sand flex-shrink-0 mt-0.5" />
                                                                {tip}
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
                                                    {isAr ? `عرض روتين ${skin.name} ←` : `View routine for ${skin.name.toLowerCase()} →`}
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

                                            {/* Content */}
                                            <div className={`${condition.image ? 'md:col-span-3' : 'md:col-span-5'} p-8 md:p-10`}>
                                                <div className="flex items-center justify-between mb-4">
                                                    <p className="text-xs uppercase tracking-[0.15em] text-wine-dark/70">{condition.type}</p>
                                                    {!condition.image && (
                                                        <span className={`text-xs px-3 py-1 rounded-full border ${sev.bg} ${sev.text} ${sev.border}`}>
                                                            {condition.severity}
                                                        </span>
                                                    )}
                                                </div>
                                                <h3 className="font-heading text-espresso mb-3">{condition.name}</h3>
                                                <p className="text-espresso/90 text-sm md:text-base leading-relaxed mb-6">
                                                    {isAr ? skinConditionsAr[condition.id]?.description : condition.description}
                                                </p>

                                                <div className="grid sm:grid-cols-2 gap-6">
                                                    <div>
                                                        <p className="text-xs uppercase tracking-[0.15em] text-gold mb-3">{t("label.causes")}</p>
                                                        <ul className="space-y-2">
                                                            {(isAr ? skinConditionsAr[condition.id]?.causes ?? condition.causes : condition.causes).map((c, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-espresso/80">
                                                                    <ChevronRight className="w-3.5 h-3.5 text-sand flex-shrink-0 mt-0.5" />
                                                                    {c}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    {condition.tips && condition.tips.length > 0 && (
                                                        <div>
                                                            <p className="text-xs uppercase tracking-[0.15em] text-gold mb-3">{t("label.tips")}</p>
                                                            <ul className="space-y-2">
                                                                {(isAr ? skinConditionsAr[condition.id]?.tips ?? condition.tips : condition.tips).map((tip, idx) => (
                                                                    <li key={idx} className="flex items-start gap-2 text-sm md:text-base text-espresso/80">
                                                                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                                                                        {tip}
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
                                                        {isAr ? "عرض روتين العلاج ←" : "View treatment routine →"}
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
