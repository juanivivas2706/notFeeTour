import react from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Modal } from 'react-native';
import { useState } from 'react';
import ModalUbicaciones from './modalUbicaciones';

interface CartaProps {
    title: string;
    subtitle: string;
    image: string;
    puntaje: number;
    descripcion: string;
    historia: string;
}

export default function CartaUbicacion(props: CartaProps) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={CartaStyles.container} onTouchEnd={() => setModalVisible(true)}>
            <Image source={ { uri: props.image } } style={CartaStyles.image} />
            <View style={CartaStyles.overlay} />
            <Text style={CartaStyles.title}>{props.title}</Text>
            <Text style={CartaStyles.subtitle}>{props.subtitle}</Text>

            <ModalUbicaciones 
                visible={modalVisible} 
                close={() => setModalVisible(false)} 
                title={props.title}
                image={props.image}
                puntaje={props.puntaje}
                descripcion={props.descripcion}
                historia={props.historia}
            />
        </View>
    );
}

const CartaStyles = StyleSheet.create({
    container: {
        borderRadius: 10,
        width: '90%',
        minHeight: 80,
        maxHeight: 100,
        position: 'relative',
        overflow: 'hidden',
        margin: 5
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
    },
    title: {
        position: 'absolute',
        top: 15,
        left: 12,
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.4)', // filtro oscuro
    },
    subtitle: {
        position: 'absolute',
        top: 55,
        left: 12,
        color: '#fff',
        fontSize: 16,
    }
});