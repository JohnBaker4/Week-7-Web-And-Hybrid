import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useGamePicker } from './hooks/useGames';

export default function App() {
  const { game, loading, error, pickGame } = useGamePicker();


  return (
    <View style={styles.container}>
      <Pressable onPress={() => pickGame("action")} style={styles.button}>
        <Text style={styles.buttonText}>Pick a game</Text>
      </Pressable>
      {loading && <Text>Loading...</Text>}
      {game && <Text>{game.name}</Text>}
      {error && <Text style={{ color: 'red' }}>{error}</Text>}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },


});
