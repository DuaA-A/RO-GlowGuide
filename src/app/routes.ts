import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SkinTypes } from "./pages/SkinTypes";
import { Solutions } from "./pages/Solutions";
import { Products } from "./pages/Products";
import { Team } from "./pages/Team";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "skin-types", Component: SkinTypes },
      { path: "solutions", Component: Solutions },
      { path: "products", Component: Products },
      { path: "team", Component: Team },
    ],
  },
]);
