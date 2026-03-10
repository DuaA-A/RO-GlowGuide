import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronDown, Filter, X } from "lucide-react";
import { useSearchParams } from "react-router";
import { SectionHeader } from "../../components/SectionHeader";
import { ProductCard } from "../../components/ProductCard";
import { skincareProducts, skinTypes, skinConditions } from "../../data/skincare";
import { skincareProductsAr } from "../../data/skincare_ar";
import { useLanguage } from "../../context/LanguageContext";

const CATEGORIES = ["All", "Cleanser", "Toner", "Serum", "Moisturiser", "Sunscreen", "Treatment"];

export function SkincareProducts() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeType, setActiveType] = useState("All Types");
    const [activeConcern, setActiveConcern] = useState<string | null>(null);
    const [isTypeDropdownOpen, setIsTypeDropdownOpen] = useState(false);
    const { t, isAr } = useLanguage();

    useEffect(() => {
        const typeParam = searchParams.get("type");
        const concernParam = searchParams.get("concern");
        const catParam = searchParams.get("category");

        if (catParam && CATEGORIES.includes(catParam)) {
            setActiveCategory(catParam);
        }

        if (typeParam) {
            const foundType = skinTypes.find(t => t.id === typeParam);
            setActiveType(foundType ? foundType.name : "All Types");
        } else {
            setActiveType("All Types");
        }

        if (concernParam) {
            setActiveConcern(concernParam);
        } else {
            setActiveConcern(null);
        }
    }, [searchParams]);

    const filtered = skincareProducts.filter((p) => {
        const query = search.toLowerCase().trim();

        // Search matches
        const matchesSearch = !query ||
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.mainIngredients.some((i) => i.toLowerCase().includes(query)) ||
            (p.brand && p.brand.toLowerCase().includes(query));

        // Category matches
        const matchesCategory = activeCategory === "All" || p.category === activeCategory;

        // Type matches (from url or dropdown)
        const typeId = searchParams.get("type");
        const matchesType = !typeId || p.targetTypes.includes(typeId);

        // Concern matches (from url or buttons)
        const concernId = activeConcern;
        const matchesConcern = !concernId || (p.concerns && p.concerns.includes(concernId));

        return matchesSearch && matchesCategory && matchesType && matchesConcern;
    });

    const handleClearAll = () => {
        setSearch("");
        setActiveCategory("All");
        setActiveType("All Types");
        setActiveConcern(null);
        setSearchParams({});
    };

    const updateFilter = (key: string, value: string | null) => {
        const newParams = new URLSearchParams(searchParams);
        if (value && value !== "All" && value !== "All Types") {
            newParams.set(key, value);
        } else {
            newParams.delete(key);
        }
        setSearchParams(newParams);
    };

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                <SectionHeader
                    label={t("skincare.products.label")}
                    title={t("skincare.products.title")}
                    titleHighlight={t("skincare.products.titleHighlight")}
                    subtitle={t("skincare.products.subtitle")}
                />

                <div className="mt-12 mb-12 flex flex-col items-center gap-8">
                    {/* Search and Type Dropdown Row */}
                    <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4">
                        {/* Search Bar */}
                        <div className="flex-grow relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                            <input
                                type="text"
                                placeholder={t("label.searchPlaceholder")}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-11 pr-5 py-3.5 bg-ivory border border-warm-beige rounded-xl text-sm text-espresso placeholder-taupe focus:outline-none focus:border-gold transition-all"
                            />
                        </div>

                        {/* Type Dropdown */}
                        <div className="relative w-full md:w-64">
                            <button
                                onClick={() => setIsTypeDropdownOpen(!isTypeDropdownOpen)}
                                className="w-full flex items-center justify-between px-5 py-3.5 bg-ivory border border-warm-beige rounded-xl text-sm text-espresso hover:border-gold transition-all"
                            >
                                <span className="flex items-center gap-2">
                                    <Filter className="w-4 h-4 text-taupe" />
                                    {activeType}
                                </span>
                                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isTypeDropdownOpen ? "rotate-180" : ""}`} />
                            </button>

                            <AnimatePresence>
                                {isTypeDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute z-50 w-full mt-2 bg-white border border-warm-beige rounded-xl shadow-xl overflow-hidden"
                                    >
                                        <button
                                            onClick={() => {
                                                updateFilter("type", null);
                                                setIsTypeDropdownOpen(false);
                                            }}
                                            className="w-full text-left px-5 py-3 text-sm hover:bg-linen transition-colors border-b border-warm-beige/50"
                                        >
                                            All Types
                                        </button>
                                        {skinTypes.map(type => (
                                            <button
                                                key={type.id}
                                                onClick={() => {
                                                    updateFilter("type", type.id);
                                                    setIsTypeDropdownOpen(false);
                                                }}
                                                className="w-full text-left px-5 py-3 text-sm hover:bg-linen transition-colors"
                                            >
                                                {type.name}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Concern Pill Buttons */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="w-full text-center text-xs uppercase tracking-widest text-taupe mb-2">Filter by Skin Concern</span>
                        {skinConditions.map(condition => (
                            <button
                                key={condition.id}
                                onClick={() => updateFilter("concern", activeConcern === condition.id ? null : condition.id)}
                                className={`px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 border ${activeConcern === condition.id
                                    ? "bg-wine text-white border-wine shadow-md"
                                    : "bg-ivory text-espresso border-warm-beige hover:border-wine/30"
                                    }`}
                            >
                                {condition.name}
                            </button>
                        ))}
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 border-t border-warm-beige pt-8 w-full">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    updateFilter("category", cat === "All" ? null : cat);
                                }}
                                className={`px-6 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] transition-all duration-200 ${activeCategory === cat
                                    ? "bg-espresso text-cream shadow-inner"
                                    : "text-taupe hover:text-espresso"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filter Summary */}
                {(search || activeCategory !== "All" || activeType !== "All Types" || activeConcern) && (
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-warm-beige">
                        <p className="text-sm text-taupe italic">
                            Showing {filtered.length} products matching your selection
                        </p>
                        <button
                            onClick={handleClearAll}
                            className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-wine hover:text-wine-dark font-medium group"
                        >
                            <X className="w-3 h-3 group-hover:rotate-90 transition-transform" />
                            Reset Filters
                        </button>
                    </div>
                )}

                {/* Grid */}
                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filtered.map((product) => {
                        const arData = skincareProductsAr[product.id];
                        const displayProduct = isAr && arData ? {
                            ...product,
                            description: arData.description,
                            usage: arData.usage,
                            benefits: arData.benefits
                        } : product;

                        return (
                            <ProductCard
                                key={product.id}
                                product={displayProduct}
                                category="skincare"
                            />
                        );
                    })}
                </motion.div>

                {filtered.length === 0 && (
                    <div className="text-center py-24">
                        <div className="w-20 h-20 rounded-full bg-linen flex items-center justify-center mx-auto mb-6">
                            <Filter className="w-10 h-10 text-sand" />
                        </div>
                        <h4 className="text-espresso mb-2">No matching products</h4>
                        <p className="text-taupe text-sm">Try adjusting your filters or search terms.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
