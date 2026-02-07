import Logo from '../../assets/Images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full">

      <div className="w-full text-sm py-2">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center px-4">

          <div className="flex gap-4 text-gray-700">
            {[
              'О компании', 'Оплата', 'Доставка', 'Возврат',
              'Отзывы', 'Вопрос-ответ', 'Новости', 'Контакты'
            ].map((item) => (
              <a key={item} href="#" className="hover:text-blue-600 transition">
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <p className="text-gray-600">Ежедневно, с 8:00 до 18:00</p>
            <h2 className="font-bold text-black-700 text-lg">8 800 444 00 65</h2>
            <button className="text-blue-600 border border-blue-600 px-4 py-1 rounded hover:bg-blue-600 hover:text-white transition">
              Заказать звонок
            </button>
          </div>

        </div>
      </div>

      <div className="w-full bg-white py-4">
        <div className="max-w-[1300px] mx-auto flex items-center justify-between px-4">

          <Link to="/">
            <img src={Logo} alt="Logo" className="w-[180px]" />
          </Link>
          
          <button className="flex items-center gap-2 text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition">
        
            <span className="font-medium">Каталог</span>
          </button>

          <div className="flex w-[500px]">
            <input
              type="text"
              placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
              className="w-full border border-blue-500 rounded-l-md px-4 py-2 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700 transition">
          
            </button>
          </div>

          <div className="flex items-center gap-6 text-gray-700">

            <div className="flex flex-col items-center text-sm hover:text-blue-600 cursor-pointer">
            
              <p>Все акции</p>
            </div>

            <div className="flex flex-col items-center text-sm hover:text-blue-600 cursor-pointer">
            
              <p>Войти</p>
            </div>

            <div className="flex flex-col items-center text-sm hover:text-blue-600 cursor-pointer">
              
              <p>Сравнение</p>
            </div>

            <Link to="/favorites">
              <div className="flex flex-col items-center text-sm hover:text-blue-600 cursor-pointer">
               
                <p>Избранное</p>
              </div>
            </Link>

            <Link to="/cart">
              <div className="flex flex-col items-center text-sm hover:text-blue-600 cursor-pointer relative">
              
                <p>Корзина</p>
              </div>
            </Link>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Navbar
