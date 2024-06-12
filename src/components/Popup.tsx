import React from 'react'
import { Modal, StyleSheet, View, TouchableOpacity } from 'react-native'

//ASSETS & CONSTANT
import { FONTS, COLORS } from '../assets'
import { STRING, getScaleSize } from '../constant'
import { Text } from '.'


export default function Popup(props: any) {

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={props.modalVisible}
            onRequestClose={props.onRequestClose}>
            <View style={styles.centeredView}>
                <View style={styles.container}>
                    <Text
                        style={{ textAlign: 'center' }}
                        font={FONTS.italic_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(28)}>
                        {props.title}
                    </Text>
                    {props.subTitle &&
                        <Text
                            style={{ marginTop: getScaleSize(16) }}
                            font={FONTS.Regular}
                            color={COLORS._FFF}
                            size={getScaleSize(14)}>
                            {props.subTitle}
                        </Text>
                        }
                    {props.onNext &&
                        <TouchableOpacity onPress={props.onNext} style={styles.btnView}>
                            <Text
                                font={FONTS.Semi_Bold}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {props.btnText}
                            </Text>
                        </TouchableOpacity>
                    }
                    {props.onPress &&
                        <TouchableOpacity
                            style={{ marginTop: getScaleSize(16) }}
                            onPress={props.onPress}>
                            <Text
                                style={styles.textStyle}
                                font={FONTS.Semi_Bold}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {STRING.annuler}
                            </Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        backgroundColor: '#00000056',
        flex: 1.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: COLORS._4D405A,
        padding: getScaleSize(16),
        borderRadius: getScaleSize(16)
    },
    btnView: {
        backgroundColor: COLORS._B058F8,
        paddingVertical: getScaleSize(16),
        borderRadius: getScaleSize(6),
        alignItems: 'center',
        marginTop: getScaleSize(16)
    },
    textStyle: {
        textAlign: 'center',
        textDecorationLine: 'underline'
    }
})