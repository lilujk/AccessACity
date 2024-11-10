import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, Text, Button} from 'react-native';
import React, { useState } from 'react';
import { useEvents } from '@/hooks/useEvents';
import EventOnDisplay from '@/components/EventOnDisplay';
import EventPagePopup from '@/components/EventPagePopup';

export default function newYorkCityEvents() {
    const events = useEvents();
    return (
        <EventPagePopup city="New York City"/>
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