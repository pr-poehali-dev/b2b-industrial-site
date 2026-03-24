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
    const onScroll = () => setScrolled(window.scrollY > 40);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--brand-navy)] shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-black/40 to-transparent backdrop-blur-[2px]"
      }`}
    >
      {/* Оранжевая полоска сверху */}
      <div className="h-0.5 bg-[var(--brand-accent)] w-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://cdn.poehali.dev/files/91fa8e15-8a7f-4588-9cd8-26ce04720afc.jpg"
              alt="Профланец"
              className={`h-9 w-auto object-contain transition-all duration-300 ${
                scrolled ? "brightness-0 invert" : "brightness-0 invert"
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="relative text-sm font-medium text-white/80 hover:text-white px-3 py-1.5 transition-colors duration-150 font-golos group"
              >
                {item.label}
                <span className="absolute bottom-0 left-3 right-3 h-px bg-[var(--brand-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </button>
            ))}
          </nav>

          {/* Phone CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+79827100684"
              className="flex items-center gap-2 bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-hover)] text-white font-medium text-sm font-golos px-4 py-2 transition-colors duration-200"
            >
              <Icon name="Phone" size={14} />
              +7 (982) 710-06-84
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[var(--brand-navy)] border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-gray-300 hover:text-white hover:bg-white/5 py-2.5 px-3 border-b border-white/5 text-sm font-golos transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href="tel:+79827100684"
              className="flex items-center gap-2 bg-[var(--brand-accent)] text-white font-medium mt-3 px-4 py-3 justify-center"
            >
              <Icon name="Phone" size={16} />
              +7 (982) 710-06-84
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
