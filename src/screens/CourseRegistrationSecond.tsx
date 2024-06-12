import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

//COMPONENTS
import { Header, Input, Text } from '../components'

//ASSETS
import { COLORS, FONTS, IMAGES } from '../assets'
import { getScaleSize } from '../constant'
import { SCREENS } from '.'

export default function CourseRegistrationSecond(props: any) {

    const weekItem = [
        { title: 'Mar.', id: 1, slot: 1 },
        { title: 'Mer.', id: 2, slot: 2 },
        { title: 'Ven.', id: 3, slot: 1 },
    ]

    const [fin, setFin] = useState('-')
    const [debut, setDebut] = useState('-')

    return (
        <View style={styles.container}>
            <Header
                isDarkBg={true}
                onBack={() => {
                    props.navigation.goBack()
                }}
                title='Postuler' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerText}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(19)}>
                        {'Indique tes disponibilités'}
                    </Text>
                    <Text
                        style={styles.textStyle}
                        font={FONTS.Regular}
                        color={COLORS._807694}
                        size={getScaleSize(12)}>
                        {'Plus tu indiques de disponibilités,\nplus tu as de chances d’être sélectionné ;)'}
                    </Text>
                </View>
                <View style={styles.mainView}>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._B4B1AD}
                        size={getScaleSize(14)}>
                        {'Rythme et durée'}
                    </Text>
                    <View style={styles.locationView}>
                        <View style={[styles.flexBox]}>
                            <Image source={IMAGES.timeIcon} style={[styles.timeIcon, { tintColor: COLORS._FFF }]} />
                            <Text
                                font={FONTS.Medium}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'2 x 1h30 '}
                                <Text
                                    font={FONTS.Regular}
                                    color={COLORS._807694}
                                    size={getScaleSize(14)}>
                                    {'/ semaine'}
                                </Text>
                            </Text>
                        </View>
                        <View style={styles.availabilityBox}>
                            {weekItem.map((e, index) => {
                                return (
                                    <View key={e.id} style={styles.weekView}>
                                        <View style={{ width: getScaleSize(50) }}>
                                            <Text
                                                style={{ lineHeight: getScaleSize(24) }}
                                                font={FONTS.Bold}
                                                color={COLORS._FFF}
                                                size={getScaleSize(14)}>
                                                {e.title}
                                            </Text>
                                        </View>
                                        <View style={styles.wightBox}>
                                            {e.slot == 1 ?
                                                <View style={[styles.smallBox, { backgroundColor: COLORS._A79BFF, }]}>
                                                    <Text
                                                        style={{ lineHeight: getScaleSize(20) }}
                                                        font={FONTS.Medium}
                                                        color={COLORS._FFF}
                                                        size={getScaleSize(12)}>
                                                        {'12h-14h'}
                                                    </Text>
                                                </View>
                                                :
                                                <View style={[styles.smallBox, { width: getScaleSize(52) }]} >
                                                    <Text
                                                        style={{ lineHeight: getScaleSize(20) }}
                                                        font={FONTS.Medium}
                                                        color={COLORS._FFF}
                                                        size={getScaleSize(12)}>
                                                        {''}
                                                    </Text>
                                                </View>
                                            }
                                            {e.slot == 2 ?
                                                <View style={[styles.smallBox, { backgroundColor: COLORS._FF9B9B, }]}>
                                                    <Text
                                                        style={{ lineHeight: getScaleSize(20) }}
                                                        font={FONTS.Medium}
                                                        color={COLORS._FFF}
                                                        size={getScaleSize(12)}>
                                                        {'14h-18h'}
                                                    </Text>
                                                </View>
                                                :
                                                <View style={styles.smallBox} >
                                                    <Text
                                                        style={{ lineHeight: getScaleSize(20) }}
                                                        font={FONTS.Medium}
                                                        color={COLORS._FFF}
                                                        size={getScaleSize(12)}>
                                                        {''}
                                                    </Text>
                                                </View>
                                            }
                                        </View>
                                    </View>
                                )
                            })
                            }
                        </View>
                        <View style={[styles.flexBox,{marginBottom: getScaleSize(16)}]}>
                            <View style={[styles.smallBox, { backgroundColor: COLORS._A79BFF, marginRight: getScaleSize(8) }]}>
                                <Text
                                    style={{ lineHeight: getScaleSize(20) }}
                                    font={FONTS.Medium}
                                    color={COLORS._FFF}
                                    size={getScaleSize(12)}>
                                    {'Optionelle'}
                                </Text>
                            </View>
                            <View style={[styles.smallBox, { backgroundColor: COLORS._FF9B9B, }]}>
                                <Text
                                    style={{ lineHeight: getScaleSize(20) }}
                                    font={FONTS.Medium}
                                    color={COLORS._FFF}
                                    size={getScaleSize(12)}>
                                    {'Optionelle'}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.flexBox}>
                            <Image source={IMAGES.dateRange} style={[styles.timeIcon, { tintColor: COLORS._807694 }]} />
                            <Text
                                font={FONTS.Medium}
                                color={COLORS._807694}
                                size={getScaleSize(14)}>
                                {'22/03/2024'}
                                <Text
                                    font={FONTS.Regular}
                                    color={COLORS._807694}
                                    size={getScaleSize(14)}>
                                    {' au '}
                                </Text>
                                {'21/05/2024'}
                            </Text>
                        </View>
                    </View>
                    <View style={[styles.headerBox, { backgroundColor: COLORS._A79BFF, }]}>
                        <Text
                            style={{ lineHeight: getScaleSize(24) }}
                            font={FONTS.Medium}
                            color={COLORS._FFF}
                            size={getScaleSize(16)}>
                            {'Mardi (9h-12h)'}
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputBox}>
                            <Text
                                style={{ lineHeight: getScaleSize(24) }}
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Début'}
                            </Text>
                            <View style={{ marginTop: getScaleSize(8) }}>
                                <Input
                                    value={debut}
                                    onChangeText={(text) => {
                                        setDebut(text)
                                    }}
                                    downIcon={true} />
                            </View>
                        </View>
                        <View style={{ width: getScaleSize(16) }} />
                        <View style={styles.inputBox}>
                            <Text
                                style={{ lineHeight: getScaleSize(24) }}
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Fin'}
                            </Text>
                            <View style={{ marginTop: getScaleSize(8) }}>
                                <Input
                                    value={fin}
                                    onChangeText={(text) => {
                                        setFin(text)
                                    }}
                                    downIcon={true} />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.headerBox, { backgroundColor: COLORS._A79BFF, }]}>
                        <Text
                            style={{ lineHeight: getScaleSize(24) }}
                            font={FONTS.Medium}
                            color={COLORS._FFF}
                            size={getScaleSize(16)}>
                            {'Mardi (17h-19h)'}
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputBox}>
                            <Text
                                style={{ lineHeight: getScaleSize(24) }}
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Début'}
                            </Text>
                            <View style={{ marginTop: getScaleSize(8) }}>
                                <Input
                                    value={debut}
                                    onChangeText={(text) => {
                                        setDebut(text)
                                    }}
                                    downIcon={true} />
                            </View>
                        </View>
                        <View style={{ width: getScaleSize(16) }} />
                        <View style={styles.inputBox}>
                            <Text
                                style={{ lineHeight: getScaleSize(24) }}
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Fin'}
                            </Text>
                            <View style={{ marginTop: getScaleSize(8) }}>
                                <Input
                                    value={fin}
                                    onChangeText={(text) => {
                                        setFin(text)
                                    }}
                                    downIcon={true} />
                            </View>
                        </View>
                    </View>
                    <View style={[styles.headerBox, { backgroundColor: COLORS._FF9B9B, }]}>
                        <Text
                            style={{ lineHeight: getScaleSize(24) }}
                            font={FONTS.Semi_Bold}
                            color={COLORS._FFF}
                            size={getScaleSize(16)}>
                            {'Mercredi (14h-17h) *'}
                        </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputBox}>
                            <Text
                                style={{ lineHeight: getScaleSize(24) }}
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Début'}
                            </Text>
                            <View style={{ marginTop: getScaleSize(8) }}>
                                <Input
                                    value={debut}
                                    onChangeText={(text) => {
                                        setDebut(text)
                                    }}
                                    downIcon={true} />
                            </View>
                        </View>
                        <View style={{ width: getScaleSize(16) }} />
                        <View style={styles.inputBox}>
                            <Text
                                style={{ lineHeight: getScaleSize(24) }}
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Fin'}
                            </Text>
                            <View style={{ marginTop: getScaleSize(8) }}>
                                <Input
                                    value={fin}
                                    onChangeText={(text) => {
                                        setFin(text)
                                    }}
                                    downIcon={true} />
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.errorText}>
                <Text
                    font={FONTS.Regular}
                    color={COLORS._FF5959}
                    size={getScaleSize(12)}>
                    {'Il te reste x créneau.x à sélectionner'}
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate(SCREENS.CourseRegistrationThird.identifier)
                }}
                style={[styles.btnnView, { marginTop: getScaleSize(8) }]}>
                <Text
                    font={FONTS.Semi_Bold}
                    color={COLORS._FFF}
                    size={getScaleSize(16)}>
                    {'Suivant (2/3)'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.retourView}>
                <Text
                    style={{ textDecorationLine: 'underline' }}
                    font={FONTS.Semi_Bold}
                    color={COLORS._FFF}
                    size={getScaleSize(14)}>
                    {'Retour'}
                </Text>
            </TouchableOpacity>
            <SafeAreaView />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS._211031
    },
    headerText: {
        marginTop: getScaleSize(40),
        marginHorizontal: getScaleSize(24),
        marginBottom: getScaleSize(24)
    },
    mainView: {
        marginHorizontal: getScaleSize(24),
        marginBottom: getScaleSize(16)
    },

    locationView: {
        backgroundColor: COLORS._2B1B4D,
        padding: getScaleSize(16),
        marginTop: getScaleSize(16),
        marginBottom: getScaleSize(40),
        borderRadius: getScaleSize(14)
    },
    timeIcon: {
        width: getScaleSize(24),
        height: getScaleSize(24),
        marginRight: getScaleSize(4),

    },
    flexBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStyle: {
        marginTop: getScaleSize(8),
        lineHeight: getScaleSize(24)
    },
    btnnView: {
        marginBottom: getScaleSize(8),
        paddingVertical: getScaleSize(16),
        marginHorizontal: getScaleSize(24),
        alignItems: 'center',
        backgroundColor: COLORS._8118D7,
        borderRadius: getScaleSize(16)
    },
    headerBox: {
        alignSelf: 'flex-start',
        paddingVertical: getScaleSize(4),
        paddingHorizontal: getScaleSize(8),
        borderRadius: getScaleSize(95),
        marginBottom: getScaleSize(8)
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: getScaleSize(24)
    },
    inputBox: {
        flex: 1.0,
    },
    errorText: {
        alignItems: 'center',
        marginTop: getScaleSize(24)
    },
    retourView: {
        marginBottom: getScaleSize(16),
        alignItems: 'center',
        padding: getScaleSize(8)
    },
    availabilityBox: {
        backgroundColor: COLORS._493672,
        borderRadius: getScaleSize(14),
        paddingHorizontal: getScaleSize(8),
        paddingTop: getScaleSize(8),
        paddingBottom: getScaleSize(4),
        marginBottom: getScaleSize(8),
        marginTop: getScaleSize(16)
    },
    weekView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: getScaleSize(4)
    },
    wightBox: {
        flex: 1.0,
        marginLeft: getScaleSize(8),
        marginBottom: getScaleSize(4),
        paddingVertical: getScaleSize(3),
        paddingLeft: getScaleSize(20),
        flexDirection: 'row',
        alignItems: 'center'
    },
    smallBox: {
        paddingHorizontal: getScaleSize(7),
        borderRadius: getScaleSize(26)
    },

})