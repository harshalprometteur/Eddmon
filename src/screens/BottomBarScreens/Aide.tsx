import { Dimensions, Image, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../assets/colors'
import { Header, Input, Text } from '../../components'
import { FONTS, IMAGES } from '../../assets'
import { STRING, getScaleSize } from '../../constant'

export default function Aide() {

    const [password, setPassword] = useState('')
    const [retour, setRetour] = useState('')
    const [catégorie, setCatégorie] = useState('')

    return (
        <View style={styles.container}>
            <Header
                title='Aide'
                onBack={() => {

                }}
                isDarkBg={true} />
            <ScrollView>
                <View style={{ paddingHorizontal: getScaleSize(16) }}>
                    <View style={{ marginTop: getScaleSize(24), alignItems: 'center' }}>
                        <Text
                            font={FONTS.Regular}
                            color={COLORS._FFF}
                            size={getScaleSize(14)}>
                            {'Tu as une question ?'}
                        </Text>
                        <Text
                            style={{ textDecorationLine: 'underline', lineHeight: getScaleSize(24), marginTop: getScaleSize(8) }}
                            font={FONTS.Semi_Bold}
                            color={COLORS._FFF}
                            size={getScaleSize(16)}>
                            {'Regarde notre FAQ'}
                        </Text>
                    </View>
                    <Image style={styles.productImage} source={IMAGES.aidshelp} />
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._807694}
                        size={getScaleSize(16)}>
                        {'Contact cours'}
                    </Text>
                    <View style={styles.contactBox}>
                        <View style={styles.profileView} />
                        <Text
                            font={FONTS.Semi_Bold}
                            color={COLORS._FFF}
                            size={getScaleSize(19)}>
                            {'Mathieu Quiniou'}
                        </Text>
                        <View style={[styles.flexView, { marginTop: getScaleSize(6) }]}>
                            <Text
                                font={FONTS.Regular}
                                color={COLORS._807694}
                                size={getScaleSize(14)}>
                                {'Fondateur'}
                            </Text>
                            <View style={styles.botView} />
                            <Text
                                font={FONTS.Regular}
                                color={COLORS._2EE80066}
                                size={getScaleSize(14)}>
                                {'disponible'}
                            </Text>
                        </View>
                        <View style={[styles.flexView, { marginTop: getScaleSize(16) }]}>
                            <Image source={IMAGES.chatIcon} style={styles.chatIcon} />
                            <Image source={IMAGES.phoneIcon} style={styles.chatIcon} />
                        </View>
                    </View>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._807694}
                        size={getScaleSize(16)}>
                        {STRING.contactcomptabilité}
                    </Text>
                    <View style={styles.contactBox}>
                        <View style={styles.profileView} />
                        <Text
                            font={FONTS.Semi_Bold}
                            color={COLORS._FFF}
                            size={getScaleSize(19)}>
                            {'Mathieu Quiniou'}
                        </Text>
                        <View style={[styles.flexView, { marginTop: getScaleSize(6) }]}>
                            <Text
                                font={FONTS.Regular}
                                color={COLORS._807694}
                                size={getScaleSize(14)}>
                                {'Fondateur'}
                            </Text>
                            <View style={styles.botView} />
                            <Text
                                font={FONTS.Regular}
                                color={COLORS._2EE80066}
                                size={getScaleSize(14)}>
                                {'disponible'}
                            </Text>
                        </View>
                        <View style={[styles.flexView, { marginTop: getScaleSize(16) }]}>
                            <Image source={IMAGES.chatIcon} style={styles.chatIcon} />
                            <Image source={IMAGES.phoneIcon} style={styles.chatIcon} />
                        </View>
                    </View>
                    <Text
                        style={{ marginTop: getScaleSize(16) }}
                        font={FONTS.Semi_Bold}
                        color={COLORS._807694}
                        size={getScaleSize(16)}>
                        {'Une demande ? Une idée ?'}
                    </Text>
                    <Text
                        style={{ marginTop: getScaleSize(16) }}
                        font={FONTS.Regular}
                        color={COLORS._FFF}
                        size={getScaleSize(12)}>
                        {STRING.Catégorie}
                    </Text>
                    <View style={{ marginTop: getScaleSize(8) }}>
                        <Input
                            value={catégorie}
                            onChangeText={(text) => {
                                setCatégorie(text)
                            }}
                            placeholder='Précise le contexte juste ici! '
                            placeholderTextColor={COLORS._5D5069}
                            downIcon={true} />
                    </View>
                    <Text
                        style={{ marginTop: getScaleSize(16) }}
                        font={FONTS.Regular}
                        color={COLORS._FFF}
                        size={getScaleSize(14)}>
                        {STRING.taquestion}
                    </Text>
                    <View style={{ marginTop: getScaleSize(8) }}>
                        <Input
                            inputStyle={{ height: getScaleSize(96), alignSelf: 'flex-start', marginVertical: getScaleSize(14) }}
                            placeholder='Hésite pas à être le plus précis possible, ça nous aidera à te répondre au mieux ;)'
                            placeholderTextColor={COLORS._5D5069}
                            multiline={true}
                            numberOfLines={3}
                        />
                    </View>
                    <TouchableOpacity style={[styles.btnView, { marginTop: getScaleSize(24) }]}>
                        <Text
                            font={FONTS.Semi_Bold}
                            color={COLORS._FFF}
                            size={getScaleSize(16)}>
                            {STRING.envoyer}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS._211031,
    },
    productImage: {
        height: getScaleSize(138),
        width: getScaleSize(195),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: getScaleSize(24),
        marginBottom: getScaleSize(40)
    },
    contactBox: {
        backgroundColor: COLORS._2B1B4D,
        marginTop: getScaleSize(16),
        borderRadius: getScaleSize(14),
        padding: getScaleSize(32),
        alignItems: 'center',
        marginBottom: getScaleSize(24)
    },
    profileView: {
        width: getScaleSize(120),
        height: getScaleSize(120),
        borderRadius: getScaleSize(60),
        backgroundColor: 'lightgrey',
        marginBottom: getScaleSize(16)
    },
    botView: {
        width: getScaleSize(3),
        height: getScaleSize(3),
        borderRadius: getScaleSize(6),
        backgroundColor: COLORS._807694,
        marginHorizontal: getScaleSize(4)
    },
    imageIcon: {
        height: getScaleSize(24),
        width: getScaleSize(24),
        resizeMode: 'contain',
    },
    btnView: {
        backgroundColor: COLORS._B058F8,
        borderRadius: getScaleSize(14),
        paddingVertical: getScaleSize(16),
        marginTop: getScaleSize(16),
        alignItems: 'center'
    },
    inputContainer: {
        marginTop: getScaleSize(8),
        borderColor: COLORS._DEDEDE,
        borderWidth: 1,
        borderRadius: getScaleSize(4),
        paddingRight: getScaleSize(8),
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        paddingVertical: getScaleSize(12),
        paddingHorizontal: getScaleSize(16),
        flex: 1,
        fontSize: getScaleSize(14),
        color: COLORS._202020,
        fontFamily: FONTS.Regular
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    chatIcon: {
        width: getScaleSize(38),
        height: getScaleSize(38),
        marginHorizontal: getScaleSize(8)
    }
})