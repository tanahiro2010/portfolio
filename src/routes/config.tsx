import type { HasChildrenRoute } from "@/types/routes";
import About from "@/app/about";

const routes: Array<HasChildrenRoute> = [
  {
    path: "/about", meta: { title: "About", navLabel: "About", visibleInNav: true },
    element: <About />,
  },
  {
    path: "/works", meta: { title: "Works", navLabel: "Works", visibleInNav: true },
    element: null,
    children: [],
  },
  {
    path: "/links", meta: { title: "Links", navLabel: "Links", visibleInNav: true },
    element: null
  }
];

export { routes };