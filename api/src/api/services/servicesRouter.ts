import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";

import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { GetBookingSchema, BookingSchema } from "@/api/bookings/bookingModel";
import { validateRequest } from "@/common/utils/httpHandlers";
import { servicesController } from "./servicesController";

export const servicesRegistry = new OpenAPIRegistry();
export const servicesRouter: Router = express.Router();

servicesRegistry.register("Booking", BookingSchema);

servicesRegistry.registerPath({
  method: "get",
  path: "/users",
  tags: ["User"],
  responses: createApiResponse(z.array(BookingSchema), "Success"),
});

servicesRouter.get("/", servicesController.getServices);

servicesRegistry.registerPath({
  method: "get",
  path: "/bookings/{id}",
  tags: ["Booking"],
  request: { params: GetBookingSchema.shape.params },
  responses: createApiResponse(BookingSchema, "Success"),
});

servicesRouter.get("/:id", validateRequest(GetBookingSchema), servicesController.getService);
