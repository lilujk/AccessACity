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
                    source={require('../assets/images/buffalo.png')}
                    style={styles.baseImage}
                />
                {/* Overlay Image */}
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 400, left: 95 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 385, left: 145 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 120, left: 120 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 370, left: 125 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 420, left: 115 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 300, left: 80 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 270, left: 60 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 330, left: 50 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 340, left: 100 }]}
                />
                <Image 
                    source={require('../assets/images/location.png')}
                    style={[styles.overlayImage, { top: 500, left: 170 }]}
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