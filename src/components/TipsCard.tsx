import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, IMAGES } from '../assets'
import { getScaleSize } from '../constant'
import { Text } from '.'


export default function TipsCard() {

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
            <View style={styles.containerOne}>
                <TouchableOpacity style={styles.btnView}>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._3C7F0D}
                        size={getScaleSize(14)}>
                        {'€20 offered'}
                    </Text>
                </TouchableOpacity>
                <Image style={styles.imageView} source={IMAGES.itemImage} />
                {/* <Image source={IMAGES.itemLogo} style={styles.itemLogo} /> */}
                <Text
                    style={{ lineHeight: getScaleSize(28) }}
                    font={FONTS.Semi_Bold}
                    color={COLORS._FFF}
                    size={getScaleSize(19)}>
                    {'Trouve ton assurance facilement'}
                </Text>
                <Text
                    style={{ lineHeight: getScaleSize(21), marginTop: getScaleSize(8) }}
                    font={FONTS.Regular}
                    color={COLORS._807694}
                    size={getScaleSize(14)}>
                    {'Coover te permet de comparer et de souscrire un contrat en adapté à tes besoins en quelques clics.'}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - getScaleSize(70),
        marginLeft: getScaleSize(16),
    },
    containerOne: {
        backgroundColor: COLORS._2B1B4D,
        overflow: 'hidden',
        padding: getScaleSize(16),
        borderRadius: getScaleSize(14),
    },
    btnView: {
        backgroundColor: COLORS._D1FF92,
        borderRadius: getScaleSize(7),
        paddingVertical: getScaleSize(8),
        paddingHorizontal: getScaleSize(10),
        alignSelf: 'flex-start'
    },
    imageView: {
        width: '100%',
        height: getScaleSize(120),
        borderRadius: getScaleSize(14),
        marginVertical: getScaleSize(16)
    },
    itemLogo: {
        width: getScaleSize(80),
        height: getScaleSize(26),
        marginBottom: getScaleSize(8)
    }
})