import { Order, OrderStatus, Priority } from "../types";
import { orders } from "../database/mockData";

class OrderService {
  private data: Order[] = orders;

  getAll(): Order[] {
    return this.data;
  }

  getById(id: string): Order | undefined {
    return this.data.find((o) => o.id === id);
  }

  getByCustomerId(customerId: string): Order[] {
    return this.data.filter((o) => o.customerId === customerId);
  }

  getByStatus(status: OrderStatus): Order[] {
    return this.data.filter((o) => o.status === status);
  }

  getByPriority(priority: Priority): Order[] {
    return this.data.filter((o) => o.priority === priority);
  }

  getOpen(): Order[] {
    return this.data.filter((o) =>
      ["open", "measure", "offer", "production", "installation"].includes(o.status)
    );
  }

  add(order: Order) {
    this.data.push(order);
  }

  update(order: Order) {
    const index = this.data.findIndex((o) => o.id === order.id);

    if (index >= 0) {
      this.data[index] = order;
    }
  }

  delete(id: string) {
    this.data = this.data.filter((o) => o.id !== id);
  }

  search(text: string): Order[] {
    const q = text.toLowerCase();

    return this.data.filter(
      (o) =>
        o.orderNumber.toLowerCase().includes(q) ||
        o.customerName.toLowerCase().includes(q) ||
        o.address.toLowerCase().includes(q) ||
        o.status.toLowerCase().includes(q)
    );
  }
}

export default new OrderService();
