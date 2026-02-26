import { Outlet, Link, useLocation } from "react-router";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Sparkles, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 z-[100] origin-left"
      style={{ scaleX }}
    />
  );
}

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/skin-types", label: "Skin & Acne Types" },
    { path: "/solutions", label: "Solutions" },
    { path: "/products", label: "Products" },
    { path: "/team", label: "Our Team" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <ScrollProgressBar />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-6 h-6 text-pink-500" />
              </motion.div>
              <span className="text-xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                GlowGuide
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-1">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    className={`px-4 py-2 rounded-full transition-colors relative ${location.pathname === item.path
                      ? "text-pink-600"
                      : "text-gray-600 hover:bg-pink-50"
                      }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-pink-100 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {item.label}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-pink-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden py-4 space-y-2 overflow-hidden"
              >
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg ${location.pathname === item.path
                        ? "bg-pink-100 text-pink-600"
                        : "text-gray-600 hover:bg-pink-50"
                        }`}
                    >
                      {item.label}
                    </div>
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-pink-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-pink-500" />
              <span className="text-lg bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                GlowGuide
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Your personalized skincare companion. Discover the right products for your unique skin.
            </p>
            <p className="text-gray-400 text-xs mt-4">
              © 2026 GlowGuide. Educational purposes only - not for medical advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
