import { IoSend } from "react-icons/io5";
import Logo from "../../assets//Images/logo.png";
import FirstCard from "../../assets/Images/card1.png";
import SecondCard from "../../assets/Images/card2.png";
import ThirdCard from "../../assets/Images/card3.png";
import FourthCard from "../../assets/Images/card4.png";
import FifthCard from "../../assets/Images/card5.png";
import SixthCard from "../../assets/Images/card6.png";
import FinishImg from "../../assets/Images/finishImg.png"

export default function Footer() {
  const cards = [
    FirstCard,
    SecondCard,
    ThirdCard,
    FourthCard,
    FifthCard,
    SixthCard,
  ];
  return (
    <div className="bg-gray-100 m-auto">
      <div className="w-[1280px] h-[136px] flex mx-auto px-4 py-6 flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-[215px]" />
        </div>

        <p className="text-[13px] ml-[-60px]">ООО «Стройоптторг» </p>

        <div className="flex w-[250px] justify-between mt-2">
          <div>
            <p className="text-[11px] text-gray-600">ИНН: 0901051787</p>
            <p className="text-[11px] text-gray-600">КПП 090101001</p>
          </div>

          <div>
            <p className="text-[13px]">Email:</p>
            <p
              className="text-[11px] text-blue-500"
            >
              info@stroiopttorg.ru
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="leading-tight">
            <p className="text-[15px] font-semibold text-gray-900">
              8 800 444 00 65
            </p>
            <span className="text-[11px] text-gray-500">
              Ежедневно, с 8:00 до 18:00
            </span>
          </div>

          <button
            className="
              border border-red-400 text-black-500 text-xs
              px-5 py-2 rounded-md cursor-pointer
            "
          >
            ЗАКАЗАТЬ ЗВОНОК
          </button>
        </div>

      </div>
      <div className="w-[1280px] ml-35 border-t border-gray-300 pt-6 mb-6 mx-auto flex justify-between">

        <div className="flex flex-col gap-2 w-[220px]">
          <p className="text-sm font-semibold text-gray-900 mb-3">Информация</p>

          <p className="text-[12px] text-gray-600">О компании</p>
          <p className="text-[12px] text-gray-600">Оплата</p>
          <p className="text-[12px] text-gray-600">Доставка</p>
          <p className="text-[12px] text-gray-600">Возврат</p>
          <p className="text-[12px] text-gray-600">Отзывы</p>
        </div>

        <div className="flex flex-col gap-2 w-[220px]">
          <p className="text-sm font-semibold text-gray-900 mb-3 opacity-0">
            ""
          </p>

          <p className="text-[12px] text-gray-600">Вопрос-ответ</p>
          <p className="text-[12px] text-gray-600">Новости</p>
          <p className="text-[12px] text-gray-600">Контакты</p>
          <p className="text-[12px] text-gray-600">Вход / Регистрация</p>
          <p className="text-[12px] text-gray-600">Все акции</p>
        </div>

        <div className="flex flex-col gap-2 w-[220px]">
          <p className="text-sm font-semibold text-gray-900 mb-3">Каталог</p>

          <p className="text-[12px] text-gray-600">Общестроительные материалы</p>
          <p className="text-[12px] text-gray-600">Все для сауны и бани</p>
          <p className="text-[12px] text-gray-600">Инструмент</p>
          <p className="text-[12px] text-gray-600">Отделочные материалы</p>
          <p className="text-[12px] text-gray-600">Товары для дома, сада и огорода</p>
        </div>

        <div className="flex flex-col gap-2 w-[220px]">
          <p className="text-sm font-semibold text-gray-900 mb-3 opacity-0">
            ""
          </p>

          <p className="text-[12px] text-gray-600">Электротовары</p>
          <p className="text-[12px] text-gray-600">Сантехника</p>
          <p className="text-[12px] text-gray-600">Столярные изделия</p>
          <p className="text-[12px] text-gray-600">
            Спецодежда и средства индивидуальной пожарной защиты
          </p>


        </div>
        <div className="flex flex-col gap-2 w-[220px]">
          <p className="text-sm font-semibold text-gray-900 mb-3 opacity-0">
            ""
          </p>

          <p className="text-[13px] text-gray-600">
            Водо-газоснабжение, отопление, вентиляция
          </p>
          <p className="text-[13px] text-gray-600">Метизы, такелажные и скобяные изделия</p>
        </div>
      </div>

      <div className="w-[1280px] border-t border-gray-300 pt-5 pb-6 mx-auto flex items-center justify-between px-4">

        <div className="flex items-center gap-6">
          <span className="text-gray-500 text-sm">Мы принимаем к <br /> оплате:</span>

          <div className="flex items-center ml-[50px] gap-5">
            {cards.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="h-[15px] w-[50px] opacity-40 object-contain"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-black-600 text-[15px] leading-tight">
            Подпишитесь на рассылку <br /> и будьте в курсе!
          </span>

          <div className="relative">
            <input
              type="email"
              placeholder="Ваш email"
              className="w-[280px] rounded-md py-3 pr-9 pl-4 text-sm bg-white border border-gray-200 focus:outline-none"
            />

            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
            >
              <IoSend />
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1280px] mx-auto border-t border-gray-300 pt-6 pb-6 flex items-center justify-between px-4">

        <div className="text-gray-500 text-[10px] leading-relaxed max-w-lg">
          © 2003–2023 Интернет-магазин ООО «Стройоптторг» р/с 4070281030000102415<br />
          в Ставропольское отделение №5230 ПАО Сбербанк, БИК 040702615
        </div>

        <div className="flex flex-col items-end gap-2">
          <img
            src={FinishImg}
            alt="#"
            className="h-5 opacity-60 object-contain"
          />
        </div>
        
        <a
          href="#"
          className="text-gray-600 text-[10px] underline"
        >
          Политика конфиденциальности
        </a>

      </div>

    </div>
  );
}
