import { WarehouseItem } from "../types";
import { warehouse } from "../database/mockData";

class WarehouseService {
  private data: WarehouseItem[] = warehouse;

  getAll() {
    return this.data;
  }

  getByProfile(profileNumber: string) {
    return this.data.find(
      (p) => p.profileNumber === profileNumber
    );
  }

  search(text: string) {
    const q = text.toLowerCase();

    return this.data.filter((item) =>
      [
        item.profileNumber,
        item.name,
        item.containerPlace,
        item.outsideColor,
        item.insideColor,
      ]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }

  add(item: WarehouseItem) {
    this.data.push(item);
  }

  update(item: WarehouseItem) {
    const index = this.data.findIndex((x) => x.id === item.id);

    if (index >= 0) {
      this.data[index] = item;
    }
  }

  delete(id: string) {
    this.data = this.data.filter((x) => x.id !== id);
  }
}

export default new WarehouseService();
