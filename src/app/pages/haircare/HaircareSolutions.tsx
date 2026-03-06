import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link, useSearchParams } from "react-router";
import { Clock, Layers, ArrowRight } from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader";
import { haircareRoutines } from "../../data/haircare";

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
                    label="Haircare Routines"
                    title="Your Personalised"
                    titleHighlight="Hair Routine."
                    subtitle="Expert-designed step-by-step routines for every hair type — from lightweight and bouncy routines to intensive moisture and repair plans."
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
                            className="luxury-card overflow-hidden"
                        >
                            <div className="grid md:grid-cols-3 gap-0">
                                <div className="relative h-48 md:h-auto">
                                    {routine.image ? (
                                        <img src={routine.image} alt={routine.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <PlaceholderImage label={routine.name} />
                                    )}
                                </div>
                                <div className="md:col-span-2 p-8 md:p-10">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="badge-haircare">{routine.targetType} hair</span>
                                    </div>
                                    <h3 className="font-heading text-espresso mb-3">{routine.name}</h3>
                                    <p className="text-espresso/90 text-sm md:text-base leading-relaxed mb-6">{routine.description}</p>

                                    <div className="flex items-center gap-4 text-xs text-taupe">
                                        <span className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" />{routine.steps.length} steps</span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />Targeted routine</span>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-warm-beige px-8 py-8 md:px-10">
                                <p className="text-xs uppercase tracking-[0.15em] text-gold mb-6">Step-by-Step Routine</p>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {routine.steps.map((step) => (
                                        <div key={step.step} className="bg-cream border border-warm-beige rounded-xl p-5 hover:border-gold transition-colors duration-200">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-7 h-7 rounded-full bg-espresso flex items-center justify-center flex-shrink-0">
                                                    <span className="text-cream text-xs font-medium">{step.step}</span>
                                                </div>
                                                <h4 className="text-sm font-medium text-espresso">{step.name}</h4>
                                            </div>
                                            <p className="text-sm text-espresso/80 leading-relaxed mb-2">{step.description}</p>
                                            <span className="inline-block text-xs bg-wine/5 border border-wine/10 text-wine-dark px-2.5 py-1 rounded-full font-medium">
                                                {step.timing}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-warm-beige">
                                    <Link
                                        to={`/haircare/products?type=${routine.targetType}`}
                                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-gold hover:text-gold-dark transition-colors"
                                    >
                                        Find products for this routine
                                        <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-espresso rounded-2xl p-10 text-center"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-cream/40 mb-4">Next Step</p>
                    <h3 className="font-heading text-cream mb-4">Ready to explore haircare products?</h3>
                    <p className="text-cream/60 text-sm mb-7 max-w-lg mx-auto leading-relaxed">
                        Browse our carefully curated catalogue of haircare formulas designed for every hair type and scalp condition.
                    </p>
                    <Link to="/haircare/products" className="btn-wine">
                        Browse Haircare Products <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
