import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Linkedin, Mail, Sparkles } from "lucide-react";

export function Team() {
  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Lead Dermatologist & Founder",
      image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4NDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Board-certified dermatologist with 15+ years of experience in clinical skincare and cosmetic dermatology. Passionate about making skincare education accessible to everyone.",
      email: "sarah.chen@glowguide.com",
      linkedin: "#",
    },
    {
      name: "Michael Rodriguez",
      role: "Cosmetic Chemist",
      image: "https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTk2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Expert in skincare formulation with a focus on efficacy and safety. Specializes in analyzing ingredient interactions and product development.",
      email: "michael.r@glowguide.com",
      linkedin: "#",
    },
    {
      name: "Emma Thompson",
      role: "Esthetician & Educator",
      image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4NDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Licensed esthetician dedicated to helping people understand their skin. Creates educational content and personalized skincare guidance.",
      email: "emma.t@glowguide.com",
      linkedin: "#",
    },
    {
      name: "Dr. James Park",
      role: "Research Director",
      image: "https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTk2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "PhD in Biochemistry focusing on skin barrier function and acne pathology. Leads research initiatives and evidence-based content creation.",
      email: "james.park@glowguide.com",
      linkedin: "#",
    },
    {
      name: "Olivia Martinez",
      role: "Product Specialist",
      image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4NDgwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Skincare enthusiast with expertise in product curation and review. Helps identify the best products for various skin concerns and types.",
      email: "olivia.m@glowguide.com",
      linkedin: "#",
    },
    {
      name: "David Kim",
      role: "Content Creator",
      image: "https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzIwNTk2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bio: "Digital content specialist creating engaging, educational materials about skincare. Makes complex dermatology concepts easy to understand.",
      email: "david.kim@glowguide.com",
      linkedin: "#",
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-sm text-pink-700">Meet the Experts</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A passionate group of skincare experts, dermatologists, and researchers dedicated to 
            bringing you the most accurate and helpful skincare information.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                {/* Image */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Social Links - Show on hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={member.linkedin}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-2xl mb-1 text-gray-800">{member.name}</h3>
                  <p className="text-pink-600 mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Why We Created GlowGuide
              </span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We noticed that navigating the world of skincare can be overwhelming and confusing. 
              With countless products and conflicting advice, it's hard to know what's right for your skin.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              That's why we created <strong>GlowGuide</strong> – a reliable, educational platform where 
              you can learn about your skin type, understand different acne concerns, and discover 
              products that are truly suited to your needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to empower you with knowledge so you can make informed decisions about 
              your skincare journey. We're here to guide you, not sell to you.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-3xl md:text-4xl text-center mb-12">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Evidence-Based",
                description: "All our recommendations are grounded in scientific research and dermatological expertise.",
                gradient: "from-pink-400 to-pink-600",
              },
              {
                title: "Transparent",
                description: "We're honest about what works, what doesn't, and why. No hidden agendas or sponsored content.",
                gradient: "from-purple-400 to-purple-600",
              },
              {
                title: "Inclusive",
                description: "Beautiful skin comes in all types. We celebrate diversity and provide guidance for everyone.",
                gradient: "from-pink-400 to-purple-600",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl mb-4">Want to Connect?</h2>
          <p className="text-pink-100 text-lg mb-6 max-w-2xl mx-auto">
            We love hearing from our community! Whether you have questions, feedback, or just 
            want to share your skincare journey, we're here to listen.
          </p>
          <motion.a
            href="mailto:hello@glowguide.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
