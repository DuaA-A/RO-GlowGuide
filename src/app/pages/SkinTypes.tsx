import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Droplets, Sun, Wind, Heart, AlertCircle, Circle } from "lucide-react";

export function SkinTypes() {
  const [activeTab, setActiveTab] = useState<"skin" | "acne">("skin");

  const skinTypes = [
    {
      name: "Normal Skin",
      icon: Heart,
      description: "Balanced, not too oily or dry, with minimal imperfections and no severe sensitivity.",
      characteristics: [
        "Balanced oil and moisture",
        "Small pores",
        "Even skin tone",
        "Few or no breakouts",
      ],
      image: "https://images.unsplash.com/photo-1737978697863-5d65495b28ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGNsZWFyJTIwaGVhbHRoeSUyMHNraW58ZW58MXx8fHwxNzcyMDczNDA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "green",
    },
    {
      name: "Dry Skin",
      icon: Wind,
      description: "Lacks moisture and natural oils, may feel tight and show flaking or rough patches.",
      characteristics: [
        "Feels tight or rough",
        "Visible flaking or peeling",
        "Fine lines more visible",
        "Dull complexion",
      ],
      image: "https://images.unsplash.com/photo-1654828983112-981fe9438f9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcnklMjBza2luJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzIwNzM0MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "blue",
    },
    {
      name: "Oily Skin",
      icon: Droplets,
      description: "Produces excess sebum, leading to a shiny appearance and enlarged pores.",
      characteristics: [
        "Shiny or greasy appearance",
        "Enlarged, visible pores",
        "Prone to blackheads",
        "Makeup doesn't stay well",
      ],
      image: "https://images.unsplash.com/photo-1764656424627-1fa7e5e7c2ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWx5JTIwc2tpbiUyMGZhY2V8ZW58MXx8fHwxNzcyMDczNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "yellow",
    },
    {
      name: "Combination Skin",
      icon: Sun,
      description: "Mix of skin types, typically oily in the T-zone (forehead, nose, chin) and normal to dry elsewhere.",
      characteristics: [
        "Oily T-zone",
        "Dry or normal cheeks",
        "Varying pore size",
        "Different needs by area",
      ],
      image: "https://images.unsplash.com/photo-1737978697863-5d65495b28ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21iaW5hdGlvbiUyMHNraW4lMjB3b21hbnxlbnwxfHx8fDE3NzIwNzM0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "orange",
    },
    {
      name: "Sensitive Skin",
      icon: AlertCircle,
      description: "Easily irritated, reacts to products or environmental factors with redness or discomfort.",
      characteristics: [
        "Prone to redness",
        "Feels itchy or burning",
        "Reacts to products easily",
        "May have rosacea or eczema",
      ],
      image: "https://images.unsplash.com/photo-1765004500636-721868e9626c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5zaXRpdmUlMjBza2luJTIwcmVkbmVzc3xlbnwxfHx8fDE3NzIwNzM0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "red",
    },
  ];

  const acneTypes = [
    {
      name: "Comedonal Acne",
      type: "Non-inflammatory",
      description: "Characterized by blackheads and whiteheads caused by clogged pores.",
      causes: [
        "Excess oil production",
        "Dead skin cell buildup",
        "Bacteria in pores",
        "Hormonal changes",
      ],
      image: "https://images.unsplash.com/photo-1605553702283-f9f767e524c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFja2hlYWRzJTIwc2tpbiUyMGNsb3NldXB8ZW58MXx8fHwxNzcyMDczNDEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      severity: "Mild",
      color: "yellow",
    },
    {
      name: "Inflammatory Acne",
      type: "Papules & Pustules",
      description: "Red, inflamed bumps that may contain pus. More severe than blackheads.",
      causes: [
        "Bacterial infection",
        "Inflammation response",
        "Hormonal fluctuations",
        "Stress and diet",
      ],
      image: "https://images.unsplash.com/photo-1730288951113-9cc087c14b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY25lJTIwc2tpbiUyMGNsb3NldXB8ZW58MXx8fHwxNzcyMDczNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      severity: "Moderate",
      color: "orange",
    },
    {
      name: "Cystic Acne",
      type: "Severe",
      description: "Deep, painful, pus-filled lesions that can cause scarring. Requires professional treatment.",
      causes: [
        "Deep bacterial infection",
        "Severe inflammation",
        "Genetic predisposition",
        "Hormonal imbalances",
      ],
      image: "https://images.unsplash.com/photo-1730288951113-9cc087c14b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeXN0aWMlMjBhY25lJTIwc2tpbnxlbnwxfHx8fDE3NzIwNzM0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      severity: "Severe",
      color: "red",
    },
    {
      name: "Hormonal Acne",
      type: "Cyclic",
      description: "Breakouts that occur around the jawline and chin, often related to menstrual cycles.",
      causes: [
        "Hormonal fluctuations",
        "Menstrual cycle changes",
        "Stress hormones",
        "PCOS or other conditions",
      ],
      image: "https://images.unsplash.com/photo-1730288951113-9cc087c14b83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY25lJTIwc2tpbiUyMGNsb3NldXB8ZW58MXx8fHwxNzcyMDczNDA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      severity: "Moderate",
      color: "purple",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string; gradient: string } } = {
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        border: "border-green-300",
        gradient: "from-green-400 to-green-600"
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-300",
        gradient: "from-blue-400 to-blue-600"
      },
      yellow: {
        bg: "bg-yellow-100",
        text: "text-yellow-600",
        border: "border-yellow-300",
        gradient: "from-yellow-400 to-yellow-600"
      },
      orange: {
        bg: "bg-orange-100",
        text: "text-orange-600",
        border: "border-orange-300",
        gradient: "from-orange-400 to-orange-600"
      },
      red: {
        bg: "bg-red-100",
        text: "text-red-600",
        border: "border-red-300",
        gradient: "from-red-400 to-red-600"
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-300",
        gradient: "from-purple-400 to-purple-600"
      },
    };
    return colors[color] || colors.green;
  };

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
              Know Your Skin
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding your skin type and acne concerns is the first step to achieving healthy, glowing skin.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1 shadow-lg">
            <button
              onClick={() => setActiveTab("skin")}
              className={`px-8 py-3 rounded-full transition-all ${activeTab === "skin"
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800"
                }`}
            >
              Skin Types
            </button>
            <button
              onClick={() => setActiveTab("acne")}
              className={`px-8 py-3 rounded-full transition-all ${activeTab === "acne"
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gray-800"
                }`}
            >
              Acne Types
            </button>
          </div>
        </div>

        {/* Skin Types Content */}
        {activeTab === "skin" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-8"
          >
            {skinTypes.map((skin, index) => (
              <motion.div
                key={skin.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <ImageWithFallback
                      src={skin.image}
                      alt={skin.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(skin.color).gradient} opacity-20`} />
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${getColorClasses(skin.color).gradient} flex items-center justify-center`}>
                        <skin.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-3xl text-gray-800">{skin.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{skin.description}</p>
                    <div className="space-y-3">
                      <h4 className={`text-sm uppercase tracking-wide ${getColorClasses(skin.color).text}`}>
                        Key Characteristics:
                      </h4>
                      {skin.characteristics.map((char, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Circle className={`w-2 h-2 fill-current ${getColorClasses(skin.color).text}`} />
                          <span className="text-gray-700">{char}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Acne Types Content */}
        {activeTab === "acne" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-8"
          >
            {acneTypes.map((acne, index) => (
              <motion.div
                key={acne.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <ImageWithFallback
                      src={acne.image}
                      alt={acne.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${getColorClasses(acne.color).gradient} opacity-20`} />
                    <div className={`absolute top-4 right-4 ${getColorClasses(acne.color).bg} ${getColorClasses(acne.color).text} px-4 py-2 rounded-full text-sm`}>
                      {acne.severity}
                    </div>
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="mb-4">
                      <span className={`text-sm ${getColorClasses(acne.color).text} uppercase tracking-wide`}>
                        {acne.type}
                      </span>
                      <h3 className="text-3xl text-gray-800 mt-2">{acne.name}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{acne.description}</p>
                    <div className="space-y-3">
                      <h4 className={`text-sm uppercase tracking-wide ${getColorClasses(acne.color).text}`}>
                        Common Causes:
                      </h4>
                      {acne.causes.map((cause, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Circle className={`w-2 h-2 fill-current ${getColorClasses(acne.color).text}`} />
                          <span className="text-gray-700">{cause}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 text-center text-white"
        >
          <AlertCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl mb-3">Important Note</h3>
          <p className="text-pink-100 max-w-3xl mx-auto leading-relaxed">
            While identifying your skin type and acne concerns can help guide your skincare choices,
            severe or persistent skin issues should be evaluated by a dermatologist. This information
            is for educational purposes only and not a substitute for professional medical advice.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
