import type { HasChildrenRoute } from "@/types/routes";
import { Navigate } from "react-router-dom";
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
    path: "/blogs", meta: { title: "Blogs", navLabel: "Blogs", visibleInNav: true },
    element: <Navigate to={`https://qiita.com/tanahiro2010`} />,
  },
  {
    path: "/links", meta: { title: "Links", navLabel: "Links", visibleInNav: true },
    element: null
  },
  {
    path: "/contact", meta: { title: "Contact", navLabel: "Contact", visibleInNav: true },
    element: <Navigate to={`https://forms.gle/GmbZXQWXfwZpf4mr5`} />
  }
];

export { routes };