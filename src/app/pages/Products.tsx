import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Search, Droplets, Sun, Wind, Heart, AlertCircle, Sparkles } from "lucide-react";

export function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkinType, setSelectedSkinType] = useState<string>("all");

  const products = [
    {
      id: 1,
      name: "Gentle Hydrating Cleanser",
      category: "Cleanser",
      description: "A mild, creamy cleanser that removes impurities without stripping natural moisture.",
      skinTypes: ["dry", "sensitive", "normal"],
      benefits: ["Hydrates", "Soothes", "Non-stripping"],
      ingredients: "Ceramides, Hyaluronic Acid, Glycerin",
      image: "https://images.unsplash.com/photo-1556227703-ab57dbc6f839?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBjbGVhbnNlciUyMGJvdHRsZXxlbnwxfHx8fDE3NzIwMjM5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 2,
      name: "BHA Clarifying Toner",
      category: "Toner",
      description: "Oil-control toner that minimizes pores and prevents breakouts.",
      skinTypes: ["oily", "combination"],
      benefits: ["Exfoliates", "Minimizes pores", "Controls oil"],
      ingredients: "Salicylic Acid, Witch Hazel, Niacinamide",
      image: "https://images.unsplash.com/photo-1770717984643-2a1545902579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHRvbmVyJTIwYm90dGxlfGVufDF8fHx8MTc3MjA3MzQxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 3,
      name: "Vitamin C Brightening Serum",
      category: "Serum",
      description: "Powerful antioxidant serum that brightens skin tone and reduces dark spots.",
      skinTypes: ["all", "normal", "dry", "oily", "combination"],
      benefits: ["Brightens", "Anti-aging", "Evens tone"],
      ingredients: "15% Vitamin C, Ferulic Acid, Vitamin E",
      image: "https://images.unsplash.com/photo-1686121522744-dc323ce3fb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHNlcnVtJTIwYm90dGxlJTIwcGlua3xlbnwxfHx8fDE3NzIwNzM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 4,
      name: "Niacinamide 10% + Zinc Serum",
      category: "Serum",
      description: "Regulates sebum production and minimizes the appearance of pores.",
      skinTypes: ["oily", "combination", "normal"],
      benefits: ["Oil control", "Pore refining", "Reduces blemishes"],
      ingredients: "10% Niacinamide, 1% Zinc PCA",
      image: "https://images.unsplash.com/photo-1686121522744-dc323ce3fb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHNlcnVtJTIwYm90dGxlJTIwcGlua3xlbnwxfHx8fDE3NzIwNzM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 5,
      name: "Hyaluronic Acid Hydrating Serum",
      category: "Serum",
      description: "Multi-molecular weight hyaluronic acid for deep and lasting hydration.",
      skinTypes: ["dry", "normal", "sensitive", "combination"],
      benefits: ["Intense hydration", "Plumps skin", "Smooths fine lines"],
      ingredients: "Hyaluronic Acid, Provitamin B5, Vitamin B3",
      image: "https://images.unsplash.com/photo-1686121522744-dc323ce3fb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHNlcnVtJTIwYm90dGxlJTIwcGlua3xlbnwxfHx8fDE3NzIwNzM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 6,
      name: "Retinol 0.5% Night Treatment",
      category: "Treatment",
      description: "Gentle retinol formula to reduce fine lines and improve skin texture.",
      skinTypes: ["normal", "combination", "oily"],
      benefits: ["Anti-aging", "Smooths texture", "Reduces wrinkles"],
      ingredients: "0.5% Retinol, Squalane, Peptides",
      image: "https://images.unsplash.com/photo-1686121522744-dc323ce3fb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHNlcnVtJTIwYm90dGxlJTIwcGlua3xlbnwxfHx8fDE3NzIwNzM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 7,
      name: "Rich Repair Moisturizer",
      category: "Moisturizer",
      description: "Ultra-nourishing cream that repairs and protects dry, damaged skin.",
      skinTypes: ["dry", "sensitive"],
      benefits: ["Deep hydration", "Repairs barrier", "Soothes irritation"],
      ingredients: "Ceramides, Shea Butter, Colloidal Oatmeal",
      image: "https://images.unsplash.com/photo-1767611033962-6e3124c71450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMG1vaXN0dXJpemVyJTIwY3JlYW0lMjBqYXJ8ZW58MXx8fHwxNzcyMDI3MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 8,
      name: "Oil-Free Gel Moisturizer",
      category: "Moisturizer",
      description: "Lightweight, non-greasy gel that hydrates without clogging pores.",
      skinTypes: ["oily", "combination", "normal"],
      benefits: ["Lightweight hydration", "Non-comedogenic", "Matte finish"],
      ingredients: "Hyaluronic Acid, Green Tea Extract, Aloe Vera",
      image: "https://images.unsplash.com/photo-1767611033962-6e3124c71450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMG1vaXN0dXJpemVyJTIwY3JlYW0lMjBqYXJ8ZW58MXx8fHwxNzcyMDI3MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 9,
      name: "Calming Centella Cream",
      category: "Moisturizer",
      description: "Soothing moisturizer designed for sensitive, reactive skin.",
      skinTypes: ["sensitive", "dry", "normal"],
      benefits: ["Calms redness", "Strengthens barrier", "Gentle formula"],
      ingredients: "Centella Asiatica, Panthenol, Madecassoside",
      image: "https://images.unsplash.com/photo-1767611033962-6e3124c71450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMG1vaXN0dXJpemVyJTIwY3JlYW0lMjBqYXJ8ZW58MXx8fHwxNzcyMDI3MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 10,
      name: "Mineral SPF 50+ Sunscreen",
      category: "Sunscreen",
      description: "Physical sunscreen with broad-spectrum protection, gentle on sensitive skin.",
      skinTypes: ["all", "sensitive", "dry", "normal", "oily", "combination"],
      benefits: ["Broad spectrum SPF 50+", "Reef-safe", "No white cast"],
      ingredients: "Zinc Oxide, Titanium Dioxide, Vitamin E",
      image: "https://images.unsplash.com/photo-1686121522744-dc323ce3fb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHNlcnVtJTIwYm90dGxlJTIwcGlua3xlbnwxfHx8fDE3NzIwNzM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 11,
      name: "AHA/BHA Exfoliating Peel",
      category: "Treatment",
      description: "Weekly chemical peel to resurface skin and improve texture.",
      skinTypes: ["normal", "oily", "combination"],
      benefits: ["Deep exfoliation", "Improves texture", "Brightens"],
      ingredients: "Glycolic Acid, Salicylic Acid, Lactic Acid",
      image: "https://images.unsplash.com/photo-1770717984643-2a1545902579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHRvbmVyJTIwYm90dGxlfGVufDF8fHx8MTc3MjA3MzQxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      id: 12,
      name: "Clay Purifying Mask",
      category: "Mask",
      description: "Deep-cleansing clay mask that draws out impurities and excess oil.",
      skinTypes: ["oily", "combination", "normal"],
      benefits: ["Detoxifies", "Minimizes pores", "Controls oil"],
      ingredients: "Kaolin Clay, Bentonite, Charcoal",
      image: "https://images.unsplash.com/photo-1767611033962-6e3124c71450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMG1vaXN0dXJpemVyJTIwY3JlYW0lMjBqYXJ8ZW58MXx8fHwxNzcyMDI3MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const skinTypeFilters = [
    { id: "all", label: "All Skin Types", icon: Sparkles },
    { id: "normal", label: "Normal", icon: Heart },
    { id: "dry", label: "Dry", icon: Wind },
    { id: "oily", label: "Oily", icon: Droplets },
    { id: "combination", label: "Combination", icon: Sun },
    { id: "sensitive", label: "Sensitive", icon: AlertCircle },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.ingredients.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSkinType =
      selectedSkinType === "all" || product.skinTypes.includes(selectedSkinType) || product.skinTypes.includes("all");

    return matchesSearch && matchesSkinType;
  });

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Product Catalog
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our curated collection of skincare products. Search by name or filter by your skin type.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products, ingredients, or benefits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none bg-white shadow-md transition-all"
            />
          </div>
        </motion.div>

        {/* Skin Type Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {skinTypeFilters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedSkinType(filter.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${selectedSkinType === filter.id
                    ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg"
                    : "bg-white text-gray-600 hover:bg-pink-50 shadow-md"
                  }`}
              >
                <filter.icon className="w-4 h-4" />
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8 text-gray-600"
        >
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
        </motion.div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Product Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-700">
                      {product.category}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h3 className="text-lg mb-2 text-gray-800 line-clamp-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>

                  {/* Benefits */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {product.benefits.map((benefit, i) => (
                        <span
                          key={i}
                          className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skin Types */}
                  <div className="mb-3">
                    <span className="text-xs uppercase tracking-wide text-gray-500 block mb-2">
                      Best for:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {product.skinTypes
                        .filter((type) => type !== "all")
                        .map((type, i) => (
                          <span
                            key={i}
                            className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded capitalize"
                          >
                            {type}
                          </span>
                        ))}
                      {product.skinTypes.includes("all") && (
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                          All skin types
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Ingredients */}
                  <div>
                    <span className="text-xs uppercase tracking-wide text-gray-500">
                      Key Ingredients:
                    </span>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">{product.ingredients}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-10 h-10 text-pink-400" />
            </div>
            <h3 className="text-2xl text-gray-700 mb-2">No products found</h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </motion.div>
        )}

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-3xl mb-4">Build Your Perfect Routine</h3>
          <p className="text-pink-100 max-w-2xl mx-auto leading-relaxed">
            Remember, everyone's skin is unique! Start with the basics (cleanser, moisturizer, sunscreen)
            and gradually introduce new products one at a time to see what works best for you.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
