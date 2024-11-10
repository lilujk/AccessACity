import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity  } from 'react-native';
import { Link } from 'expo-router';
import { useEvents } from '@/hooks/useEvents';

export default function Page() {
    const events = useEvents();
    return (
        <View style={styles.container}>
            <Text>Coordinate Test Page</Text>
            <View style={styles.imageContainer}>
                {/* Base Image */}
                <Image 
                    source={require('../assets/images/albany.png')}
                    style={styles.baseImage}
                />
                {/* Overlay Image */}
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 440, left: 265 }]}
                />

                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 400, left: 235 }]}
                />
              
              <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 280, left: 110 }]}
                />

                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 290, left: 120 }]}
                />

                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 430, left: 270 }]}
                />

                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 295, left: 115 }]}
                />

                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 280, left: 95 }]}
                />

<Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 285, left: 105 }]}
                />

<Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 380, left: 280 }]}
                />

<Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 315, left: 130 }]}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
        width: 390, // set desired width of container
        height: 800, // set desired height of container
    },
    baseImage: {
        width: '100%',
        height: '100%',
    },
    overlayImage: {
        position: 'absolute',
        width: 65, // set desired width for overlay image
        height: 65, // set desired height for overlay image
        top: '40%', // adjust positioning as needed
        left: '40%',
    },
});