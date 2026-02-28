import { Outlet, Link, useLocation } from "react-router";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 70, damping: 20, restDelta: 0.001 });
  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
    />
  );
}

interface NavDropdownItem {
  label: string;
  path: string;
  description: string;
}

interface NavGroup {
  label: string;
  items: NavDropdownItem[];
}

const skincareItems: NavDropdownItem[] = [
  { label: "Skin Types & Conditions", path: "/skincare/types", description: "Understand your skin" },
  { label: "Skincare Routines", path: "/skincare/solutions", description: "Step-by-step guidance" },
  { label: "Skincare Products", path: "/skincare/products", description: "Explore our catalogue" },
];

const haircareItems: NavDropdownItem[] = [
  { label: "Hair Types & Conditions", path: "/haircare/types", description: "Know your hair" },
  { label: "Hair Routines", path: "/haircare/solutions", description: "Care plans by type" },
  { label: "Haircare Products", path: "/haircare/products", description: "Hair-specific formulas" },
];

function DropdownMenu({ items, isOpen }: { items: NavDropdownItem[]; isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.97 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-cream border border-warm-beige rounded-xl shadow-[0_8px_40px_rgba(61,43,31,0.12)] py-2 z-50"
        >
          {items.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="block px-5 py-3 group hover:bg-linen transition-colors"
            >
              <p className="text-sm text-espresso font-medium group-hover:text-gold transition-colors">{item.label}</p>
              <p className="text-xs text-taupe mt-0.5">{item.description}</p>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Layout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (paths: string[]) => paths.some((p) => location.pathname.startsWith(p));

  return (
    <div className="min-h-screen bg-cream">
      <ScrollProgressBar />

      {/* ── Navigation ───────────────────────────────────────────────────── */}
      <nav
        ref={navRef}
        className={`sticky top-0 z-50 transition-all duration-500 border-b ${scrolled
            ? "backdrop-blur-xl border-[rgba(190,155,120,0.25)] shadow-[0_2px_24px_rgba(150,110,80,0.10)]"
            : location.pathname === "/"
              ? "backdrop-blur-sm border-transparent"
              : "backdrop-blur-md border-warm-beige/40"
          }`}
        style={{
          background: scrolled
            ? "rgba(210,178,148,0.40)"
            : location.pathname === "/"
              ? "rgba(255,255,255,0.04)"
              : "rgba(253,249,246,0.90)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-7 h-7 rounded-full border border-gold flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                <span className="text-gold group-hover:text-cream text-xs transition-colors duration-300">✦</span>
              </div>
              <span
                className="font-heading text-espresso text-xl tracking-wide"
                style={{ fontStyle: "italic" }}
              >
                RO
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">

              {/* Skincare Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setOpenDropdown("skincare")}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onClick={() => setOpenDropdown(openDropdown === "skincare" ? null : "skincare")}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-200 ${isActive(["/skincare"])
                    ? "text-gold bg-linen"
                    : "text-mink hover:text-espresso hover:bg-linen"
                    }`}
                >
                  Skincare
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${openDropdown === "skincare" ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  onMouseEnter={() => setOpenDropdown("skincare")}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <DropdownMenu items={skincareItems} isOpen={openDropdown === "skincare"} />
                </div>
              </div>

              {/* Haircare Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setOpenDropdown("haircare")}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onClick={() => setOpenDropdown(openDropdown === "haircare" ? null : "haircare")}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-200 ${isActive(["/haircare"])
                    ? "text-gold bg-linen"
                    : "text-mink hover:text-espresso hover:bg-linen"
                    }`}
                >
                  Haircare
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${openDropdown === "haircare" ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  onMouseEnter={() => setOpenDropdown("haircare")}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <DropdownMenu items={haircareItems} isOpen={openDropdown === "haircare"} />
                </div>
              </div>

              {/* About */}
              <Link
                to="/about"
                className={`px-4 py-2 rounded-full text-sm transition-all duration-200 ${location.pathname === "/about"
                  ? "text-gold bg-linen"
                  : "text-mink hover:text-espresso hover:bg-linen"
                  }`}
              >
                About Us
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-linen transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-espresso" />
              ) : (
                <Menu className="w-5 h-5 text-espresso" />
              )}
            </button>
          </div>

          {/* Mobile Nav */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden overflow-hidden border-t border-warm-beige"
              >
                <div className="py-4 space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-sand px-4 py-2">Skincare</p>
                  {skincareItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-6 py-2.5 text-sm text-mink hover:text-gold hover:bg-linen rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="my-2 border-t border-warm-beige" />
                  <p className="text-xs uppercase tracking-[0.2em] text-sand px-4 py-2">Haircare</p>
                  {haircareItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-6 py-2.5 text-sm text-mink hover:text-gold hover:bg-linen rounded-lg transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="my-2 border-t border-warm-beige" />
                  <Link
                    to="/about"
                    className="block px-6 py-2.5 text-sm text-mink hover:text-gold hover:bg-linen rounded-lg transition-colors"
                  >
                    About Us
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* ── Main Content ─────────────────────────────────────────────────── */}
      <main>
        <Outlet />
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className="mt-24 border-t border-warm-beige" style={{ background: "#F8F3ED" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="grid md:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-full border border-gold flex items-center justify-center">
                  <span className="text-gold text-xs">✦</span>
                </div>
                <span className="font-heading text-espresso text-lg italic">RO</span>
              </div>
              <p className="text-sm leading-relaxed text-taupe">
                Your expert companion for skincare and haircare — evidence-based, beautifully curated.
              </p>
            </div>

            {/* Skincare */}
            <div>
              <h4 className="font-body text-xs uppercase tracking-[0.2em] text-sand mb-4">Skincare</h4>
              <ul className="space-y-2.5">
                {skincareItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-sm text-mink hover:text-gold transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Haircare */}
            <div>
              <h4 className="font-body text-xs uppercase tracking-[0.2em] text-sand mb-4">Haircare</h4>
              <ul className="space-y-2.5">
                {haircareItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-sm text-mink hover:text-gold transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-body text-xs uppercase tracking-[0.2em] text-sand mb-4">Company</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/about" className="text-sm text-mink hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-warm-beige pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-taupe">
              © 2026 RO Beauty Guide. For educational purposes only — not a substitute for professional medical advice.
            </p>
            <div className="w-16 h-px bg-gold/50" />
          </div>
        </div>
      </footer>
    </div>
  );
}
