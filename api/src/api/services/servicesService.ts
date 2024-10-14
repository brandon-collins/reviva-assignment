import { StatusCodes } from "http-status-codes";

import type { Service } from "@/api/services/servicesModel";
import { ServicesRepository } from "@/api/services/servicesRepository";
import { ServiceResponse } from "@/common/models/serviceResponse";
import { logger } from "@/server";


export class ServicesService {
  private servicesRepository: ServicesRepository;

  constructor(repository: ServicesRepository = new ServicesRepository()) {
    this.servicesRepository = repository;
  }

  // Retrieves all users from the database
  async findAll(): Promise<ServiceResponse<Service[] | null>> {
    try {
      const services = await this.servicesRepository.findAllAsync();
      if (!services || services.length === 0) {
        return ServiceResponse.failure("No Services found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<Service[]>("Services found", services);
    } catch (ex) {
      const errorMessage = `Error finding all services: $${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure(
        "An error occurred while retrieving Services.",
        null,
        StatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // Retrieves a single user by their ID
  async findById(id: number): Promise<ServiceResponse<Service | null>> {
    try {
      const service = await this.servicesRepository.findByIdAsync(id);
      if (!service) {
        return ServiceResponse.failure("Service not found", null, StatusCodes.NOT_FOUND);
      }
      return ServiceResponse.success<Service>("Service found", service);
    } catch (ex) {
      const errorMessage = `Error finding service with id ${id}:, ${(ex as Error).message}`;
      logger.error(errorMessage);
      return ServiceResponse.failure("An error occurred while finding service.", null, StatusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export const servicesService = new ServicesService();
