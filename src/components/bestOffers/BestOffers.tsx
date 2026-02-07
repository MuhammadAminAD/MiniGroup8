import React from "react";

import FirstProduct from "../../assets/Images/product1.png";
import SecondProduct from "../../assets/Images/product2.png";
import ThirdProduct from "../../assets/Images/product3.png";
import FourthProduct from "../../assets/Images/product4.png";
import FifthProduct from "../../assets/Images/product5.png";

export type Product = {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  img: string;
  badge?: "распродажа" | "новинка";
};

const products: Product[] = [
  {
    id: 1,
    title: "Набор гравировальных насадок Nozzle-Tok",
    price: "12 789 ₽",
    oldPrice: "15 999 ₽",
    discount: "-15%",
    img: FirstProduct,
  },
  {
    id: 2,
    title: "Термостат для душа Torso V-6000",
    price: "260 ₽",
    oldPrice: "312 ₽",
    discount: "-10%",
    img: SecondProduct,
    badge: "распродажа",
  },
  {
    id: 3,
    title: "Аккумуляторный шуруповерт «Гладиатор»",
    price: "1 789 ₽",
    img: ThirdProduct,
  },
  {
    id: 4,
    title: "Унитаз подвесной Aragio с двойным сливом",
    price: "12 789 ₽",
    oldPrice: "15 999 ₽",
    discount: "-12%",
    img: FourthProduct,
    badge: "новинка",
  },
  {
    id: 5,
    title: "Водно-дисперсионный клей Cob",
    price: "12 789 ₽",
    oldPrice: "15 999 ₽",
    discount: "-16%",
    img: FifthProduct,
  },
];

const BestOffers: React.FC = () => {
  return (
    <section className="w-[1280px] m-auto mt-[90px]">
      <h2 className="text-2xl font-semibold mb-4">
        Лучшие предложения
      </h2>

      <div className="grid grid-cols-1 mt-[50px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl p-4 bg-white hover:shadow-lg transition relative"
          >
            {p.badge && (
              <span className="absolute top-3 left-3 text-xs px-2 py-0.5 rounded bg-gray-200">
                {p.badge}
              </span>
            )}

            <img src={p.img} alt={p.title} className="h-36 mx-auto mb-4" />

            <p className="text-sm h-12 mb-2">{p.title}</p>

            <div className="mb-4">
              {p.oldPrice && (
                <span className="text-xs line-through mr-2 text-gray-400">
                  {p.oldPrice}
                </span>
              )}
              <span className="text-lg font-semibold">{p.price}</span>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-xl">
              Купить
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestOffers;
