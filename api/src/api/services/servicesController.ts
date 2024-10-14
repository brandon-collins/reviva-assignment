import type { Request, RequestHandler, Response } from "express";

import { servicesService } from "@/api/services/servicesService";

import { handleServiceResponse } from "@/common/utils/httpHandlers";

class ServicesController {
  public getServices: RequestHandler = async (_req: Request, res: Response) => {
    const serviceResponse = await servicesService.findAll();
    return handleServiceResponse(serviceResponse, res);
  };

  public getService: RequestHandler = async (req: Request, res: Response) => {
    const id = Number.parseInt(req.params.id as string, 10);
    const serviceResponse = await servicesService.findById(id);
    return handleServiceResponse(serviceResponse, res);
  };
}

export const servicesController = new ServicesController();
