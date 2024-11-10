import React from 'react';
import { Text } from 'react-native';
import { View, StyleSheet, Image } from 'react-native';
import { useEvents } from '@/hooks/useEvents';

export default function Page() {
    const events = useEvents();
    return (
        <View style={styles.container}>
            <Text>Coordinate Test Page</Text>
            <View style={styles.imageContainer}>
                {/* Base Image */}
                <Image 
                    source={require('../assets/images/troy.png')}
                    style={styles.baseImage}
                />
                {/* Overlay Image */}
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 375, left: 80 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 40, left: 200 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 280, left: 115 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 390, left: 130 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 370, left: 145 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 405, left: 190 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 440, left: 110 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 570, left: 90 }]}
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
        width: 100, // set desired width for overlay image
        height: 100, // set desired height for overlay image
        top: '40%', // adjust positioning as needed
        left: '40%',
    },
});