import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, TextInput, View } from 'react-native'

//ASSETS & CONSTANT
import { FONTS, IMAGES, COLORS } from '../assets'
import { STRING, getScaleSize } from '../constant'

//SCREENS
import { Header, Input, Text } from '.'

//PACKAGE
import SelectDropdown from 'react-native-select-dropdown'
import List from './List'
import { SCREENS } from '../screens'

export default function NoteCoursCompo(props: any) {

    const [rateIndex1, setRateIndex1] = useState<number>(0)
    const [rateIndex2, setRateIndex2] = useState<number>(0)
    const [rateIndex3, setRateIndex3] = useState<number>(0)

    useEffect(() => {

    }, [])


    function rateone1() {
        if (rateIndex1 == 1 || rateIndex1 == 2 || rateIndex1 == 3 || rateIndex1 == 4 || rateIndex1 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    function ratetwo1() {
        if (rateIndex1 == 2 || rateIndex1 == 3 || rateIndex1 == 4 || rateIndex1 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    function ratethree1() {
        if (rateIndex1 == 3 || rateIndex1 == 4 || rateIndex1 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    function ratefour1() {
        if (rateIndex1 == 4 || rateIndex1 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    function ratefive1() {
        if (rateIndex1 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    function rateone2() {
        if (rateIndex2 == 1 || rateIndex2 == 2 || rateIndex2 == 3 || rateIndex2 == 4 || rateIndex2 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    function ratetwo2() {
        if (rateIndex2 == 2 || rateIndex2 == 3 || rateIndex2 == 4 || rateIndex2 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    function ratethree2() {
        if (rateIndex2 == 3 || rateIndex2 == 4 || rateIndex2 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    function ratefour2() {
        if (rateIndex2 == 4 || rateIndex2 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    function ratefive2() {
        if (rateIndex2 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }



    function rateone3() {
        if (rateIndex3 == 1 || rateIndex3 == 2 || rateIndex3 == 3 || rateIndex3 == 4 || rateIndex3 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    function ratetwo3() {
        if (rateIndex3 == 2 || rateIndex3 == 3 || rateIndex3 == 4 || rateIndex3 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    function ratethree3() {
        if (rateIndex3 == 3 || rateIndex3 == 4 || rateIndex3 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    function ratefour3() {
        if (rateIndex3 == 4 || rateIndex3 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    function ratefive3() {
        if (rateIndex3 == 5) {
            return IMAGES.starIcon
        } else {
            return IMAGES.star
        }
    }

    return (
        <View style={styles.container}>
            <Text
                font={FONTS.Bold}
                color={COLORS._202020}
                size={getScaleSize(20)}>
                {'Notes'}
            </Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: getScaleSize(24) }}>
                <Text
                    font={FONTS.Regular}
                    color={COLORS._202020}
                    size={getScaleSize(14)}>
                    {'Compréhension'}
                </Text>
                <Image style={styles.productImage} source={IMAGES.info} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: getScaleSize(16), justifyContent: 'space-between', marginHorizontal: getScaleSize(16) }}>
                <Pressable onPress={() => { setRateIndex1(1) }}>
                    <Image style={styles.productImage} source={rateone1()} />
                </Pressable>
                <Pressable onPress={() => { setRateIndex1(2) }}>
                    <Image style={styles.productImage} source={ratetwo1()} />
                </Pressable>
                <Pressable onPress={() => { setRateIndex1(3) }}>
                    <Image style={styles.productImage} source={ratethree1()} />
                </Pressable>
                <Pressable onPress={() => { setRateIndex1(4) }}>
                    <Image style={styles.productImage} source={ratefour1()} />
                </Pressable>
                <Pressable onPress={() => { setRateIndex1(5) }}>
                    <Image style={styles.productImage} source={ratefive1()} />
                </Pressable>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: getScaleSize(24) }}>
                <Text
                    font={FONTS.Regular}
                    color={COLORS._202020}
                    size={getScaleSize(14)}>
                    {'Compréhension'}
                </Text>
                <Image style={styles.productImage} source={IMAGES.info} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: getScaleSize(16), justifyContent: 'space-between', marginHorizontal: getScaleSize(16) }}>
                <Pressable onPress={() => { setRateIndex2(1) }}>
                    <Image style={styles.productImage} source={rateone2()} />
                </Pressable>
                <Pressable onPress={() => { setRateIndex2(2) }}>
                    <Image style={styles.productImage} source={ratetwo2()} />
                </Pressable>
                <Pressable onPress={() => { setRateIndex2(3) }}>
                    <Image style={styles.productImage} source={ratethree2()} />
                </Pressable>
                <Pressable onPress={() => { setRateIndex2(4) }}>
                    <Image style={styles.productImage} source={ratefour2()} />
                </Pressable>
                <Pressable onPress={() => { setRateIndex2(5) }}>
                    <Image style={styles.productImage} source={ratefive2()} />
                </Pressable>
            </View>


            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: getScaleSize(24) }}>
                <Text
                    font={FONTS.Regular}
                    color={COLORS._202020}
                    size={getScaleSize(14)}>
                    {'Compréhension'}
                </Text>
                <Image style={styles.productImage} source={IMAGES.info} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: getScaleSize(16), justifyContent: 'space-between', marginHorizontal: getScaleSize(16) }}>
                <Pressable onPress={() => { setRateIndex3(1) }}>
                    <Image style={styles.productImage} source={rateone3()} />
                </Pressable>
                <Pressable onPress={() => { setRateIndex3(2) }}>
                    <Image style={styles.productImage} source={ratetwo3()} />
                </Pressable>
                <Pressable onPress={() => { setRateIndex3(3) }}>
                    <Image style={styles.productImage} source={ratethree3()} />
                </Pressable>
                <Pressable onPress={() => { setRateIndex3(4) }}>
                    <Image style={styles.productImage} source={ratefour3()} />
                </Pressable>
                <Pressable onPress={() => { setRateIndex3(5) }}>
                    <Image style={styles.productImage} source={ratefive3()} />
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: getScaleSize(24),
        backgroundColor: COLORS._FFF,
    },
    inputContainer: {
        marginTop: getScaleSize(8),
        borderColor: COLORS._DEDEDE,
        borderWidth: 1,
        borderRadius: getScaleSize(4),
        paddingRight: getScaleSize(8),
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputStyle: {
        paddingVertical: getScaleSize(12),
        paddingHorizontal: getScaleSize(16),
        flex: 1,
        fontSize: getScaleSize(14),
        color: COLORS._202020,
        fontFamily: FONTS.Regular
    },
    productImage: {
        height: getScaleSize(24),
        width: getScaleSize(24),
        marginLeft: getScaleSize(8),
        resizeMode: 'contain',
    },
})