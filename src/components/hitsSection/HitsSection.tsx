import React from "react";
import { IconType } from "react-icons";

import FirstProduct from "../../assets/Images/image9.png";
import SecondProduct from "../../assets/Images/image10.png";
import ThirdProduct from "../../assets/Images/image11.png";
import FourthProduct from "../../assets/Images/image12.png";
import FifthProduct from "../../assets/Images/image13.png";

import { CiHeart } from "react-icons/ci";
import { FiBarChart2 } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";


export type Product = {
  id: number;
  title: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  img: string;
};

type ActionIcon = {
  Icon: IconType;
  onClick?: () => void;
  className?: string;
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
  const addToFavorites = async (product: Product) => {
    try {
      await fetch("http://localhost:3000/favorites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
    } catch (error) {
      console.error("Favorites xatolik:", error);
    }
  };

  const addToBasket = async (product: Product) => {
    try {
      await fetch("http://localhost:3000/basket", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...product,
          count: 1,
        }),
      });
    } catch (error) {
      console.error("Basket xatolik:", error);
    }
  };

  return (
    <section className="w-[1320px] m-auto mt-[90px]">
      <h2 className="text-2xl font-semibold mb-4">Хиты продаж</h2>

      <div className="flex gap-3 mt-[30px] text-sm">
        {["Все товары", "Инструменты", "Сантехника", "Для дома", "Для сада"].map(
          (item) => (
            <button
              key={item}
              className="px-4 py-1.5 rounded-full border border-gray-300 hover:bg-gray-100 transition"
            >
              {item}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 mt-[50px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((product) => {
          const actionIcons: ActionIcon[] = [
            {
              Icon: CiHeart,
              onClick: () => addToFavorites(product),
              className: "hover:text-red-500",
            },
            {
              Icon: FiBarChart2,
            },
          ];

          return (
            <div
              key={product.id}
              className="group border rounded-xl p-4 relative hover:shadow-lg transition bg-white"
            >
              <span className="absolute top-3 left-3 bg-yellow-300 text-xs px-2 py-0.5 rounded">
                хит
              </span>

              <img
                src={product.img}
                alt={product.title}
                className="w-full h-36 object-contain mb-4"
              />

              <p className="text-sm leading-tight h-12 mb-3">
                {product.title}
              </p>

              <div className="mb-3">
                {product.oldPrice && (
                  <span className="text-xs text-gray-400 line-through mr-2">
                    {product.oldPrice}
                  </span>
                )}
                <span className="text-lg font-semibold">
                  {product.price}
                </span>
                {product.discount && (
                  <span className="text-green-600 text-sm ml-2">
                    {product.discount}
                  </span>
                )}
              </div>

              <div className="flex justify-between items-center">
                <button
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-xl"
                  onClick={() => addToBasket(product)}
                >
                  <SlBasket /> Купить
                </button>

                <div className="flex gap-3 text-gray-500">
                  {actionIcons.map(({ Icon, onClick, className }, idx) => (
                    <button
                      key={idx}
                      onClick={onClick}
                      className={`border px-2 py-2 rounded-xl cursor-pointer ${className ?? ""}`}
                    >
                      <Icon />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HitsSection;
