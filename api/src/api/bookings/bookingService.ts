import { StatusCodes } from "http-status-codes";

import type { Booking } from "@/api/bookings/bookingModel";
import { BookingRepository } from "@/api/bookings/bookingRepository";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";


export class BookingService {
  private bookingRepository: BookingRepository;

  constructor(repository: BookingRepository = new BookingRepository()) {
    this.bookingRepository = repository;
  }

  // Retrieves all users from the database
  async findAll(): Promise<ServiceResponse<Booking[] | null>> {
    try {
      const bookings = await this.bookingRepository.findAllAsync();
      if (!bookings || bookings.length === 0) {
        return ServiceResponse.failure("No Bookings found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<Booking[]>("Bookings found", bookings);
    } catch (ex) {
      const errorMessage = `Error finding all bookigs: $${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while retrieving bookings.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Retrieves a single user by their ID
  async findById(id: number): Promise<ServiceResponse<Booking | null>> {
    try {
      const booking = await this.bookingRepository.findByIdAsync(id);
      if (!booking) {
        return ServiceResponse.failure("Booking not found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<Booking>("Booking found", booking);
    } catch (ex) {
      const errorMessage = `Error finding booking with id ${id}:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure("An error occurred while finding booking.", null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export const bookingService = new BookingService();
