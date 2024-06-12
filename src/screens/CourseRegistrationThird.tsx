import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

//COMPONENTS
import { Header, Input, Text } from '../components'

//ASSETS
import { COLORS, FONTS, IMAGES } from '../assets'
import { getScaleSize } from '../constant'

//SCREENS
import { SCREENS } from '.'

export default function CourseRegistrationThird(props: any) {

    const weekItem = [
        { title: 'Lun.', id: 1, slot: 1 },
        { title: 'Mar.', id: 2, slot: 1 },
        { title: 'Mer.', id: 3, slot: 2 },
        { title: 'Jeu.', id: 4, slot: 1 },
        { title: 'Ven.', id: 5, slot: 0 },
        { title: 'Sam.', id: 6, slot: 0 },
        { title: 'Dim.', id: 7, slot: 1 }]


    return (
        <View style={styles.container}>
            <Header
                onBack={() => { props.navigation.goBack() }}
                title='Postuler'
                isDarkBg={true} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerText}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(19)}>
                        {'Est-ce que c’est bon pour toi ?'}
                    </Text>
                </View>
                <View style={styles.mainView}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._807694}
                        size={getScaleSize(16)}>
                        {'Localisation'}
                    </Text>
                    <Text
                        style={styles.textStyle}
                        font={FONTS.Regular}
                        color={COLORS._FFF}
                        size={getScaleSize(14)}>
                        {'17 Rue Trousseau\n75011 PARIS'}
                    </Text>
                    <Image source={IMAGES.mapImg} style={styles.mapImg} />
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._807694}
                        size={getScaleSize(16)}>
                        {'Planning proposé'}
                    </Text>
                    <View style={styles.locationView}>
                        <View style={[styles.flexBox]}>
                            <Image source={IMAGES.dateRange} style={styles.timeIcon} />
                            <Text
                                font={FONTS.Medium}
                                color={COLORS._FFF}
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
                        <TouchableOpacity style={styles.modifierView}>
                            <Text
                                style={{ textDecorationLine: 'underline' }}
                                font={FONTS.Semi_Bold}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Modifier'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.chackBoxView}>
                        <View style={styles.checkBox} />
                        <View style={{ flex: 1.0 }}>
                            <Text
                                style={{ lineHeight: getScaleSize(24) }}
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Je déclare pouvoir me présenter à l’adresse aux horaires séléctionnés.'}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* <View style={styles.errorText}>
                <Text
                    font={FONTS.Regular}
                    color={COLORS._FF5959}
                    size={getScaleSize(12)}>
                    {'Il te reste x créneau.x à sélectionner'}
                </Text>
            </View> */}
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate(SCREENS.CourseRegistrationConfirm.identifier)
                }}
                style={[styles.btnnView, { marginTop: getScaleSize(16) }]}>
                <Text
                    font={FONTS.Semi_Bold}
                    color={COLORS._FFF}
                    size={getScaleSize(16)}>
                    {'Suivant (3/3)'}
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
        marginTop: getScaleSize(16),
        marginBottom: getScaleSize(40),
        backgroundColor: COLORS._2B1B4D,
        borderRadius: getScaleSize(16),
        padding: getScaleSize(16)
    },
    timeIcon: {
        width: getScaleSize(24),
        height: getScaleSize(24),
        marginRight: getScaleSize(4),
        tintColor: COLORS._FFF
    },
    flexBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btnnView: {
        marginBottom: getScaleSize(8),
        paddingVertical: getScaleSize(16),
        marginHorizontal: getScaleSize(24),
        alignItems: 'center',
        backgroundColor: COLORS._B058F8,
        borderRadius: getScaleSize(16)
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
    textStyle: {
        marginVertical: getScaleSize(16),
        lineHeight: getScaleSize(24)
    },
    mapImg: {
        width: Dimensions.get('window').width - 48,
        height: getScaleSize(105),
        marginBottom: getScaleSize(24),
        borderRadius: getScaleSize(14)
    },
    modifierView: {
        alignItems: 'center'
    },
    chackBoxView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    checkBox: {
        height: getScaleSize(18),
        width: getScaleSize(18),
        borderWidth: 2,
        borderColor: COLORS._FFF,
        borderRadius: getScaleSize(4),
        marginRight: getScaleSize(8),
        margin: getScaleSize(4),
    },
    availabilityBox: {
        backgroundColor: COLORS._493672,
        borderRadius: getScaleSize(14),
        paddingHorizontal: getScaleSize(8),
        paddingTop: getScaleSize(8),
        paddingBottom: getScaleSize(4),
        marginBottom: getScaleSize(24),
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