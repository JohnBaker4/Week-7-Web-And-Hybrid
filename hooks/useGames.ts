import { useState } from "react";
import { Game } from "../types/Game";
import { fetchGamesByGenre } from "../services/gameApi";

export function useGamePicker() {
  const [game, setGame] = useState<Game | null>(null);
  const [history, setHistory] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function pickGame(genre: string) {
    try {
      setLoading(true);
      setError(null);

      const games = await fetchGamesByGenre(genre);

      const unseen = games.filter(g => !history.includes(g.id));

      if (unseen.length === 0) {
        setError("No more new games in this genre.");
        return;
      }

      
      const random = unseen[Math.floor(Math.random() * unseen.length)];

      setGame(random);
      console.log(games);
      setHistory(prev => [...prev, random.id]);

    } catch {
      setError("Failed to fetch games.");
    } finally {
      setLoading(false);
    }
  }

  return { game, loading, error, pickGame };
}
