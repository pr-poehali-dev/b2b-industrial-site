import { useState } from "react";
import Icon from "@/components/ui/icon";

type Product = {
  id: string;
  category: string;
  name: string;
  desc: string;
  specs: { label: string; value: string }[];
  image: string;
};

const products: Product[] = [
  {
    id: "flange-parts",
    category: "Фланцевые соединительные детали",
    name: "Фланцевые кресты, тройники, отводы, переходы",
    desc: "Сварные фланцевые узлы для разветвления и изменения направления трубопровода. Изготовление по ГОСТ и чертежам заказчика.",
    specs: [
      { label: "Ду", value: "50–1400 мм" },
      { label: "Ру", value: "до 160 бар" },
      { label: "Материал", value: "Ст20, 09Г2С, 12Х18Н10Т" },
      { label: "Исполнение", value: "По чертежу / ГОСТ" },
    ],
    image: "https://cdn.poehali.dev/files/f2d76d19-12ed-434a-a68e-18464b3c87a9.jpg",
  },
  {
    id: "gryazeviki",
    category: "Грязевики и воздухосборники",
    name: "Грязевики горизонтальные, вертикальные, абонентские",
    desc: "Грязевики тепловых пунктов с прочистной пробкой, с фланцем для прочистки, абонентские — для систем теплоснабжения и водоснабжения.",
    specs: [
      { label: "Ду", value: "50–1000 мм" },
      { label: "Ру", value: "Ру 6–25" },
      { label: "Расположение", value: "Горизонт. / вертик." },
      { label: "Материал", value: "Ст20" },
    ],
    image: "https://cdn.poehali.dev/files/f2d76d19-12ed-434a-a68e-18464b3c87a9.jpg",
  },
  {
    id: "pozh-podstavki",
    category: "Пожарные подставки",
    name: "ППс, ППОФ, ППДФ, ППТФ, ППКФ",
    desc: "Пожарные подставки фланцевые всех типов — для подключения пожарных кранов и стояков на подземных и надземных трубопроводах.",
    specs: [
      { label: "Ду", value: "65–200 мм" },
      { label: "Ру", value: "Ру 10–16" },
      { label: "Типы", value: "ППс, ППОФ, ППДФ, ППТФ, ППКФ" },
      { label: "Материал", value: "Ст20" },
    ],
    image: "https://cdn.poehali.dev/files/f2d76d19-12ed-434a-a68e-18464b3c87a9.jpg",
  },
  {
    id: "registry",
    category: "Регистры",
    name: "Регистры сегментные и змеевиковые",
    desc: "Нагревательные регистры из труб для промышленных систем отопления и технологических процессов. Изготовление по чертежу.",
    specs: [
      { label: "Тип", value: "Сегментный / змеевиковый" },
      { label: "Диаметр трубы", value: "По ТЗ" },
      { label: "Материал", value: "Ст20, 09Г2С" },
      { label: "Исполнение", value: "По чертежу" },
    ],
    image: "https://cdn.poehali.dev/files/f2d76d19-12ed-434a-a68e-18464b3c87a9.jpg",
  },
  {
    id: "flanges",
    category: "Фланцы",
    name: "ГОСТ, ТУ, ASME, DIN, ANSI, EN",
    desc: "Плоские, воротниковые, свободные на приварном кольце, пожарные, заглушки фланцевые. Нестандартные — по чертежу.",
    specs: [
      { label: "Ду", value: "10–1600 мм" },
      { label: "Стандарт", value: "ГОСТ, ASME, DIN, EN" },
      { label: "Типы", value: "Плоский, воротниковый, свободный, заглушка" },
      { label: "Материал", value: "Ст20, 09Г2С, 12Х18Н10Т" },
    ],
    image: "https://cdn.poehali.dev/files/f2d76d19-12ed-434a-a68e-18464b3c87a9.jpg",
  },
  {
    id: "patrubki",
    category: "Патрубки, катушки, имитаторы",
    name: "Патрубки фланцевые, переходные, резьбовые; катушки",
    desc: "Патрубок под приварку — для соединения с одной стороны через приварку, с другой через фланец. Переходные, резьбовые, фланцевые катушки — для монтажа оборудования и удлинения магистралей.",
    specs: [
      { label: "Ду", value: "10–1600 мм" },
      { label: "Типы", value: "Под приварку, переходной, резьбовой, фланцевый" },
      { label: "Материал", value: "Ст20, 09Г2С, 12Х18Н10Т" },
      { label: "Исполнение", value: "По ГОСТ / по чертежу" },
    ],
    image: "https://cdn.poehali.dev/files/f2d76d19-12ed-434a-a68e-18464b3c87a9.jpg",
  },
  {
    id: "zaglushki-povrot",
    category: "Заглушки поворотные",
    name: "Заглушки поворотные фланцевые",
    desc: "Поворотные заглушки для перекрытия трубопроводов без демонтажа арматуры. Применяются при ревизии и регламентных работах.",
    specs: [
      { label: "Ду", value: "50–600 мм" },
      { label: "Ру", value: "Ру 6–160" },
      { label: "Материал", value: "Ст20, нержавеющая сталь" },
      { label: "Исполнение", value: "По ГОСТ / по чертежу" },
    ],
    image: "https://cdn.poehali.dev/files/f2d76d19-12ed-434a-a68e-18464b3c87a9.jpg",
  },
  {
    id: "privarnie-detali",
    category: "Детали трубопровода приварные",
    name: "Тройники, отводы, заглушки, переходы",
    desc: "Стандартные и нестандартные приварные детали трубопровода из различных сталей. Изготовление от 1 штуки по ГОСТ и чертежам.",
    specs: [
      { label: "Ду", value: "25–1400 мм" },
      { label: "Тип", value: "Тройники, отводы, заглушки, переходы" },
      { label: "Материал", value: "Ст20, 09Г2С, 12Х18Н10Т" },
      { label: "Норматив", value: "ГОСТ, АТК, по чертежу" },
    ],
    image: "https://cdn.poehali.dev/files/f2d76d19-12ed-434a-a68e-18464b3c87a9.jpg",
  },
  {
    id: "opory",
    category: "Опоры трубопровода",
    name: "Опоры скользящие и неподвижные",
    desc: "Опоры трубопроводов для компенсации термических расширений и фиксации трассы. Изготовление по типовым сериям и чертежам.",
    specs: [
      { label: "Ду", value: "50–1400 мм" },
      { label: "Тип", value: "Скользящие, неподвижные, катковые" },
      { label: "Материал", value: "Ст3, Ст20" },
      { label: "Серия", value: "ТПР, 5.905, по ТЗ" },
    ],
    image: "https://cdn.poehali.dev/files/f2d76d19-12ed-434a-a68e-18464b3c87a9.jpg",
  },
];

const categories = ["Все", ...Array.from(new Set(products.map((p) => p.category)))];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [cart, setCart] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const filtered = activeCategory === "Все" ? products : products.filter((p) => p.category === activeCategory);

  const addToCart = (id: string) => {
    setCart((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((i) => i !== id));
  };

  const cartProducts = products.filter((p) => cart.includes(p.id));

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Шапка */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="section-label">Раздел 04</span>
            <span className="section-divider" />
            <h2 className="section-title">Наша продукция</h2>
            <p className="text-gray-600 mt-3 max-w-2xl font-golos text-base">
              Выберите нужные позиции и отправьте запрос — мы подберём под ваши параметры и рассчитаем стоимость.
            </p>
          </div>

          {/* Корзина */}
          <button
            onClick={() => setCartOpen(!cartOpen)}
            className="flex items-center gap-2 border border-[var(--brand-accent)] text-[var(--brand-accent)] hover:bg-[var(--brand-accent)] hover:text-white px-4 py-2.5 font-golos font-medium text-sm transition-colors relative"
          >
            <Icon name="ShoppingCart" size={18} />
            Запрос
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[var(--brand-accent)] text-white text-xs w-5 h-5 flex items-center justify-center font-bold">
                {cart.length}
              </span>
            )}
          </button>
        </div>

        {/* Список корзины */}
        {cartOpen && cart.length > 0 && (
          <div className="mb-8 bg-[var(--brand-light)] border border-gray-200 p-5">
            <h3 className="font-oswald font-bold text-[var(--brand-navy)] uppercase text-sm tracking-wide mb-4">
              Выбранные позиции для запроса
            </h3>
            <div className="space-y-2 mb-4">
              {cartProducts.map((p) => (
                <div key={p.id} className="flex items-center justify-between gap-4 bg-white px-4 py-2.5 border border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 font-golos">{p.category}</span>
                    <p className="text-sm font-golos text-gray-800 font-medium">{p.name}</p>
                  </div>
                  <button onClick={() => removeFromCart(p.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                    <Icon name="X" size={16} />
                  </button>
                </div>
              ))}
            </div>
            <a
              href="#contacts"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" }); setCartOpen(false); }}
              className="inline-flex items-center gap-2 bg-[var(--brand-accent)] hover:bg-[var(--brand-accent-hover)] text-white font-golos font-semibold px-5 py-2.5 text-sm transition-colors"
            >
              <Icon name="Send" size={15} />
              Отправить запрос по выбранным позициям
            </a>
          </div>
        )}

        {/* Фильтр по категориям */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-golos font-medium px-3 py-1.5 border transition-colors duration-150 ${
                activeCategory === cat
                  ? "bg-[var(--brand-navy)] text-white border-[var(--brand-navy)]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[var(--brand-navy)] hover:text-[var(--brand-navy)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Карточки товаров */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => {
            const inCart = cart.includes(product.id);
            return (
              <div key={product.id} className="border border-gray-200 hover:border-[var(--brand-accent)]/50 hover:shadow-lg transition-all duration-200 flex flex-col group">
                {/* Фото */}
                <div className="relative overflow-hidden h-48 bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[var(--brand-navy)] text-white text-[10px] font-oswald uppercase tracking-wider px-2 py-1">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Контент */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-oswald font-semibold text-[var(--brand-navy)] uppercase text-sm tracking-wide mb-2 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-xs font-golos leading-relaxed mb-4 flex-1">
                    {product.desc}
                  </p>

                  {/* Характеристики */}
                  <div className="border-t border-gray-100 pt-3 mb-4 space-y-1.5">
                    {product.specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between items-start gap-2">
                        <span className="text-gray-400 text-xs font-golos flex-shrink-0">{spec.label}</span>
                        <span className="text-gray-800 text-xs font-golos font-medium text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Кнопка */}
                  <button
                    onClick={() => addToCart(product.id)}
                    disabled={inCart}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 text-sm font-golos font-semibold transition-colors duration-200 ${
                      inCart
                        ? "bg-green-50 text-green-600 border border-green-200 cursor-default"
                        : "bg-[var(--brand-navy)] hover:bg-[var(--brand-blue)] text-white"
                    }`}
                  >
                    <Icon name={inCart ? "Check" : "ShoppingCart"} size={15} />
                    {inCart ? "Добавлено в запрос" : "Запросить цену"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-gray-400 text-xs mt-6 font-golos">
          * Стоимость рассчитывается индивидуально — зависит от диаметра, давления, материала и количества. Нестандартные размеры — по запросу.
        </p>
      </div>
    </section>
  );
}
