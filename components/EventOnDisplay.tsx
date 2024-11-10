import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

interface EventOnDisplayProps {
    eventdate: string;
    eventname: string;
    description: string;
    wheelchair: string;
    sight:  string;
    sound:  string;
    touch: string;
    smell: string;
    cost:  string;
}

const EventOnDisplay: React.FC<EventOnDisplayProps> = ({eventdate, eventname, description, wheelchair, sight, sound, touch, smell, cost}) => {
    console.log(eventname, description, wheelchair, sight, sound, touch, smell, cost);

    let avgSensoryNum = 0;

    if (sight === "Med") {
        avgSensoryNum += 1;
    } else if (sight === "High") {
        avgSensoryNum += 2;
    }

    if (sound === "Med") {
        avgSensoryNum += 1;
    } else if (sound === "High") {
        avgSensoryNum += 2;
    }

    if (touch === "Med") {
        avgSensoryNum += 1;
    } else if (touch === "High") {
        avgSensoryNum += 2;
    }

    if (smell === "Med") {
        avgSensoryNum += 1;
    } else if (smell === "High") {
        avgSensoryNum += 2;
    }

    let avgSensory = "";
    
    if (avgSensoryNum > 6) {
        avgSensory = "High";
    } else if (avgSensoryNum > 3) {
        avgSensory = "Med";
    } else {
        avgSensory = "Low to None";
    }

    const getDescriptionExcerpt = (description: string) => {
        const words = description.split(' ');
        const excerpt = words.slice(0, 10).join(' ');
        return excerpt + "...";
    };

    const descriptionExcerpt = getDescriptionExcerpt(description);

    return (
        <View style={styles.container}>
            <View style={styles.eventContainer}>
                <View style={styles.sameLineOpp}>
                    <Text>{eventdate}</Text>
                    <Text>{cost}</Text>
                </View>
                <Text style={styles.title}>{eventname}</Text>
                <Text>{descriptionExcerpt}</Text>
                <View style={styles.hr}/>
                <View style={styles.sameLine}>
                    <Text>Sensory: {avgSensory}</Text>
                    <Text>Wheelchair: {wheelchair}</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        color: 'white',
    },
    eventContainer: {
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'blue',
        padding: 20,
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
        fontSize: 36,
        marginTop: 10,
        marginBottom: 10,
        color: 'blue',
    }
});

export default EventOnDisplay;


