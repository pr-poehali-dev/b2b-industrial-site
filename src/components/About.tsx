import Icon from "@/components/ui/icon";

const facts = [
  { icon: "Calendar", value: "20+", label: "лет на рынке" },
  { icon: "MapPin", value: "Екатеринбург", label: "собственное производство" },
  { icon: "Map", value: "Вся Россия", label: "география поставок" },
  { icon: "Layers", value: "1–1600 мм", label: "диапазон диаметров" },
];

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="section-label">О компании</span>
            <span className="section-divider" />
            <h2 className="section-title mb-6">ПРОФЛАНЕЦ</h2>
            <div className="space-y-4 font-golos text-gray-600 text-base leading-relaxed">
              <p>
                Более 20 лет работаем в сфере промышленного трубопровода. Собственное производство в Екатеринбурге позволяет изготавливать нестандартные детали, сварные узлы и комплексные изделия по чертежам заказчика.
              </p>
              <p>
                Специализация — фланцевая арматура, детали трубопровода и нестандартные изделия для объектов теплоснабжения, водоснабжения, промышленности и нефтегазовой отрасли.
              </p>
              <p>
                Поставки по всей России. Работаем с проектными организациями, монтажными компаниями, промышленными предприятиями, строительными подрядчиками и снабжающими структурами.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-gray-100 text-gray-700 text-xs font-golos px-3 py-1.5 border border-gray-200">ГОСТ</span>
              <span className="bg-gray-100 text-gray-700 text-xs font-golos px-3 py-1.5 border border-gray-200">АТК</span>
              <span className="bg-gray-100 text-gray-700 text-xs font-golos px-3 py-1.5 border border-gray-200">ТУ</span>
              <span className="bg-gray-100 text-gray-700 text-xs font-golos px-3 py-1.5 border border-gray-200">По чертежу</span>
              <span className="bg-gray-100 text-gray-700 text-xs font-golos px-3 py-1.5 border border-gray-200">Ст20 · 09Г2С · 12Х18Н10Т</span>
            </div>
          </div>

          {/* Stats + image */}
          <div className="space-y-6">
            <img
              src="https://cdn.poehali.dev/projects/204df12d-ef99-4148-9b5f-03e9c7f70542/files/1d25094a-f3c2-4364-bb4a-45bb0c832d0f.jpg"
              alt="Производство запорной арматуры и фланцев"
              className="w-full h-52 object-cover"
            />

            <div className="grid grid-cols-2 gap-px bg-gray-100">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-white p-5 flex items-center gap-3">
                  <div className="w-10 h-10 bg-[var(--brand-navy)] flex items-center justify-center flex-shrink-0">
                    <Icon name={fact.icon as never} size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="font-oswald font-bold text-[var(--brand-navy)] text-lg leading-tight">{fact.value}</div>
                    <div className="text-gray-500 text-xs font-golos">{fact.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
