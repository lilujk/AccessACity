import { Image, StyleSheet, ScrollView, StatusBar, Platform, SafeAreaView, Text, ScrollViewComponent} from 'react-native';
import { Dimensions } from "react-native";

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEvents } from '@/hooks/useEvents';
import React from 'react';
import { Link } from 'expo-router';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { View } from 'react-native';
import { setBackgroundColorAsync } from 'expo-system-ui';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default function HomeScreen() {
  const events = useEvents();
  return (
    //View is just a div in react, there is a equivalent to all html elements in react
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <SafeAreaView style={styles.container}>
            <Text>{events[49].eventstate}</Text>
          </SafeAreaView>
          <Link href="/testCoordinates" style={styles.button1}>TESTCOORDINATES</Link>
          <Link href="/testCoordinates2" style={styles.button1}>TESTCOORDINATES2</Link>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
 
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  innerContainer: {
    padding: 16,
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
  button1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  imagebg: {
    height: height,
    width: width,
    position: 'absolute',
  },
});
