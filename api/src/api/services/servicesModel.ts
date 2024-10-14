import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { z } from "zod";

import { commonValidations } from "@/common/utils/commonValidation";

extendZodWithOpenApi(z);

export type Service = z.infer<typeof ServiceSchema>;

export const ServiceSchema = z.object({
  id: z.number(),
  name: z.string(),
  rooms: z.array(z.number()),
  createdAt: z.date(),
});

// Input Validation for 'GET users/:id' endpoint
export const GetServiceSchema = z.object({
  params: z.object({ id: commonValidations.id }),
});
