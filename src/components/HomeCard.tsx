import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, IMAGES } from '../assets'
import { STRING, getScaleSize } from '../constant'
import { Text } from '.'

interface homeCardProps {
    isFromHome?: boolean | undefined
    onNext?: () => void,
}

export default function HomeCard(props: homeCardProps) {

    const item = [{ title: 'Mathématiques', id: 1 }, { title: 'Histoire', id: 2 }, { title: 'Physique', id: 3 }]
    const weekItem = [
        { title: 'Lun.', id: 1, slot: 1 },
        { title: 'Mar.', id: 2, slot: 1 },
        { title: 'Mer.', id: 3, slot: 2 },
        { title: 'Jeu.', id: 4, slot: 1 },
        { title: 'Ven.', id: 5, slot: 0 },
        { title: 'Sam.', id: 6, slot: 0 },
        { title: 'Dim.', id: 7, slot: 1 }]

    return (
        <View style={props.isFromHome ? styles.container : styles.itemContainer}>
            <View style={styles.mainContainer}>
                <View style={[styles.flexView, { marginBottom: getScaleSize(16) }]}>
                    <Image source={IMAGES.itemImg1} style={styles.categoryIcon} />
                    <View>
                        <View style={[styles.flexView, { marginBottom: getScaleSize(4) }]}>
                            <Text
                                font={FONTS.Semi_Bold}
                                color={COLORS._FFF}
                                size={getScaleSize(16)}>
                                {'Lilian'}
                            </Text>
                            <View style={styles.dottView} />
                            <Text
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(12)}>
                                {'3ème'}
                            </Text>
                        </View>
                        <Text
                            style={{ lineHeight: getScaleSize(20) }}
                            font={FONTS.Regular}
                            color={COLORS._807694}
                            size={getScaleSize(14)}>
                            {'Coding'}
                        </Text>
                        <Text
                            style={{ lineHeight: getScaleSize(20) }}
                            font={FONTS.Regular}
                            color={COLORS._807694}
                            size={getScaleSize(14)}>
                            {'à partir du 21/06/24'}
                        </Text>
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {item.map((e, index) => {
                        return (
                            <TouchableOpacity style={styles.tabView} key={e.id}>
                                <Text
                                    font={FONTS.Semi_Bold}
                                    color={COLORS._FFF}
                                    size={getScaleSize(14)}>
                                    {e.title}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
                <View style={styles.locationView}>
                    <View style={styles.flexView}>
                        {/* <Image source={IMAGES.mapIcon} style={styles.mapIcon} /> */}
                        <Text
                            font={FONTS.Regular}
                            color={COLORS._FFF}
                            size={getScaleSize(14)}>
                            {'17 Rue Trousseau, 750122 Paris'}
                        </Text>
                    </View>
                    <View style={[styles.flexView, { marginTop: getScaleSize(8) }]}>
                        {/* <Image source={IMAGES.timeIcon} style={styles.timeIcon} /> */}
                        <Text
                            font={FONTS.Regular}
                            color={COLORS._FFF}
                            size={getScaleSize(14)}>
                            {'3 x 1h30 '}
                            <Text
                                font={FONTS.Regular}
                                color={COLORS._807694}
                                size={getScaleSize(14)}>
                                {'/ semaine'}
                            </Text>
                        </Text>
                    </View>
                </View>
                <View>
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
                </View>
                <View style={styles.flexView}>
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
                <TouchableOpacity onPress={props.onNext} style={styles.btnView}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(16)}>
                        {STRING.intéressé}
                    </Text>
                </TouchableOpacity>
                {props.isFromHome &&
                    <TouchableOpacity style={styles.btnBorderView}>
                        <Text
                            font={FONTS.Semi_Bold}
                            color={COLORS._B058F8}
                            size={getScaleSize(16)}>
                            {STRING.refuser}
                        </Text>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - getScaleSize(60),
    },
    itemContainer: {
        width: Dimensions.get('window').width - getScaleSize(48),
    },
    mainContainer: {
        backgroundColor: COLORS._2B1B4D,
        borderRadius: getScaleSize(14),
        padding: getScaleSize(16),
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryIcon: {
        width: getScaleSize(69),
        height: getScaleSize(69),
        marginRight: getScaleSize(16)
    },
    dottView: {
        width: getScaleSize(3),
        height: getScaleSize(3),
        borderRadius: getScaleSize(3),
        backgroundColor: COLORS._FFF,
        marginHorizontal: getScaleSize(10)
    },
    tabView: {
        backgroundColor: COLORS._678BDE,
        paddingHorizontal: getScaleSize(10),
        paddingVertical: getScaleSize(8),
        borderRadius: getScaleSize(14),
        marginRight: getScaleSize(8)
    },
    mapIcon: {
        width: getScaleSize(20),
        height: getScaleSize(20),
        marginRight: getScaleSize(2),
    },
    timeIcon: {
        width: getScaleSize(24),
        height: getScaleSize(24),
        marginRight: getScaleSize(4),
    },
    locationView: {
        marginTop: getScaleSize(16),
        marginBottom: getScaleSize(8)
    },
    availabilityBox: {
        backgroundColor: COLORS._493672,
        borderRadius: getScaleSize(14),
        paddingHorizontal: getScaleSize(8),
        paddingTop: getScaleSize(10),
        paddingBottom: getScaleSize(4),
        marginBottom: getScaleSize(8),
        marginTop: getScaleSize(2)
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
    btnView: {
        backgroundColor: COLORS._B058F8,
        borderRadius: getScaleSize(14),
        paddingVertical: getScaleSize(16),
        alignItems: 'center',
        marginTop: getScaleSize(16)
    },
    btnBorderView: {
        borderRadius: getScaleSize(14),
        paddingVertical: getScaleSize(16),
        alignItems: 'center',
        borderColor: COLORS._B058F8,
        borderWidth: 2,
        marginTop: getScaleSize(8)
    }
})