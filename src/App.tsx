import type { BaseRoute, HasChildrenRoute } from './types/routes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
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

const SITE_NAME = "tanahiro2010";
const SITE_URL = "https://tanahiro2010.com";
const DEFAULT_DESCRIPTION = "tanahiro2010のポートフォリオサイト。シナリオ執筆、ソフトウェア開発、制作物や連絡先をまとめています。";

const seoByPath: Record<string, { description: string }> = {
  "/": {
    description: DEFAULT_DESCRIPTION,
  },
  "/about": {
    description: "tanahiro2010の経歴、所属コミュニティ、スキル、技術スタックをまとめたページです。",
  },
  "/works": {
    description: "tanahiro2010が制作したプロダクトや開発した作品を紹介するページです。",
  },
  "/links": {
    description: "tanahiro2010の各種SNSや外部リンクを一覧でまとめたページです。",
  },
  "/contact": {
    description: "tanahiro2010へのお問い合わせ先に進むページです。",
  },
};

const setMeta = (selector: string, attr: "name" | "property", value: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${selector}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, selector);
    document.head.appendChild(element);
  }
  element.setAttribute("content", value);
};

const setLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
};

const updateSeo = (pathname: string) => {
  const matchedRoute = flatRoutes.find((route) => route.path === pathname);
  const routeSeo = seoByPath[pathname] ?? { description: DEFAULT_DESCRIPTION };
  const titleBase = pathname === "/"
    ? "Portfolio"
    : matchedRoute?.meta?.title ?? (pathname in seoByPath ? pathname.replace("/", "") : "Not Found");
  const title = pathname === "/" ? `${SITE_NAME} | ${titleBase}` : `${titleBase} | ${SITE_NAME}`;
  const url = `${SITE_URL}${pathname === "/" ? "" : pathname}`;

  document.title = title;
  setMeta("description", "name", routeSeo.description);
  setMeta("keywords", "name", "tanahiro2010, 田中博悠, ポートフォリオ, シナリオライター, ソフトウェア開発, TypeScript, React, Ruby, Python, Go, Java, C++");
  setMeta("robots", "name", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
  setMeta("theme-color", "name", "#ffffff");
  setMeta("og:type", "property", "website");
  setMeta("og:site_name", "property", `${SITE_NAME} | Portfolio`);
  setMeta("og:title", "property", title);
  setMeta("og:description", "property", routeSeo.description);
  setMeta("og:url", "property", url);
  setMeta("og:image", "property", `${SITE_URL}/ogp.png`);
  setMeta("og:image:alt", "property", `${SITE_NAME} portfolio OGP image`);
  setMeta("twitter:card", "name", "summary_large_image");
  setMeta("twitter:title", "name", title);
  setMeta("twitter:description", "name", routeSeo.description);
  setMeta("twitter:image", "name", `${SITE_URL}/ogp.png`);
  setMeta("twitter:image:alt", "name", `${SITE_NAME} portfolio OGP image`);
  setLink("canonical", url);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Hirohisa Tanaka",
        alternateName: "tanahiro2010",
        url,
        description: DEFAULT_DESCRIPTION,
        sameAs: [
          "https://github.com/tanahiro2010",
          "https://twitter.com/tanahiro2010",
          "https://zenn.dev/tanahiro2010",
          "https://qiita.com/tanahiro2010",
          "https://www.youtube.com/@tanahiro2010",
        ],
      },
      {
        "@type": "WebSite",
        name: `${SITE_NAME} | Portfolio`,
        url,
        description: routeSeo.description,
      },
    ],
  };

  let script = document.getElementById("seo-jsonld") as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = "seo-jsonld";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(jsonLd);
};

const SeoManager = () => {
  const location = useLocation();

  useEffect(() => {
    updateSeo(location.pathname);
  }, [location.pathname]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <SeoManager />
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