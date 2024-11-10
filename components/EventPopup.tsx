import { useEvents } from '@/hooks/useEvents';
import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const EventPopup = ({ visible, onClose, eventIndex }: { visible: boolean, onClose: () => void, eventIndex: string }) => {
    const events = useEvents();
    const eventIndexNum = parseInt(eventIndex, 10);
    const username = events[eventIndexNum].username;
    const eventdate = events[eventIndexNum].eventdate;
    const eventname = events[eventIndexNum].eventname;
    const description = events[eventIndexNum].description;
    const eventcity = events[eventIndexNum].eventcity;
    const eventstate = events[eventIndexNum].eventstate;
    const eventtime = events[eventIndexNum].eventtime;
    const tags = events[eventIndexNum].tags;
    const wheelchair = events[eventIndexNum].accessibility.wheelchair;
    const sight = events[eventIndexNum].accessibility.sight;
    const sound = events[eventIndexNum].accessibility.sound;
    const touch = events[eventIndexNum].accessibility.touch;
    const smell = events[eventIndexNum].accessibility.smell;
    const cost = events[eventIndexNum].cost;
    const rsvp = events[eventIndexNum].rsvp;

    const allTagsDisplay = tags.join(', ');

    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.popupContainer}>
                    <View style={styles.backArrow}>
                        <Button title="&#8592;" onPress={onClose} />
                    </View>
                    <View style={styles.message}>
                        <View style={styles.sameLineOpp}>
                            <Text>{eventdate}</Text>
                            <Text>{cost}</Text>
                        </View>
                        <Text>{eventtime}</Text>
                        <Text style={styles.title}>{eventname}</Text>
                        <Text>{description}</Text>
                        <View style={styles.hr}/>
                        <View style={styles.list}>
                            <Text>Accessibility:</Text>
                            <Text>Sensory Levels:</Text>
                            <Text>        Sight: {sight}</Text>
                            <Text>        Sound: {sound}</Text>
                            <Text>        Touch: {touch}</Text>
                            <Text>        Smell: {smell}</Text>
                            <Text>Wheelchair Accessibility: {wheelchair}</Text>
                        </View>
                        <Text>Tags: {allTagsDisplay}</Text>
                        <Text>RSVP: {rsvp}</Text>
                    </View>
                    <Button title="Save"/>
                    <Button title="RSVP"/>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    popupContainer: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      height: 800,
      width: 400,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
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
});

export default EventPopup;