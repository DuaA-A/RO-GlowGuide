import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router";
import { SectionHeader } from "../../components/SectionHeader";
import { ProductCard } from "../../components/ProductCard";
import { haircareProducts } from "../../data/haircare";

const CATEGORIES = ["All", "Shampoo", "Conditioner", "Treatment", "Styling", "Scalp Treatment", "Oil Treatment"];

export function HaircareProducts() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        const typeParam = searchParams.get("type");
        const catParam = searchParams.get("category");
        if (catParam && CATEGORIES.includes(catParam)) {
            setActiveCategory(catParam);
        }
        if (typeParam) {
            setSearch(typeParam);
        }
    }, [searchParams]);

    const filtered = haircareProducts.filter((p) => {
        const query = search.toLowerCase().trim();
        const matchesSearch =
            p.name.toLowerCase().includes(query) ||
            p.description.toLowerCase().includes(query) ||
            p.mainIngredients.some((i) => i.toLowerCase().includes(query)) ||
            p.targetTypes.some((t) => t.toLowerCase().includes(query)) ||
            (p.brand && p.brand.toLowerCase().includes(query));

        const matchesCategory = activeCategory === "All" || p.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const handleCategoryClick = (cat: string) => {
        setActiveCategory(cat);
    };

    return (
        <div className="py-20">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

                <SectionHeader
                    label="Haircare Products"
                    title="The Haircare"
                    titleHighlight="Catalogue."
                    subtitle="Browse our expert haircare selection. Search by name or ingredient, filter by category, then click to view full product details and clinical data."
                />

                {/* Search */}
                <div className="mt-12 max-w-xl mx-auto mb-8">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-taupe" />
                        <input
                            type="text"
                            placeholder="Search by name, ingredient, or hair type…"
                            value={search}
                            onChange={(e) => {
                                const val = e.target.value;
                                setSearch(val);
                                if (!val) {
                                    const newParams = new URLSearchParams(searchParams);
                                    newParams.delete("type");
                                    setSearchParams(newParams);
                                }
                            }}
                            className="w-full pl-11 pr-5 py-3.5 bg-ivory border border-warm-beige rounded-full text-sm text-espresso placeholder-taupe focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/10 transition-all"
                        />
                    </div>
                </div>

                {/* Filter info and clear button */}
                {(search || activeCategory !== "All") && (
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={() => {
                                setSearch("");
                                setActiveCategory("All");
                                setSearchParams({});
                            }}
                            className="text-xs uppercase tracking-widest text-wine hover:text-wine-dark font-medium underline underline-offset-4"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}

                {/* Category filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryClick(cat)}
                            className={`px-5 py-2 rounded-full text-xs uppercase tracking-[0.1em] border transition-all duration-200 ${activeCategory === cat
                                ? "bg-espresso text-cream border-espresso"
                                : "bg-ivory text-taupe border-warm-beige hover:border-taupe hover:text-espresso"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <p className="text-center text-sm text-taupe mb-8">
                    Showing {filtered.length} curated product{filtered.length !== 1 ? "s" : ""}
                </p>

                {/* Grid */}
                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filtered.map((product) => (
                        <ProductCard key={product.id} product={product} category="haircare" />
                    ))}
                </motion.div>

                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <div className="w-16 h-16 rounded-full bg-linen flex items-center justify-center mx-auto mb-4">
                            <Search className="w-8 h-8 text-sand" />
                        </div>
                        <p className="text-taupe">No curated products found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
