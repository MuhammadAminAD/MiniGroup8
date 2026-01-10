import { IoSend } from "react-icons/io5"
import Logo from "../../assets/Images/logo.png"
import FirstCard from "../../assets/Images/card1.png"
import SecondCard from "../../assets/Images/card2.png"
import ThirdCard from "../../assets/Images/card3.png"
import FourthCard from "../../assets/Images/card4.png"
import FifthCard from "../../assets/Images/card5.png"
import SixthCard from "../../assets/Images/card6.png"
import FinishImg from "../../assets/Images/finishImg.png"

export default function Footer() {
  const cards = [
    FirstCard,
    SecondCard,
    ThirdCard,
    FourthCard,
    FifthCard,
    SixthCard,
  ]

  return (
    <footer className="bg-gray-100">

      <div className="md:hidden px-4 py-6 space-y-6">
     
        <div>
          <img src={Logo} alt="logo" className="h-8 mb-3" />

          <p className="text-lg font-semibold">8 800 444 00 65</p>
          <p className="text-xs text-gray-500 mb-2">
            Ежедневно, с 8:00 до 18:00
          </p>

          <button className="border border-red-400 px-4 py-2 text-xs rounded-md">
            ЗАКАЗАТЬ ЗВОНОК
          </button>

          <p className="text-xs mt-3">
            Email: <span className="text-blue-500">info@stroiopttorg.ru</span>
          </p>
        </div>

        <details className="border-t pt-3">
          <summary className="font-semibold cursor-pointer">Информация</summary>
          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
            <p>О компании</p><p>Оплата</p>
            <p>Доставка</p><p>Возврат</p>
            <p>Отзывы</p><p>Вопрос-ответ</p>
            <p>Новости</p><p>Контакты</p>
            <p>Вход / Регистрация</p><p>Все акции</p>
          </div>
        </details>

        <details className="border-t pt-3">
          <summary className="font-semibold cursor-pointer">Каталог</summary>
          <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-600">
            <p>Общестроительные материалы</p>
            <p>Инструмент</p>
            <p>Сантехника</p>
            <p>Отделочные материалы</p>
            <p>Товары для дома и сада</p>
          </div>
        </details>

        <div className="border-t pt-4">
          <p className="text-sm mb-2">Мы принимаем к оплате:</p>
          <div className="flex flex-wrap gap-4">
            {cards.map((src, i) => (
              <img key={i} src={src} className="h-4 opacity-40" />
            ))}
          </div>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm mb-2">Подпишитесь на рассылку</p>
          <div className="relative">
            <input
              placeholder="Ваш email"
              className="w-full py-3 px-4 pr-10 rounded-md text-sm"
            />
            <IoSend className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="border-t pt-4 text-[10px] text-gray-500 text-center flex flex-col items-center gap-2">
          <p>© 2003–2023 ООО «Стройоптторг»</p>
          <a href="#" className="underline">Политика конфиденциальности</a>
          <img src={FinishImg} className="h-4 opacity-50" />
        </div>
      </div>

      <div className="hidden md:block lg:hidden">

        <div className="px-6 py-6 flex items-start justify-between gap-6">
          <img src={Logo} className="w-[160px]" />

          <div className="text-sm">
            <p>Email:</p>
            <p className="text-blue-500">info@stroiopttorg.ru</p>
          </div>

          <div>
            <p className="font-semibold text-lg">8 800 444 00 65</p>
            <p className="text-xs text-gray-500">
              Ежедневно, с 8:00 до 18:00
            </p>
          </div>

          <button className="border border-red-400 px-4 py-2 text-xs rounded-md h-fit">
            ЗАКАЗАТЬ ЗВОНОК
          </button>
        </div>

        <div className="border-t px-6 py-8 grid grid-cols-2 gap-10 text-sm text-gray-600">

          <div>
            <p className="font-semibold mb-4 text-gray-900">Информация</p>
            <div className="grid grid-cols-2 gap-y-2">
              <p>О компании</p><p>Вопрос-ответ</p>
              <p>Оплата</p><p>Новости</p>
              <p>Доставка</p><p>Контакты</p>
              <p>Возврат</p><p>Вход / Регистрация</p>
              <p>Отзывы</p><p>Все акции</p>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-4 text-gray-900">Каталог</p>
            <div className="grid grid-cols-2 gap-y-2">
              <p>Общестроительные материалы</p>
              <p>Электротовары</p>
              <p>Все для сауны и бани</p>
              <p>Сантехника</p>
              <p>Инструмент</p>
              <p>Столярные изделия</p>
              <p>Отделочные материалы</p>
              <p>Спецодежда и СИЗ</p>
              <p>Товары для дома и сада</p>
              <p>Метизы и такелаж</p>
            </div>
          </div>

        </div>

        <div className="border-t px-6 py-6 space-y-4">

          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm text-gray-500">
              Мы принимаем к оплате:
            </span>
            {cards.map((src, i) => (
              <img key={i} src={src} className="h-4 opacity-40" />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm">
              Подпишитесь на рассылку<br />и будьте в курсе!
            </span>
            <div className="relative">
              <input
                placeholder="Ваш email"
                className="w-[240px] py-2 px-4 pr-10 rounded-md text-sm border"
              />
              <IoSend className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

        </div>

        <div className="border-t px-6 py-4 flex justify-between items-center text-[11px] text-gray-500">
          <p>© 2003–2023 Интернет-магазин ООО «Стройоптторг»</p>
          <img src={FinishImg} className="h-4 opacity-60" />
          <a href="#" className="underline">Политика конфиденциальности</a>
        </div>

      </div>

      <div className="hidden md:block">

        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <img src={Logo} className="w-[200px]" />
          <div className="hidden lg:block text-sm text-gray-600">
            <p>ООО «Стройоптторг»</p>
            <p>ИНН: 0901051787</p>
            <p>КПП: 090101001</p>
          </div>


          <div className="text-sm">
            <p>Email:</p>
            <p className="text-blue-500">info@stroiopttorg.ru</p>
          </div>

          <div className="text-right">
            <p className="font-semibold text-lg">8 800 444 00 65</p>
            <p className="text-xs text-gray-500">
              Ежедневно, с 8:00 до 18:00
            </p>
          </div>

          <button className="border border-red-400 px-5 py-2 text-xs rounded-md">
            ЗАКАЗАТЬ ЗВОНОК
          </button>
        </div>

        <div className="border-t">
          <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-5 gap-10 text-sm text-gray-600">

            <div className="col-span-2">
              <p className="font-semibold mb-4 text-gray-900">Информация</p>
              <div className="grid grid-cols-2 gap-y-2">
                <p>О компании</p><p>Вопрос-ответ</p>
                <p>Оплата</p><p>Новости</p>
                <p>Доставка</p><p>Контакты</p>
                <p>Возврат</p><p>Вход / Регистрация</p>
                <p>Отзывы</p><p>Все акции</p>
              </div>
            </div>

            <div className="col-span-3">
              <p className="font-semibold mb-4 text-gray-900">Каталог</p>
              <div className="grid grid-cols-3 gap-y-2">
                <p>Общестроительные материалы</p>
                <p>Электротовары</p>
                <p>Водо-газоснабжение, отопление, вентиляция</p>

                <p>Все для сауны и бани</p>
                <p>Сантехника</p>
                <p>Метизы и такелаж</p>

                <p>Инструмент</p>
                <p>Столярные изделия</p>
                <p></p>

                <p>Отделочные материалы</p>
                <p>Спецодежда и СИЗ</p>
                <p></p>

                <p>Товары для дома и сада</p>
              </div>
            </div>

          </div>
        </div>

        <div className="border-t">
          <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">

            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-500">
                Мы принимаем к оплате:
              </span>
              <div className="flex gap-4">
                {cards.map((src, i) => (
                  <img key={i} src={src} className="h-4 opacity-40" />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm">
                Подпишитесь на рассылку<br />и будьте в курсе!
              </span>
              <div className="relative">
                <input
                  placeholder="Ваш email"
                  className="w-[260px] py-2 px-4 pr-10 rounded-md text-sm border"
                />
                <IoSend className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>
            </div>

          </div>
        </div>

        <div className="border-t">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-[11px] text-gray-500">
            <p>© 2003–2023 Интернет-магазин ООО «Стройоптторг»</p>
            <img src={FinishImg} className="h-4 opacity-60" />
            <a href="#" className="underline">Политика конфиденциальности</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
