import type { DeliveryMethod, PaymentMethod, OrderItem } from "@/types/orderData.typ";

export const deliveryMethods: DeliveryMethod[] = [
    {
        id: "pickup",
        title: "Самовывоз",
        description: "К вашему приезду заказ будет скомплектован.",
        address: "г. Черкесск, ул. Октябрьская, д.301"
    },
    {
        id: "shop-delivery",
        title: "Доставка магазина",
        description: "Укажите точное время доставки в примечании."
    },
    {
        id: "cdek",
        title: "СДЭК",
        description: "Доставим до ПВЗ или курьером."
    }
];

export const paymentMethods: PaymentMethod[] = [
    { id: "card", title: "Картой на сайте" },
    { id: "cash", title: "Оплата в кассе" },
    { id: "otp", title: "Кредит от ОТП Банка", link: "#" },
    { id: "sber", title: "Покупай со Сбером", link: "#" }
];

export const orderItems: OrderItem[] = [
    {
        id: 1,
        title: "Перфоратор универсальный Wander X645-46 GF 1450W",
        price: 7899,
        image: "../src/assets/images/Wander 1.png"
    },
    {
        id: 2,
        title: "Перфоратор универсальный Wander X645-46 GF 1450W",
        price: 20000,
        image: "../src/assets/images/Wander 2.png"
    },
    {
        id: 3,
        title: "Перфоратор универсальный Wander X645-46 GF 1450W",
        price: 4756,
        image: "../src/assets/images/Wander 3.png"
    },
    {
        id: 4,
        title: "Перфоратор универсальный Wander X645-46 GF 1450W",
        price: 20000,
        image: "../src/assets/images/Wander 4.png"
    }
];
