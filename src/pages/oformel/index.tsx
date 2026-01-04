import  { useState } from "react";
import { deliveryMethods, paymentMethods, orderItems } from "@/types/typeOrder";
import type { UserData } from "@/types/orderData.typ";

function Oformel() {
  const [delivery, setDelivery] = useState("pickup");
  const [payment, setPayment] = useState("card");

  const [userData, setUserData] = useState<UserData>({
    email: "",
    phone: "",
    company: "",
    comment: ""
  });

  const total = orderItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="w-full bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">

        <div className="lg:col-span-2 space-y-10">

          <div>
            <h1 className="text-3xl font-bold">Оформление заказа</h1>
            <p className="text-sm mt-2">
              Уже есть аккаунт?
              <a href="#" className="text-blue-600 ml-1">Войти</a>
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Доставка</h2>

            <div className="flex gap-4 mb-5">
              <div className="px-3 py-2 bg-gray-100 rounded-lg">Городской округ Черкесский</div>
              <div className="px-3 py-2 bg-gray-100 rounded-lg">Черкесск</div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {deliveryMethods.map((item) => (
                <label
                  key={item.id}
                  className={`border rounded-xl p-4 cursor-pointer hover:border-blue-500 transition ${
                    delivery === item.id ? "border-blue-600" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    checked={delivery === item.id}
                    onChange={() => setDelivery(item.id)}
                    className="mr-2"
                  />
                  <strong className="block mb-1">{item.title}</strong>

                  <p className="text-sm text-gray-600">{item.description}</p>

                  {item.address && (
                    <p className="text-sm font-medium mt-2">{item.address}</p>
                  )}
                </label>
              ))}
            </div>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Оплата</h2>

            <ul className="space-y-3 text-sm">
              {paymentMethods.map((p) => (
                <li key={p.id}>
                  <input
                    type="radio"
                    name="pay"
                    checked={payment === p.id}
                    onChange={() => setPayment(p.id)}
                  />{" "}
                  {p.title}

                  {p.link && (
                    <a href={p.link} className="text-blue-600 ml-1">Условия</a>
                  )}
                </li>
              ))}
            </ul>

            <p className="text-sm mt-4">
              Есть промокод?
              <a href="#" className="text-blue-600 ml-1">Ввести</a>
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Ваши данные</h2>

            <div className="space-y-4">

              <div>
                <label className="text-sm font-medium">Название компании</label>
                <input
                  className="w-full mt-1 px-3 py-2 border rounded-lg"
                  placeholder="Введите название"
                  value={userData.company}
                  onChange={(e) =>
                    setUserData({ ...userData, company: e.target.value })
                  }
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Email *</label>
                  <input
                    type="email"
                    className="w-full mt-1 px-3 py-2 border rounded-lg"
                    placeholder="Email"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Номер телефона *</label>
                  <input
                    type="tel"
                    className="w-full mt-1 px-3 py-2 border rounded-lg"
                    placeholder="Телефон"
                    value={userData.phone}
                    onChange={(e) =>
                      setUserData({ ...userData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium">Комментарий</label>
                <textarea
                  className="w-full mt-1 px-3 py-2 border rounded-lg"
                  rows={3}
                  placeholder="Ваш комментарий"
                  value={userData.comment}
                  onChange={(e) =>
                    setUserData({ ...userData, comment: e.target.value })
                  }
                ></textarea>
              </div>

            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Ваш заказ</h2>

          <div className="space-y-4">
            {orderItems.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <img
                  src={item.image}
                  className="w-16 h-16 object-cover rounded-lg"
                  alt={item.title}
                />
                <p className="text-sm flex-1">{item.title}</p>
                <strong className="whitespace-nowrap">{item.price} ₽</strong>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Сумма</span>
              <strong>{total} ₽</strong>
            </div>

            <div className="flex justify-between">
              <span>Доставка</span>
              <strong>0 ₽</strong>
            </div>

            <div className="flex justify-between text-lg font-bold pt-2">
              <span>Итого</span>
              <span>{total} ₽</span>
            </div>
          </div>

          <p className="text-xs text-gray-600 mt-4">
            Согласен с обработкой данных и
            <a href="#" className="text-blue-600 ml-1">политикой</a>
          </p>

          <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
            ОФОРМИТЬ ЗАКАЗ
          </button>
        </div>

      </div>
    </div>
  );
}

export default Oformel;
