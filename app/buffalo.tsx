import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import { useEvents } from '@/hooks/useEvents';
import EventPopup from '../components/EventPopup';

export default function Page() {
    const router = useRouter();
    const events = useEvents();

    const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);


    const openPopup = (index: number) => {
        console.log('Popup opened for event index:', index);  // Check if this logs
        setSelectedEventIndex(index);
    };
    

    const closePopup = () => {
        setSelectedEventIndex(null);
    };

    const buffaloEvents = events.filter(event => event.eventcity === "Buffalo" && event.eventstate === "NY");

  return(
    <View style={styles.container}>
      <Text>buffalo, NY</Text>
      <View style={styles.imageContainer}>
        {/* Base Image */}
        <Image 
            source={require('../assets/images/buffalo.png')}
            style={styles.baseImage}
        />
        {/* Overlay Images for Buffalo Events */}
        {buffaloEvents.map((event, index) => {
          // Determine the icon color based on wheelchair accessibility
          let iconSource;
          if (event.accessibility.wheelchair === "High") {
            iconSource = require('../assets/images/green-location.png');
          } else if (event.accessibility.wheelchair === "Med") {
            iconSource = require('../assets/images/yellow-location.png');
          } else {
            iconSource = require('../assets/images/red-location.png');
          }

          return (
            <Pressable 
              key={index}
              onPress={() => openPopup(index)}
              style={[styles.overlayButton, { top: event.ycord, left: event.xcord }]}
            >
              <Image 
                source={iconSource}
                style={styles.overlayImage}
              />
            </Pressable>
          );
        })}
        {selectedEventIndex !== null && (
        <EventPopup
            visible={selectedEventIndex !== null}
            onClose={closePopup}
            eventIndex={selectedEventIndex?.toString() ?? ""}
        />
        )}
        
      </View>
    </View>
  )
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
        width: '100%', // set desired width of container
        height: '100%', // set desired height of container
    },
    baseImage: {
        width: '100%',
        height: '100%',
    },
    overlayImage: {
        position: 'absolute',
        width: 65, // set desired width for overlay image
        height: 65, // set desired height for overlay image
        zIndex: 2,
        top: '-20%',
    },
    overlayButton: {
        position: 'absolute',
        width: 65,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        top: '-20%',
    },
    buttonImage: {
        width: '100%', // Full size of overlayButton
        height: '100%',
    },
  });