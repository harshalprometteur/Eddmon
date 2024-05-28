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

export default function ProgressCoursCompo(props: any) {


    const [retour, setRetour] = useState('')
    const [axez, setAxes] = useState('')
    const [date, setDate] = useState('')

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <Text
                font={FONTS.Bold}
                color={COLORS._202020}
                size={getScaleSize(20)}>
                {'Déroulement du cours'}
            </Text>

            <Text
                style={{ marginTop: getScaleSize(16) }}
                font={FONTS.Regular}
                color={COLORS._202020}
                size={getScaleSize(14)}>
                {'Retour factuel'}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={retour}
                    onChangeText={(e) => setRetour(e)}
                    selectTextOnFocus={false}
                    multiline
                    placeholderTextColor={COLORS._6B7280}
                    style={styles.inputStyle}
                    placeholder={'Quelles objectifs avez-vous atteint pendant cette session ? Que s’est-il passé ?'}
                />
            </View>

            <Text
                style={{ marginTop: getScaleSize(24) }}
                font={FONTS.Regular}
                color={COLORS._202020}
                size={getScaleSize(14)}>
                {'Axes d’amélioration'}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={axez}
                    onChangeText={(e) => setAxes(e)}
                    selectTextOnFocus={false}
                    multiline
                    placeholderTextColor={COLORS._6B7280}
                    style={styles.inputStyle}
                    placeholder={'Quelles objectifs avez-vous atteint pendant cette session ? Que s’est-il passé ?'}
                />
            </View>

            <Text
                style={{ marginTop: getScaleSize(30) }}
                font={FONTS.Bold}
                color={COLORS._202020}
                size={getScaleSize(20)}>
                {'Prochain cours programmé ?'}
            </Text>

            <Text
                style={{ marginTop: getScaleSize(16) }}
                font={FONTS.Regular}
                color={COLORS._202020}
                size={getScaleSize(14)}>
                {'Date'}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={date}
                    onChangeText={(e) => setDate(e)}
                    selectTextOnFocus={false}
                    placeholderTextColor={COLORS._6B7280}
                    style={styles.inputStyle}
                    placeholder={'jj/mm/aaaa'}
                />
                <Image style={styles.productImage} source={IMAGES.dateRange} />
            </View>

            <View style={{ flexDirection: 'row', marginTop: getScaleSize(16), alignItems: 'center' }}>
                <Image style={styles.productImage} source={IMAGES.dateRange} />
                <Text
                    style={{ marginLeft: getScaleSize(8) }}
                    font={FONTS.Regular}
                    color={COLORS._202020}
                    size={getScaleSize(14)}>
                    {'Prochain cours non programmé'}
                </Text>
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