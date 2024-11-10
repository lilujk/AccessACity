import { useEvents } from '@/hooks/useEvents';
import React, { useState } from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import EventOnDisplay from './EventOnDisplay';
import { SafeAreaView } from 'react-native-safe-area-context';

const EventPagePopup = ({city}: {city: string }) => {
    const events = useEvents();

    let cityEvents = [];
    for (let i = 0; i<events.length; i++) {
        if (events[i].eventcity === city) {
            cityEvents.push(String(i));
        }
    }

    return (
        <GestureHandlerRootView style={styles.overlay}>
                <View style={styles.container}>
                    <Text style={styles.title}>Events in {city}!</Text>
                    <View style={styles.searchbar}>
                        <Text>Search for Events by Tag...</Text>
                        <Text>&#128269;</Text>
                    </View>
                    <ScrollView>
                        {cityEvents.map((item, index) => (
                            <View key={index}>
                                <EventOnDisplay eventIndex={item} />
                            </View>
                        ))}
                    </ScrollView>
                </View>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    container: {
        paddingTop: 20,
        backgroundColor: 'white',
    },
    message: {
      fontSize: 18,
      marginBottom: 20,
      marginTop: 50,
    },
    hr: {
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
        marginVertical: 20,
    },
    sameLine: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    sameLineOpp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        padding: 10,
        fontSize: 36,
        marginTop: 10,
        marginBottom: 10,
        color: 'blue',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
    },
    backArrow: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 10,
    },
    searchbar: {
        margin: 10,
        padding: 20,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default EventPagePopup;