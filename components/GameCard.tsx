import { View, Text, Image, StyleSheet } from "react-native";
import { Game } from "../types/Game";

type Props = {
  game: Game | null;
};

export default function GameCard({ game }: Props) {
  if (!game) return null;

  return (
    <View style={styles.card}>
      <Image source={{ uri: game.image ?? undefined }} style={styles.image} />
      <Text style={styles.title}>{game.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#9ea0ff",
    padding: 16,
    borderRadius: 12,
    elevation: 3,
    width: "90%",
  },
  image: {
    width: 300,
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
