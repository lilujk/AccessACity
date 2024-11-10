import { Image, StyleSheet, ScrollView, StatusBar, Platform, SafeAreaView, Text, ScrollViewComponent} from 'react-native';
import { Dimensions } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
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

const alpha = 0.05;

export default function HomeScreen() {
  const events = useEvents();
  return (
    //View is just a div in react, there is a equivalent to all html elements in react
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.container}>
          <SafeAreaView style={styles.container}>
            <Text style={styles.title}>AccesACity</Text>
          </SafeAreaView>
          <Link href="/states" style={styles.text1}>Unlock!</Link>

          <View> 
            <Image
              source={require('../key.png')}
              style={styles.imagebg}
            />
              
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
 
  );
}



const styles = StyleSheet.create({
  container: {
    zIndex: 1,

    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  innerContainer: {
    zIndex: 1,

    padding: 16,
  },
  titleContainer: {
    zIndex: 1,

    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    zIndex: 1,

    gap: 8,
    marginBottom: 8,
  },
  button1: {
    zIndex: 1,

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactLogo: {
    zIndex: 1,

    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  imagebg: {
    zIndex: 2,
    top:300,
    left: '20%',
    position: 'absolute',
  },
  title: {
    flex: 1,
    zIndex: 2,
    top: 300,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 24
  },

  text1: {
    flex: 1,
    zIndex: 2,
    top: 350,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 24,
    opacity: alpha
  }

});
