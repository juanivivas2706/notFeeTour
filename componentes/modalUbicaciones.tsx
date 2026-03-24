import react from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Modal } from 'react-native';

interface modalUbicacionesProps {
    close: () => void;
    visible: boolean;
    title: string;
    image: string;
    puntaje: number;
    descripcion: string;
    historia: string;
}

export default function ModalUbicaciones(props : modalUbicacionesProps) {
    return (
        <Modal visible={props.visible} onRequestClose={props.close} animationType='slide' presentationStyle='pageSheet'>
            <View>
                <Image source={ { uri: props.image } } style={styles.image} />
                <Text style={styles.titulo}>{props.title}</Text>
                <Text style={styles.puntaje}> <FontAwesome name="star" size={18} color="gold" /> {props.puntaje}</Text>
            </View>
            <ScrollView
                style={styles.cardsScroll}
                contentContainerStyle={styles.cardsContent}
                showsVerticalScrollIndicator={false}
            >
            <View style={styles.descripcion}>
                <Text>{props.descripcion}</Text>
            </View>
            <View style={styles.historia}>
                <Text style={styles.historiaTitulo}>Historia</Text>
                <Text>{props.historia}</Text>
            </View>
            </ScrollView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    titulo : {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
        left: 20,
    },
    puntaje : {
        fontSize: 18,
        left: 20,
    },
    descripcion : {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        borderTopColor: '#ccc',
        borderTopWidth: 1,

        paddingTop: 10,
        paddingBottom: 10,
        margin: 20,
        fontSize: 16,
    },
    historia : {
        marginLeft: 20,
        marginRight: 20,
    },
    historiaTitulo : {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    cardsScroll: {
      width: '100%',
      flex: 1,
    },
    cardsContent: {
      paddingVertical: 8,
      alignItems: 'center',
    },
});