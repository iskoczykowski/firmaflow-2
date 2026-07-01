import { MeasureElement, MeasureField } from "../types";

class MeasureService {
  private elements: MeasureElement[] = [];

  getAll(): MeasureElement[] {
    return this.elements;
  }

  getByOrderId(orderId: string): MeasureElement[] {
    return this.elements.filter((item) => item.orderId === orderId);
  }

  getById(id: string): MeasureElement | undefined {
    return this.elements.find((item) => item.id === id);
  }

  add(element: MeasureElement) {
    this.elements.push(element);
  }

  update(element: MeasureElement) {
    const index = this.elements.findIndex((item) => item.id === element.id);

    if (index >= 0) {
      this.elements[index] = element;
    }
  }

  delete(id: string) {
    this.elements = this.elements.filter((item) => item.id !== id);
  }

  updateMeasurement(id: string, field: MeasureField, value: number) {
    const item = this.getById(id);

    if (!item) return;

    item.measurements[field] = value;
    item.updatedAt = new Date().toISOString();

    this.update(item);
  }

  addPhoto(id: string, photoUri: string) {
    const item = this.getById(id);

    if (!item) return;

    item.photos.push(photoUri);
    item.updatedAt = new Date().toISOString();

    this.update(item);
  }

  createEmptyElement(orderId: string, number: number): MeasureElement {
    const now = new Date().toISOString();

    return {
      id: `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      orderId,
      number,
      room: "Raum",
      name: `Fenster ${number}`,
      windowType: "unknown",
      wings: 1,
      rollerShutter: false,
      windowSill: false,
      insectScreen: false,
      measurements: {
        width: 0,
        height: 0,
        depth: 0,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        diagonal1: 0,
        diagonal2: 0,
      },
      photos: [],
      createdAt: now,
      updatedAt: now,
    };
  }
}

export default new MeasureService();
