import Icon from "@/components/ui/icon";

const capabilities = [
  {
    icon: "PenTool",
    title: "Изготовление по чертежам, эскизам и ТЗ",
    desc: "Принимаем PDF, DWG, STEP, Компас-файлы. Рассматриваем эскизы от руки при наличии достаточных размеров.",
  },
  {
    icon: "Sliders",
    title: "Доработка стандартных изделий",
    desc: "Приварка патрубков, изменение строительной длины, сверловка фланцев под нестандартный шаблон, покрытия.",
  },
  {
    icon: "GitBranch",
    title: "Нетиповые задачи",
    desc: "Сборные узлы с несколькими присоединительными точками, переходные секции между системами, редкие диаметры.",
  },
  {
    icon: "RotateCcw",
    title: "Реконструкция и привязка к существующим узлам",
    desc: "Изготовление вставок под существующие фланцы, замена изношенных участков без смены примыкающей арматуры.",
  },
  {
    icon: "Microscope",
    title: "Работа с нестандартными материалами",
    desc: "09Г2С, 12Х18Н10Т, 15Х5М и аналоги для агрессивных и высокотемпературных сред — по запросу.",
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
            Производство нестандартных деталей трубопровода — основная часть нашей работы, а не исключение из правил.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Left — image */}
          <div className="lg:col-span-1">
            <img
              src="https://cdn.poehali.dev/projects/204df12d-ef99-4148-9b5f-03e9c7f70542/files/bca71bdc-3f2a-4533-b8ca-9d77ee0874d7.jpg"
              alt="Производство фланцев и деталей трубопровода"
              className="w-full h-64 lg:h-full object-cover"
            />
          </div>

          {/* Right — capabilities */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-px bg-gray-200">
            {capabilities.map((cap) => (
              <div key={cap.title} className="bg-white p-5 group hover:bg-blue-50/30 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[var(--brand-blue)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name={cap.icon as never} size={16} className="text-[var(--brand-blue)]" />
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

        {/* Data required section */}
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
