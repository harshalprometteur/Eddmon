import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, IMAGES } from '../assets'
import { STRING, getScaleSize } from '../constant'
import { Text } from '.'

interface homeCardProps {
    isFromHome?: boolean | undefined
}

export default function HomeCard(props: homeCardProps) {

    const item = [{ title: 'Mathématiques', id: 1 }, { title: 'Histoire', id: 2 }, { title: 'Physique', id: 3 }]
    const weekItem = [
        { title: 'Mon.', id: 1, slot: 1 },
        { title: 'Mar.', id: 2, slot: 1 },
        { title: 'Sea.', id: 3, slot: 2 },
        { title: 'Game.', id: 4, slot: 1 },
        { title: 'Fri.', id: 5, slot: 0 },
        { title: 'Sat.', id: 6, slot: 0 },
        { title: 'Sun.', id: 7, slot: 1 }]

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={[styles.flexView, { marginBottom: getScaleSize(16) }]}>
                    <Image source={IMAGES.category} style={styles.categoryIcon} />
                    <View>
                        <View style={[styles.flexView, { marginBottom: getScaleSize(4) }]}>
                            <Text
                                font={FONTS.italic_Bold}
                                color={COLORS._FFF}
                                size={getScaleSize(25)}>
                                {'Lilian'}
                            </Text>
                            <View style={styles.dottView} />
                            <Text
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(16)}>
                                {'3ème'}
                            </Text>
                        </View>
                        <Text
                            font={FONTS.Regular}
                            color={COLORS._FFF}
                            size={getScaleSize(12)}>
                            {'Coding'}
                        </Text>
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {item.map((e, index) => {
                        return (
                            <TouchableOpacity style={styles.tabView} key={e.id}>
                                <Text
                                    font={FONTS.Regular}
                                    color={COLORS._33B6FF}
                                    size={getScaleSize(14)}>
                                    {e.title}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
                <View style={styles.locationView}>
                    <View style={styles.flexView}>
                        <Image source={IMAGES.mapIcon} style={styles.mapIcon} />
                        <Text
                            font={FONTS.Medium}
                            color={COLORS._FFF}
                            size={getScaleSize(14)}>
                            {'17 Rue Trousseau, 750122 Paris'}
                        </Text>
                    </View>
                    <View style={[styles.flexView, { marginTop: getScaleSize(8) }]}>
                        <Image source={IMAGES.timeIcon} style={styles.timeIcon} />
                        <Text
                            font={FONTS.Medium}
                            color={COLORS._FFF}
                            size={getScaleSize(14)}>
                            {'3 x 1h30 / week'}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text
                        font={FONTS.SemiBold_Italic}
                        color={COLORS._004070}
                        size={getScaleSize(14)}>
                        {'Availability'}
                    </Text>
                    <View style={styles.availabilityBox}>
                        {weekItem.map((e, index) => {
                            return (
                                <View key={e.id} style={styles.weekView}>
                                    <View style={{ width: getScaleSize(50) }}>
                                        <Text
                                            font={FONTS.Regular}
                                            color={COLORS._004070}
                                            size={getScaleSize(14)}>
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
                                                    {'Xh-Xh.'}
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
                                        {e.slot == 2 ?
                                            <View style={[styles.smallBox, { backgroundColor: COLORS._FEE1DD, }]}>
                                                <Text
                                                    font={FONTS.Medium}
                                                    color={COLORS._004070}
                                                    size={getScaleSize(12)}>
                                                    {'Xh-Xh.'}
                                                </Text>
                                            </View>
                                            :
                                            <View style={styles.smallBox} >
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
                </View>
                <TouchableOpacity style={styles.btnView}>
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
                            color={COLORS._8118D7}
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
        backgroundColor: COLORS._004070,
        marginLeft: getScaleSize(34),
        marginRight: getScaleSize(24),
        marginVertical: getScaleSize(16),
        borderWidth: 1,
        borderColor: COLORS._004070,
        borderRadius: getScaleSize(23),
    },
    mainContainer: {
        backgroundColor: COLORS._33B6FF,
        borderRadius: getScaleSize(14),
        marginTop: -10,
        marginLeft: -10,
        marginBottom: 10,
        padding: getScaleSize(16),
        width: Dimensions.get('window').width - getScaleSize(50) - 10,
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    categoryIcon: {
        width: getScaleSize(50),
        height: getScaleSize(50),
        marginRight: getScaleSize(16)
    },
    dottView: {
        width: getScaleSize(6),
        height: getScaleSize(6),
        borderRadius: getScaleSize(3),
        backgroundColor: COLORS._FFF,
        marginHorizontal: getScaleSize(16)
    },
    tabView: {
        backgroundColor: COLORS._FFF,
        paddingHorizontal: getScaleSize(10),
        paddingVertical: getScaleSize(8),
        borderRadius: getScaleSize(7),
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
        backgroundColor: COLORS._E3F3FF,
        borderRadius: getScaleSize(14),
        paddingHorizontal: getScaleSize(8),
        paddingTop: getScaleSize(8),
        paddingBottom: getScaleSize(4),
        marginBottom: getScaleSize(16),
        marginTop: getScaleSize(2)
    },
    weekView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    wightBox: {
        backgroundColor: COLORS._FFF,
        borderRadius: getScaleSize(4),
        flex: 1.0,
        marginLeft: getScaleSize(8),
        marginBottom: getScaleSize(4),
        paddingVertical: getScaleSize(3),
        paddingLeft: getScaleSize(20),
        flexDirection: 'row',
        alignItems: 'center'
    },
    smallBox: {
        marginHorizontal: getScaleSize(6),
        paddingHorizontal: getScaleSize(8),
        borderRadius: getScaleSize(4),
        paddingVertical: getScaleSize(2)
    },
    btnView: {
        backgroundColor: COLORS._8118D7,
        borderRadius: getScaleSize(14),
        paddingVertical: getScaleSize(16),
        alignItems: 'center'
    },
    btnBorderView: {
        backgroundColor: COLORS._FFF,
        borderRadius: getScaleSize(14),
        paddingVertical: getScaleSize(16),
        alignItems: 'center',
        borderColor: COLORS._8118D7,
        borderWidth: 2,
        marginTop: getScaleSize(8)
    }
})