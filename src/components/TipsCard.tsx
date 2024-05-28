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
            <View style={styles.mainContainer}>
            </View>
            <View style={styles.containerOne}>
                <ImageBackground
                    resizeMode='cover'
                    source={IMAGES.itemImage}
                    style={styles.backgroundImageContainer} >
                    <TouchableOpacity style={styles.btnView}>
                        <Text
                            font={FONTS.Regular}
                            color={COLORS._3C7F0D}
                            size={getScaleSize(14)}>
                            {'€20 offered on Amazon'}
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.blankView} />
                    <Image source={IMAGES.itemLogo} style={styles.itemLogo} />
                    <Text
                        font={FONTS.italic_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(20)}>
                        {'Find your insurance\neasily'}
                    </Text>
                    <Text
                        style={{ lineHeight: getScaleSize(24), marginTop: getScaleSize(8) }}
                        font={FONTS.Regular}
                        color={COLORS._FFF}
                        size={getScaleSize(14)}>
                        {'Coover allows you to compare and take out a contract according to your needs in just a few clicks.'}
                    </Text>
                </ImageBackground>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - getScaleSize(70),
        marginLeft: getScaleSize(16),
        aspectRatio: 0.8
    },
    mainContainer: {
        position: 'absolute',
        top: getScaleSize(8),
        left: getScaleSize(8),
        bottom: 0,
        right: 0,
        backgroundColor: COLORS._D1FF92,
        borderRadius: getScaleSize(23)
    },
    containerOne: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: getScaleSize(8),
        right: getScaleSize(8),
        backgroundColor: COLORS._000,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: COLORS._D1FF92,
        borderRadius: getScaleSize(14),
    },
    backgroundImageContainer: {
        flex: 1.0,
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
    blankView: {
       flex: 1.0
    },
    itemLogo: {
        width: getScaleSize(80),
        height: getScaleSize(26),
        marginBottom: getScaleSize(8)
    }
})