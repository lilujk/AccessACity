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
                    source={require('../assets/images/new york city.png')}
                    style={styles.baseImage}
                />
                {/* Overlay Image */}
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 290, left: 170 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 315, left: 155 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 350, left: 150 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 355, left: 230 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 440, left: 205 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 420, left: 140 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 370, left: 210 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 335, left: 165 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 400, left: 155 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 415, left: 170 }]}
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