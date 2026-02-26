import { Game } from "../types/Game";

const API_KEY = process.env.EXPO_PUBLIC_RAWG_API_KEY;

export async function fetchGamesByGenre(genre: string): Promise<Game[]> {
  const url = `https://api.rawg.io/api/games?key=${API_KEY}&genres=${genre}&page_size=20`;

  const response = await fetch(url);
  const json = await response.json();


  const games: Game[] = json.results.map((g: any) => ({
    id: g.id,
    name: g.name,
    image: g.background_image,
  }));

  return games;
}
