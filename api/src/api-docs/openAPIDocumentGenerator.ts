import { OpenAPIRegistry, OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";

import { userRegistry } from "@/api/user/userRouter";
import { bookingRegistry } from "@/api/bookings/bookingRouter";
import { servicesRegistry } from "@/api/services/servicesRouter";

export function generateOpenAPIDocument() {
  const registry = new OpenAPIRegistry([userRegistry, bookingRegistry, servicesRegistry]);
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      version: "1.0.0",
      title: "Swagger API",
    },
    externalDocs: {
      description: "View the raw OpenAPI Specification in JSON format",
      url: "/swagger.json",
    },
  });
}
