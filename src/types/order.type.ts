export type OrderStatus = 'Ожидается' | 'Выполнен' | 'Отменён' |  "Обработка";

export interface Order {
    id: string;
    date: string;
    status: OrderStatus;
    total: string;
}