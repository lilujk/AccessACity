import { Image, StyleSheet, Platform, SafeAreaView, ScrollView, Text, Button, View, TextInput} from 'react-native';
import React, { useState } from 'react';
import { useEvents } from '@/hooks/useEvents';
import EventOnDisplay from '@/components/EventOnDisplay';
import EventPagePopup from '@/components/EventPagePopup';

export default function addEventPage() {
    const events = useEvents();
    const [eventname, seteventname] = useState('');
    const [description, setdescription] = useState('');
    const [eventdate, seteventdate] = useState('');
    const [eventtime, seteventtime] = useState('');
    const [tags, settags] = useState('');
    const [cost, setcost] = useState(''); 
    const [wheelchair, setwheelchair] = useState('');
    const [sight, setsight] = useState(''); 
    const [sound, setsound] = useState(''); 
    const [touch, settouch] = useState(''); 
    const [smell, setsmell] = useState(''); 

    return (
      <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.title}>Add an Event!</Text>
          <View>
            <Text style={styles.subtitle}>Event Title:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter event name here"
              value={eventname}
              onChangeText={seteventname}
            />
          </View>
          <View>
            <Text style={styles.subtitle}>Description:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter event description here"
              value={description}
              onChangeText={setdescription}
            />
          </View>
          <View style={styles.sidebyside}>
            <View>
              <Text style={styles.subtitle}>Date:</Text>
              <TextInput
                style={styles.input}
                placeholder="Date"
                value={eventdate}
                onChangeText={seteventdate}
              />
            </View>
            <View>
              <Text style={styles.subtitle}>Time:</Text>
              <TextInput
                style={styles.input}
                placeholder="Time"
                value={eventtime}
                onChangeText={seteventtime}
              />
            </View>
          </View>
          <View>
            <Text style={styles.subtitle}>Event Tags:</Text>
            <TextInput
              style={styles.input}
              placeholder="Add All Event Tags"
              value={tags}
              onChangeText={settags}
            />
          </View>
          <View>
            <Text style={styles.subtitle}>Cost:</Text>
            <TextInput
              style={styles.input}
              placeholder="Edit Event Cost"
              value={cost}
              onChangeText={setcost}
            />
          </View>
          <View style={styles.accesibility}>
            <Text style={styles.bigsubtitle}>Accessibility:</Text>
            <View>
              <Text style={styles.subtitle}>For Wheelchair:</Text>
              <TextInput
                style={styles.input}
                placeholder="Wheelchair Accessibility"
                value={wheelchair}
                onChangeText={setwheelchair}
              />
            </View>
            <View>
              <Text style={styles.subtitle}>Sight:</Text>
              <TextInput
                style={styles.input}
                placeholder="Sight Accessibility"
                value={sight}
                onChangeText={setsight}
              />
            </View>
            <View>
              <Text style={styles.subtitle}>Sound:</Text>
              <TextInput
                style={styles.input}
                placeholder="Sound Accessibility"
                value={sound}
                onChangeText={setsound}
              />
            </View>
            <View>
              <Text style={styles.subtitle}>Touch:</Text>
              <TextInput
                style={styles.input}
                placeholder="Touch Accessibility"
                value={touch}
                onChangeText={settouch}
              />
            </View>
            <View>
              <Text style={styles.subtitle}>Smell:</Text>
              <TextInput
                style={styles.input}
                placeholder="Smell Accessibility"
                value={smell}
                onChangeText={setsmell}
              />
            </View>
          </View>
          <Button title="Submit!"/>
        </View>
      </SafeAreaView>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    inputContainer: {
      padding: 20,
      backgroundColor: 'white',
      width: '100%',
    },
    view: {
      padding: 5,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      width: '80%',
      paddingLeft: 10,
    },
    sidebyside: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly'
    },
    accessibility: {
      display: 'flex',
      flexDirection: 'column',
    },
    title: {
      fontSize: 36,
      marginTop: 40,
      marginBottom: 10,
      color: 'navy',
      fontWeight: 'bold',
    },
    subtitle: {
      fontStyle: 'italic',
      fontSize: 18,
      color: 'navy',
    },
    bigsubtitle: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      fontSize: 28,
      marginBottom: 10,
      color: 'navy',
    },
    Button: {
      borderWidth: 2,  
      borderColor: 'blue',
      padding: 20,
    }
});