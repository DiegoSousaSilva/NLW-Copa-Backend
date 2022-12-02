import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { betRoutes } from "./routes/bet";
import { gameRoutes } from "./routes/game";
import { guessRoutes } from "./routes/guess";
import { userRoutes } from "./routes/user";
import { authRoutes } from "./routes/auth";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(jwt, {
    secret: "sousa_diego",
  });

  await fastify.register(authRoutes);
  await fastify.register(betRoutes);
  await fastify.register(guessRoutes);
  await fastify.register(gameRoutes);
  await fastify.register(userRoutes);

  await fastify.listen({ port: 3333 /* host: "0.0.0.0" */ });
}

bootstrap();
