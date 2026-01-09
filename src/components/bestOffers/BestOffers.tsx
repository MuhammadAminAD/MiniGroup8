import { CiHeart } from 'react-icons/ci'
import { FiBarChart2 } from 'react-icons/fi'
import { SlBasket } from 'react-icons/sl'

import FirstProduct from '../../../assets/Images/product1.png'
import SecondProduct from '../../../assets/Images/product2.png'
import ThirdProduct from '../../../assets/Images/product3.png'
import FourthProduct from '../../../assets/Images/product4.png'
import FifthProduct from '../../../assets/Images/product5.png'

type Product = {
  id: number
  title: string
  price: string
  oldPrice?: string
  discount?: string
  img: string
  badge?: string
}

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
]

const BestOffers = () => {

  const addToFavorites = async (product: Product) => {
    try {
      await fetch('http://localhost:3000/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      })
    } catch (error) {
      console.error('Favorites ga qo‘shishda xatolik:', error)
    }
  }

  const addToBasket = async (product: Product) => {
    try {
      await fetch('http://localhost:3000/basket', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...product,
          count: 1,
        }),
      })
    } catch (error) {
      console.error('Basket ga qo‘shishda xatolik:', error)
    }
  }

  return (
    <section className="w-[1280px] m-auto mt-[90px]">
      <h2 className="text-2xl font-semibold mb-4">
        Лучшие предложения
      </h2>

      <div className="flex gap-3 mb-6 text-sm">
        {["Все товары", "Инструменты", "Сантехника", "Для дома", "Для сада"].map(
          (item) => (
            <button
              key={item}
              className="px-4 py-1.5 mt-[30px] rounded-full border border-gray-300 hover:bg-gray-100 hover:text-blue-400 transition"
            >
              {item}
            </button>
          )
        )}
      </div>

      <div className="grid grid-cols-1 mt-[50px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="border rounded-xl p-4 bg-white hover:shadow-lg transition relative"
          >
            {p.badge && (
              <span
                className={`absolute top-3 left-3 text-xs px-2 py-0.5 rounded ${
                  p.badge === "распродажа"
                    ? "bg-red-100 text-red-500"
                    : "bg-green-100 text-green-600"
                }`}
              >
                {p.badge}
              </span>
            )}

            <img
              src={p.img}
              alt={p.title}
              className="w-full h-36 object-contain mb-4"
            />

            <p className="text-sm leading-tight h-12 mb-2">
              {p.title}
            </p>

            <p className="text-xs text-gray-400 mb-2">
              Артикул: XJ89YHG0
            </p><div className="mb-4">
              {p.oldPrice && (
                <span className="text-xs text-gray-400 line-through mr-2">
                  {p.oldPrice}
                </span>
              )}
              <span className="text-lg font-semibold">
                {p.price}
              </span>
              {p.discount && (
                <span className="text-green-600 text-sm ml-2">
                  {p.discount}
                </span>
              )}
            </div>

            <div className="flex justify-between items-center">
            
              <button
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-xl"
                onClick={() => addToBasket(p)}
              >
                <SlBasket /> Купить
              </button>

              <div className="flex gap-3 text-gray-500">
             
                <button
                  className="border px-2 py-2 rounded-xl cursor-pointer hover:text-red-500"
                  onClick={() => addToFavorites(p)}
                >
                  <CiHeart />
                </button>

                <button className="border px-2 py-2 rounded-xl cursor-pointer">
                  <FiBarChart2 />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestOffers