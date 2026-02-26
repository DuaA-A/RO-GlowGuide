import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Sparkles, CheckCircle2 } from "lucide-react";

export function Solutions() {
  const solutions = [
    {
      acneType: "Comedonal Acne",
      subtitle: "Blackheads & Whiteheads",
      description: "Target clogged pores with exfoliating and pore-refining treatments.",
      color: "yellow",
      gradient: "from-yellow-400 to-yellow-600",
      products: [
        {
          name: "Salicylic Acid Cleanser",
          benefit: "Penetrates pores to dissolve oil and debris",
          ingredients: "2% Salicylic Acid, Glycerin",
          usage: "Use twice daily",
          image: "https://images.unsplash.com/photo-1556227703-ab57dbc6f839?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNpYWwlMjBjbGVhbnNlciUyMGJvdHRsZXxlbnwxfHx8fDE3NzIwMjM5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "BHA Exfoliating Toner",
          benefit: "Gently exfoliates and unclogs pores",
          ingredients: "Beta Hydroxy Acid, Witch Hazel",
          usage: "Apply after cleansing",
          image: "https://images.unsplash.com/photo-1770717984643-2a1545902579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHRvbmVyJTIwYm90dGxlfGVufDF8fHx8MTc3MjA3MzQxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Retinol Night Serum",
          benefit: "Promotes cell turnover and prevents clogged pores",
          ingredients: "Retinol, Hyaluronic Acid, Niacinamide",
          usage: "Apply before bed, 2-3 times weekly",
          image: "https://images.unsplash.com/photo-1686121522744-dc323ce3fb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHNlcnVtJTIwYm90dGxlJTIwcGlua3xlbnwxfHx8fDE3NzIwNzM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
    {
      acneType: "Inflammatory Acne",
      subtitle: "Papules & Pustules",
      description: "Reduce inflammation and fight bacteria with targeted treatments.",
      color: "orange",
      gradient: "from-orange-400 to-orange-600",
      products: [
        {
          name: "Benzoyl Peroxide Gel",
          benefit: "Kills acne-causing bacteria and reduces inflammation",
          ingredients: "2.5% Benzoyl Peroxide, Aloe Vera",
          usage: "Spot treat 1-2 times daily",
          image: "https://images.unsplash.com/photo-1686121522744-dc323ce3fb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHNlcnVtJTIwYm90dGxlJTIwcGlua3xlbnwxfHx8fDE3NzIwNzM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Niacinamide Serum",
          benefit: "Calms inflammation and regulates oil production",
          ingredients: "10% Niacinamide, Zinc PCA",
          usage: "Apply morning and evening",
          image: "https://images.unsplash.com/photo-1686121522744-dc323ce3fb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHNlcnVtJTIwYm90dGxlJTIwcGlua3xlbnwxfHx8fDE3NzIwNzM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Centella Soothing Cream",
          benefit: "Reduces redness and supports skin healing",
          ingredients: "Centella Asiatica, Panthenol",
          usage: "Apply as final step in routine",
          image: "https://images.unsplash.com/photo-1767611033962-6e3124c71450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMG1vaXN0dXJpemVyJTIwY3JlYW0lMjBqYXJ8ZW58MXx8fHwxNzcyMDI3MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
    {
      acneType: "Cystic Acne",
      subtitle: "Severe & Deep Lesions",
      description: "Professional-strength ingredients to combat deep, painful breakouts.",
      color: "red",
      gradient: "from-red-400 to-red-600",
      products: [
        {
          name: "Prescription Retinoid",
          benefit: "Medical-grade cell turnover and deep pore clearing",
          ingredients: "Tretinoin, Adapalene (Rx required)",
          usage: "As directed by dermatologist",
          image: "https://images.unsplash.com/photo-1686121522744-dc323ce3fb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHNlcnVtJTIwYm90dGxlJTIwcGlua3xlbnwxfHx8fDE3NzIwNzM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Azelaic Acid Treatment",
          benefit: "Reduces inflammation and prevents post-acne marks",
          ingredients: "15% Azelaic Acid",
          usage: "Apply morning and night",
          image: "https://images.unsplash.com/photo-1686121522744-dc323ce3fb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHNlcnVtJTIwYm90dGxlJTIwcGlua3xlbnwxfHx8fDE3NzIwNzM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Hydrocolloid Patches",
          benefit: "Protects lesions and draws out impurities",
          ingredients: "Medical-grade Hydrocolloid",
          usage: "Apply to clean, dry skin overnight",
          image: "https://images.unsplash.com/photo-1770717984643-2a1545902579?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHRvbmVyJTIwYm90dGxlfGVufDF8fHx8MTc3MjA3MzQxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
    {
      acneType: "Hormonal Acne",
      subtitle: "Cyclic Breakouts",
      description: "Balance hormones and reduce cyclic breakouts with targeted care.",
      color: "purple",
      gradient: "from-purple-400 to-purple-600",
      products: [
        {
          name: "Spironolactone (Rx)",
          benefit: "Blocks androgens that trigger oil production",
          ingredients: "Spironolactone (prescription only)",
          usage: "As prescribed by healthcare provider",
          image: "https://images.unsplash.com/photo-1686121522744-dc323ce3fb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHNlcnVtJTIwYm90dGxlJTIwcGlua3xlbnwxfHx8fDE3NzIwNzM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Tea Tree Oil Serum",
          benefit: "Natural antibacterial and anti-inflammatory",
          ingredients: "Tea Tree Oil, Jojoba Oil",
          usage: "Apply to affected areas",
          image: "https://images.unsplash.com/photo-1686121522744-dc323ce3fb26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHNlcnVtJTIwYm90dGxlJTIwcGlua3xlbnwxfHx8fDE3NzIwNzM0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
        {
          name: "Balancing Moisturizer",
          benefit: "Lightweight hydration without clogging pores",
          ingredients: "Hyaluronic Acid, Ceramides, Green Tea",
          usage: "Apply morning and night",
          image: "https://images.unsplash.com/photo-1767611033962-6e3124c71450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMG1vaXN0dXJpemVyJTIwY3JlYW0lMjBqYXJ8ZW58MXx8fHwxNzcyMDI3MjMyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string } } = {
      yellow: { bg: "bg-yellow-100", text: "text-yellow-700" },
      orange: { bg: "bg-orange-100", text: "text-orange-700" },
      red: { bg: "bg-red-100", text: "text-red-700" },
      purple: { bg: "bg-purple-100", text: "text-purple-700" },
    };
    return colors[color] || colors.yellow;
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Targeted Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the perfect products for your specific acne type. Each solution is carefully 
            curated to address your unique skin concerns.
          </p>
        </motion.div>

        {/* Solutions */}
        <div className="space-y-20">
          {solutions.map((solution, solutionIndex) => (
            <motion.div
              key={solution.acneType}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: solutionIndex * 0.1 }}
            >
              {/* Section Header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center`}>
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl text-gray-800">{solution.acneType}</h2>
                    <p className={`text-sm ${getColorClasses(solution.color).text}`}>
                      {solution.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mt-4">{solution.description}</p>
              </div>

              {/* Products Grid */}
              <div className="grid md:grid-cols-3 gap-6">
                {solution.products.map((product, productIndex) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: productIndex * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                  >
                    {/* Product Image */}
                    <div className="relative h-56 overflow-hidden">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-20`} />
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl mb-2 text-gray-800">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{product.benefit}</p>

                      <div className="space-y-3 mb-4">
                        <div>
                          <span className="text-xs uppercase tracking-wide text-gray-500">
                            Key Ingredients:
                          </span>
                          <p className="text-sm text-gray-700 mt-1">{product.ingredients}</p>
                        </div>
                        <div>
                          <span className="text-xs uppercase tracking-wide text-gray-500">
                            How to Use:
                          </span>
                          <p className="text-sm text-gray-700 mt-1">{product.usage}</p>
                        </div>
                      </div>

                      <div className={`${getColorClasses(solution.color).bg} ${getColorClasses(solution.color).text} px-3 py-2 rounded-lg text-sm inline-flex items-center gap-2`}>
                        <CheckCircle2 className="w-4 h-4" />
                        For {solution.acneType}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl mb-4 text-gray-800">Important Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-700 mb-1">Always patch test new products before full application.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-700 mb-1">Introduce new actives gradually to avoid irritation.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-700 mb-1">Use sunscreen daily, especially when using exfoliating ingredients.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-700 mb-1">Consult a dermatologist for severe or persistent acne.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
