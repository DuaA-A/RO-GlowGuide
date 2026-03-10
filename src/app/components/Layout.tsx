import { Outlet, Link, useLocation } from "react-router";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";


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

function useNavItems() {
  const { t } = useLanguage();
  const skincareItems: NavDropdownItem[] = [
    { label: t("nav.skinTypes"), path: "/skincare/types", description: t("nav.skinDesc") },
    { label: t("nav.skincareRoutines"), path: "/skincare/solutions", description: t("nav.skincareRoutinesDesc") },
    { label: t("nav.skincareProducts"), path: "/skincare/products", description: t("nav.skinProductsDesc") },
  ];
  const haircareItems: NavDropdownItem[] = [
    { label: t("nav.hairTypes"), path: "/haircare/types", description: t("nav.hairDesc") },
    { label: t("nav.hairRoutines"), path: "/haircare/solutions", description: t("nav.hairRoutinesDesc") },
    { label: t("nav.haircareProducts"), path: "/haircare/products", description: t("nav.hairProductsDesc") },
  ];
  return { skincareItems, haircareItems };
}

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
              <p className="text-xs text-espresso/60 mt-0.5">{item.description}</p>
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
  const { t, lang, setLang } = useLanguage();
  const { skincareItems, haircareItems } = useNavItems();

  const isHome = location.pathname === "/";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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

  // Nav state logic:
  //  - Home + not scrolled → fully transparent, no border, no shadow (blends with hero)
  //  - Home + scrolled → semi-transparent warm bg + blur + shadow
  //  - Other pages → solid warm background
  const navBg = isHome
    ? scrolled
      ? "rgba(253,248,243,0.82)"
      : "rgba(255,255,255,0.00)"
    : "rgba(253,248,243,0.96)";

  const navBorder = isHome
    ? scrolled
      ? "1px solid rgba(190,155,120,0.22)"
      : "1px solid transparent"
    : "1px solid rgba(229,216,203,0.5)";

  const navShadow = scrolled
    ? "0 4px 32px rgba(100,60,40,0.10), 0 1px 0 rgba(190,155,120,0.12)"
    : "none";

  return (
    <div className="min-h-screen bg-cream">
      <ScrollProgressBar />

      {/* ── Navigation ───────────────────────────────────────────────────── */}
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || !isHome ? "backdrop-blur-xl" : ""
          }`}
        style={{
          background: navBg,
          borderBottom: navBorder,
          boxShadow: navShadow,
        }}
      >
        {/* Inner width matches hero content alignment: max-w-7xl with matching px */}
        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div
                className="w-7 h-7 rounded-full border flex items-center justify-center group-hover:bg-gold transition-colors duration-300"
                style={{ borderColor: isHome && !scrolled ? "rgba(201,168,124,0.7)" : "#C9A87C" }}
              >
                <span
                  className="text-xs transition-colors duration-300 group-hover:text-cream"
                  style={{ color: isHome && !scrolled ? "rgba(201,168,124,0.85)" : "#C9A87C" }}
                >
                  ✦
                </span>
              </div>
              <span
                className="font-heading text-xl tracking-wide transition-colors duration-300"
                style={{
                  fontStyle: "italic",
                  color: isHome && !scrolled ? "#4A3728" : "#4A3728",
                }}
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
                    : "text-mink hover:text-espresso hover:bg-linen/60"
                    }`}
                >
                  {t("nav.skincare")}
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
                    : "text-mink hover:text-espresso hover:bg-linen/60"
                    }`}
                >
                  {t("nav.haircare")}
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
                  : "text-mink hover:text-espresso hover:bg-linen/60"
                  }`}
              >
                {t("nav.about")}
              </Link>

              {/* Language Toggle */}
              <button
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                className="ml-2 flex items-center gap-1 px-3 py-1.5 rounded-full border text-xs font-medium tracking-widest uppercase transition-all duration-200 hover:bg-linen/60"
                style={{ borderColor: "rgba(201,168,124,0.5)", color: "#A8907E" }}
                title={lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
              >
                <span className="text-sm">{lang === "en" ? "🌐" : "🌐"}</span>
                {lang === "en" ? "AR" : "EN"}
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-linen/60 transition-colors"
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
                  <p className="text-xs uppercase tracking-[0.2em] text-sand px-4 py-2">{t("nav.skincare")}</p>
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
                  <p className="text-xs uppercase tracking-[0.2em] text-sand px-4 py-2">{t("nav.haircare")}</p>
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
                    {t("nav.about")}
                  </Link>
                  <div className="my-2 border-t border-warm-beige" />
                  <button
                    onClick={() => setLang(lang === "en" ? "ar" : "en")}
                    className="w-full text-left px-6 py-2.5 text-sm text-mink hover:text-gold hover:bg-linen rounded-lg transition-colors"
                  >
                    🌐 {lang === "en" ? "العربية" : "English"}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* ── Main Content — push down by navbar height on non-home pages ──── */}
      <main className={isHome ? "" : "pt-16"}>
        <Outlet />
      </main>

      {/* ── Footer — deep wine-plum feminine dark break ────────────────────── */}
      <footer
        style={{
          background: "#3D1A26",
          borderTop: "1px solid rgba(201,168,124,0.25)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="grid md:grid-cols-4 gap-10 mb-12">

            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 rounded-full border border-gold/60 flex items-center justify-center">
                  <span className="text-gold text-xs">✦</span>
                </div>
                <span className="font-heading text-lg italic" style={{ color: "#E8D5C0" }}>RO</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(232,213,192,0.65)" }}>
                {t("footer.tagline")}
              </p>
            </div>

            {/* Skincare */}
            <div>
              <h4
                className="font-body text-xs uppercase tracking-[0.22em] mb-4"
                style={{ color: "rgba(201,168,124,0.70)" }}
              >
                {t("nav.skincare")}
              </h4>
              <ul className="space-y-2.5">
                {skincareItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(232,213,192,0.65)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#C9A87C"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(232,213,192,0.65)"; }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Haircare */}
            <div>
              <h4
                className="font-body text-xs uppercase tracking-[0.22em] mb-4"
                style={{ color: "rgba(201,168,124,0.70)" }}
              >
                {t("nav.haircare")}
              </h4>
              <ul className="space-y-2.5">
                {haircareItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(232,213,192,0.65)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#C9A87C"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(232,213,192,0.65)"; }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4
                className="font-body text-xs uppercase tracking-[0.22em] mb-4"
                style={{ color: "rgba(201,168,124,0.70)" }}
              >
                {t("footer.company")}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <Link
                    to="/about"
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(232,213,192,0.65)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#C9A87C"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(232,213,192,0.65)"; }}
                  >
                    {t("nav.about")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider + copyright */}
          <div
            className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderTop: "1px solid rgba(201,168,124,0.15)" }}
          >
            <div className="flex-1">
              <p className="text-xs mb-4" style={{ color: "rgba(232,213,192,0.40)" }}>
                {t("footer.copyright")}
              </p>

              {/* Conditional References */}
              {location.pathname.includes("/skincare") && (
                <div className="mt-8 pt-8 border-t border-gold/10">
                  <h5 className="text-[10px] uppercase tracking-[0.2em] mb-4 text-gold/50">{t("footer.skincareRefs")}</h5>
                  <div className="space-y-4 text-[11px] leading-relaxed text-cream/40 max-w-2xl">
                    <p>Andrews' Diseases of the Skin: Clinical Dermatology. James W., Elston D., Treat J., Rosenbach M. 13th Edition. Elsevier; 2020.</p>
                    <p>American Academy of Dermatology. Acne and skin care information. <a href="https://www.aad.org" target="_blank" className="hover:text-gold transition-colors">www.aad.org</a></p>
                    <p>National Health Service. Acne overview and treatment. <a href="https://www.nhs.uk" target="_blank" className="hover:text-gold transition-colors">www.nhs.uk</a></p>
                  </div>
                </div>
              )}

              {location.pathname.includes("/haircare") && (
                <div className="mt-8 pt-8 border-t border-gold/10">
                  <h5 className="text-[10px] uppercase tracking-[0.2em] mb-4 text-gold/50">{t("footer.haircareRefs")}</h5>
                  <div className="space-y-4 text-[11px] leading-relaxed text-cream/40 max-w-2xl">
                    <p>National Health Service (NHS). (2023). Dandruff and seborrhoeic dermatitis. <a href="https://www.nhs.uk" target="_blank" className="hover:text-gold transition-colors">www.nhs.uk</a></p>
                    <p>Trüeb, R. M., & Tobin, D. J. (2010). Aging hair. Springer.</p>
                    <p>Cleveland Clinic. (2023). Split ends: Causes, treatment, and prevention.</p>
                  </div>
                </div>
              )}
            </div>
            <div className="w-16 h-px" style={{ background: "rgba(201,168,124,0.35)" }} />
          </div>
        </div>
      </footer>
    </div>
  );
}
