import { Anime } from "@prisma/client";

export type TypeNewAnimeData = Omit<Anime, 'id'>;