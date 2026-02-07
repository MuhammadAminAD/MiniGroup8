import { useState } from "react";
import type { LoginFormData } from "../../types/orderLogin";

function Soz() {
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <h1 className="text-2xl font-semibold mb-6 max-w-6xl mx-auto">
        Авторизация
      </h1>
      <div
        className="
          max-w-6xl mx-auto bg-white border border-gray-200 rounded-lg
          p-5 sm:p-6 md:p-10
          grid grid-cols-1
          md:grid-cols-2
          lg:grid-cols-[1fr_auto_1fr]
          gap-8 md:gap-12 "
      >
        <div>
          <label className="text-xs text-gray-700">
            Email или логин <span className="text-red-500">*</span>
          </label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Введите данные для авторизации"
            className="w-full mt-2 mb-5 px-4 py-3 text-sm
              border border-gray-200 rounded-md
              placeholder:text-gray-400
              focus:outline-none focus:border-blue-400"
          />
          <label className="text-xs text-gray-700">
            Пароль <span className="text-red-500">*</span>
          </label>
          <div className="relative mt-2 mb-3">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Введите пароль"
              className="w-full px-4 py-3 text-sm
                border border-gray-200 rounded-md
                placeholder:text-gray-400
                focus:outline-none focus:border-blue-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
            
            </button>
          </div>
          <button className="text-xs text-blue-600 mb-5 hover:underline">
            Восстановить пароль
          </button>
          <button className="w-full bg-blue-600 text-white py-3 rounded-md text-sm font-semibold">
            АВТОРИЗОВАТЬСЯ
          </button>
          <label className="flex items-center gap-2 mt-4 text-xs text-gray-700">
            <input
              type="checkbox"
              name="rememberMe"
              checked={form.rememberMe}
              onChange={handleChange}
              className="w-4 h-4"
            />
            Запомнить меня
          </label>
        </div>
        <div className="hidden lg:block w-px bg-gray-200"></div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full border border-red-400 text-red-500 flex items-center justify-center">
           
            </div>
            <h2 className="text-lg font-semibold">
              Еще нет аккаунта?
            </h2>
          </div>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Регистрация на сайте позволяет получить доступ к статусу и истории
            вашего заказа. Просто заполните поля ниже, и вы получите учетную
            запись.
          </p>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Мы запрашиваем у вас только информацию, необходимую для того, чтобы
            сделать процесс покупки более быстрым и легким.
          </p>
          <button
            className="
              bg-black text-white
              w-full sm:w-fit
              px-6 py-3 rounded-md
              text-sm font-medium
              flex items-center justify-center gap-2">
            ЗАРЕГИСТРИРОВАТЬСЯ
            <span>›</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Soz;
