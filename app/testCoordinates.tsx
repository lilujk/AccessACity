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
                    source={require('../assets/images/new york.png')}
                    style={styles.baseImage}
                />
                {/* Overlay Image */}
                <Image 
                    source={require('../assets/images/location.png')} //buffalo
                    style={[styles.overlayImage, { top: 340, left: 20 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')} //albany
                    style={[styles.overlayImage, { top: 355, left: 275 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')} //saratoga spring
                    style={[styles.overlayImage, { top: 330, left: 270 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')} //NYC
                    style={[styles.overlayImage, { top: 480, left: 260 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')} //troy
                    style={[styles.overlayImage, { top: 345, left: 285 }]}
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