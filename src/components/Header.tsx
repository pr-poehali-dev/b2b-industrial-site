import { useState } from "react";
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

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="https://cdn.poehali.dev/files/91fa8e15-8a7f-4588-9cd8-26ce04720afc.jpg"
              alt="Профланец"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-sm font-medium text-gray-600 hover:text-[var(--brand-accent)] transition-colors duration-150 font-golos"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Phone */}
          <div className="hidden md:flex items-center gap-3">
            <Icon name="Phone" size={16} className="text-[var(--brand-accent)]" />
            <a href="tel:+79827100684" className="text-[var(--brand-navy)] font-medium text-sm font-golos hover:text-[var(--brand-accent)] transition-colors">
              +7 (982) 710-06-84
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-left text-gray-700 hover:text-[var(--brand-accent)] py-2 border-b border-gray-100 text-sm font-golos"
              >
                {item.label}
              </button>
            ))}
            <a href="tel:+79827100684" className="flex items-center gap-2 text-[var(--brand-accent)] font-medium mt-2">
              <Icon name="Phone" size={16} />
              +7 (982) 710-06-84
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}