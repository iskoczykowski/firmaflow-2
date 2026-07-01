import { Customer } from "../types";
import { customers } from "../database/mockData";

class CustomerService {
  private data: Customer[] = customers;

  getAll(): Customer[] {
    return this.data;
  }

  getById(id: string): Customer | undefined {
    return this.data.find((c) => c.id === id);
  }

  add(customer: Customer) {
    this.data.push(customer);
  }

  update(customer: Customer) {
    const index = this.data.findIndex((c) => c.id === customer.id);

    if (index >= 0) {
      this.data[index] = customer;
    }
  }

  delete(id: string) {
    this.data = this.data.filter((c) => c.id !== id);
  }

  search(text: string): Customer[] {
    const q = text.toLowerCase();

    return this.data.filter(
      (c) =>
        c.companyName.toLowerCase().includes(q) ||
        c.contactName.toLowerCase().includes(q) ||
        c.city.toLowerCase().includes(q)
    );
  }
}

export default new CustomerService();
