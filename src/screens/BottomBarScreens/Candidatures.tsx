import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../assets/colors'

export default function Candidatures() {
    return (
        <View style={styles.container}>
            <Text>Candidatures</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS._FFF,
        alignItems: 'center',
        justifyContent: 'center'
    }
})