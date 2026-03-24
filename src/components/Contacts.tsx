import { useState } from "react";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const [form, setForm] = useState({ name: "", company: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-20 bg-[var(--brand-graphite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">Раздел 08</span>
          <span className="section-divider" />
          <h2 className="section-title text-white">Контакты и заявка</h2>
          <p className="text-gray-400 mt-4 max-w-xl font-golos text-base">
            Отправьте заявку, чертёж или вопрос — ответим в течение рабочего дня.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Контактная информация */}
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                { icon: "Phone", label: "Телефон", value: "+7 (982) 675-64-49", href: "tel:+79826756449" },
                { icon: "Mail", label: "E-mail", value: "info@proflanec.ru", href: "mailto:info@proflanec.ru" },
                { icon: "MapPin", label: "Адрес", value: "Екатеринбург, Артинская 14к1, офис 27", href: null },
              ].map((contact) => (
                <div key={contact.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[var(--brand-accent)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={contact.icon as never} size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-golos uppercase tracking-wider mb-0.5">{contact.label}</p>
                    {contact.href ? (
                      <a href={contact.href} className="text-white font-golos font-medium hover:text-[var(--brand-accent)] transition-colors">
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-white font-golos font-medium">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Режим работы */}
            <div className="border border-white/10 bg-white/5 p-5">
              <h3 className="font-oswald text-white font-semibold uppercase tracking-wide text-xs mb-4">
                Режим работы
              </h3>
              <div className="space-y-2 font-golos text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Пн – Пт</span>
                  <span className="text-white font-medium">8:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Сб – Вс</span>
                  <span className="text-gray-500">Выходной</span>
                </div>
              </div>
            </div>

            {/* Реквизиты */}
            <div className="border border-white/10 bg-white/5 p-5">
              <h3 className="font-oswald text-white font-semibold uppercase tracking-wide text-xs mb-4">
                Реквизиты
              </h3>
              <div className="space-y-2 font-golos text-sm">
                <div className="flex justify-between gap-4">
                  <span className="text-gray-400 flex-shrink-0">ИНН</span>
                  <span className="text-white font-medium">6678114461</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-gray-400 flex-shrink-0">ОГРН</span>
                  <span className="text-white font-medium">1216600047730</span>
                </div>
              </div>
            </div>

            {/* Что принимаем */}
            <div className="border border-white/10 bg-white/5 p-5">
              <h3 className="font-oswald text-white font-semibold uppercase tracking-wide text-xs mb-3">
                Что принимаем
              </h3>
              <ul className="space-y-2">
                {["Заявка в свободной форме", "Спецификация (Excel, PDF)", "Чертёж (DWG, PDF, STEP)", "Эскиз с размерами", "Телефонный запрос"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-300 text-sm font-golos">
                    <Icon name="Check" size={14} className="text-[var(--brand-accent)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Форма */}
          <div className="bg-white p-8">
            {!sent ? (
              <>
                <h3 className="font-oswald text-[var(--brand-navy)] font-bold uppercase tracking-wide text-lg mb-6">
                  Отправить заявку
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-600 text-xs font-golos uppercase tracking-wider mb-1.5">Имя *</label>
                    <input
                      name="name" type="text" required value={form.name} onChange={handleChange}
                      placeholder="Иван Петров"
                      className="w-full border border-gray-200 px-4 py-3 text-sm font-golos text-gray-800 focus:border-[var(--brand-accent)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-xs font-golos uppercase tracking-wider mb-1.5">Компания</label>
                    <input
                      name="company" type="text" value={form.company} onChange={handleChange}
                      placeholder="ООО «Наименование»"
                      className="w-full border border-gray-200 px-4 py-3 text-sm font-golos text-gray-800 focus:border-[var(--brand-accent)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-xs font-golos uppercase tracking-wider mb-1.5">Телефон *</label>
                    <input
                      name="phone" type="tel" required value={form.phone} onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full border border-gray-200 px-4 py-3 text-sm font-golos text-gray-800 focus:border-[var(--brand-accent)] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-600 text-xs font-golos uppercase tracking-wider mb-1.5">Описание задачи</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Опишите задачу: среда, давление, диаметр, количество. Чертёж можно отправить на info@proflanec.ru"
                      className="w-full border border-gray-200 px-4 py-3 text-sm font-golos text-gray-800 focus:border-[var(--brand-accent)] focus:outline-none transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-hover)] text-white font-golos font-semibold py-3.5 transition-colors flex items-center justify-center gap-2"
                  >
                    <Icon name="Send" size={16} />
                    Отправить заявку
                  </button>
                  <p className="text-gray-400 text-xs font-golos text-center">
                    Нажимая кнопку, вы соглашаетесь с{" "}
                    <a href="/privacy" className="underline hover:text-gray-600 transition-colors">политикой конфиденциальности</a>
                  </p>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-64 text-center">
                <div className="w-14 h-14 bg-[var(--brand-accent)]/10 flex items-center justify-center mb-4">
                  <Icon name="CheckCircle" size={28} className="text-[var(--brand-accent)]" />
                </div>
                <h3 className="font-oswald text-[var(--brand-navy)] font-bold uppercase text-xl mb-2">Заявка отправлена</h3>
                <p className="text-gray-500 font-golos text-sm max-w-xs">
                  Свяжемся с вами в течение рабочего дня. Чертёж можно отправить на{" "}
                  <a href="mailto:info@proflanec.ru" className="text-[var(--brand-accent)]">info@proflanec.ru</a>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
