export interface OrderItem {
    id: number;
    title: string;
    price: number;
    image: string;
  }
  
  export interface DeliveryMethod {
    id: string;
    title: string;
    description?: string;
    address?: string;
  }
  
  export interface PaymentMethod {
    id: string;
    title: string;
    link?: string;
  }
  
  export interface UserData {
    company?: string;
    email: string;
    phone: string;
    comment?: string;
  }
  