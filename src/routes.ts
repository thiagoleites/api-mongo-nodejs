import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomerServiceController } from "./controllers/ListCustomerServiceController";
import { DeleteCustomerServiceController } from "./controllers/DeleteCustomerServiceController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
  fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
    return { hello: "world" };
  });

  fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(request, reply)
  })

  fastify.get("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomerServiceController().handle(request, reply)
  })

  fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerServiceController().handle(request, reply)
  })

}