import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const EventPopup = ({ visible, onClose, message }: { visible: boolean, onClose: () => void, message: string }) => {
    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
        >
            <View>
                <View>
                    <Text>{message}</Text>
                    <Button title="X" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
};

export default EventPopup;