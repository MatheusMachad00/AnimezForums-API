import { prisma } from "../config/database";
import { TypeNewAnimeData } from "../types/animesTypes";

async function createAnime(animeName: TypeNewAnimeData) {
  await prisma.anime.create({ data: animeName })
};

async function findByName(animeName: TypeNewAnimeData) {
  const result = await prisma.anime.findFirst({ where: animeName });
  return result;
}

export const animeRepository = {
  createAnime,
  findByName
};
