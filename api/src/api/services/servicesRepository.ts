
import type { Service } from "@/api/services/servicesModel";

export const services: Service[] = [
  {
    id: 1,
    name: "Massage",
    createdAt: new Date(),
    rooms: [1,2,3]
  },
  {
    id: 2,
    name: "Reiki",
    createdAt: new Date(),
    rooms: [1,2]
  },
];

export class ServicesRepository {
  async findAllAsync(): Promise<Service[]> {
    return services;
  }

  async findByIdAsync(id: number): Promise<Service | null> {
    return services.find((service) => service.id === id) || null;
  }
}
