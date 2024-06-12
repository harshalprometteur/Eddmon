import React, { useEffect, useState } from 'react'
import { Image, Pressable, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

//ASSETS & CONSTANT
import { FONTS, IMAGES, COLORS } from '../assets'
import { STRING, getScaleSize } from '../constant'

//SCREENS
import { SCREENS } from '.'
import { Header, Text } from '../components'
import Button from '../components/Button'
import GeneralCoursCompo from '../components/GeneralCoursCompo'
import NoteCoursCompo from '../components/NoteCoursCompo'
import ProgressCoursCompo from '../components/ProgressCoursCompo'

export default function Declareacourse(props: any) {

    useEffect(() => {

    }, [])
    const [selectWidth, setSelectWidth] = useState<any>('33%')

    return (
        <View style={styles.container}>
            <Header
                isDarkBg={true}
                title={STRING.declare_a_cours}
                onBack={() => {
                    props.navigation.goBack()
                }} />
            <View style={{
                marginVertical: getScaleSize(24),
                backgroundColor: COLORS._F5F5F5,
                height: getScaleSize(8),
                borderRadius: getScaleSize(44),
                width: '100%'
            }}>
                <View style={{
                    backgroundColor: COLORS._8118D7,
                    borderRadius: getScaleSize(44),
                    width: selectWidth,
                    height: getScaleSize(8),
                }} />
            </View>
            {
                selectWidth == '33%' ?
                    <GeneralCoursCompo />
                    :
                    selectWidth == '66%' ?
                        <NoteCoursCompo />
                        :
                        <ProgressCoursCompo />

            }

            <Button
                textSize={20}
                title={'Suivant'}
                textColor='white'
                onPress={() => {
                    if (selectWidth == '33%') {
                        setSelectWidth('66%')
                    } else if (selectWidth == '66%') {
                        setSelectWidth('100%')
                    } else {

                    }
                }} />
            {
                selectWidth == '66%' ?
                    <Pressable onPress={() => {
                        setSelectWidth('33%')
                    }}>
                        <Text
                            style={{ marginTop: getScaleSize(16), textAlign: 'center' }}
                            font={FONTS.Medium}
                            color={COLORS._202020}
                            size={getScaleSize(14)}>
                            {'Retour'}
                        </Text>
                    </Pressable>
                    :
                    selectWidth == '100%' ?
                        <Pressable onPress={() => {
                            setSelectWidth('66%')
                        }}>
                            <Text
                                style={{ marginTop: getScaleSize(16), textAlign: 'center' }}
                                font={FONTS.Medium}
                                color={COLORS._202020}
                                size={getScaleSize(14)}>
                                {'Retour'}
                            </Text>
                        </Pressable>
                        : null

            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        paddingHorizontal: getScaleSize(16),
        backgroundColor: COLORS._211031,
    },
    logoContainer: {
        flex: 1.0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoIcon: {
        width: getScaleSize(225),
        height: getScaleSize(51)
    }
})