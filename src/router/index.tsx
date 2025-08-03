import { createBrowserRouter } from "react-router"
import Layout from "@/layouts/Layout"
import Home from "@/pages/Home"
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "*", Component: NotFound },
    ],
  },
])