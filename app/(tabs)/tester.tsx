import { Image, StyleSheet, Platform, SafeAreaView, Text} from 'react-native';
import React from 'react';
import { useEvents } from '@/hooks/useEvents';
import EventOnDisplay from '@/components/EventOnDisplay';

export default function tester() {
    const events = useEvents();
    console.log(events[0].eventname);
    return (
        <SafeAreaView style={styles.container}>
            <EventOnDisplay eventdate={events[0].eventdate} eventname={events[0].eventname} description={events[0].description} wheelchair={events[0].accessibility.wheelchair} sight={events[0].accessibility.sight} sound={events[0].accessibility.sound} touch={events[0].accessibility.touch} smell={events[0].accessibility.smell} cost={events[0].cost}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });