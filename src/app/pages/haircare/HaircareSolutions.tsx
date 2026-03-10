import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link, useSearchParams } from "react-router";
import { Clock, Layers, ArrowRight } from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader";
import { haircareRoutines, hairTypes } from "../../data/haircare";
import { useLanguage } from "../../context/LanguageContext";
import { haircareRoutinesAr } from "../../data/haircare_ar";

function PlaceholderImage({ label }: { label: string }) {
    return (
        <div className="w-full h-full bg-gradient-to-br from-sage/40 to-linen flex items-center justify-center">
            <p className="text-taupe text-xs text-center px-3">{label}<br /><span className="opacity-50">Image Placeholder</span></p>
        </div>
    );
}

export function HaircareSolutions() {
    const [searchParams] = useSearchParams();
    const routineRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    const { t, isAr } = useLanguage();

    useEffect(() => {
        const typeId = searchParams.get("type");
        const conditionId = searchParams.get("condition");
        const targetId = typeId || conditionId;

        if (targetId) {
            // Find the routine that matches the targetType or condition
            const targetRoutine = haircareRoutines.find(r => r.targetType === targetId || r.id.includes(targetId));
            if (targetRoutine && routineRefs.current[targetRoutine.id]) {
                setTimeout(() => {
                    routineRefs.current[targetRoutine.id]?.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 100);
            }
        }
    }, [searchParams]);

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                <SectionHeader
                    label={t("haircare.solutions.label")}
                    title={t("haircare.solutions.title")}
                    titleHighlight={t("haircare.solutions.titleHighlight")}
                    subtitle={t("haircare.solutions.subtitle")}
                />


                <div className="mt-16 space-y-12">
                    {haircareRoutines.map((routine, i) => (
                        <motion.div
                            key={routine.id}
                            ref={(el) => (routineRefs.current[routine.id] = el)}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            className="luxury-card overflow-hidden h-[85vh] flex flex-col"
                        >
                            {/* Balanced Header - Super Compact */}
                            {routine.image ? (
                                <div className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} flex-none border-b border-warm-beige/30`}>
                                    <div className="w-full md:w-48 h-40 md:h-48 flex-none relative">
                                        <img src={routine.image} alt={routine.name} className="absolute inset-0 w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 p-4 md:p-6 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="badge-haircare text-[9px] py-0.5 px-2">{routine.targetType} hair</span>
                                            <div className="flex items-center gap-3 text-[9px] uppercase tracking-wider text-taupe/70 font-bold ml-auto">
                                                <span className="flex items-center gap-1"><Layers className="w-3 h-3" />{routine.steps.length} steps</span>
                                                <span className="flex items-center gap-1 md:flex hidden"><Clock className="w-3 h-3" />Treatment guide</span>
                                            </div>
                                        </div>
                                        <h3 className="font-heading text-espresso mb-1 text-xl md:text-2xl">{routine.name}</h3>
                                        <p className="text-espresso/80 text-sm md:text-base leading-relaxed line-clamp-2 italic">
                                            {isAr ? haircareRoutinesAr[routine.id]?.description ?? routine.description : routine.description}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="p-4 md:p-6 flex-none border-b border-warm-beige/30 bg-cream/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="badge-haircare text-[9px] py-0.5 px-2">{routine.targetType} hair</span>
                                        <div className="flex items-center gap-3 text-[9px] uppercase tracking-wider text-taupe/70 font-bold ml-auto">
                                            <span className="flex items-center gap-1"><Layers className="w-3 h-3" />{routine.steps.length} steps</span>
                                            <span className="flex items-center gap-1 md:flex hidden"><Clock className="w-3 h-3" />Treatment guide</span>
                                        </div>
                                    </div>
                                    <h3 className="font-heading text-espresso mb-1 text-xl md:text-2xl">{routine.name}</h3>
                                    <p className="text-espresso/80 text-sm md:text-base leading-relaxed max-w-4xl italic">
                                        {isAr ? haircareRoutinesAr[routine.id]?.description ?? routine.description : routine.description}</p>
                                </div>
                            )}

                            {/* Scrollable Steps Carousel */}
                            <div className="flex-grow overflow-y-auto px-4 py-4 md:px-10 bg-cream/30 scrollbar-thin">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold">{t("label.steps")}</p>
                                    <p className="text-[9px] text-taupe/60 md:hidden uppercase font-bold tracking-widest">{isAr ? "اسحبي للخطوة التالية ←" : "Swipe for next step →"}</p>
                                </div>

                                <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 pb-6 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory scrollbar-none">
                                    {routine.steps.map((step) => (
                                        <div
                                            key={step.step}
                                            className="min-w-[85%] md:min-w-0 snap-center bg-white border border-warm-beige rounded-xl p-5 group hover:border-wine transition-colors duration-300 shadow-sm flex flex-col"
                                        >
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-7 h-7 rounded-full bg-espresso flex items-center justify-center flex-shrink-0 group-hover:bg-wine transition-colors">
                                                    <span className="text-cream text-xs font-bold">{step.step}</span>
                                                </div>
                                            </div>
                                            <h4 className="border-b border-warm-beige/30 pb-2 font-heading text-espresso text-base mb-2">{step.name}</h4>
                                            <p className="text-sm text-espresso/80 leading-relaxed mb-3 flex-grow line-clamp-4">
                                                {isAr
                                                    ? haircareRoutinesAr[routine.id]?.steps[routine.steps.indexOf(step)]?.description ?? step.description
                                                    : step.description}
                                            </p>
                                            <span className="inline-block text-[9px] w-fit uppercase tracking-wide bg-wine/5 border border-wine/10 text-wine font-bold px-2 py-0.5 rounded-full">
                                                {step.timing}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Fixed Footer - Left Aligned */}
                            <div className="flex-none p-6 border-t border-warm-beige bg-white flex justify-start">
                                <Link
                                    to={`/haircare/products?${hairTypes.some((t: any) => t.id === routine.targetType) ? 'type' : 'concern'}=${routine.targetType}`}
                                    className="btn-wine py-3 px-8 text-xs"
                                >
                                    {isAr ? "استكشفي المنتجات المتوافقة" : "Explore Compatible Products"}
                                    <ArrowRight className="w-4 h-4 ml-1.5" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-[#F8EDED] border border-[#EBCBCB] rounded-2xl p-10 text-center"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-[#8E5B61] mb-4 font-bold">{isAr ? "الخطوة التالية" : "Next Step"}</p>
                    <h3 className="font-heading text-espresso mb-4">{isAr ? "هل أنتِ مستعدة لبناء رف منتجات شعرك؟" : "Ready to build your haircare shelf?"}</h3>
                    <p className="text-espresso/70 text-sm mb-7 max-w-lg mx-auto leading-relaxed">
                        {isAr ? "استكشفي كتالوج منتجات العناية بالشعر المنتقى وابحثي عن التركيبات المُوصى بها لنوع شعرك." : "Explore our curated haircare product catalogue and find the exact formulas recommended for your hair type."}
                    </p>
                    <Link to="/haircare/products" className="btn-wine">
                        {isAr ? "تصفح الكتالوج الكامل" : "Browse Full Catalogue"} <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
