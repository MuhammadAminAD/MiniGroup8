import React from "react";

import Logo from "../../assets/Images/logo.png";
import FirstCard from "../../assets/Images/card1.png";
import SecondCard from "../../assets/Images/card2.png";
import ThirdCard from "../../assets/Images/card3.png";
import FourthCard from "../../assets/Images/card4.png";
import FifthCard from "../../assets/Images/card5.png";
import SixthCard from "../../assets/Images/card6.png";
import FinishImg from "../../assets/Images/finishImg.png";


type FooterLinkGroup = {
  title?: string;
  links: string[];
};


const paymentCards: string[] = [
  FirstCard,
  SecondCard,
  ThirdCard,
  FourthCard,
  FifthCard,
  SixthCard,
];

const footerLinks: FooterLinkGroup[] = [
  {
    title: "Информация",
    links: ["О компании", "Оплата", "Доставка", "Возврат", "Отзывы"],
  },
  {
    links: ["Вопрос-ответ", "Новости", "Контакты", "Вход / Регистрация", "Все акции"],
  },
  {
    title: "Каталог",
    links: [
      "Общестроительные материалы",
      "Все для сауны и бани",
      "Инструмент",
      "Отделочные материалы",
      "Товары для дома, сада и огорода",
    ],
  },
  {
    links: [
      "Электротовары",
      "Сантехника",
      "Столярные изделия",
      "Спецодежда и средства индивидуальной пожарной защиты",
    ],
  },
  {
    links: [
      "Водо-газоснабжение, отопление, вентиляция",
      "Метизы, такелажные и скобяные изделия",
    ],
  },
];


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 m-auto">
      <div className="w-[1280px] h-[136px] mx-auto px-4 py-6 flex items-center justify-between">
        <img src={Logo} alt="logo" className="w-[215px]" />

        <p className="text-[13px] ml-[-60px]">ООО «Стройоптторг»</p>

        <div className="flex w-[250px] justify-between mt-2">
          <div>
            <p className="text-[11px] text-gray-600">ИНН: 0901051787</p>
            <p className="text-[11px] text-gray-600">КПП 090101001</p>
          </div>

          <div>
            <p className="text-[13px]">Email:</p>
            <p className="text-[11px] text-blue-500">
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

          <button className="border border-red-400 text-xs px-5 py-2 rounded-md cursor-pointer">
            ЗАКАЗАТЬ ЗВОНОК
          </button>
        </div>
      </div>

      <div className="w-[1280px] border-t border-gray-300 pt-6 mb-6 mx-auto flex justify-between">
        {footerLinks.map((group, index) => (
          <div key={index} className="flex flex-col gap-2 w-[220px]">
            <p
              className={`text-sm font-semibold text-gray-900 mb-3 ${
                !group.title && "opacity-0"
              }`}
            >
              {group.title ?? ""}
            </p>

            {group.links.map((link) => (
              <p key={link} className="text-[12px] text-gray-600">
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className="w-[1280px] border-t border-gray-300 pt-5 pb-6 mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <span className="text-gray-500 text-sm">
            Мы принимаем к <br /> оплате:
          </span>

          <div className="flex items-center ml-[50px] gap-5">
            {paymentCards.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="payment"
                className="h-[15px] w-[50px] opacity-40 object-contain"
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[15px] leading-tight">
            Подпишитесь на рассылку <br /> и будьте в курсе!
          </span>

          <div className="relative">
            <input
              type="email"
              placeholder="Ваш email"
              className="w-[280px] rounded-md py-3 pr-9 pl-4 text-sm bg-white border border-gray-200 focus:outline-none"
            />

            
          </div>
        </div>
      </div>

      <div className="w-[1280px] mx-auto border-t border-gray-300 pt-6 pb-6 flex items-center justify-between px-4">
        <div className="text-gray-500 text-[10px] leading-relaxed max-w-lg">
          © 2003–2023 Интернет-магазин ООО «Стройоптторг» р/с 4070281030000102415
          <br />
          в Ставропольское отделение №5230 ПАО Сбербанк, БИК 040702615
        </div>

        <img
          src={FinishImg}
          alt="partner"
          className="h-5 opacity-60 object-contain"
        />

        <a href="#" className="text-gray-600 text-[10px] underline">
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
};

export default Footer;
