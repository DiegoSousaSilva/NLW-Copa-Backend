import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { z } from "zod";
import ShortUniqueId from "short-unique-id";

export async function betRoutes(fastify: FastifyInstance) {
  fastify.get("/bets/count", async () => {
    const count = await prisma.bet.count();
    return { count };
  });

  fastify.post("/bets", async (request, reply) => {
    const createbetBody = z.object({
      title: z.string(),
    });
    const { title } = createbetBody.parse(request.body);
    const generate = new ShortUniqueId({ length: 6 });
    const code = String(generate()).toUpperCase();

    await prisma.bet.create({
      data: {
        title,
        code,
      },
    });
    return reply.status(201).send({ code });
  });
}
