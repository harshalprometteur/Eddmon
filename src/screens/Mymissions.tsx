import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

//ASSETS & CONSTANT
import { FONTS, COLORS } from '../assets'
import { STRING, getScaleSize } from '../constant'

//SCREENS
import { SCREENS } from '.'
import { Header, Text } from '../components'

//PACKAGE
import MissionsCompo from '../components/MissionsCompo'
import MyGradeCompo from '../components/MyGradeCompo'
import MyStudentCompo from '../components/MyStudentCompo'
import MyMissionsCompo from '../components/MyMissionsCompo'

export default function Mymissions(props: any) {

    useEffect(() => {

    }, [])

    const [select, setSelected] = useState<number>(1);

    function itemClick(number: any) {
        setSelected(number)
    }
    return (
        <View style={styles.container}>
            <Header
                title='Mes missions'
                onBack={() => {

                }} />
            <View style={styles.missionSelectStyle}>
                <Pressable onPress={() => {
                    itemClick(1)
                }} style={select == 1 ? styles.selectMission : styles.unselectMission}>
                    <Text
                        style={{ textAlign: 'center' }}
                        font={FONTS.Regular}
                        color={select == 1 ? COLORS._FFF : COLORS._ACACAB}
                        size={getScaleSize(16)}>
                        {STRING.missions}
                    </Text>
                </Pressable>
                <Pressable onPress={() => {
                    itemClick(2)
                }} style={select == 2 ? styles.selectMission : styles.unselectMission}>
                    <Text
                        style={{ textAlign: 'center' }}
                        font={FONTS.Regular}
                        color={select == 2 ? COLORS._FFF : COLORS._ACACAB}
                        size={getScaleSize(16)}>
                        {STRING.Mesélèves}
                    </Text>
                </Pressable>
                <Pressable onPress={() => {
                    itemClick(3)
                }} style={select == 3 ? styles.selectMission : styles.unselectMission}>
                    <Text
                        style={{ textAlign: 'center' }}
                        font={FONTS.Regular}
                        color={select == 3 ? COLORS._FFF : COLORS._ACACAB}
                        size={getScaleSize(16)}>
                        {STRING.Manote}
                    </Text>
                </Pressable>
            </View>
            {
                select == 1 ?
                    <MissionsCompo navi={props.navigation} />
                    :
                    select == 2 ?
                        <MyStudentCompo />
                        :
                        <MyMissionsCompo />

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS._FFF,
    },
    missionSelectStyle: {
        marginTop: getScaleSize(40),
        height: getScaleSize(40),
        paddingHorizontal: getScaleSize(3),
        marginHorizontal: getScaleSize(16),
        borderRadius: getScaleSize(6),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS._F3F4F6,
    },
    selectMission: {
        backgroundColor: '#33B6FF',
        flex: 1,
        justifyContent: 'center',
        height: getScaleSize(35),
        borderRadius: getScaleSize(6),
    },
    unselectMission: {
        backgroundColor: COLORS._F3F4F6,
        flex: 1,
        justifyContent: 'center',
        height: getScaleSize(35),
        borderRadius: getScaleSize(6),
    },

})