import type { Request, RequestHandler, Response } from "express";

import { bookingService } from "@/api/bookings/bookingService";

import { handleServiceResponse } from "@/common/utils/httpHandlers";

class BookingController {
  public getBookings: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = await bookingService.findAll();
    return handleServiceResponse(serviceResponse, res);
  };

  public getBooking: RequestHandler = async (req: Request, res: Response) => {
    const id = Number.parseInt(req.params.id as string, 10);
    const serviceResponse = await bookingService.findById(id);
    return handleServiceResponse(serviceResponse, res);
  };
}

class Providers {
  public getProviders: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = await bookingService.findAll();
    return handleServiceResponse(serviceResponse, res);
  };
}

class Rooms {
  public getRooms: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = await bookingService.findAll();
    return handleServiceResponse(serviceResponse, res);
  };
}

class Services {
  public getServices: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = await bookingService.findAll();
    return handleServiceResponse(serviceResponse, res);
  };
}

class Bookings {
  public getBookings: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = await bookingService.findAll();
    return handleServiceResponse(serviceResponse, res);
  };

  public createBooking: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = await bookingService.findAll();
    return handleServiceResponse(serviceResponse, res);
  };
}


export const bookingController = new BookingController();
