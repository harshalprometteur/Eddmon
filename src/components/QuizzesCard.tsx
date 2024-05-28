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
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <ScrollView style={{ height: getScaleSize(287) }} showsVerticalScrollIndicator={false}>
                    {item.map((e, index) => {
                        return (
                            <TouchableOpacity style={styles.itemContainer} key={e.id}>
                                <View style={styles.numberText}>
                                    <Text
                                        font={FONTS.Semi_Bold}
                                        color={TextColor(index)}
                                        size={getScaleSize(16)}>
                                        {'#'}{e.id}
                                    </Text>
                                </View>
                                <View style={styles.profileView} />
                                <Text
                                    style={{ flex: 1.0 }}
                                    font={FONTS.Regular}
                                    color={COLORS._202020}
                                    size={getScaleSize(14)}>
                                    {e.title}
                                </Text>
                                <Text
                                    font={FONTS.Semi_Bold}
                                    color={COLORS._202020}
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
                            color={COLORS._ACACAB}
                            size={getScaleSize(16)}>
                            {'#22'}
                        </Text>
                    </View>
                    <View style={styles.profileView} />
                    <Text
                        style={{ flex: 1.0 }}
                        font={FONTS.Regular}
                        color={COLORS._202020}
                        size={getScaleSize(14)}>
                        {'Felipe Gueganou'}
                    </Text>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._202020}
                        size={getScaleSize(16)}>
                        {'12 P.M.'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnView}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FF7020}
                        size={getScaleSize(16)}>
                        {'End of competition in hh:mm'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS._FFDDCA,
        marginLeft: getScaleSize(34),
        marginRight: getScaleSize(24),
        marginVertical: getScaleSize(16),
        borderRadius: getScaleSize(44),
    },
    mainContainer: {
        backgroundColor: COLORS._FFF,
        borderRadius: getScaleSize(40),
        marginTop: -10,
        marginLeft: -10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: COLORS._FFDDCA,
        padding: getScaleSize(16),
        width: Dimensions.get('window').width - getScaleSize(50) - 10,
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
        backgroundColor: 'grey',
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
        backgroundColor: COLORS._FFDDCA,
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