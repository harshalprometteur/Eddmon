import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, View, TouchableOpacity, Linking } from 'react-native'

//COMPONENTS
import { Header, Input, Popup, Text } from '../components'

//ASSETS & CONSTANT
import { COLORS, FONTS, IMAGES } from '../assets'
import { STRING, getScaleSize } from '../constant'
import { SCREENS } from '.'

export default function Login(props: any) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Header
                onBack={() => {
                    props.navigation.goBack()
                }} />
            <View style={styles.headerContaioner}>
                <Image style={styles.logoIcon} source={IMAGES.loginIcon} />
                <View>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._202020}
                        size={getScaleSize(14)}>
                        {STRING.adresse_email}
                    </Text>
                    <Input
                        style={styles.inputContainer}
                        value={email}
                        onChangeText={(text) => {
                            setEmail(text)
                        }} />
                </View>
                <View>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._202020}
                        size={getScaleSize(14)}>
                        {STRING.mot_de_passe}
                    </Text>
                    <Input
                        style={styles.inputContainer}
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                        secureTextEntry={true} />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true)
                    }}>
                    <Text
                        style={styles.textStyle}
                        font={FONTS.Semi_Bold}
                        color={COLORS._202020}
                        size={getScaleSize(14)}>
                        {STRING.mot_de_passe_oublié_q}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate(SCREENS.BottomBar.identifier)
                    }}
                    style={styles.btnView}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(16)}>
                        {STRING.connexion}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        Linking.openURL('https://www.eddmon.fr/inscription-tuteur')
                    }}>
                    <Text
                        style={{ textAlign: 'center' }}
                        font={FONTS.Regular}
                        color={COLORS._202020}
                        size={getScaleSize(14)}>
                        {STRING.pas_encore_de_compte}
                        <Text
                            style={styles.textStyle}
                            font={FONTS.Semi_Bold}
                            color={COLORS._202020}
                            size={getScaleSize(14)}>
                            {' '}{STRING.sinscrire}
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
            <Popup
                modalVisible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false)
                }}
                onPress={() => {
                    setModalVisible(false)
                }}
                btnText={STRING.ok}
                title={STRING.popupText}
                onNext={() => {
                    props.navigation.navigate(SCREENS.ForgotPassword.identifier)
                    setModalVisible(false)
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS._FFF,
    },
    headerContaioner: {
        marginHorizontal: getScaleSize(24)
    },
    logoIcon: {
        width: Dimensions.get('window').width - 48,
        height: ((Dimensions.get('window').width - 48) * 225) / 327,
        marginVertical: getScaleSize(32)
    },
    btnView: {
        backgroundColor: COLORS._8118D7,
        paddingVertical: getScaleSize(16),
        borderRadius: getScaleSize(6),
        alignItems: 'center',
        marginVertical: getScaleSize(16)
    },
    inputContainer: {
        marginTop: getScaleSize(8),
        marginBottom: getScaleSize(16)
    },
    textStyle: {
        textDecorationLine: 'underline',
        marginBottom: getScaleSize(16)
    }
})