import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Button, Pressable  } from 'react-native';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import { useEvents } from '@/hooks/useEvents';

export default function Page() {
    const events = useEvents();
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                {/* Base Image */}
                <Image 
                    source={require('../assets/images/new york.png')}
                    style={styles.baseImage}
                />
                {/* Overlay Image */}
                <Pressable onPress={() => router.push('/buffalo')} style={[styles.overlayButton, { top: 350, left: 27  }]}>
                    <Image 
                        source={require('../assets/images/location.png')} //buffalo
                        style={[styles.overlayImage, {  }]}
                    />
                </Pressable>
                <Pressable onPress={() => router.push('/albany')} style={[styles.overlayButton, { top: 360, left: 265  }]}>
                    <Image 
                        source={require('../assets/images/location.png')} //albany
                        style={[styles.overlayImage, {  }]}
                    />
                </Pressable>
                <Pressable onPress={() => router.push('/saratoga-springs')} style={[styles.overlayButton, { top: 340, left: 277  }]}>
                    <Image 
                        source={require('../assets/images/location.png')} //saratoga spring
                        style={[styles.overlayImage, {  }]}
                    />
                </Pressable>
                <Pressable onPress={() => router.push('/new-york-city')} style={[styles.overlayButton, { top: 485, left: 255  }]}>
                    <Image 
                        source={require('../assets/images/location.png')} //NYC
                        style={[styles.overlayImage, {  }]}
                    />
                </Pressable>
                <Pressable onPress={() => router.push('/troy')} style={[styles.overlayButton, { top: 360, left: 280  }]}>
                    <Image 
                        source={require('../assets/images/location.png')} //troy
                        style={[styles.overlayImage, {  }]}
                    />
                </Pressable>
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
    },
    overlayButton: {
        position: 'absolute',
        width: 30,
        height: 30,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    buttonImage: {
        width: '100%', // Full size of overlayButton
        height: '100%',
    },
});