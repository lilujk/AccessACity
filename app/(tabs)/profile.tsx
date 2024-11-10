import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, Text, View, Button} from 'react-native';
import React from 'react';
import { useEvents } from '@/hooks/useEvents';
import { useUser } from '@/hooks/useUser';
import EventOnDisplay from '@/components/EventOnDisplay';

export default function profile() {
    const events = useEvents();
    const user = useUser();

    let savedEventsIndex = [];
    for (let i=0; i<user[0].savedEvents.length; i++) {
        for (let j=0; j<events.length; j++) {
            if (events[j].eventname === user[0].savedEvents[i].name) {
                savedEventsIndex.push(String(j));
            }
        }
    }

    let rsvpEventsIndex = [];
    for (let i=0; i<user[0].rsvpEvents.length; i++) {
        for (let j=0; j<events.length; j++) {
            if (events[j].eventname === user[0].rsvpEvents[i].name) {
                rsvpEventsIndex.push(String(j));
            }
        }
    }

    return (
    <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
            <View style={styles.profileHeader} >
                <Image style={styles.profileIcon} source={require('../../assets/images/profileIcon.png')}/>
                <Text>Welcome {user[0].username}!</Text>
            </View>
            <View>
                <Text>Contact: {user[0].contact}</Text>
                <Button title="Update Contact"/>

                <View style={styles.preferedAccessibility}>
                    <Text>Prefered Accessibility: </Text>
                    <Text>          Wheelchair - {user[0].preferedAccessibility.wheelchair}</Text>
                    <Text>          Sight - {user[0].preferedAccessibility.sight}</Text>
                    <Text>          Sound - {user[0].preferedAccessibility.sound}</Text>
                    <Text>          Touch - {user[0].preferedAccessibility.touch}</Text>
                    <Text>          Smell - {user[0].preferedAccessibility.smell}</Text>
                </View>
                <Button title="Update Prefered Accessibility"/>

                <Text>Saved Events</Text>
                <ScrollView>
                    {savedEventsIndex.map((item, index) => (
                        <View key={index}>
                            <EventOnDisplay eventIndex={item}/>
                        </View>
                    ))}
                </ScrollView>

                <Text>RSVPed Events</Text>
                <ScrollView>
                    {rsvpEventsIndex.map((item, index) => (
                        <View key={index}>
                            <EventOnDisplay eventIndex={item}/>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </ScrollView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    profileIcon: {
        width: 50,
        height: 50,
    },
    profileHeader: {
        display: 'flex',
        flexDirection: 'row',
    },
    preferedAccessibility: {
        display: 'flex',
        flexDirection: 'column',
    },
    scrollContainer: {
        padding: 5,
        textAlign: 'center',
    }
});