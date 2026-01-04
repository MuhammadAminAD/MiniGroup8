import { orders } from "../mockData/orders";
import { profileTabs } from "../mockData/profileTabs";

function ProfileOrderHistory() {

    const statusClasses = (s: string) => {
        switch (s) {
            case 'ВЫПОЛНЕН':
                return 'border border-green-200 text-green-600';
            case 'ОТМЕНЁН':
                return 'border border-red-200 text-red-600';
            default:
                return 'border border-orange-200 text-orange-600';
        }
    }
    return (
        <div className="bg-white rounded-xl flex-1  shadow-md p-4">
            <div className="hidden md:grid lg:hidden md:grid-cols-6 md:gap-3 mb-6">
                {profileTabs.map((it) => (
                    <button
                        key={it.key}
                        className={`flex flex-col items-center justify-center gap-2 py-3 px-2 rounded-lg border ${it.active ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-200'} text-xs font-medium`}
                    >
                        <div className={`w-8 h-8 rounded-md flex items-center justify-center ${it.active ? 'bg-white/20' : 'bg-gray-50'}`}>
                            <it.icon className="w-4 h-4 text-current" aria-hidden />
                        </div>
                        <div className="text-[11px] leading-tight text-center">{it.label}</div>
                    </button>
                ))}
            </div>


            <div className="md:hidden mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <button className="p-2 rounded-md border text-gray-600">☰</button>
                    <div className="text-sm font-medium">Меню профиля</div>
                </div>
            </div>

            <h3 className="text-base font-semibold text-gray-800 mb-3">История заказов</h3>

            <div className="overflow-x-auto hidden md:block lg:hidden">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="text-xs text-gray-500 border-b">
                            <th className="py-3 px-4 w-1/4">НОМЕР</th>
                            <th className="py-3 px-4 w-1/4">ДАТА</th>
                            <th className="py-3 px-4 w-1/6">СТАТУС</th>
                            <th className="py-3 px-4 text-right w-1/6">ИТОГО</th>
                            <th className="py-3 px-4 w-1/12" />
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((o, i) => (
                            <tr key={`tablet-${o.id}-${i}`} className="border-b last:border-b-0 hover:bg-gray-50">
                                <td className="py-4 px-4 text-gray-800 font-medium">{o.id}</td>
                                <td className="py-4 px-4 text-gray-500">{o.date}</td>
                                <td className="py-4 px-4">
                                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white ${statusClasses(o.status)}`}>
                                        <span className={`w-2 h-2 rounded-full ${o.status === 'Выполнен' ? 'bg-green-500' : o.status === 'Обработка' ? 'bg-red-500' : 'bg-orange-400'}`} />
                                        {o.status}
                                    </span>
                                </td>
                                <td className="py-4 px-4 text-right text-blue-600 font-semibold">{o.total}</td>
                                <td className="py-4 px-4 text-right">
                                    <button aria-label="view" className="w-10 h-10 inline-flex items-center justify-center bg-gray-50 border border-gray-100 rounded-md hover:bg-gray-100">›</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden">
                <div className="flex flex-col gap-4">
                    {orders.map((o, i) => (
                        <div key={`mobile-${o.id}-${i}`} className="border rounded-lg p-4 bg-white shadow-sm">
                            <div className="grid grid-cols-2 gap-3 text-xs text-gray-500">
                                <div>НОМЕР</div>
                                <div className="text-right text-gray-700 font-medium">{o.id}</div>

                                <div>ДАТА</div>
                                <div className="text-right text-gray-700">{o.date}</div>

                                <div>СТАТУС</div>
                                <div className="text-right">
                                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white ${statusClasses(o.status)}`}>
                                        <span className={`w-2 h-2 rounded-full ${o.status === 'Выполнен' ? 'bg-green-500' : o.status === 'Отменён' ? 'bg-red-500' : 'bg-orange-400'}`} />
                                        {o.status}
                                    </span>
                                </div>

                                <div>ИТОГ</div>
                                <div className="text-right text-blue-600 font-semibold">{o.total}</div>
                            </div>

                            <div className="mt-3 border-t pt-3 flex items-center justify-start">
                                <button className="text-sm text-blue-600 font-medium">Просмотр заказа</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex justify-center">
                    <nav className="flex items-center gap-3">
                        <button className="w-10 h-10 rounded-md border text-gray-600">←</button>
                        <button className="w-10 h-10 rounded-md bg-black text-white">1</button>
                        <button className="w-10 h-10 rounded-md border text-gray-600">2</button>
                        <button className="w-10 h-10 rounded-md border text-gray-600">3</button>
                        <button className="w-10 h-10 rounded-md border text-gray-600">→</button>
                    </nav>
                </div>
            </div>

            <div className="hidden md:flex lg:hidden mt-6 justify-center">
                <nav className="flex items-center gap-3">
                    <button className="px-3 py-2 rounded-md border text-gray-600">←</button>
                    <button className="px-3 py-2 rounded-md bg-black text-white">1</button>
                    <button className="px-3 py-2 rounded-md border text-gray-600">2</button>
                    <button className="px-3 py-2 rounded-md border text-gray-600">3</button>
                    <button className="px-3 py-2 rounded-md border text-gray-600">→</button>
                </nav>
            </div>


            <div className="overflow-x-auto hidden lg:block">
                <table className="w-full text-left text-sm">
                    <thead>
                        <tr className="text-xs text-gray-500 border-b">
                            <th className="py-4 px-6 w-1/5">НОМЕР</th>
                            <th className="py-4 px-6 w-1/5">ДАТА</th>
                            <th className="py-4 px-6 w-1/5">СТАТУС</th>
                            <th className="py-4 px-6 text-right w-1/5">ИТОГО</th>
                            <th className="py-4 px-6 w-1/5" />
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((o, i) => (
                            <tr key={`desktop-${o.id}-${i}`} className="border-b last:border-b-0 hover:bg-gray-50">
                                <td className="py-5 px-6 text-gray-800 font-semibold">{o.id}</td>
                                <td className="py-5 px-6 text-gray-500">{o.date}</td>
                                <td className="py-5 px-6">
                                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white ${statusClasses(o.status)}`}>
                                        <span className={`w-2 h-2 rounded-full ${o.status === 'Выполнен' ? 'bg-green-500' : o.status === 'Отменён' ? 'bg-red-500' : 'bg-orange-400'}`} />
                                        {o.status}
                                    </span>
                                </td>
                                <td className="py-5 px-6 text-right text-blue-600 font-semibold">{o.total}</td>
                                <td className="py-5 px-6 text-right">
                                    <button aria-label="view" className="w-10 h-10 inline-flex items-center justify-center bg-gray-50 border border-gray-100 rounded-md hover:bg-gray-100">›</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="hidden lg:flex mt-6 justify-center">
                <nav className="flex items-center gap-3">
                    <button className="px-3 py-2 rounded-md border text-gray-600">←</button>
                    <button className="px-3 py-2 rounded-md bg-black text-white">1</button>
                    <button className="px-3 py-2 rounded-md border text-gray-600">2</button>
                    <button className="px-3 py-2 rounded-md border text-gray-600">3</button>
                    <button className="px-3 py-2 rounded-md border text-gray-600">→</button>
                </nav>
            </div>
        </div>
    );
}

export default ProfileOrderHistory;
