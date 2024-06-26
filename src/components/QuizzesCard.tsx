import { Dimensions, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, IMAGES } from '../assets'
import { getScaleSize } from '../constant'
import { Text } from '.'


export default function QuizzesCard() {

    const item = [
        { title: 'Amine Latito', id: 1 },
        { title: 'Kathryn', id: 2 },
        { title: 'Jane Cooper', id: 3 },
        { title: 'Louis Pasteur', id: 4 },
        { title: 'Victor', id: 5 },
        { title: 'Gérard Depardieu', id: 6 }
    ]

    function TextColor(index: any) {
        if (index == 0) {
            return COLORS._8118D7
        } else if (index == 1 || index == 2) {
            return COLORS._202020
        } else {
            return COLORS._ACACAB
        }
    }

    return (
        <View style={styles.mainContainer}>
            <ScrollView style={{ height: getScaleSize(287) }} showsVerticalScrollIndicator={false}>
                {item.map((e, index) => {
                    return (
                        <TouchableOpacity style={styles.itemContainer} key={e.id}>
                            <View style={styles.numberText}>
                                <Text
                                    font={FONTS.Bold}
                                    color={COLORS._FFF}
                                    size={getScaleSize(14)}>
                                    {'#'}{e.id}
                                </Text>
                            </View>
                            <View style={styles.profileView} />
                            <Text
                                style={{ flex: 1.0 }}
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(12)}>
                                {e.title}
                            </Text>
                            <Text
                                font={FONTS.Semi_Bold}
                                color={COLORS._807694}
                                size={getScaleSize(16)}>
                                {'36h'}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.bottView} />
                <View style={styles.bottsView} />
                <View style={styles.bottsView} />
            </View>
            <TouchableOpacity style={styles.itemContainer}>
                <View style={styles.numberText}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(16)}>
                        {'#22'}
                    </Text>
                </View>
                <View style={styles.profileView} />
                <Text
                    style={{ flex: 1.0 }}
                    font={FONTS.Regular}
                    color={COLORS._FFF}
                    size={getScaleSize(14)}>
                    {'Felipe Gueganou'}
                </Text>
                <Text
                    font={FONTS.Semi_Bold}
                    color={COLORS._807694}
                    size={getScaleSize(16)}>
                    {'12h'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnView}>
                <Text
                    font={FONTS.Semi_Bold}
                    color={COLORS._FF7020}
                    size={getScaleSize(16)}>
                    {'Fin du concours dans hh:mm'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLORS._2B1B4D,
        borderRadius: getScaleSize(40),
        padding: getScaleSize(16),
        marginHorizontal: getScaleSize(24)
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: getScaleSize(5)
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    numberText: {
        width: getScaleSize(44),
        alignItems: 'center',
        marginRight: getScaleSize(18)
    },
    profileView: {
        width: getScaleSize(42),
        height: getScaleSize(42),
        backgroundColor: 'lightgrey',
        marginRight: getScaleSize(16),
        borderRadius: getScaleSize(21)
    },
    dottView: {
        width: getScaleSize(6),
        height: getScaleSize(6),
        borderRadius: getScaleSize(3),
        backgroundColor: COLORS._FFF,
        marginHorizontal: getScaleSize(16)
    },

    btnView: {
        backgroundColor: COLORS._FF9052,
        borderRadius: getScaleSize(7),
        paddingVertical: getScaleSize(16),
        alignItems: 'center',
        marginTop: getScaleSize(16)
    },
    btnBorderView: {
        backgroundColor: COLORS._FFF,
        borderRadius: getScaleSize(14),
        paddingVertical: getScaleSize(16),
        alignItems: 'center',
        borderColor: COLORS._8118D7,
        borderWidth: 2,
        marginTop: getScaleSize(8)
    },
    bottView: {
        width: getScaleSize(6),
        height: getScaleSize(6),
        backgroundColor: COLORS._8118D7,
        marginTop: getScaleSize(16),
        borderRadius: getScaleSize(42),
        marginBottom: getScaleSize(8)
    },
    bottsView: {
        width: getScaleSize(6),
        height: getScaleSize(9),
        backgroundColor: COLORS._8118D7,
        marginBottom: getScaleSize(8),
        borderRadius: getScaleSize(42),
    }
})