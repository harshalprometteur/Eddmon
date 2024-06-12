import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'

//COMPONENTS
import { Header, Input, Text } from '../components'

//ASSETS & CONSTANT
import { COLORS, FONTS, IMAGES } from '../assets'
import { getScaleSize } from '../constant'

//SCREENS
import { SCREENS } from '.'

export default function CourseRegistrationConfirm(props: any) {

    const weekItem = [
        { title: 'Mer.', id: 2, slot: 2 },
        { title: 'Ven.', id: 3, slot: 1 },
    ]

    return (
        <View style={styles.container}>
            <Header
                onBack={() => { props.navigation.goBack() }}
                title='Postuler' />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.headerTopText}>
                    <Text
                        font={FONTS.italic_Bold}
                        color={COLORS._202020}
                        size={getScaleSize(20)}>
                        {'Récapitulatif'}
                    </Text>
                </View>
                <View style={styles.headerText}>
                    <Text
                        font={FONTS.italic_Bold}
                        color={COLORS._202020}
                        size={getScaleSize(25)}>
                        {'Julie'}
                    </Text>
                    <View style={styles.dotView} />
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._202020}
                        size={getScaleSize(16)}>
                        {'3ème'}
                    </Text>
                </View>
                <View style={styles.mainView}>
                    <View style={styles.btnBox}>
                        <Image style={styles.starIcon} source={IMAGES.starIcon} />
                        <Text
                            font={FONTS.italic_Bold}
                            color={COLORS._8118D7}
                            size={getScaleSize(25)}>
                            {'Remise à niveau'}
                        </Text>
                    </View>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._B4B1AD}
                        size={getScaleSize(14)}>
                        {'Particularité.s'}
                    </Text>
                    <View style={styles.btnView}>
                        <Text
                            font={FONTS.Regular}
                            color={COLORS._097D55}
                            size={getScaleSize(14)}>
                            {'Haut Potentiel Intellectuel'}
                        </Text>
                    </View>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._B4B1AD}
                        size={getScaleSize(14)}>
                        {'Commentaires'}
                    </Text>
                    <Text
                        style={{ marginTop: getScaleSize(16), marginBottom: getScaleSize(24), lineHeight: getScaleSize(24) }}
                        font={FONTS.Regular}
                        color={COLORS._202020}
                        size={getScaleSize(14)}>
                        {"Julie est en première avec la spé Pysique, il des difficultés avec la méthodologie et sa motivation, il n'a pas de problème de compréhension mais plus de restitution"}
                    </Text>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._B4B1AD}
                        size={getScaleSize(14)}>
                        {'Matières'}
                    </Text>
                    <View style={styles.flexView}>
                        <View style={[styles.btnsView, { backgroundColor: COLORS._E3F3FF, }]}>
                            <Text
                                font={FONTS.Regular}
                                color={COLORS._186ADE}
                                size={getScaleSize(14)}>
                                {'Mathématiques'}
                            </Text>
                        </View>
                        <View style={[styles.btnsView, { backgroundColor: COLORS._E3F3FF, }]}>
                            <Text
                                font={FONTS.Regular}
                                color={COLORS._186ADE}
                                size={getScaleSize(14)}>
                                {'Histoire'}
                            </Text>
                        </View>
                        <View style={[styles.btnsView, { backgroundColor: COLORS._E3F3FF, }]}>
                            <Text
                                font={FONTS.Regular}
                                color={COLORS._186ADE}
                                size={getScaleSize(14)}>
                                {'Physique'}
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginBottom: getScaleSize(24) }}>
                        <Text
                            font={FONTS.italic_Bold}
                            color={COLORS._202020}
                            size={getScaleSize(20)}>
                            {'Localisation'}
                        </Text>
                    </View>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._B4B1AD}
                        size={getScaleSize(14)}>
                        {'Adresse de la mission'}
                    </Text>
                    <Text
                        style={styles.textStyle}
                        font={FONTS.Regular}
                        color={COLORS._202020}
                        size={getScaleSize(14)}>
                        {'17 Rue Trousseau\n75011 PARIS'}
                    </Text>
                    <Image source={IMAGES.mapImg} style={styles.mapImg} />
                    <Text
                        style={{ marginBottom: getScaleSize(24) }}
                        font={FONTS.italic_Bold}
                        color={COLORS._202020}
                        size={getScaleSize(20)}>
                        {'Planning proposé'}
                    </Text>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._B4B1AD}
                        size={getScaleSize(14)}>
                        {'Rythme et durée'}
                    </Text>
                    <View style={styles.locationView}>
                        <View style={styles.flexBox}>
                            <Image source={IMAGES.dateRange} style={styles.timeIcon} />
                            <Text
                                font={FONTS.Medium}
                                color={COLORS._202020}
                                size={getScaleSize(14)}>
                                {'22/03/2024'}
                                <Text
                                    font={FONTS.Regular}
                                    color={COLORS._202020}
                                    size={getScaleSize(14)}>
                                    {' au '}
                                </Text>
                                {'21/05/2024'}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.availabilityBox}>
                        {weekItem.map((e, index) => {
                            return (
                                <View key={e.id} style={styles.weekView}>
                                    <View style={{ width: getScaleSize(40) }}>
                                        <Text
                                            font={FONTS.Regular}
                                            color={COLORS._202020}
                                            size={getScaleSize(16)}>
                                            {e.title}
                                        </Text>
                                    </View>
                                    <View style={styles.wightBox}>
                                        {e.slot == 1 ?
                                            <View style={[styles.smallBox, { backgroundColor: COLORS._E3F3FF, }]}>
                                                <Text
                                                    font={FONTS.Medium}
                                                    color={COLORS._004070}
                                                    size={getScaleSize(12)}>
                                                    {'17h-19h'}
                                                </Text>
                                            </View>
                                            :
                                            <View style={styles.smallBox}>
                                                <Text
                                                    font={FONTS.Medium}
                                                    color={COLORS._004070}
                                                    size={getScaleSize(12)}>
                                                    {''}
                                                </Text>
                                            </View>
                                        }
                                        {e.slot == 2 ?
                                            <View style={[styles.smallBox, { backgroundColor: COLORS._FEE1DD, }]}>
                                                <Text
                                                    font={FONTS.Medium}
                                                    color={COLORS._004070}
                                                    size={getScaleSize(12)}>
                                                    {'14h-17h'}
                                                </Text>
                                            </View>
                                            :
                                            <View style={[styles.smallBox, { width: getScaleSize(52) }]} >
                                                <Text
                                                    font={FONTS.Medium}
                                                    color={COLORS._004070}
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
                            color={COLORS._202020}
                            size={getScaleSize(14)}>
                            {'Modifier'}
                        </Text>
                    </TouchableOpacity>
                    <Text
                        font={FONTS.Bold}
                        color={COLORS._202020}
                        size={getScaleSize(20)}>
                        {'Veux-tu ajouter des détails à ta candidature ?'}
                    </Text>
                    <View style={styles.inputView}>
                        <Text
                            font={FONTS.Regular}
                            color={COLORS._202020}
                            size={getScaleSize(14)}>
                            {'Ces détails sont pour l’équipe Eddmon'}
                        </Text>
                        <View style={{ marginTop: getScaleSize(8) }}>
                            <Input
                                inputStyle={{ height: getScaleSize(96), alignSelf: 'flex-start', marginVertical: getScaleSize(14) }}
                                placeholder='Rédige ici...'
                                // textAlignVertical={'top'}
                                multiline={true}

                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity
                onPress={() => {
                    // props.navigation.navigate(SCREENS.CourseRegistrationSecond.identifier)
                }}
                style={styles.btnnView}>
                <Text
                    font={FONTS.Semi_Bold}
                    color={COLORS._FFF}
                    size={getScaleSize(16)}>
                    {'Confirmer et postuler'}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    // props.navigation.navigate(SCREENS.CourseRegistrationSecond.identifier)
                }}
                style={styles.retourView}>
                <Text
                    style={{ textDecorationLine: 'underline' }}
                    font={FONTS.Semi_Bold}
                    color={COLORS._202020}
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
        backgroundColor: COLORS._FFF
    },
    headerText: {
        marginHorizontal: getScaleSize(24),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: getScaleSize(24)
    },
    headerTopText: {
        marginTop: getScaleSize(40),
        marginHorizontal: getScaleSize(24),
        marginBottom: getScaleSize(24)
    },
    dotView: {
        width: getScaleSize(6),
        height: getScaleSize(6),
        backgroundColor: COLORS._202020,
        borderRadius: getScaleSize(10),
        marginHorizontal: getScaleSize(16),
    },
    mainView: {
        marginHorizontal: getScaleSize(24),
        marginBottom: getScaleSize(16)
    },
    btnView: {
        backgroundColor: COLORS._C7ECD1,
        paddingHorizontal: getScaleSize(10),
        paddingVertical: getScaleSize(8),
        alignSelf: 'flex-start',
        marginTop: getScaleSize(16),
        marginBottom: getScaleSize(24),
        borderRadius: getScaleSize(7)
    },
    btnsView: {
        paddingHorizontal: getScaleSize(10),
        paddingVertical: getScaleSize(8),
        marginRight: getScaleSize(8),
        borderRadius: getScaleSize(7)
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: getScaleSize(16),
        marginBottom: getScaleSize(24)
    },
    btnBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS._EADDFC,
        justifyContent: 'center',
        paddingVertical: getScaleSize(16),
        borderRadius: getScaleSize(8),
        marginBottom: getScaleSize(24)
    },
    starIcon: {
        height: getScaleSize(24),
        width: getScaleSize(24),
        marginRight: getScaleSize(12),
        tintColor: COLORS._8118D7
    },
    locationView: {
        marginTop: getScaleSize(16),
    },
    timeIcon: {
        width: getScaleSize(24),
        height: getScaleSize(24),
        marginRight: getScaleSize(4),
        tintColor: COLORS._202020
    },
    flexBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    availabilityBox: {
        marginBottom: getScaleSize(24),
        marginTop: getScaleSize(16)
    },
    weekView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    wightBox: {
        backgroundColor: COLORS._F5F5F5,
        borderRadius: getScaleSize(6),
        flex: 1.0,
        marginLeft: getScaleSize(16),
        marginBottom: getScaleSize(4),
        paddingVertical: getScaleSize(6),
        paddingRight: getScaleSize(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    smallBox: {
        marginHorizontal: getScaleSize(6),
        paddingHorizontal: getScaleSize(22.5),
        borderRadius: getScaleSize(4),
        paddingVertical: getScaleSize(4)
    },
    textStyle: {
        marginVertical: getScaleSize(16),
        lineHeight: getScaleSize(24)
    },
    mapImg: {
        width: Dimensions.get('window').width - 48,
        height: getScaleSize(105),
        marginBottom: getScaleSize(24)
    },
    btnnView: {
        marginBottom: getScaleSize(16),
        marginTop: getScaleSize(16),
        paddingVertical: getScaleSize(16),
        marginHorizontal: getScaleSize(24),
        alignItems: 'center',
        backgroundColor: COLORS._8118D7,
        borderRadius: getScaleSize(16)
    },
    modifierView: {
        marginBottom: getScaleSize(24),
        alignItems: 'center'
    },
    inputView: {
        marginTop: getScaleSize(24)
    },
    retourView: {
        alignItems: 'center',
    }
})