import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function Main() {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.die@email.com",
      avatarUrl: "https://github.com/DiegoSousaSilva.png",
    },
  });
  const bet = await prisma.bet.create({
    data: {
      title: "Example Bet",
      code: "BOL123",
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-26T20:00:00.201Z",
      firstTeamCounryCode: "DE",
      secondTeamCounryCode: "BR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-24T20:13:00.201Z",
      firstTeamCounryCode: "BR",
      secondTeamCounryCode: "AR",

      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 1,

          participant: {
            connect: {
              userId_betId: {
                userId: user.id,
                betId: bet.id,
              },
            },
          },
        },
      },
    },
  });
}

Main();
