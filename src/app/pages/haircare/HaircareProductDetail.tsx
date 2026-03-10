import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router";
import { ArrowLeft, Check, Wind, BookOpen } from "lucide-react";
import { MedicalDetailsPanel } from "../../components/MedicalDetailsPanel";
import { haircareProducts } from "../../data/haircare";
import { haircareProductsAr } from "../../data/haircare_ar";
import { Product } from "../../data/types";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

function PlaceholderProductImage({ name }: { name: string }) {
    return (
        <div className="w-full h-full bg-gradient-to-br from-sage/40 via-linen to-ivory flex flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-warm-beige flex items-center justify-center mb-4 opacity-40">
                <Wind className="w-9 h-9 text-taupe" />
            </div>
            <p className="text-taupe text-xs text-center px-6 opacity-60">Product Image Placeholder<br />{name}</p>
        </div>
    );
}

export function HaircareProductDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { t, isAr } = useLanguage();

    const baseProduct = haircareProducts.find((p) => p.id === id);
    const arData = id ? haircareProductsAr[id] : undefined;

    const product = baseProduct && isAr && arData ? {
        ...baseProduct,
        description: arData.description,
        usage: arData.usage,
        benefits: arData.benefits
    } : baseProduct;

    if (!product) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center py-20">
                <p className="text-taupe mb-6">{t("product.noProduct")}</p>
                <Link to="/haircare/products" className="btn-gold">{t("product.backToProducts")}</Link>
            </div>
        );
    }

    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

                <button
                    onClick={() => navigate(-1)}
                    className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-taupe hover:text-gold transition-colors mb-10 ${isAr ? "flex-row-reverse" : ""}`}
                >
                    <ArrowLeft className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
                    {t("product.backToProducts")}
                </button>

                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-[0_8px_40px_rgba(61,43,31,0.10)]">
                            {product.image ? (
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            ) : (
                                <PlaceholderProductImage name={product.name} />
                            )}
                        </div>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {/* Category & Status badges */}
                        <div className={`flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
                            <span className={isAr ? "badge-haircare text-right" : "badge-haircare"}>{product.category}</span>
                            {!product.isExternal && (
                                <span className="bg-espresso text-cream text-[10px] uppercase tracking-widest px-2 py-0.5 rounded border border-gold/30">
                                    {t("product.verified")}
                                </span>
                            )}
                        </div>

                        {/* Name */}
                        {product.brand && (
                            <p className="text-xs uppercase tracking-[0.2em] text-gold mt-6 mb-1 font-medium">
                                {product.brand}
                            </p>
                        )}
                        <h1 className="font-heading text-espresso mt-2 mb-4" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                            {product.name}
                        </h1>

                        {/* Description */}
                        <p className={`text-mink leading-relaxed mb-8 text-sm border-b border-warm-beige pb-8 ${isAr ? "text-right" : ""}`}>
                            {product.description}
                        </p>

                        {/* Usage */}
                        <div className="mb-7">
                            <div className={`flex items-center gap-2 mb-3 ${isAr ? "flex-row-reverse" : ""}`}>
                                <BookOpen className="w-4 h-4 text-gold" />
                                <p className="text-xs uppercase tracking-[0.15em] text-gold">{t("product.howToUse")}</p>
                            </div>
                            <p className={`text-sm text-mink leading-relaxed ${isAr ? "pr-6 text-right" : "pl-6"}`}>{product.usage}</p>
                        </div>

                        {/* Main Ingredients */}
                        <div className="mb-7">
                            <p className={`text-xs uppercase tracking-[0.15em] text-gold mb-3 ${isAr ? "text-right" : ""}`}>{t("product.mainIngredients")}</p>
                            <div className={`flex flex-wrap gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                                {product.mainIngredients.map((ing, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-linen border border-warm-beige text-mink px-3 py-1.5 rounded-full"
                                    >
                                        {ing}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="mb-7">
                            <p className={`text-xs uppercase tracking-[0.15em] text-gold mb-3 ${isAr ? "text-right" : ""}`}>{t("product.keyBenefits")}</p>
                            <ul className="space-y-2">
                                {product.benefits.map((benefit, i) => (
                                    <li key={i} className={`flex items-center gap-2.5 text-sm text-mink ${isAr ? "flex-row-reverse" : ""}`}>
                                        <div className="w-5 h-5 rounded-full bg-linen border border-warm-beige flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-gold" />
                                        </div>
                                        <span className={isAr ? "text-right" : ""}>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Best for */}
                        {product.targetTypes.length > 0 && (
                            <div className={`mb-8 p-5 bg-linen border border-warm-beige rounded-xl ${isAr ? "text-right" : ""}`}>
                                <p className="text-xs uppercase tracking-[0.15em] text-gold mb-2">{t("product.bestFor")}</p>
                                <p className="text-sm text-mink capitalize">{product.targetTypes.join(", ")}{t("product.bestForSuffix")}</p>
                            </div>
                        )}

                        {/* Medical Details */}
                        {product.medicalDetails && (
                            <MedicalDetailsPanel details={product.medicalDetails} />
                        )}

                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 py-12 border-t border-warm-beige text-center"
                >
                    <p className="text-taupe text-sm mb-6">{t("product.lookingForMore")}</p>
                    <Link to="/haircare/products" className="btn-gold">{t("product.viewAllHaircare")}</Link>
                </motion.div>

            </div>
        </div>
    );
}
