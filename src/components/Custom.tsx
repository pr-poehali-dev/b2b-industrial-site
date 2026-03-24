import Icon from "@/components/ui/icon";

const capabilities = [
  {
    icon: "PenTool",
    title: "Любые детали по чертежу",
    desc: "Принимаем PDF, DWG, STEP, Компас-файлы и эскизы от руки с размерами. Изготавливаем любые конфигурации.",
  },
  {
    icon: "Layers",
    title: "Разнообразие сталей и металлов",
    desc: "Ст20, Ст3, 09Г2С, 12Х18Н10Т, 15Х5М, 10Г2, 15ГС, нержавеющая и жаропрочная сталь — по запросу под среду.",
  },
  {
    icon: "Sliders",
    title: "Доработка стандартных изделий",
    desc: "Приварка патрубков, изменение строительной длины, сверловка фланцев под нестандартный шаблон, нанесение покрытий.",
  },
  {
    icon: "GitBranch",
    title: "Нетиповые задачи",
    desc: "Сборные узлы с несколькими присоединительными точками, переходные секции, редкие диаметры и давления.",
  },
  {
    icon: "RotateCcw",
    title: "Привязка к существующим узлам",
    desc: "Изготовление вставок под существующие фланцы, замена изношенных участков без смены примыкающей арматуры.",
  },
  {
    icon: "ClipboardList",
    title: "Сопроводительная документация",
    desc: "Сертификаты на материал, паспорта на изделие, протоколы испытаний — по требованию заказчика.",
  },
];

const dataRequired = [
  "Рабочая среда (вода, пар, нефть, химия и т.д.)",
  "Рабочее давление (Ру) и температура",
  "Диаметр условного прохода (Ду / DN)",
  "Материал трубопровода и арматуры",
  "Тип присоединения (фланец, муфта, приварка)",
  "Чертёж, эскиз или спецификация (при наличии)",
  "Условия эксплуатации (наружный / подземный, климат)",
  "Требуемое количество и сроки",
];

export default function Custom() {
  return (
    <section id="custom" className="py-20 bg-[var(--brand-light)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">Раздел 05</span>
          <span className="section-divider" />
          <h2 className="section-title">Нестандарт и работа под проект</h2>
          <p className="text-gray-600 mt-4 max-w-2xl font-golos text-base">
            Производство нестандартных деталей — основная часть нашей работы. Изготовим любую деталь по вашему чертежу из нужного материала.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* Фото */}
          <div className="lg:col-span-1 relative">
            <img
              src="https://cdn.poehali.dev/files/cea3e3ce-f97d-45af-a631-5c3af0c7604e.jpg"
              alt="Сварка нестандартных фланцевых деталей"
              className="w-full h-64 lg:h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-oswald font-bold uppercase text-sm tracking-wide">
                Производим от 1 штуки
              </p>
              <p className="text-gray-300 text-xs font-golos mt-1">
                Срок — от 3 рабочих дней
              </p>
            </div>
          </div>

          {/* Возможности */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-px bg-gray-200">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-white p-5 group hover:bg-orange-50/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[var(--brand-accent)]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[var(--brand-accent)]/20 transition-colors">
                    <Icon name={cap.icon as never} size={16} className="text-[var(--brand-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-oswald font-semibold text-[var(--brand-navy)] text-sm uppercase tracking-wide mb-1 leading-snug">
                      {cap.title}
                    </h3>
                    <p className="text-gray-600 text-xs font-golos leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Примеры наших работ */}
        <div className="mb-12">
          <h3 className="font-oswald text-xl font-bold text-[var(--brand-navy)] uppercase tracking-wide mb-6">
            Примеры нестандартных изделий
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative overflow-hidden aspect-square bg-gray-200 group">
                <img
                  src="https://cdn.poehali.dev/files/f2d76d19-12ed-434a-a68e-18464b3c87a9.jpg"
                  alt={`Пример работы ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Что нужно от заказчика */}
        <div className="bg-[var(--brand-navy)] p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <span className="section-label">Что нужно от заказчика</span>
              <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide mb-3">
                Данные для работы
              </h3>
              <p className="text-gray-400 font-golos text-sm leading-relaxed">
                Чем точнее исходные данные — тем быстрее подбор и точнее цена. Если данных не хватает, уточним при первом контакте.
              </p>
            </div>
            <div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {dataRequired.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300 font-golos">
                    <span className="font-oswald text-[var(--brand-accent)] font-bold text-xs mt-0.5 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
