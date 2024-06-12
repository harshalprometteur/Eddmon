import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, TextInput, View } from 'react-native'

//ASSETS & CONSTANT
import { FONTS, IMAGES, COLORS } from '../assets'
import { getScaleSize } from '../constant'

//SCREENS
import { Text } from '.'


export default function GeneralCoursCompo(props: any) {

    const [password, setPassword] = useState('')

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <Text
                font={FONTS.Bold}
                color={COLORS._202020}
                size={getScaleSize(20)}>
                {'Général'}
            </Text>

            <Text
                style={{ marginTop: getScaleSize(16) }}
                font={FONTS.Regular}
                color={COLORS._202020}
                size={getScaleSize(14)}>
                {'Élève'}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    selectTextOnFocus={false}
                    placeholderTextColor={COLORS._6B7280}
                    style={styles.inputStyle}
                    placeholder={'-'}
                />
                <Image style={styles.productImage} source={IMAGES.downarrow} />
            </View>

            <Text
                style={{ marginTop: getScaleSize(16) }}
                font={FONTS.Regular}
                color={COLORS._202020}
                size={getScaleSize(14)}>
                {'Date'}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    selectTextOnFocus={false}
                    placeholderTextColor={COLORS._6B7280}
                    style={styles.inputStyle}
                    placeholder={'jj/mm/aaaa'}
                />
                <Image style={styles.productImage} source={IMAGES.dateRange} />
            </View>

            <Text
                style={{ marginTop: getScaleSize(16) }}
                font={FONTS.Regular}
                color={COLORS._202020}
                size={getScaleSize(14)}>
                {'Matière'}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    selectTextOnFocus={false}
                    placeholderTextColor={COLORS._6B7280}
                    style={styles.inputStyle}
                    placeholder={'-'}
                />
                <Image style={styles.productImage} source={IMAGES.downarrow} />
            </View>

            <Text
                style={{ marginTop: getScaleSize(16) }}
                font={FONTS.Regular}
                color={COLORS._202020}
                size={getScaleSize(14)}>
                {'Durée'}
            </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    value={password}
                    onChangeText={(e) => setPassword(e)}
                    selectTextOnFocus={false}
                    placeholderTextColor={COLORS._6B7280}
                    style={styles.inputStyle}
                    placeholder={'-'}
                />
                <Image style={styles.productImage} source={IMAGES.downarrow} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: getScaleSize(24),
        backgroundColor: COLORS._211031,
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