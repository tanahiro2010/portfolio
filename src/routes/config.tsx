import type { HasChildrenRoute } from "@/types/routes";
import { Navigate } from "@/components/utils/navigate";
import About from "@/app/about";
import Links from "@/app/links";

const routes: Array<HasChildrenRoute> = [
  /* サイト内ルーティング */
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
    element: <Links />
  },
  
  /* 外部サイトへのルーティング */
  {
    path: "/youtube", meta: { title: "YouTube", navLabel: "YouTube", visibleInNav: true },
    element: <Navigate to={`https://www.youtube.com/@tanahiro2010`} />
  },
  {
    path: "/twitter", meta: { title: "Twitter", navLabel: "Twitter", visibleInNav: true },
    element: <Navigate to={`https://twitter.com/tanahiro2010`} />
  },
  {
    path: "/kakuyomu", meta: { title: "Kakuyomu", navLabel: "Kakuyomu", visibleInNav: true },
    element: <Navigate to={`https://kakuyomu.jp/users/tanahiro2010`} />
  },
  {
    path: "/github", meta: { title: "GitHub", navLabel: "GitHub", visibleInNav: true },
    element: <Navigate to={`https://github.com/tanahiro2010`} />
  },
  {
    path: "/zenn", meta: { title: "Zenn", navLabel: "Zenn", visibleInNav: true },
    element: <Navigate to={`https://zenn.dev/tanahiro2010`} />
  },
  {
    path: "/contact", meta: { title: "Contact", navLabel: "Contact", visibleInNav: true },
    element: <Navigate to={`https://forms.gle/GmbZXQWXfwZpf4mr5`} />
  },
  {
    path: "/blogs", meta: { title: "Blogs", navLabel: "Blogs", visibleInNav: true },
    element: <Navigate to={`https://qiita.com/tanahiro2010`} />,
  },
];

export { routes };