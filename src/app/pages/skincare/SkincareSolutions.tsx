import { motion } from "motion/react";
import { Link } from "react-router";
import { Clock, Layers, ArrowRight } from "lucide-react";
import { SectionHeader } from "../../components/SectionHeader";
import { skincareRoutines } from "../../data/skincare";

function PlaceholderImage({ label }: { label: string }) {
    return (
        <div className="w-full h-full bg-gradient-to-br from-blush to-linen flex items-center justify-center">
            <p className="text-taupe text-xs text-center px-3">{label}<br /><span className="opacity-50">Image Placeholder</span></p>
        </div>
    );
}

export function SkincareSolutions() {
    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                <SectionHeader
                    label="Skincare Routines"
                    title="Your Personalised"
                    titleHighlight="Routine."
                    subtitle="Step-by-step skincare routines tailored to each skin type — from a minimalist daily regimen to a comprehensive specialist approach."
                />

                <div className="mt-16 space-y-12">
                    {skincareRoutines.map((routine, i) => (
                        <motion.div
                            key={routine.id}
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.05 }}
                            className="luxury-card overflow-hidden"
                        >
                            {/* Routine header */}
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
                                        <span className="badge-skincare">{routine.targetType} skin</span>
                                    </div>
                                    <h3 className="font-heading text-espresso mb-3">{routine.name}</h3>
                                    <p className="text-mink text-sm leading-relaxed mb-6">{routine.description}</p>

                                    <div className="flex items-center gap-4 text-xs text-taupe">
                                        <span className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5" />{routine.steps.length} steps</span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />Daily routine</span>
                                    </div>
                                </div>
                            </div>

                            {/* Steps */}
                            <div className="border-t border-warm-beige px-8 py-8 md:px-10">
                                <p className="text-xs uppercase tracking-[0.15em] text-gold mb-6">Step-by-Step Routine</p>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {routine.steps.map((step) => (
                                        <div key={step.step} className="bg-cream border border-warm-beige rounded-xl p-5 group hover:border-gold transition-colors duration-200">
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="w-7 h-7 rounded-full bg-espresso flex items-center justify-center flex-shrink-0">
                                                    <span className="text-cream text-xs font-medium">{step.step}</span>
                                                </div>
                                                <h4 className="text-sm font-medium text-espresso">{step.name}</h4>
                                            </div>
                                            <p className="text-xs text-taupe leading-relaxed mb-2">{step.description}</p>
                                            <span className="inline-block text-xs bg-linen border border-warm-beige text-mink px-2.5 py-1 rounded-full">
                                                {step.timing}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 pt-6 border-t border-warm-beige flex justify-between items-center">
                                    <Link
                                        to={`/skincare/products?type=${routine.targetType}`}
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

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-espresso rounded-2xl p-10 text-center"
                >
                    <p className="text-xs uppercase tracking-[0.25em] text-cream/40 mb-4">Next Step</p>
                    <h3 className="font-heading text-cream mb-4">Ready to build your product shelf?</h3>
                    <p className="text-cream/60 text-sm mb-7 max-w-lg mx-auto leading-relaxed">
                        Explore our curated skincare product catalogue and find the exact formulas recommended in each routine step.
                    </p>
                    <Link to="/skincare/products?type=all" className="btn-wine">
                        Browse Skincare Products <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
