import { Briefcase, Edit2, MapPin, Heart, Lock, LogOut } from "lucide-react"; // Importing icons for the config array

export const profileTabs = [
    { key: 'orders', label: 'МОИ ЗАКАЗЫ', icon: Briefcase, active: true },
    { key: 'profile', label: 'ИЗМЕНИТЬ ПРОФИЛЬ', icon: Edit2 },
    { key: 'address', label: 'АДРЕС ДОСТАВКИ', icon: MapPin },
    { key: 'fav', label: 'ИЗБРАННЫЕ ТОВАРЫ', icon: Heart, badge: 3 },
    { key: 'pass', label: 'СМЕНИТЬ ПАРОЛЬ', icon: Lock },
    { key: 'logout', label: 'ВЫЙТИ', icon: LogOut },
];
