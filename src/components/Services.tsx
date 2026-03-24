import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Cog",
    title: "Токарная обработка",
    desc: "Детали диаметром до 1500 мм при длине до 200 мм и до 450 мм при длине до 1000 мм. Проточка и расточка фланцев, нарезание резьбы.",
    highlight: "до Ø 1500 мм",
  },
  {
    icon: "Flame",
    title: "Газо-плазменная резка металла",
    desc: "Режем листы из различных сталей толщиной до 100 мм и трубную продукцию с наружным диаметром до 530 мм. Ровные кромки, минимальная зона термического влияния.",
    highlight: "до 100 мм толщиной",
  },
  {
    icon: "Drill",
    title: "Фрезерование и сверление",
    desc: "Фрезеруем сложные контуры и плоскости, сверлим отверстия диаметром до 49 мм. Стоимость одного отверстия — от 80 рублей.",
    highlight: "отверстия от 80 ₽",
  },
  {
    icon: "Zap",
    title: "Ручная и полуавтоматическая сварка",
    desc: "Изготовление сложных сварных узлов: фланцевые тройники, переходы, отводы, крестовины, пожарные подставки, грязевики. Собственные фланцы до Ду 1400.",
    highlight: "фланцы до Ду 1400",
  },
  {
    icon: "Tag",
    title: "Маркировка изделий",
    desc: "Долговечная и чёткая маркировка металлических изделий для учёта, логистики и идентификации в течение всего срока эксплуатации.",
    highlight: "механическая + краской",
  },
  {
    icon: "Scissors",
    title: "Резка на ленточнопильных станках",
    desc: "Заготовки диаметром до 200 мм для круга и 160 мм для квадрата без ограничения по длине. Стоимость реза — от 150 рублей.",
    highlight: "рез от 150 ₽",
  },
];

export default function Services() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-[var(--brand-navy)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">Раздел 03</span>
          <span className="section-divider" />
          <h2 className="section-title text-white">Наши услуги</h2>
          <p className="text-gray-400 mt-4 max-w-2xl font-golos text-base">
            Полный производственный цикл на собственном оборудовании — от резки заготовок до готового изделия с документами.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((svc) => (
            <div key={svc.title} className="bg-[var(--brand-navy)] p-6 hover:bg-[var(--brand-blue)]/20 transition-colors duration-200 group border border-white/5 hover:border-[var(--brand-accent)]/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-[var(--brand-accent)]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--brand-accent)]/25 transition-colors">
                  <Icon name={svc.icon as never} size={20} className="text-[var(--brand-accent)]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-oswald font-semibold text-white uppercase tracking-wide text-sm leading-snug mb-1">
                    {svc.title}
                  </h3>
                  <span className="text-[var(--brand-accent)] text-[11px] font-golos font-medium">{svc.highlight}</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm font-golos leading-relaxed">
                {svc.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 border border-white/10 bg-white/5 px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-oswald text-white font-bold uppercase text-lg tracking-wide">
              Нужна услуга или расчёт стоимости?
            </h3>
            <p className="text-gray-400 text-sm font-golos mt-1">
              Отправьте чертёж или описание задачи — рассчитаем и ответим в течение рабочего дня.
            </p>
          </div>
          <button
            onClick={() => scrollTo("#contacts")}
            className="flex-shrink-0 flex items-center gap-2 bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-hover)] text-white font-golos font-semibold px-6 py-3 transition-colors"
          >
            <Icon name="Send" size={16} />
            Отправить запрос
          </button>
        </div>
      </div>
    </section>
  );
}
