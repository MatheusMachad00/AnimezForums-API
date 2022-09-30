import { prisma } from "../config/database";
import { TypeNewAnimeData } from "../types/animesTypes";

async function createAnime(animeName: string) {
  /* await prisma.anime.create({ data: {animeName} }) */
  await prisma.$queryRaw`INSERT INTO animes (name) VALUES ${animeName}`;
};

async function findByName(animeName: string) {
  /* const result = await prisma.anime.findFirst({where: animeName}); */
  const result = await prisma.$queryRaw`SELECT * FROM animes WHERE name = ${animeName}`;
  return result;
}

export const animeRepository = {
  createAnime,
  findByName
};
