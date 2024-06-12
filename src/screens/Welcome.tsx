import React, { useContext, useEffect } from 'react'
import { Dimensions, Image, Linking, SafeAreaView, StatusBar, StyleSheet, View, TouchableOpacity } from 'react-native'

//COMPONENTS
import { Text } from '../components'

//ASSETS & CONSTANT
import { COLORS, FONTS, IMAGES } from '../assets'
import { STRING, getScaleSize } from '../constant'

//SCREENS
import { SCREENS } from '.'

export default function Welcome(props: any) {

    return (
        <View style={styles.container}>
            <StatusBar
                translucent={true}
                backgroundColor={'transparent'} />
            <SafeAreaView />
            <View style={styles.headerContaioner}>
                <Image style={styles.logoIcon} source={IMAGES.welcomeIcon} />
                <TouchableOpacity 
                onPress={()=>{
                    props.navigation.navigate(SCREENS.Login.identifier)
                }}
                style={styles.btnView}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(16)}>
                        {STRING.se_connecter}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL('https://www.eddmon.fr/inscription-tuteur')
                    }}
                    style={styles.btnsView}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._B058F8}
                        size={getScaleSize(16)}>
                        {STRING.sinscrire}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS._211031,
    },
    headerContaioner: {
        marginHorizontal: getScaleSize(24)
    },
    logoIcon: {
        width: Dimensions.get('window').width - 48,
        height: ((Dimensions.get('window').width - 48) * 539) / 327
    },
    btnView: {
        backgroundColor: COLORS._B058F8,
        paddingVertical: getScaleSize(16),
        borderRadius: getScaleSize(6),
        alignItems: 'center',
        marginVertical: getScaleSize(16)
    },
    btnsView: {
        paddingVertical: getScaleSize(16),
        borderRadius: getScaleSize(6),
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS._B058F8,
        marginBottom: getScaleSize(20)
    }
})