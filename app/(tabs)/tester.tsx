import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, Text} from 'react-native';
import React from 'react';
import { useEvents } from '@/hooks/useEvents';
import EventOnDisplay from '@/components/EventOnDisplay';

export default function tester() {
    const events = useEvents();
    console.log(events[0].eventname);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <EventOnDisplay eventIndex='0'/>
                <EventOnDisplay eventIndex='1'/>
                <EventOnDisplay eventIndex='2'/>
                <EventOnDisplay eventIndex='3'/>
                <EventOnDisplay eventIndex='4'/>
            </ScrollView>
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