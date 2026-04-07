import React from "react";

import { useEffect, useState } from 'react';
import { StyleSheet ,Text, View, Image, ScrollView } from "react-native"
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { HomeProps, HeaderHomeProps, BodyHomeProps} from "./types";
import PlacesCard from "../components/places";
import { getTimeOfDay } from "../functions";

import { fetchAPI } from "../fetch";

export default function Home(props: HomeProps) {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <HeaderHome {...props}/>
                <BodyHome {...props}/>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

function HeaderHome(props: HeaderHomeProps){
    return (
        <View style={headerStyles.container}>
            <Image source={getTimeOfDay() === "day" ? { uri: props.image_day } : getTimeOfDay() === "afternoon" ? { uri: props.image_afternoon } : { uri: props.image_night }} style={headerStyles.image} />
            <View style={headerStyles.overlay}/>
            <View style={headerStyles.texto}>
                <Text style={headerStyles.title}>{props.title}</Text>
                <Text style={headerStyles.subtitle}>{props.subtitle}</Text>
            </View>
        </View>
    );
}

function BodyHome(props: BodyHomeProps) {
    const [places, setPlaces] = useState([]);
    
    // ENVIAR DATA PARA FILTRAR EN BACKEND
    useEffect(() => {
        const fetchData = async () => {
            fetchAPI({ url: 'Places', method: 'GET' })
            .then(response => { setPlaces(response); })
        };

        fetchData();
    }, []);

    return (
        <View style={bodyStyles.container}>
            <View style={bodyStyles.container2}>
                <View style={bodyStyles.headerSearch}>
                    <Text style={bodyStyles.text}>Joyas {'\n'}escondidas</Text>
                    <Text style={bodyStyles.text}>Filtros</Text>
                </View>
                <ScrollView
                    style={bodyStyles.headerBody}
                    contentContainerStyle={bodyStyles.headerBodyContent}
                    showsVerticalScrollIndicator={false}
                >
                    {places.map((place: any) => (
                        <View key={place.id} style={bodyStyles.cardItem}>
                            <PlacesCard 
                                title={place.name}
                                subtitle={place.hood}
                                image={getTimeOfDay() === "day" ? place.image_day : getTimeOfDay() === "afternoon" ? place.image_afternoon : place.image_night}
                                score={place.score}
                                description={place.description}
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

const headerStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        top: 0,
        left: 0,
        alignItems: 'center'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 35, 71, 0.4)' // filtro oscuro
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    texto:{
        position: 'absolute',
        top: '20%'
    },
    title: {
        color: '#fff',
        fontSize: 48,
        fontWeight: 'bold',
        zIndex: 1,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    subtitle: {
        color: '#fff',
        fontSize: 18,
        zIndex: 1,
        textShadowColor: 'rgba(0, 0, 0, 0.5)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    }
});

const bodyStyles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: -24,
        alignSelf: 'center',
        width: '95%',
        backgroundColor: 'rgba(94, 120, 161, 0.99)',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: 'center',
        padding: 20
    },
    container2: {
        flex: 1,
        width: '100%',
        top: 0,
        left: 0
    },
    headerSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 16,
    },
    text: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'left'
    },
    headerBody: {
        flex: 1,
        width: '100%',
        top: 0,
        left: 0
    },
    headerBodyContent: {
        paddingBottom: 24,
    },
    cardItem: {
        marginBottom: 16,
    }
});