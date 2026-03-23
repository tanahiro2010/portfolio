import type { HasChildrenRoute } from "@/types/routes";
import { Navigate } from "@/components/utils/navigate";
import NotFound from "@/app/not-found";
import About from "@/app/about";
import Links from "@/app/links";
import Works from "@/app/works";
import Syosetsu from "@/app/works/syosetsu";

const otherRoutes: Array<HasChildrenRoute> = [
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
    path: "/instagram", meta: { title: "Instagram", navLabel: "Instagram", visibleInNav: true },
    element: <Navigate to={`https://www.instagram.com/tanahiro2010_official/`} />
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

const workRoutes: Array<HasChildrenRoute> = [
  {
    path: "/works/unischool", meta: { title: "UniSchool Website", navLabel: "UniSchool", visibleInNav: true },
    element: <Navigate to={`https://unischool-official.vercel.app/`} />
  },
  {
    path: "/works/recoron", meta: { title: "ReCoron", navLabel: "ReCoron", visibleInNav: true },
    element: <Navigate to={`https://re-coron.vercel.app/`} />
  },
  {
    path: "/works/renv", meta: { title: "Renv", navLabel: "Renv", visibleInNav: true },
    element: <Navigate to={`https://renv-web.vercel.app/`} />
  },

  {
    path: "/works/syosetsu", meta: { title: "小説ダウンローダー", navLabel: "小説", visibleInNav: true },
    element: <Syosetsu />
  }
];

const baseRoutes: Array<HasChildrenRoute> = [
  {
    path: "*", meta: { title: "Not Found", navLabel: "Not Found", visibleInNav: false },
    element: <NotFound />
  },

  {
    path: "/about", meta: { title: "About", navLabel: "About", visibleInNav: true },
    element: <About />,
  },
  {
    path: "/works", meta: { title: "Works", navLabel: "Works", visibleInNav: true },
    element: <Works />,
    children: [],
  },
  {
    path: "/links", meta: { title: "Links", navLabel: "Links", visibleInNav: true },
    element: <Links />
  },
];

const routes: Array<HasChildrenRoute> = new Array();

routes.push(...baseRoutes);
routes.push(...workRoutes);
routes.push(...otherRoutes);

export { routes };