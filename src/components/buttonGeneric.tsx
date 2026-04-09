import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { ButtonGenericProps } from './types';

export default function ButtonGeneric(props: ButtonGenericProps) {
    const handlePress = () => {
        props.changeState();
    };

    return (
        <Pressable style={[props.state ? styles.stateOn : styles.stateOff, { width: props.width, height: props.height }]} onPress={handlePress}>
            <View style={styles.content}>
                <Text style={[styles.text, props.state ? styles.textOn : styles.textOff]}>{props.text}</Text>
                <Text style={[styles.arrow, props.state ? styles.textOn : styles.textOff]}>{props.state ? '↑' : '↓'}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    stateOff: {
        backgroundColor: '#FFFFFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D8DEE2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    stateOn: {
        backgroundColor: '#6DBD6A',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },
    arrow: {
        fontSize: 16,
        fontWeight: '700',
    },
    textOn: {
        color: '#FFFFFF',
    },
    textOff: {
        color: '#17384A',
    },
});