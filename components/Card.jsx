import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function Card() {
    return (
        <View style={styles.card}>
            <View style={styles.contenedor}>
                <Image style={styles.imagen} source={require('../images/sal_personal.png')} />
                <View style={styles.textoContenedor}>
                    <Text style={styles.titulo}>Salchipapa Personal</Text>
                    <Text style={styles.descripcion}>
                        Salchipapa tradicional de la casa con salchicha, chorizo premium, papa amarilla, papa ripio y salsas de la casa
                    </Text>
                </View>
            </View>
                <Button title="añadir a carrito" onPress={() => alert('Pedido tomado!')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#383838',
        margin: 10,
        borderRadius: 10,
        gap: 10
    },
    contenedor: {
        flexDirection: 'row', // Elementos en fila
        padding: 10,
        alignItems: 'center', // Centra la imagen y el texto verticalmente
    },
    textoContenedor: {
        flex: 1, // Toma el espacio disponible
        marginLeft: 10, // Espacio entre la imagen y el texto
    },
    titulo: {
        color: 'white',
        fontSize: 26,
        fontWeight: '700',
        letterSpacing: 0.5,
        marginBottom: 5, // Espacio entre título y descripción
    },
    descripcion: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
    },
    imagen: {
        height: 100,
        width: 100,
        resizeMode: 'cover', // Ajusta la imagen para que se vea bien
        borderRadius: 10, // Hace que la imagen tenga bordes redondeados
    },
});
