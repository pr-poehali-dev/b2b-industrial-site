import Icon from "@/components/ui/icon";

const stats = [
  { value: "10–1600", unit: "мм", label: "Диаметры" },
  { value: "до Ру 160", unit: "", label: "Давление" },
  { value: "от 3", unit: "дней", label: "Срок изготовления" },
  { value: "от 1", unit: "шт", label: "Объём заказа" },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Фоновое фото — производство фланцев и труб */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/204df12d-ef99-4148-9b5f-03e9c7f70542/files/97476b70-f69b-41b6-b98f-3897a24f5ff4.jpg"
          alt="Производство фланцев и деталей трубопровода"
          className="w-full h-full object-cover object-center"
        />
        {/* Равномерное затемнение */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Градиент слева для читаемости текста */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </div>

      {/* Оранжевая вертикальная полоса слева */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--brand-accent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20">
        <div className="max-w-2xl">
          {/* Метка */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="block w-8 h-[2px] bg-[var(--brand-accent)]" />
            <span className="text-[var(--brand-accent)] text-xs font-golos uppercase tracking-[0.2em] font-medium">
              Производство и поставка · Екатеринбург
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-oswald font-bold text-white text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] uppercase tracking-wide mb-5 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Запорная арматура,<br />
            фланцы и детали<br />
            <span className="text-[var(--brand-accent)]">трубопровода</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-gray-200 text-base leading-relaxed mb-8 font-golos animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Подбор под среду, давление и температуру. Изготовление нестандартных деталей.
            Работа по чертежам заказчика. Диаметры 10–1600 мм.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-3 mb-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() => scrollTo("#contacts")}
              className="inline-flex items-center gap-2 bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-hover)] text-white font-golos font-semibold px-6 py-3.5 transition-colors duration-200"
            >
              <Icon name="Send" size={16} />
              Отправить заявку
            </button>
            <button
              onClick={() => scrollTo("#contacts")}
              className="btn-outline inline-flex items-center gap-2"
            >
              <Icon name="FileText" size={16} />
              Отправить чертёж
            </button>
            <button
              onClick={() => scrollTo("#catalog")}
              className="btn-outline inline-flex items-center gap-2"
            >
              <Icon name="BookOpen" size={16} />
              Каталог продукции
            </button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="border border-white/20 bg-black/40 backdrop-blur-sm px-4 py-3">
                <div className="flex items-baseline gap-1 flex-wrap">
                  <span className="font-oswald text-xl font-bold text-white">{s.value}</span>
                  {s.unit && <span className="text-[var(--brand-accent)] text-xs font-golos">{s.unit}</span>}
                </div>
                <p className="text-gray-400 text-xs mt-0.5 font-golos">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-bounce">
        <Icon name="ChevronDown" size={20} />
      </div>
    </section>
  );
}