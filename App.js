import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image, SafeAreaView } from 'react-native';
import Navbar from './components/navbar.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView>
        <Image
          style={styles.image}
          source={require('./images/logo_blanco.png')}
        />
        <Text style={styles.text}>Inspiradas en la sucursal del cielo</Text>
      </SafeAreaView>
      <View style={styles.navbar}><Navbar/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#300240',
    alignItems: 'center'
  },
  image: {
    height: 100,
    width: 400,
    resizeMode: 'stretch'
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20
  },
  navbar: {
    position: 'absolute',
    bottom: 50
  }
});