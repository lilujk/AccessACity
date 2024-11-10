import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Page() {
  return(
    <View style={styles.container}>
      <Text>New York City, NY</Text>
    </View>
  )
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
  });