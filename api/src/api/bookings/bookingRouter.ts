import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import express, { type Router } from "express";
import { z } from "zod";

import { createApiResponse } from "@/api-docs/openAPIResponseBuilders";
import { GetBookingSchema, BookingSchema } from "@/api/bookings/bookingModel";
import { validateRequest } from "@/common/utils/httpHandlers";
import { bookingController } from "./bookingController";

export const bookingRegistry = new OpenAPIRegistry();
export const bookingRouter: Router = express.Router();

bookingRegistry.register("Booking", BookingSchema);

bookingRegistry.registerPath({
  method: "get",
  path: "/users",
  tags: ["User"],
  responses: createApiResponse(z.array(BookingSchema), "Success"),
});

bookingRouter.get("/", bookingController.getBookings);

bookingRegistry.registerPath({
  method: "get",
  path: "/bookings/{id}",
  tags: ["Booking"],
  request: { params: GetBookingSchema.shape.params },
  responses: createApiResponse(BookingSchema, "Success"),
});

bookingRouter.get("/:id", validateRequest(GetBookingSchema), bookingController.getBooking);
