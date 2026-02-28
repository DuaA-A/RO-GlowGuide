import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

// Skincare
import { SkinTypes } from "./pages/skincare/SkinTypes";
import { SkincareSolutions } from "./pages/skincare/SkincareSolutions";
import { SkincareProducts } from "./pages/skincare/SkincareProducts";
import { SkincareProductDetail } from "./pages/skincare/SkincareProductDetail";

// Haircare
import { HairTypes } from "./pages/haircare/HairTypes";
import { HaircareSolutions } from "./pages/haircare/HaircareSolutions";
import { HaircareProducts } from "./pages/haircare/HaircareProducts";
import { HaircareProductDetail } from "./pages/haircare/HaircareProductDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      // Home
      { index: true, Component: Home },

      // About
      { path: "about", Component: About },

      // ── Skincare ─────────────────────────
      { path: "skincare/types", Component: SkinTypes },
      { path: "skincare/solutions", Component: SkincareSolutions },
      { path: "skincare/products", Component: SkincareProducts },
      { path: "skincare/products/:id", Component: SkincareProductDetail },

      // ── Haircare ─────────────────────────
      { path: "haircare/types", Component: HairTypes },
      { path: "haircare/solutions", Component: HaircareSolutions },
      { path: "haircare/products", Component: HaircareProducts },
      { path: "haircare/products/:id", Component: HaircareProductDetail },
    ],
  },
]);
