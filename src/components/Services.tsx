const categories = [
  {
    title: "Запорная и регулирующая арматура",
    items: [
      "Задвижки клиновые и параллельные",
      "Затворы дисковые поворотные",
      "Клапаны обратные и регулирующие",
      "Вентили запорные и игольчатые",
      "Краны шаровые и конусные",
    ],
  },
  {
    title: "Фланцы стальные",
    items: [
      "Плоские приварные (ГОСТ 12820)",
      "Воротниковые (ГОСТ 12821)",
      "Свободные на приварном кольце",
      "Глухие фланцы (ГОСТ 12836)",
      "Нестандартные — по чертежу",
    ],
  },
  {
    title: "Детали трубопровода",
    items: [
      "Патрубки и катушки",
      "Переходы концентрические и эксцентрические",
      "Отводы крутоизогнутые и гнутые",
      "Заглушки эллиптические и плоские",
      "Тройники равнопроходные и переходные",
      "Фланцевые кресты и тройники",
    ],
  },
  {
    title: "Трубопроводные узлы",
    items: [
      "Грязевики горизонтальные и вертикальные",
      "Опоры скользящие, неподвижные, катковые",
      "Пожарные подставки фланцевые",
      "Имитаторы и байпасы",
      "Сварные узлы по чертежам заказчика",
    ],
  },
  {
    title: "Металлоконструкции",
    items: [
      "Подвески и кронштейны трубопровода",
      "Рамы и опорные конструкции",
      "Закладные детали",
      "Нестандартные металлоизделия по ТЗ",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[var(--brand-navy)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">Раздел 03</span>
          <span className="section-divider" />
          <h2 className="section-title text-white">Что производим и поставляем</h2>
          <p className="text-gray-400 mt-4 max-w-2xl font-golos text-base">
            Полный перечень позиций. Если нужной позиции нет — уточните через форму заявки.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="border border-white/10 bg-white/5 p-6 hover:border-[var(--brand-accent)]/40 hover:bg-white/8 transition-all duration-200">
              <h3 className="font-oswald font-semibold text-white uppercase tracking-wide text-sm mb-4 pb-3 border-b border-white/15">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-300 font-golos">
                    <span className="w-1 h-1 bg-[var(--brand-accent)] rounded-full mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Specs card */}
          <div className="border border-[var(--brand-accent)]/40 bg-[var(--brand-accent)]/10 p-6">
            <h3 className="font-oswald font-semibold text-white uppercase tracking-wide text-sm mb-4 pb-3 border-b border-[var(--brand-accent)]/30">
              Производственные параметры
            </h3>
            <div className="space-y-4">
              {[
                { label: "Диаметры", value: "10–1600 мм" },
                { label: "Давление", value: "до Ру 160" },
                { label: "Материалы", value: "Ст20, 09Г2С, 12Х18Н10Т" },
                { label: "Нормативная база", value: "ГОСТ, АТК, ТУ, чертёж" },
                { label: "Минимальная партия", value: "от 1 штуки" },
                { label: "Срок изготовления", value: "от 3 рабочих дней" },
              ].map((spec) => (
                <div key={spec.label} className="flex justify-between items-center gap-4">
                  <span className="text-gray-400 text-xs font-golos">{spec.label}</span>
                  <span className="text-white text-xs font-golos font-medium text-right">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
