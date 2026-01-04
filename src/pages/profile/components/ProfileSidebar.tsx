import { NavLink } from "react-router-dom";

function ProfileSidebar() {
    return (
        <div className="hidden lg:block w-fit self-start">

            <div className="bg-white rounded-xl p-3 shadow-md">
                <nav className="flex flex-col gap-2">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `group w-full flex items-center justify-between gap-3 px-4 py-3 rounded-md text-[15px] transition-colors duration-150 font-medium ${isActive ? "bg-[#0B0E15] text-white" : "text-gray-600 hover:bg-gray-50"
                            }`
                        }
                    >
                        <span className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <span>Мой аккаунт</span>
                        </span>

                    </NavLink>

                    <NavLink
                        to="/Profil"
                        className={({ isActive }) =>
                            `group w-full flex items-center justify-between gap-3 px-4 py-3 rounded-md text-[15px] transition-colors duration-150 font-medium ${isActive ? "bg-[#0B0E15] text-white" : "text-gray-600 hover:bg-gray-50"
                            }`
                        }
                    >
                        <span className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <path d="M12 20h9" />
                                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
                            </svg>
                            <span>Изменить профиль</span>
                        </span>

                    </NavLink>

                    <NavLink
                        to="/Kabenet"
                        className={({ isActive }) =>
                            `group w-full flex items-center justify-between gap-3 px-4 py-3 rounded-md text-[15px] transition-colors duration-150 font-medium ${isActive ? "bg-[#0B0E15] text-white" : "text-gray-600 hover:bg-gray-50"
                            }`
                        }
                    >
                        <span className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <path d="M6 2l1.5 3h9L18 2" />
                                <path d="M3 6h18v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z" />
                            </svg>
                            <span>Мои заказы</span>
                        </span>

                    </NavLink>

                    <NavLink
                        to="/address"
                        className={({ isActive }) =>
                            `group w-full flex items-center justify-between gap-3 px-4 py-3 rounded-md text-[15px] transition-colors duration-150 font-medium ${isActive ? "bg-[#0B0E15] text-white" : "text-gray-600 hover:bg-gray-50"
                            }`
                        }
                    >
                        <span className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span>Адрес доставки</span>
                        </span>

                    </NavLink>

                    <NavLink
                        to="/favorites"
                        className={({ isActive }) =>
                            `relative group w-full flex items-center justify-between gap-3 px-4 py-3 rounded-md text-[15px] transition-colors duration-150 font-medium ${isActive ? "bg-[#0B0E15] text-white" : "text-gray-600 hover:bg-gray-50"
                            }`
                        }
                    >
                        <span className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" />
                            </svg>
                            <span>Избранные товары</span>
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="absolute right-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">7</span>

                        </div>
                    </NavLink>

                    <NavLink
                        to="/change-password"
                        className={({ isActive }) =>
                            `group w-full flex items-center justify-between gap-3 px-4 py-3 rounded-md text-[15px] transition-colors duration-150 font-medium ${isActive ? "bg-[#0B0E15] text-white" : "text-gray-600 hover:bg-gray-50"
                            }`
                        }
                    >
                        <span className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <rect x="3" y="11" width="18" height="11" rx="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <span>Сменить пароль</span>
                        </span>

                    </NavLink>

                    <NavLink
                        to="/logout"
                        className={({ isActive }) =>
                            `group w-full flex items-center justify-between gap-3 px-4 py-3 rounded-md text-[15px] transition-colors duration-150 font-medium ${isActive ? "bg-[#0B0E15] text-white" : "text-gray-600 hover:bg-gray-50"
                            }`
                        }
                    >
                        <span className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-current" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                <path d="M16 17l5-5-5-5" />
                                <path d="M21 12H9" />
                            </svg>
                            <span>Выйти из аккаунта</span>
                        </span>

                    </NavLink>
                </nav>
            </div>
        </div>
    );
}

export default ProfileSidebar;
