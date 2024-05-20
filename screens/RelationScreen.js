import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function RelationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Image
          style={styles.profile}
          source={{
            uri: 'https://i.ytimg.com/vi/P4Vg0Uk1i9c/hqdefault.jpg',
          }}
        />
        <Text style={styles.title}>Umibozu - Pai</Text>
        <Image
          style={styles.profile}
          source={{
            uri: 'https://i.pinimg.com/736x/af/43/64/af436447dfa64e49d222afe1f392e279.jpg',
          }}
        />
        <Text style={styles.title}>Kouka - Mãe</Text>
        <Image
          style={styles.profile}
          source={{
            uri: 'https://static.wikia.nocookie.net/gintama/images/5/52/Kamuiui.png',
          }}
        />
        <Text style={styles.title}>Kamui - Irmão</Text>
      </View>
      <View style={styles.column}>
        <Image
          style={styles.profile}
          source={{
            uri: 'https://cdn.myanimelist.net/s/common/uploaded_files/1442605158-6b9757f9f77a962062083fe66f7b45d3.jpeg',
          }}
        />
        <Text style={styles.title}>Gintoki - Yorozuya</Text>
        <Image
          style={styles.profile}
          source={{
            uri: 'https://pbs.twimg.com/media/FZ9YIqBXoAAajRQ.png',
          }}
        />
        <Text style={styles.title}>Shinpachi - Yorozuya</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Define a direção das colunas
    justifyContent: 'space-between', // Espaçamento entre as colunas
    alignItems: 'center', // Alinha os itens verticalmente
    paddingHorizontal: 16, // Espaçamento horizontal
  },
  column: {
    flex: 1, // Ocupa a mesma quantidade de espaço
    alignItems: 'center', // Alinha os itens verticalmente
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 30,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 20,
    fontSize: 15,
    color: '#F1E4C7',
  },
});
