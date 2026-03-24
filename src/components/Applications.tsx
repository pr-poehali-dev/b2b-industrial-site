import Icon from "@/components/ui/icon";

const sectors = [
  {
    icon: "Thermometer",
    title: "Теплосети и теплоснабжение",
    items: ["Запорная арматура на подающем и обратном трубопроводе", "Фланцевые катушки и компенсаторы", "Грязевики, патрубки, дроссельные шайбы"],
  },
  {
    icon: "Droplets",
    title: "Водоснабжение и водоотведение",
    items: ["Задвижки и затворы на магистральных водоводах", "Переходы и тройники для разводки", "Фланцевые соединения для НС и очистных сооружений"],
  },
  {
    icon: "Factory",
    title: "Промышленные предприятия",
    items: ["Арматура на технологических трубопроводах", "Нестандартные патрубки и переходы", "Сварные узлы по чертежам цеховых служб"],
  },
  {
    icon: "Flame",
    title: "Нефтегазовая отрасль",
    items: ["Фланцы и арматура из стали 09Г2С, 12Х18Н10Т", "Изделия по ТУ и ОСТ", "Комплектация по ведомости материалов"],
  },
  {
    icon: "Zap",
    title: "Энергетика",
    items: ["Арматура высокого давления", "Сварные узлы для паровых трубопроводов", "Изготовление по АТК и ГОСТ"],
  },
  {
    icon: "Building2",
    title: "Строительство и инфраструктура",
    items: ["Комплектация внутренних и наружных инженерных сетей", "Пожарные подставки и подземные узлы", "Опоры трубопроводов скользящие и неподвижные"],
  },
];

export default function Applications() {
  return (
    <section id="applications" className="py-20 bg-[var(--brand-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">Раздел 02</span>
          <span className="section-divider" />
          <h2 className="section-title">Где применяется</h2>
          <p className="text-gray-600 mt-4 max-w-2xl font-golos text-base">
            Поставляем и производим детали трубопровода для объектов разных отраслей и форм собственности.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector) => (
            <div key={sector.title} className="card-industrial p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-[var(--brand-navy)] flex items-center justify-center flex-shrink-0">
                  <Icon name={sector.icon as never} size={18} className="text-white" />
                </div>
                <h3 className="font-oswald font-semibold text-[var(--brand-navy)] uppercase tracking-wide text-sm leading-tight">
                  {sector.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {sector.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600 font-golos">
                    <span className="w-1.5 h-1.5 bg-[var(--brand-accent)] rounded-full mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
