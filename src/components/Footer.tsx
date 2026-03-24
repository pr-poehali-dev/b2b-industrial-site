import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Какие задачи решаем", href: "#tasks" },
  { label: "Где применяется", href: "#applications" },
  { label: "Услуги", href: "#services" },
  { label: "Каталог продукции", href: "#catalog" },
  { label: "Нестандарт", href: "#custom" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

export default function Footer() {
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Политика куки */}
      {!cookieAccepted && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-[var(--brand-navy)] border-t border-white/10 px-4 py-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-300 text-sm font-golos">
              Мы используем файлы cookie для улучшения работы сайта. Продолжая использование, вы соглашаетесь с{" "}
              <button onClick={() => setShowPrivacy(true)} className="text-[var(--brand-accent)] underline hover:no-underline">
                политикой конфиденциальности
              </button>.
            </p>
            <button
              onClick={() => setCookieAccepted(true)}
              className="flex-shrink-0 bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-hover)] text-white font-golos font-semibold text-sm px-5 py-2 transition-colors"
            >
              Принять
            </button>
          </div>
        </div>
      )}

      {/* Модальное окно Политика конфиденциальности */}
      {showPrivacy && (
        <div className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4" onClick={() => setShowPrivacy(false)}>
          <div
            className="bg-white max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <h2 className="font-oswald font-bold text-[var(--brand-navy)] uppercase text-xl tracking-wide">
                Политика конфиденциальности
              </h2>
              <button onClick={() => setShowPrivacy(false)} className="text-gray-400 hover:text-gray-700 ml-4">
                <Icon name="X" size={20} />
              </button>
            </div>
            <div className="font-golos text-sm text-gray-700 space-y-4 leading-relaxed">
              <p><strong>ООО «ПРОФЛАНЕЦ»</strong> (ИНН 6678114461, ОГРН 1216600047730) уважает вашу конфиденциальность.</p>
              <h3 className="font-semibold text-gray-900">Какие данные мы собираем</h3>
              <p>При использовании формы заявки мы собираем: имя, название компании, номер телефона и описание задачи — исключительно для обработки вашего обращения.</p>
              <h3 className="font-semibold text-gray-900">Использование файлов cookie</h3>
              <p>Сайт использует технические cookie-файлы, необходимые для корректной работы. Аналитические файлы применяются только в обезличенной форме для улучшения качества работы сайта.</p>
              <h3 className="font-semibold text-gray-900">Передача данных третьим лицам</h3>
              <p>Мы не продаём и не передаём ваши персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством РФ.</p>
              <h3 className="font-semibold text-gray-900">Хранение данных</h3>
              <p>Данные хранятся в защищённых системах и удаляются по истечении срока, необходимого для обработки обращения.</p>
              <h3 className="font-semibold text-gray-900">Контакт</h3>
              <p>По вопросам обработки персональных данных: <a href="mailto:info@proflanec.ru" className="text-[var(--brand-accent)]">info@proflanec.ru</a></p>
            </div>
            <button
              onClick={() => setShowPrivacy(false)}
              className="mt-6 bg-[var(--brand-navy)] text-white font-golos font-semibold px-6 py-2.5 hover:bg-[var(--brand-blue)] transition-colors text-sm"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      <footer className="bg-[var(--brand-navy)] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            {/* Бренд */}
            <div>
              <img
                src="https://cdn.poehali.dev/files/91fa8e15-8a7f-4588-9cd8-26ce04720afc.jpg"
                alt="Профланец"
                className="h-10 w-auto object-contain mb-4"
                style={{ mixBlendMode: "screen" }}
              />
              <p className="text-gray-400 text-sm font-golos leading-relaxed max-w-xs">
                Производство и поставка запорной арматуры, фланцев и деталей трубопровода для промышленных объектов.
              </p>
              <p className="text-gray-500 text-xs font-golos mt-3">Екатеринбург, Артинская 14к1, офис 27</p>
              <div className="mt-4 space-y-1">
                <p className="text-gray-600 text-xs font-golos">ИНН: 6678114461</p>
                <p className="text-gray-600 text-xs font-golos">ОГРН: 1216600047730</p>
              </div>
            </div>

            {/* Навигация */}
            <div>
              <h4 className="font-oswald text-white font-semibold uppercase tracking-wider text-xs mb-4">Разделы</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-gray-400 hover:text-white text-sm font-golos transition-colors text-left hover:text-[var(--brand-accent)]"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Контакты */}
            <div>
              <h4 className="font-oswald text-white font-semibold uppercase tracking-wider text-xs mb-4">Контакты</h4>
              <div className="space-y-3">
                <a href="tel:+79826756449" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-golos transition-colors group">
                  <Icon name="Phone" size={14} className="text-[var(--brand-accent)] flex-shrink-0" />
                  +7 (982) 675-64-49
                </a>
                <a href="mailto:info@proflanec.ru" className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-golos transition-colors">
                  <Icon name="Mail" size={14} className="text-[var(--brand-accent)] flex-shrink-0" />
                  info@proflanec.ru
                </a>
                <div className="flex items-start gap-2 text-gray-500 text-sm font-golos">
                  <Icon name="Clock" size={14} className="text-[var(--brand-accent)] flex-shrink-0 mt-0.5" />
                  Пн–Пт 8:00–17:00
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between gap-3">
            <p className="text-gray-500 text-xs font-golos">
              © 2024 ПРОФЛАНЕЦ. Все права защищены.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowPrivacy(true)}
                className="text-gray-500 hover:text-gray-300 text-xs font-golos transition-colors underline"
              >
                Политика конфиденциальности
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}