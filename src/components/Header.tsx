import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const navItems = [
  { label: "Задачи", href: "#tasks" },
  { label: "Применение", href: "#applications" },
  { label: "Услуги", href: "#services" },
  { label: "Каталог", href: "#catalog" },
  { label: "Нестандарт", href: "#custom" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[var(--brand-navy)] shadow-xl shadow-black/30"
          : "bg-gradient-to-b from-black/60 via-black/30 to-transparent"
      }`}
    >
      {/* Оранжевая линия акцента */}
      <div className="h-[3px] bg-[var(--brand-accent)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-[68px]">

          {/* Логотип — белый через invert */}
          <a href="/" className="flex items-center flex-shrink-0">
            <img
              src="https://cdn.poehali.dev/files/91fa8e15-8a7f-4588-9cd8-26ce04720afc.jpg"
              alt="Профланец — Завод деталей и узлов для инженерных систем"
              className="h-10 w-auto object-contain"
              style={{ mixBlendMode: "screen" }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="relative text-[13px] font-medium text-white/75 hover:text-white px-3 py-2 transition-colors duration-150 font-golos group"
              >
                {item.label}
                <span className="absolute bottom-1 left-3 right-3 h-[2px] bg-[var(--brand-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>
            ))}
          </nav>

          {/* Телефон — кнопка */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+79826756449"
              className="flex items-center gap-2 bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-hover)] text-white font-golos font-semibold text-sm px-4 py-2.5 transition-colors duration-200"
            >
              <Icon name="Phone" size={15} />
              +7 (982) 675-64-49
            </a>
          </div>

          {/* Мобильный бургер */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {menuOpen && (
        <div className="lg:hidden bg-[var(--brand-navy)] border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-0.5">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-gray-300 hover:text-white hover:bg-white/5 py-2.5 px-3 text-sm font-golos transition-colors border-b border-white/5"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+79826756449"
              className="flex items-center justify-center gap-2 bg-[var(--brand-accent)] text-white font-golos font-semibold mt-3 py-3"
            >
              <Icon name="Phone" size={16} />
              +7 (982) 675-64-49
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}