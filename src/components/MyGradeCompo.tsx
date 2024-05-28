import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

//ASSETS & CONSTANT
import { FONTS, IMAGES, COLORS } from '../assets'
import { STRING, getScaleSize } from '../constant'

//SCREENS
import { Header, Text } from '.'

//PACKAGE
import SelectDropdown from 'react-native-select-dropdown'
import List from './List'

export default function MyGradeCompo(props: any) {

    const [selectAddress, setSelectAddress] = useState<string>('Mes élèves')
    const [selectStatus, setSelectStatus] = useState<string>('Statut')
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {

    }, [])


    const missionListData = [
        {
            title: 'Julie est très pédagogue...',
            date: '14/03',
            start: '5,0',
        }, {
            title: 'Julie est très pédagogue...',
            date: '14/03',
            start: '5,0',
        }, {
            title: 'Julie est très pédagogue...',
            date: '14/03',
            start: '5,0',
        }, {
            title: 'Julie est très pédagogue...',
            date: '14/03',
            start: '5,0',
        }, {
            title: 'Julie est très pédagogue...',
            date: '14/03',
            start: '5,0',
        }
    ]


    return (
        <View style={styles.container}>
            <View style={{ marginTop: getScaleSize(40), alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                <Text
                    font={FONTS.Bold}
                    color={COLORS._202020}
                    size={getScaleSize(25)}>
                    {'4,7/5'}
                </Text>
                <Image style={styles.startImage} source={IMAGES.start} />
            </View>

            <Text
                style={{ textAlign: 'center', marginTop: getScaleSize(25), marginHorizontal: getScaleSize(50) }}
                font={FONTS.Regular}
                color={COLORS._202020}
                size={getScaleSize(12)}>
                {'Ta note correspond à la moyenne de l’ensemble des notes déposées par les élèves et leur parents'}
            </Text>

            <Text
                style={{ marginVertical: getScaleSize(25) }}
                font={FONTS.Regular}
                color={COLORS._202020}
                size={getScaleSize(16)}>
                {'Tes 5 dernières notes'}
            </Text>

            <List isLoading={loading}>
                <FlatList
                    data={missionListData}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => `league-${index}`}
                    renderItem={({ item }) =>
                        <View>
                            <View style={{ backgroundColor: '#DEDEDE', flex: 1, height: getScaleSize(1) }} />
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                height: getScaleSize(52)
                            }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text
                                        font={FONTS.Regular}
                                        color={'#BDBDBD'}
                                        size={getScaleSize(14)}>
                                        {item?.start}
                                    </Text>
                                    <Image style={styles.startImage} source={IMAGES.start} />
                                </View>
                                <Text
                                    font={FONTS.Regular}
                                    color={COLORS._202020}
                                    size={getScaleSize(14)}>
                                    {item?.title}
                                </Text>
                                <Text
                                    font={FONTS.Regular}
                                    color={'#BCBCBC'}
                                    size={getScaleSize(14)}>
                                    {item?.date}
                                </Text>
                            </View>
                        </View>

                    }
                />
            </List>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: getScaleSize(24),
        flex: 1.0,
        backgroundColor: COLORS._FFF,
    },
    startImage: {
        height: getScaleSize(24),
        width: getScaleSize(24),
        resizeMode: 'contain',
        tintColor: COLORS._000
    },
})