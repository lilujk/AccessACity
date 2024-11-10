import { Image, StyleSheet, ScrollView, StatusBar, Platform, SafeAreaView, Text, ScrollViewComponent} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEvents } from '@/hooks/useEvents';
import React from 'react';
import { Link } from 'expo-router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { setBackgroundColorAsync } from 'expo-system-ui';


export default function HomeScreen() {
  const events = useEvents();
  return (
    //View is just a div in react, there is a equivalent to all html elements in react
    <SafeAreaProvider>
    <SafeAreaView >
    <ScrollView >
      <SafeAreaView style={styles.container}>
        <Text>{events[49].eventstate}</Text>
      </SafeAreaView>
      <Link href="/testCoordinates">TESTCOORDINATES</Link>
    </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>

    
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
