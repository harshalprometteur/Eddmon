import React, { useEffect } from 'react'
import { Image, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

//ASSETS & CONSTANT
import { IMAGES, COLORS } from '../assets'
import { getScaleSize } from '../constant'

//SCREENS
import { SCREENS } from '.'

export default function Splash(props: any) {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate(SCREENS.Welcome.identifier)
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar
                translucent={true}
                backgroundColor={'transparent'} />
            <SafeAreaView />
            <View style={styles.logoContainer}>
                <Image style={styles.logoIcon} source={IMAGES.logo} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS._B058F8,
    },
    logoContainer: {
        flex: 1.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoIcon: {
        width: getScaleSize(225),
        height: getScaleSize(51)
    }
})