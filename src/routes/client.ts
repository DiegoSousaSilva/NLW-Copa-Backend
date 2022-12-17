import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";

export async function clientRoutes(fastify: FastifyInstance) {
  fastify.post("/clients/address", async (request, reply) => {
    const createAddressBody = z.object({
      addressLine1: z.string(),
      addressLine2: z.string(),
      AddressType: z.number(),
      cityCode: z.string(),
      cityName: z.string(),
      complement: z.string(),
      country: z.string(),
      neighborhood: z.string(),
      State: z.string(),
      zipCode: z.string(),
    });
    const {
      addressLine1,
      addressLine2,
      AddressType,
      cityCode,
      cityName,
      complement,
      country,
      neighborhood,
      State,
      zipCode,
    } = createAddressBody.parse(request.body);

    let address = {};

    try {
      await prisma.address.create({
        data: {
          addressLine1,
          addressLine2,
          AddressType,
          cityCode,
          cityName,
          complement,
          country,
          neighborhood,
          State,
          zipCode,
        },
      });
    } catch (error) {
      console.log(error);
    }
    return reply.status(201).send({
      addressLine1,
      addressLine2,
      AddressType,
      cityCode,
      cityName,
      complement,
      country,
      neighborhood,
      State,
      zipCode,
    });
  });
}
