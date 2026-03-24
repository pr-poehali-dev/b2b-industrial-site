import Icon from "@/components/ui/icon";

const tasks = [
  {
    icon: "Settings",
    title: "Подбор арматуры под параметры среды",
    desc: "Давление, температура, агрессивность среды, тип привода — подбираем позицию под задачу, не под склад.",
  },
  {
    icon: "Wrench",
    title: "Изготовление нестандартных деталей трубопровода",
    desc: "Нетиповые размеры, переходные диаметры, специальные присоединительные фланцы — производим по эскизу.",
  },
  {
    icon: "FileText",
    title: "Производство по чертежам заказчика",
    desc: "Работаем с PDF, DWG, STEP и техническими заданиями в свободной форме. Уточняем параметры перед запуском.",
  },
  {
    icon: "Package",
    title: "Комплектация объекта под ключ",
    desc: "Собираем весь трубопроводный узел по спецификации: арматура, фланцы, патрубки, переходы, крепёж.",
  },
  {
    icon: "RefreshCw",
    title: "Доработка изделий под проект",
    desc: "Адаптация стандартных изделий: приварка патрубков, изменение строительной длины, нанесение покрытий.",
  },
  {
    icon: "Gauge",
    title: "Работа с редкими диаметрами",
    desc: "Диаметры до 1600 мм, нестандартные ряды Ду — производим то, чего нет в типовых каталогах.",
  },
  {
    icon: "Box",
    title: "Изготовление от 1 штуки",
    desc: "Нет минимальной партии. Ремонтные позиции, замена единичных узлов, прототипы — всё это возможно.",
  },
];

export default function Tasks() {
  return (
    <section id="tasks" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">Раздел 01</span>
          <span className="section-divider" />
          <h2 className="section-title">Какие задачи решаем</h2>
          <p className="text-gray-600 mt-4 max-w-2xl font-golos text-base leading-relaxed">
            Работаем со снабженцами, инженерами-проектировщиками, монтажными организациями и промышленными предприятиями.
            Задача определяет решение — не наоборот.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-100">
          {tasks.map((task) => (
            <div key={task.title} className="bg-white p-6 hover:bg-blue-50/40 transition-colors duration-200 group">
              <div className="w-10 h-10 bg-[var(--brand-blue)]/10 flex items-center justify-center mb-4 group-hover:bg-[var(--brand-blue)]/20 transition-colors">
                <Icon name={task.icon as never} size={20} className="text-[var(--brand-blue)]" />
              </div>
              <h3 className="font-oswald text-base font-semibold text-[var(--brand-navy)] uppercase tracking-wide mb-2 leading-snug">
                {task.title}
              </h3>
              <p className="text-gray-600 text-sm font-golos leading-relaxed">{task.desc}</p>
            </div>
          ))}

          {/* CTA tile */}
          <div className="bg-[var(--brand-navy)] p-6 flex flex-col justify-between">
            <div>
              <p className="text-[var(--brand-accent)] text-xs font-golos uppercase tracking-widest mb-3">Задача не в списке?</p>
              <h3 className="font-oswald text-base font-semibold text-white uppercase tracking-wide leading-snug">
                Опишите ситуацию — разберёмся
              </h3>
            </div>
            <a
              href="#contacts"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" }); }}
              className="mt-6 inline-flex items-center gap-2 text-white text-sm font-golos border border-white/30 px-4 py-2 hover:bg-white/10 transition-colors"
            >
              <Icon name="ArrowRight" size={14} />
              Написать нам
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
