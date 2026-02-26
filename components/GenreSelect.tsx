import { View, Pressable, Text, StyleSheet } from "react-native";

type Props = {
  selected: string | null;
  onSelect: (genre: string) => void;
};

const GENRES = [
  "action",
  "adventure",
  "rpg",
  "shooter",
  "strategy",
  "sports",
  "indie",
  "horror",
  "puzzle",
  "racing",
  "fighting",
];

export default function GenreSelect({ selected, onSelect }: Props) {
  return (
    <View style={styles.container}>
      {GENRES.map((genre) => (
        <Pressable
          key={genre}
          style={[
            styles.button,
            selected === genre && styles.selected
          ]}
          onPress={() => onSelect(genre)}
        >
          <Text style={styles.text}>{genre.toUpperCase()}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#ddd",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  selected: {
    backgroundColor: "#9ea0ff",
  },
  text: {
    fontWeight: "600",
  },
});
