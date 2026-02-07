import React from "react";

import FirstProduct from "../../assets/Images/image9.png";
import SecondProduct from "../../assets/Images/image10.png";
import ThirdProduct from "../../assets/Images/image11.png";
import FourthProduct from "../../assets/Images/image12.png";
import FifthProduct from "../../assets/Images/image13.png";

export type Product = {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  img: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "Перфоратор универсальный Wander X645-46 GF 1450W",
    price: "12 789 ₽",
    oldPrice: "15 999 ₽",
    discount: "-15%",
    img: FirstProduct,
  },
  {
    id: 2,
    title: "Смеситель Faris G-120 для раковины",
    price: "1 789 ₽",
    img: SecondProduct,
  },
  {
    id: 3,
    title: "Триммерная леска «Спираль» 100м",
    price: "260 ₽",
    oldPrice: "312 ₽",
    img: ThirdProduct,
  },
  {
    id: 4,
    title: "Унитаз подвесной Aragio с двойным сливом",
    price: "12 789 ₽",
    oldPrice: "15 999 ₽",
    discount: "-12%",
    img: FourthProduct,
  },
  {
    id: 5,
    title: "Клей для напольных покрытий Poret",
    price: "12 789 ₽",
    oldPrice: "15 999 ₽",
    discount: "-15%",
    img: FifthProduct,
  },
];

const HitsSection: React.FC = () => {
  return (
    <section className="w-[1320px] m-auto mt-[90px]">
      <h2 className="text-2xl font-semibold mb-4">Хиты продаж</h2>

      <div className="grid grid-cols-1 mt-[50px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl p-4 hover:shadow-lg transition bg-white"
          >
            <img
              src={p.img}
              alt={p.title}
              className="w-full h-36 object-contain mb-4"
            />

            <p className="text-sm h-12 mb-3">{p.title}</p>

            <div className="mb-3">
              {p.oldPrice && (
                <span className="text-xs text-gray-400 line-through mr-2">
                  {p.oldPrice}
                </span>
              )}
              <span className="text-lg font-semibold">{p.price}</span>
              {p.discount && (
                <span className="text-green-600 text-sm ml-2">
                  {p.discount}
                </span>
              )}
            </div>

            <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-xl">
              Купить
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HitsSection;
