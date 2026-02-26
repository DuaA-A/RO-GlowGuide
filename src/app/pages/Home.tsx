import { motion } from "motion/react";
import { Sparkles, Heart, Zap, Shield } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-96 h-96 bg-pink-300 rounded-full blur-3xl opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4 text-pink-500" />
                <span className="text-sm text-pink-700 font-medium">Your Skincare Journey Starts Here</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 font-bold tracking-tight leading-[1.1] text-gray-900">
                <motion.span variants={item} className="block mb-2 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Discover Your
                </motion.span>
                <motion.span variants={item} className="block">
                  Perfect Glow
                </motion.span>
              </h1>

              <motion.p
                variants={item}
                className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl"
              >
                Welcome to <strong>GlowGuide</strong> – your personalized skincare companion.
                We help you understand your unique skin type, identify concerns, and discover
                the perfect products tailored just for you.
              </motion.p>

              <div className="flex flex-wrap gap-4">
                <Link to="/skin-types">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    Explore Skin Types
                  </motion.button>
                </Link>
                <Link to="/products">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-gray-700 rounded-full shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                  >
                    Browse Products
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1739640081344-4da924d73828?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGNvc21ldGljcyUyMHBpbmslMjBmZW1pbmluZXxlbnwxfHx8fDE3NzIwNzM0MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Skincare products"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent" />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-8 h-8 text-pink-500" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe everyone deserves to feel confident in their skin. GlowGuide empowers
              you with knowledge and personalized product recommendations to achieve your healthiest,
              most radiant complexion.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Heart,
                title: "Personalized Care",
                description: "Get tailored product recommendations based on your unique skin type and concerns.",
                color: "pink",
              },
              {
                icon: Zap,
                title: "Science-Backed",
                description: "All our recommendations are based on dermatological research and proven ingredients.",
                color: "purple",
              },
              {
                icon: Shield,
                title: "Safe & Gentle",
                description: "We prioritize gentle, effective products suitable for all skin types and sensitivities.",
                color: "pink",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color === "pink"
                    ? "from-pink-400 to-pink-600"
                    : "from-purple-400 to-purple-600"
                    } flex items-center justify-center mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                What We Offer
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-gray-800">Skin Type Education</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Learn about different skin types (normal, dry, oily, combination, sensitive)
                    and various acne types to better understand your skin's unique needs.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-gray-800">Targeted Solutions</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Discover effective solutions for each acne type with curated product
                    recommendations that address your specific concerns.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-gray-800">Product Discovery</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Browse our curated collection of skincare products with detailed information
                    about their benefits and which skin types they're best suited for.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-2xl mb-3 text-gray-800">Expert Guidance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team of skincare enthusiasts has researched and compiled the best
                    information to guide you toward healthier, happier skin.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Ready to Start Your Glow Journey?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Explore our comprehensive guides and find the perfect products for your skin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/skin-types">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-purple-600 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  Learn About Your Skin
                </motion.button>
              </Link>
              <Link to="/team">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full hover:bg-white/10 transition-colors"
                >
                  Meet Our Team
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
