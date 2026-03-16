type LinkItem = {
  label: string;
  href: string;
};

const LINKS: Array<LinkItem> = [
  { label: "YouTube",  href: "/youtube" },
  { label: "Twitter",  href: "/twitter" },
  { label: "Kakuyomu", href: "/kakuyomu" },
  { label: "GitHub",   href: "/github" },
  { label: "Qiita",    href: "/blogs" },
  { label: "Zenn",     href: "/zenn" },
  { label: "Contact",  href: "/contact" },
];

export default function Links() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Links</h2>

      <ul className="flex flex-wrap gap-4" role="list">
        {LINKS.map((link) => (
          <li key={link.href} className="grow basis-[220px] min-w-0">
            <a
              href={link.href}
              aria-label={`${link.label} を開く`}
              title={link.label}
              className="block w-full h-full rounded-lg border border-gray-200 px-4 py-3 text-lg text-gray-800
                         hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400
                         transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium truncate">{link.label}</span>
                <svg
                  className="w-5 h-5 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}