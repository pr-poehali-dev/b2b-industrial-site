export default function Catalog() {
  const items = [
    { code: "ЗА", name: "Задвижка клиновая фланцевая", dn: "Ду 50–1200", pn: "Ру 16–100", mat: "Ст20, 09Г2С" },
    { code: "ЗТ", name: "Затвор дисковый поворотный", dn: "Ду 50–1600", pn: "Ру 6–16", mat: "Ст20, нерж." },
    { code: "КО", name: "Клапан обратный подъёмный", dn: "Ду 15–500", pn: "Ру 16–160", mat: "Ст20, 09Г2С" },
    { code: "ФП", name: "Фланец плоский приварной ГОСТ 12820", dn: "Ду 10–1600", pn: "Ру 6–25", mat: "Ст20, 09Г2С" },
    { code: "ФВ", name: "Фланец воротниковый ГОСТ 12821", dn: "Ду 10–1600", pn: "Ру 6–160", mat: "Ст20, 09Г2С, 12Х18Н10Т" },
    { code: "ПТ", name: "Патрубок фланцевый", dn: "Ду 10–1600", pn: "Ру 6–160", mat: "По чертежу" },
    { code: "ПЕ", name: "Переход концентрический/эксцентрический", dn: "Ду 25–1400", pn: "—", mat: "Ст20, 09Г2С" },
    { code: "ОТ", name: "Отвод крутоизогнутый", dn: "Ду 25–1200", pn: "—", mat: "Ст20, 09Г2С" },
    { code: "ГР", name: "Грязевик фланцевый", dn: "Ду 50–1000", pn: "Ру 6–16", mat: "Ст20" },
    { code: "ОП", name: "Опора скользящая/неподвижная", dn: "Ду 50–1400", pn: "—", mat: "Ст3, Ст20" },
    { code: "ПП", name: "Пожарная подставка фланцевая", dn: "Ду 65–200", pn: "Ру 10–16", mat: "Ст20" },
    { code: "СУ", name: "Сварной узел (по чертежу)", dn: "Любой", pn: "По ТЗ", mat: "По ТЗ" },
  ];

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <span className="section-label">Раздел 04</span>
          <span className="section-divider" />
          <h2 className="section-title">Каталог позиций</h2>
          <p className="text-gray-600 mt-4 max-w-2xl font-golos text-base">
            Базовый перечень. Для подбора конкретной позиции укажите параметры в заявке.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm font-golos border-collapse">
            <thead>
              <tr className="bg-[var(--brand-navy)] text-white">
                <th className="px-4 py-3 text-left font-oswald font-medium uppercase tracking-wider text-xs w-16">Код</th>
                <th className="px-4 py-3 text-left font-oswald font-medium uppercase tracking-wider text-xs">Наименование</th>
                <th className="px-4 py-3 text-left font-oswald font-medium uppercase tracking-wider text-xs">Диаметр</th>
                <th className="px-4 py-3 text-left font-oswald font-medium uppercase tracking-wider text-xs">Давление</th>
                <th className="px-4 py-3 text-left font-oswald font-medium uppercase tracking-wider text-xs">Материал</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr
                  key={item.code}
                  className={`border-b border-gray-100 hover:bg-blue-50/40 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                >
                  <td className="px-4 py-3 font-medium text-[var(--brand-accent)] font-oswald">{item.code}</td>
                  <td className="px-4 py-3 text-gray-800">{item.name}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{item.dn}</td>
                  <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{item.pn}</td>
                  <td className="px-4 py-3 text-gray-600">{item.mat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-400 text-xs mt-4 font-golos">
          * Таблица содержит базовые позиции. Нестандартные размеры и материалы — по запросу.
        </p>
      </div>
    </section>
  );
}
