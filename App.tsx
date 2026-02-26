import { SafeAreaView, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import GenreSelect from "./components/GenreSelect";
import GameCard from "./components/GameCard";
import { useGamePicker } from "./hooks/useGames";

export default function App() {
  const [genre, setGenre] = useState<string | null>(null);
  const { game, loading, error, pickGame } = useGamePicker();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Random Game Picker</Text>
      <Text style={styles.slogan}>For your random game-picking needs.</Text>
      <Text style={styles.subtext}>Pick as many times as you like. 
        Shown games are sorted into history to avoid getting the same game multiple times.</Text>

      <GenreSelect selected={genre} onSelect={setGenre} />

      <Pressable
        style={styles.pickButton}
        onPress={() => genre && pickGame(genre)}
      >
        <Text style={styles.pickText}>Pick Random Game</Text>
      </Pressable>

      {loading && <Text style={styles.loadingText}>Loading...</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}

      <GameCard game={game} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e2c4e",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
      color: "#9ea0ff"
  },
  slogan: {
    fontSize: 16,
    color: "#9ea0ff",
    marginBottom: 30,
  },
  subtext: {
    fontSize: 14,
    color: "#9ea0ff",
    marginBottom: 30,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  pickButton: {
    backgroundColor: "#9ea0ff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  pickText: {
    color: "#1e2c4e",
    fontWeight: "bold",
  },
  loadingText: {
    color: "#9ea0ff",
    marginBottom: 20,
  },
  errorText: {
    color: "#ff4d4d",
    marginBottom: 20,
  },
});
