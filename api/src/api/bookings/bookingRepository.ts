
import type { Booking } from "@/api/bookings/bookingModel";

export const bookings: Booking[] = [
  {
    id: 1,
    name: "Brandon C",
    email: "brandon@example.com",
    room: 1,
    createdAt: new Date(),
    appointmentTime: new Date(),
  },
];

export class BookingRepository {
  async findAllAsync(): Promise<Booking[]> {
    return bookings;
  }

  async findByIdAsync(id: number): Promise<Booking | null> {
    return bookings.find((booking) => booking.id === id) || null;
  }
}
