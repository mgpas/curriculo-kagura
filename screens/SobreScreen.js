import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';

const sobreDados = [
  '• Possui anos de experiencia como faz-tudo;',
  '• Comida favorita é sukonbu;',
  '• Possui instinto assasino Yato (mesmo que não queira);',
  '• Tem um cachorro gigante chamado Sadaharu;',
  '• Gosta de ouvir musica estilo Enka;',
  '• Já salvou a Terra (algumas vezes).',
];

export default function SobreScreen() {
  return (
    <View style={styles.containerSobre}>
      <Image style={styles.sobreImg}
        source={{
          uri: 'https://i.pinimg.com/564x/25/2f/e0/252fe0d2f6048533373c1a1f55044e77.jpg',
        }}></Image>
                 <FlatList style={styles.lista}
         data={sobreDados}
         keyExtractor={(item, index) => index.toString()}
         renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
       />
     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerSobre: {
    paddingTop: 150,
    flex: 1,
    backgroundColor: '#2B2C3D',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  sobreImg: {
    width: 150,
    height: 150,
    borderRadius: 30,
  },
  lista: {
    paddingTop: 20,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: '#F1E4C7',
    paddingBottom: 5,
  },
});
