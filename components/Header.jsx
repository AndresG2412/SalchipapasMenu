import { View, Text, StyleSheet, Image } from "react-native";

export default function Header() {
    return(
        <>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../images/logo_blanco.png')} />
                <Text style={styles.text}>Inspiradas en la sucursal del cielo</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        marginBottom: 30
    },
    text: {
        color: "white",
        textAlign: "center",
        fontSize: 20
    },
    image: {
      height: 80,
      width: 400,
      resizeMode: 'stretch'
    }
});