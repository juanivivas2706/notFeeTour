import React, { useState, useEffect } from "react";
import { Modal, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { FilterBoxProps, FilterModalProps } from "./types";
import ButtonGeneric from "./buttonGeneric";

export function FilterBox(props: FilterBoxProps) {
    return (
        <Pressable style={styles.filterBox} onPress={props.onPress}>
            <FontAwesome name="filter" size={24} color="white" />
        </Pressable>
    );
}

export function FilterModal(props: FilterModalProps) {
    const filters = props.filters;
    const categories = props.categories;

    const setFilters = props.setFilters;
    const setCategories = props.setCategories;

    return (
        <Modal
            animationType="slide"
            transparent
            visible={props.visible}
            onRequestClose={props.onRequestClose}
        >
            <Pressable style={styles.modalBackdrop} onPress={props.onRequestClose}>
                <Pressable style={styles.modalSheet} onPress={() => {}}>
                    <Text style={styles.title}>Filtros</Text>

                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.modalContent}
                    >
                        {Object.keys(filters).map((filter: string) => (
                            <ButtonGeneric 
                                key={filter}
                                text={filter.charAt(0).toUpperCase() + filter.slice(1)}
                                width={120}
                                height={50}
                                state={filters[filter as keyof typeof filters] as boolean}
                                arrow={true}
                                changeState={() => setFilters(prev => ({ ...prev, [filter]: !prev[filter as keyof typeof filters] }))}
                            />
                        ))}
                    </ScrollView>

                    <Text style={[styles.title, { fontSize: 18 }]}>Categorias</Text>
                    
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.modalContent2}
                    >
                        {Object.keys(categories).map((category: string) => (
                            <ButtonGeneric 
                                key={category}
                                text={category}
                                width={150}
                                height={50}
                                arrow={false}
                                state={categories[category as keyof typeof categories] as boolean}
                                changeState={() => setCategories(prev => ({ ...prev, [category]: !prev[category as keyof typeof categories] }))}
                            />
                        ))}
                    </ScrollView>
                </Pressable>
            </Pressable>
        </Modal>
    );
}

const styles = StyleSheet.create({
    filterBox: {
        backgroundColor: '#657A85',
        width: 50,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    modalBackdrop: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
    },
    modalSheet: {
        height: '40%',
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 16,
    },
    modalContent: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'flex-start',
        paddingRight: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 20,
        textAlign: 'left',
    },
    modalContent2: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'flex-start',
        paddingRight: 20,
    }
});
