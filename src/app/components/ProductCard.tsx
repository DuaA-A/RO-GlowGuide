import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "../data/types";

interface ProductCardProps {
    product: Product;
    category: "skincare" | "haircare";
}

// Placeholder image component
function PlaceholderImage({ name, category }: { name: string; category: string }) {
    const isSkincare = category === "skincare";
    return (
        <div
            className={`w-full h-full flex flex-col items-center justify-center ${isSkincare ? "bg-gradient-to-br from-blush to-linen" : "bg-gradient-to-br from-sage/40 to-linen"
                }`}
        >
            <div className="w-16 h-16 rounded-full border-2 border-warm-beige flex items-center justify-center mb-3 opacity-50">
                <span className="text-2xl">{isSkincare ? "✦" : "❧"}</span>
            </div>
            <p className="text-xs text-taupe text-center px-4 leading-relaxed opacity-70">
                Product Image Placeholder
            </p>
        </div>
    );
}

export function ProductCard({ product, category }: ProductCardProps) {
    const isSkincare = category === "skincare";
    const detailPath = `/${category}/products/${product.id}`;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="luxury-card overflow-hidden group cursor-pointer"
        >
            <Link to={detailPath} className="block">
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                    {product.image ? (
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    ) : (
                        <PlaceholderImage name={product.name} category={category} />
                    )}
                    {/* Category & Status badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                        <span className={isSkincare ? "badge-skincare" : "badge-haircare"}>
                            {product.category}
                        </span>
                        {!product.isExternal && (
                            <span className="bg-espresso text-cream text-[10px] uppercase tracking-widest px-2 py-0.5 rounded backdrop-blur-sm bg-opacity-80 border border-gold/30">
                                Verified
                            </span>
                        )}
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-5">
                    {product.brand && (
                        <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1 font-medium">
                            {product.brand}
                        </p>
                    )}
                    <h3 className="font-heading text-espresso text-xl mb-2 leading-tight group-hover:text-gold transition-colors duration-200">
                        {product.name}
                    </h3>
                    <p className="text-sm text-taupe line-clamp-2 mb-4 leading-relaxed">
                        {product.description}
                    </p>

                    {/* Benefits */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                        {product.benefits.slice(0, 3).map((benefit, i) => (
                            <span
                                key={i}
                                className="text-xs bg-linen text-mink px-2.5 py-1 rounded-full border border-warm-beige"
                            >
                                {benefit}
                            </span>
                        ))}
                    </div>

                    {/* Main ingredients preview */}
                    <div className="pt-4 border-t border-warm-beige flex items-center justify-between">
                        <p className="text-xs text-taupe line-clamp-1 flex-1 mr-2">
                            {product.mainIngredients.slice(0, 2).join(", ")}
                            {product.mainIngredients.length > 2 && "…"}
                        </p>
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-espresso flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                            <ArrowRight className="w-3 h-3 text-cream" />
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
