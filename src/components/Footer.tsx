const navSections = [
  {
    title: "Разделы",
    links: [
      { label: "Какие задачи решаем", href: "#tasks" },
      { label: "Где применяется", href: "#applications" },
      { label: "Услуги", href: "#services" },
      { label: "Каталог", href: "#catalog" },
      { label: "Нестандарт", href: "#custom" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Контакты",
    links: [
      { label: "+7 (982) 710-06-84", href: "tel:+79827100684" },
      { label: "Proflanec@mail.ru", href: "mailto:Proflanec@mail.ru" },
    ],
  },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--brand-navy)] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-[var(--brand-accent)] flex items-center justify-center">
                <div className="w-3.5 h-3.5 border-2 border-white rounded-sm" />
              </div>
              <span className="font-oswald font-bold text-white text-lg tracking-widest">ПРОФЛАНЕЦ</span>
            </div>
            <p className="text-gray-400 text-sm font-golos leading-relaxed max-w-xs">
              Производство и поставка запорной арматуры, фланцев и деталей трубопровода. Екатеринбург.
            </p>
            <p className="text-gray-500 text-xs font-golos mt-4">
              Артинская 14к1, офис 27, Екатеринбург
            </p>
          </div>

          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-oswald text-white font-semibold uppercase tracking-wider text-xs mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("#") ? (
                      <button
                        onClick={() => scrollTo(link.href)}
                        className="text-gray-400 hover:text-white text-sm font-golos transition-colors text-left"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm font-golos transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-gray-500 text-xs font-golos">
            © 2024 ПРОФЛАНЕЦ. Все права защищены.
          </p>
          <p className="text-gray-600 text-xs font-golos">
            Диаметры 10–1600 мм · Давление до Ру 160 · Производство от 1 шт.
          </p>
        </div>
      </div>
    </footer>
  );
}
