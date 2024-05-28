import React, { useState } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

//COMPONENTS
import { Header, Input, Popup, Text } from '../components'

//ASSETS & CONSTANT
import { COLORS, FONTS } from '../assets'
import { STRING, getScaleSize } from '../constant'
import { SCREENS } from '.'

export default function ForgotPassword(props: any) {

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Header
                title={STRING.mot_de_passe_oublié} />
            <View style={styles.headerContaioner}>
                <View>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._202020}
                        size={getScaleSize(14)}>
                        {STRING.nouveau_mot_de_passe}
                    </Text>
                    <Input
                        style={styles.inputContainer}
                        value={password}
                        onChangeText={(text) => {
                            setPassword(text)
                        }}
                        secureTextEntry={true} />
                </View>
                <View>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._202020}
                        size={getScaleSize(14)}>
                        {STRING.confirmation_du_nouveau_mot_de_passe}
                    </Text>
                    <Input
                        value={confirmPassword}
                        style={styles.inputContainer}
                        onChangeText={(text) => {
                            setConfirmPassword(text)
                        }}
                        secureTextEntry={true} />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true)
                    }}
                    style={styles.btnView}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(16)}>
                        {STRING.enregistrer_le_nouveau_mot_de_passe}
                    </Text>
                </TouchableOpacity>
            </View>
            <Popup
                title={STRING.nouveau_mot_de_passe_enregistré}
                modalVisible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false)
                }}
                btnText={STRING.je_me_connecte}
                onNext={() => {
                    props.navigation.navigate(SCREENS.Login.identifier)
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
        marginHorizontal: getScaleSize(24),
        marginTop: getScaleSize(20)
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