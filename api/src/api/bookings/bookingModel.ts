import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { commonValidations } from "@/common/utils/commonValidation";

extendZodWithOpenApi(z);

export type Booking = z.infer<typeof BookingSchema>;

export const BookingSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  room: z.number(),
  createdAt: z.date(),
  appointmentTime: z.date()
});

// Input Validation for 'GET users/:id' endpoint
export const GetBookingSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});
