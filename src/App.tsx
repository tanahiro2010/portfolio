import type { BaseRoute, HasChildrenRoute } from './types/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { routes } from './routes/config';
import Layout from './app/layout';
import IndexPage from './app/index';
import './index.css';

const joinPaths = (parent: string, child: string): string => {
  if (child === "/") return "/";
  if (child.startsWith("/")) return child;
  const p = parent === "" || parent === "/" ? "" : parent;
  return `${p}/${child}`.replace(/\/+/g, "/");
}

const flattenRoutes = (route: HasChildrenRoute, parent = ""): Array<BaseRoute> => {
  const fullPath = joinPaths(parent, route.path);
  const me: BaseRoute = { path: fullPath, element: route.element, meta: route.meta };
  const kids = route.children ? route.children.flatMap((child) => flattenRoutes(child, fullPath)) : [];
  return [me, ...kids];
}

export const flatRoutes: Array<BaseRoute> = routes.flatMap((route) => flattenRoutes(route, ""));

const App = () => {
  useEffect(() => {
    const pathname = location.pathname;
    const metadata = flatRoutes.find((route) => route.path === pathname);
    if (!metadata) return;

    document.title = metadata.meta?.title + " | tanahiro2010";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        <Route element={<Layout />}>
          {flatRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;