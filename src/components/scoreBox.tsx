import React from "react";
import { StyleSheet ,Text, View } from "react-native"

export default function ScoreBox({ score }: { score: number }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Score</Text>
            <Text style={styles.number}>{score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 55,
        backgroundColor: '#1E333C',
        borderRadius: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        color: 'white',
    },
    number: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
});