import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.profile}
        source={{
          uri: 'https://i.pinimg.com/736x/b7/f0/d0/b7f0d074cd96fa5d265156958ba458e6.jpg',
        }}></Image>
      <Text style={styles.title}>Kagura</Text>
      <Text style={styles.occupation}>1/3 do Yorozuya</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B2C3D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 30,
  },
  title: {
    paddingTop: 10,
    fontSize: 35,
    color: '#F1E4C7',
  },
  occupation: {
    paddingTop: 5,
    fontSize: 20,
    paddingBottom: 15,
    color: '#F1E4C7',
  },
});
