import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import Logo from '../../assets/Images/logo.png'
import { CiGift, CiHeart, CiSearch } from 'react-icons/ci'
import { BsPersonCircle } from 'react-icons/bs'
import { FiBarChart2 } from 'react-icons/fi'
import { SlBasket } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b">

      <div className="md:hidden">

        <div className="flex items-center justify-between px-4 py-3">
          <HiOutlineMenuAlt4 size={26} />

          <span className="text-sm font-semibold">
            8 800 444 00 65
          </span>

          <button className="text-xs border border-blue-600 text-blue-600 px-3 py-1 rounded">
            Заказать звонок
          </button>
        </div>

        <div className="flex items-center justify-between px-4 py-3">
          <img src={Logo} alt="logo" className="h-8" />

          <div className="flex gap-4 text-gray-700">
            <CiGift size={24} />
            <FiBarChart2 size={24} />
            <CiHeart size={24} />
            <SlBasket size={24} />
          </div>
        </div>

        <div className="px-4 pb-3">
          <div className="flex">
            <input
              placeholder="Поиск товаров"
              className="w-full border border-blue-500 px-4 py-2 rounded-l-md outline-none"
            />
            <button className="bg-blue-600 px-4 rounded-r-md text-white">
              <CiSearch size={22} />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:block lg:hidden">

        <div className="flex items-center justify-between px-4 py-3 text-sm">
          <span>Ежедневно, с 8:00 до 18:00</span>

          <span className="font-semibold">
            8 800 444 00 65
          </span>

          <button className="text-xs border border-blue-600 text-blue-600 px-3 py-1 rounded">
            Заказать звонок
          </button>
        </div>

        <div className="flex items-center justify-between px-4 py-3 gap-4">
          <Link to="/">
            <img src={Logo} alt="logo" className="h-9" />
          </Link>

          <div className="flex gap-4 text-gray-700">
            <CiGift size={26} />
            <BsPersonCircle size={26} />
            <FiBarChart2 size={26} />
            <CiHeart size={26} />
            <SlBasket size={26} />
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 pb-4">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
            <HiOutlineMenuAlt4 size={20} />
            Каталог
          </button>

          <div className="flex flex-1">
            <input
              placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
              className="w-full border border-blue-500 px-4 py-2 rounded-l-md"
            />
            <button className="bg-blue-600 px-4 rounded-r-md text-white">
              <CiSearch size={22} />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">

        <div className="text-sm py-2 border-b">
          <div className="max-w-[1300px] mx-auto flex justify-between items-center px-4">
            <div className="flex gap-4 text-gray-700">
              {[
                'О компании', 'Оплата', 'Доставка', 'Возврат',
                'Отзывы', 'Вопрос-ответ', 'Новости', 'Контакты'
              ].map((item) => (
                <a key={item} href="#" className="hover:text-blue-600">
                  {item}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <span>Ежедневно, с 8:00 до 18:00</span>
              <b>8 800 444 00 65</b>
              <button className="border border-blue-600 text-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>

        <div className="py-4">
          <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4">

            <Link to="/">
              <img src={Logo} alt="logo" className="w-[180px]" />
            </Link>

            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded">
              <HiOutlineMenuAlt4 size={22} />
              Каталог
            </button>

            <div className="flex w-[500px]">
              <input
                placeholder="Найти среди 50000 товаров"
                className="w-full border border-blue-500 px-4 py-2 rounded-l-md"
              />
              <button className="bg-blue-600 px-4 rounded-r-md text-white">
                <CiSearch size={24} />
              </button>
            </div>

            <div className="flex gap-6 text-gray-700">
              <CiGift size={28} />
              <BsPersonCircle size={28} />
              <FiBarChart2 size={28} />
              <CiHeart size={28} />
              <SlBasket size={28} />
            </div>

          </div>
        </div>
      </div>

    </header>
  )
}

export default Navbar
