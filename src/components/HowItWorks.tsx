import Icon from "@/components/ui/icon";

const steps = [
  {
    num: "01",
    icon: "Inbox",
    title: "Получение заявки или ТЗ",
    desc: "Принимаем заявку в любом виде: форма на сайте, e-mail, телефон. Работаем с текстовым описанием, спецификацией, чертежом.",
  },
  {
    num: "02",
    icon: "MessageSquare",
    title: "Уточнение параметров",
    desc: "Связываемся с заказчиком, уточняем параметры среды, присоединения, сроки и объём. При необходимости — выезд на объект.",
  },
  {
    num: "03",
    icon: "Search",
    title: "Подбор или разработка",
    desc: "Подбираем позицию из наличия, размещаем заказ у поставщика или запускаем производство. Согласовываем с заказчиком.",
  },
  {
    num: "04",
    icon: "Cog",
    title: "Производство или поставка",
    desc: "Собственное производство в Екатеринбурге. Закуп у проверенных поставщиков при необходимости. Контроль на каждом этапе.",
  },
  {
    num: "05",
    icon: "CheckSquare",
    title: "Контроль качества",
    desc: "Входной контроль материала, проверка геометрии, давление. Комплект документации по требованию заказчика.",
  },
  {
    num: "06",
    icon: "Truck",
    title: "Отгрузка и доставка",
    desc: "Отгрузка самовывозом или транспортной компанией по всей России. Упаковка, маркировка, сопроводительные документы.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <span className="section-label">Раздел 06</span>
          <span className="section-divider" />
          <h2 className="section-title">Как проходит работа</h2>
          <p className="text-gray-600 mt-4 max-w-2xl font-golos text-base">
            Шесть шагов от заявки до отгрузки. Никакой лишней бюрократии — только техническая коммуникация.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--brand-blue)]/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="relative group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="border border-gray-200 bg-white p-6 h-full hover:border-[var(--brand-blue-light)] hover:shadow-md transition-all duration-200">
                  {/* Step number + icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-oswald text-3xl font-bold text-gray-100 leading-none select-none">
                      {step.num}
                    </span>
                    <div className="w-9 h-9 bg-[var(--brand-navy)] flex items-center justify-center flex-shrink-0">
                      <Icon name={step.icon as never} size={16} className="text-white" />
                    </div>
                  </div>
                  <h3 className="font-oswald font-semibold text-[var(--brand-navy)] uppercase tracking-wide text-sm mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-golos leading-relaxed">{step.desc}</p>

                  {/* Accent bottom bar on hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--brand-accent)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
