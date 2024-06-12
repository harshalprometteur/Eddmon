import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../assets/colors'

export default function Chat() {
    return (
        <View style={styles.container}>
            <Text>Chat</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS._211031,
        alignItems: 'center',
        justifyContent: 'center'
    }
})