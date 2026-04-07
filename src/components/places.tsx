import React from "react";
import { StyleSheet ,Text, View, Image } from "react-native"

import ScoreBox from "./scoreBox";
import { PlacesCardProps } from "./types";

export default function PlacesCard(props: PlacesCardProps) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.image }} style={styles.image} />
            <View style={styles.overlay}/>
            <View style={styles.headerCard}>
                <View>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.subtitle}>{props.subtitle}</Text>
                </View>
                <View>
                    <ScoreBox score={props.score} />
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.description}>{props.description}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    image: {
        position: 'absolute',
        flex: 1,
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    overlay: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        borderRadius: 10
    },
    headerCard: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subtitle: {
        color: '#6DBD6A',
        fontWeight: 'bold',
        fontSize: 14,
    },
    descriptionContainer: {
        position: 'relative',
        width: '100%',
        padding: 20,
        marginTop: 40,
    },
    description: {
        color: '#fff',
    }
});