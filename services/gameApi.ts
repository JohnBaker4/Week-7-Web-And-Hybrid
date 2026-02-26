import { Game } from "../types/Game";

const API_KEY = process.env.EXPO_PUBLIC_RAWG_API_KEY;

export async function fetchGamesByGenre(genre: string): Promise<Game[]> {
    const url = `https://api.rawg.io/api/games?key=${API_KEY}&genres=${genre}&page_size=20`;

  console.log("Requesting:", url);
  console.log("KEY:", process.env.EXPO_PUBLIC_RAWG_API_KEY);


  const response = await fetch(url);
  const json = await response.json();

  return json.results;
}
