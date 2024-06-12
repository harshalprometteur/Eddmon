import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

//COMPONENTS
import { Header, Text } from '../components'

//ASSETS & CONSTANT
import { COLORS, FONTS, IMAGES } from '../assets'
import { getScaleSize } from '../constant'

//SCREENS
import { SCREENS } from '.'

export default function CourseRegistration(props: any) {

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
            isDarkBg={true}
            onBack={() => { props.navigation.goBack() }} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.newHeader}>
                    <View style={styles.headerText}>
                        <Text
                            font={FONTS.italic_Bold}
                            color={COLORS._FFF}
                            size={getScaleSize(31)}>
                            {'Julie'}
                        </Text>
                        <View style={styles.dotView} />
                        <Text
                            font={FONTS.Semi_Bold}
                            color={COLORS._FFF}
                            size={getScaleSize(16)}>
                            {'3ème'}
                        </Text>

                    </View>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(16)}>
                        {'Particularité.s'}
                    </Text>
                    <View style={styles.btnView}>
                        <Text
                            font={FONTS.Semi_Bold}
                            color={COLORS._FFF}
                            size={getScaleSize(14)}>
                            {'Haut Potentiel Intellectuel'}
                        </Text>
                    </View>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(16)}>
                        {'Commentaires'}
                    </Text>
                    <Text
                        style={{ marginTop: getScaleSize(16), marginBottom: getScaleSize(24), lineHeight: getScaleSize(24) }}
                        font={FONTS.Regular}
                        color={COLORS._807694}
                        size={getScaleSize(14)}>
                        {"Julie est en première avec la spé Pysique, il des difficultés avec la méthodologie et sa motivation, il n'a pas de problème de compréhension mais plus de restitution"}
                    </Text>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(16)}>
                        {'Passions'}
                    </Text>
                    <View style={styles.flexView}>
                        <View style={[styles.btnsView, { backgroundColor: COLORS._70AAB7, }]}>
                            <Text
                                font={FONTS.Semi_Bold}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Football'}
                            </Text>
                        </View>
                        <View style={[styles.btnsView, { backgroundColor: COLORS._70AAB7, }]}>
                            <Text
                                font={FONTS.Semi_Bold}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Tennis'}
                            </Text>
                        </View>
                        <View style={[styles.btnsView, { backgroundColor: COLORS._70AAB7, }]}>
                            <Text
                                font={FONTS.Semi_Bold}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Natation'}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mainView}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(19)}>
                        {'La mission'}
                    </Text>
                    <View style={styles.btnBox}>
                        <Image style={styles.starIcon} source={IMAGES.starIcon} />
                        <Text
                            font={FONTS.italic_Bold}
                            color={COLORS._CF9BFB}
                            size={getScaleSize(25)}>
                            {'Remise à niveau'}
                        </Text>
                    </View>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._807694}
                        size={getScaleSize(16)}>
                        {'Tuteur recherché'}
                    </Text>
                    <View style={[styles.flexView, { marginBottom: getScaleSize(32) }]}>
                        <View style={[styles.btnsView, { backgroundColor: COLORS._FFF, }]}>
                            <Text
                                font={FONTS.Semi_Bold}
                                color={COLORS._70AAB7}
                                size={getScaleSize(14)}>
                                {'Stricte'}
                            </Text>
                        </View>
                        <View style={[styles.btnsView, { backgroundColor: COLORS._FFF, }]}>
                            <Text
                                font={FONTS.Semi_Bold}
                                color={COLORS._70AAB7}
                                size={getScaleSize(14)}>
                                {'Pédagogue'}
                            </Text>
                        </View>
                    </View>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._807694}
                        size={getScaleSize(16)}>
                        {'Matières'}
                    </Text>
                    <View style={[styles.flexView, { marginBottom: getScaleSize(32) }]}>
                        <View style={[styles.btnsView, { backgroundColor: COLORS._70AAB7, }]}>
                            <Text
                                font={FONTS.Semi_Bold}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Mathématiques'}
                            </Text>
                        </View>
                        <View style={[styles.btnsView, { backgroundColor: COLORS._70AAB7, }]}>
                            <Text
                                font={FONTS.Semi_Bold}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Histoire'}
                            </Text>
                        </View>
                        <View style={[styles.btnsView, { backgroundColor: COLORS._70AAB7, }]}>
                            <Text
                                font={FONTS.Semi_Bold}
                                color={COLORS._FFF}
                                size={getScaleSize(14)}>
                                {'Physique'}
                            </Text>
                        </View>
                    </View>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._807694}
                        size={getScaleSize(16)}>
                        {'Rythme et durée'}
                    </Text>
                    <View style={styles.locationView}>
                        <View style={styles.flexBox}>
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
                        <View style={[styles.flexBox, { marginTop: getScaleSize(16) }]}>
                            <Image source={IMAGES.timeIcon} style={styles.timeIcon} />
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
                        <View style={styles.flexBox}>
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
                    </View>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._807694}
                        size={getScaleSize(16)}>
                        {'Adresse de la mission'}
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
                        {'Rémunération'}
                    </Text>
                    <Text
                        style={{ marginTop: getScaleSize(16) }}
                        font={FONTS.italic_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(25)}>
                        {'75€'}
                        <Text
                            font={FONTS.Regular}
                            color={COLORS._FFF}
                            size={getScaleSize(14)}>
                            {' / semaine'}
                        </Text>
                    </Text>
                </View>
            </ScrollView>
            <TouchableOpacity
                onPress={() => {
                    props.navigation.navigate(SCREENS.CourseRegistrationSecond.identifier)
                }}
                style={styles.btnnView}>
                <Text
                    font={FONTS.Semi_Bold}
                    color={COLORS._FFF}
                    size={getScaleSize(16)}>
                    {'Postuler'}
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
    newHeader: {
        marginTop: getScaleSize(40),
        marginHorizontal: getScaleSize(24),
        marginBottom: getScaleSize(40),
        backgroundColor: COLORS._2B1B4D,
        padding: getScaleSize(16),
        borderRadius: getScaleSize(14)
    },
    headerText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: getScaleSize(24)

    },
    dotView: {
        width: getScaleSize(6),
        height: getScaleSize(6),
        backgroundColor: COLORS._FFF,
        borderRadius: getScaleSize(10),
        marginHorizontal: getScaleSize(16),
    },
    mainView: {
        marginHorizontal: getScaleSize(24),
        marginBottom: getScaleSize(16)
    },
    btnView: {
        backgroundColor: COLORS._70AAB7,
        paddingHorizontal: getScaleSize(10),
        paddingVertical: getScaleSize(8),
        alignSelf: 'flex-start',
        marginTop: getScaleSize(16),
        marginBottom: getScaleSize(24),
        borderRadius: getScaleSize(14)
    },
    btnsView: {
        paddingHorizontal: getScaleSize(10),
        paddingVertical: getScaleSize(8),
        marginRight: getScaleSize(8),
        borderRadius: getScaleSize(14)
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: getScaleSize(16),
    },
    btnBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: getScaleSize(16),
        borderRadius: getScaleSize(60),
        marginVertical: getScaleSize(32),
        borderWidth: 4,
        borderColor: COLORS._CF9BFB
    },
    starIcon: {
        height: getScaleSize(24),
        width: getScaleSize(24),
        marginRight: getScaleSize(12),
        tintColor: COLORS._CF9BFB
    },
    locationView: {
        marginTop: getScaleSize(16),
        marginBottom: getScaleSize(32),
        backgroundColor: COLORS._2B1B4D,
        padding: getScaleSize(16),
        borderRadius: getScaleSize(14)
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
    textStyle: {
        marginVertical: getScaleSize(16),
        lineHeight: getScaleSize(24)
    },
    mapImg: {
        width: Dimensions.get('window').width - 48,
        height: getScaleSize(105),
        marginBottom: getScaleSize(32),
        borderRadius: getScaleSize(14)
    },
    btnnView: {
        marginBottom: getScaleSize(24),
        marginTop: getScaleSize(16),
        paddingVertical: getScaleSize(16),
        marginHorizontal: getScaleSize(24),
        alignItems: 'center',
        backgroundColor: COLORS._B058F8,
        borderRadius: getScaleSize(16)
    },
    smallBox: {
        paddingHorizontal: getScaleSize(7),
        borderRadius: getScaleSize(26)
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
})