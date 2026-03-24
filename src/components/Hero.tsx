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
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/204df12d-ef99-4148-9b5f-03e9c7f70542/files/edf44902-d39a-4db3-9376-0f153e4c5d46.jpg"
          alt="Промышленный трубопровод"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-navy)]/95 via-[var(--brand-navy)]/85 to-[var(--brand-navy)]/60" />
        <div className="absolute inset-0 hero-pattern" />
      </div>

      {/* Accent vertical bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--brand-accent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <span className="section-label animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Производство и поставка · Екатеринбург
          </span>

          {/* H1 */}
          <h1
            className="font-oswald font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight uppercase tracking-wide mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Запорная арматура, фланцы и детали трубопровода
            <span className="block text-[var(--brand-accent)] mt-1">для промышленных объектов</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-gray-300 text-lg leading-relaxed mb-8 font-golos animate-fade-up max-w-2xl"
            style={{ animationDelay: "0.3s" }}
          >
            Подбор под среду, давление и температуру. Изготовление нестандартных деталей трубопровода.
            Работа по чертежам заказчика. Диаметры 10–1600 мм, материалы Сталь 20, 09Г2С, 12Х18Н10Т.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-3 mb-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              onClick={() => scrollTo("#contacts")}
              className="btn-primary inline-flex items-center gap-2"
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
              onClick={() => scrollTo("#tasks")}
              className="btn-outline inline-flex items-center gap-2"
            >
              <Icon name="Search" size={16} />
              Получить подбор
            </button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {stats.map((s) => (
              <div key={s.label} className="border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm">
                <div className="flex items-baseline gap-1">
                  <span className="font-oswald text-2xl font-bold text-white">{s.value}</span>
                  {s.unit && <span className="text-[var(--brand-accent)] text-sm font-golos">{s.unit}</span>}
                </div>
                <p className="text-gray-400 text-xs mt-1 font-golos">{s.label}</p>
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
