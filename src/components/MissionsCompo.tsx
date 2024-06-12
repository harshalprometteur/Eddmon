import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'

//ASSETS & CONSTANT
import { FONTS, IMAGES, COLORS } from '../assets'
import { STRING, getScaleSize } from '../constant'

//SCREENS
import { Header, Text } from '../components'

//PACKAGE
import SelectDropdown from 'react-native-select-dropdown'
import List from '../components/List'
import { SCREENS } from '../screens'

export default function MissionsCompo(props: any) {

    const { navi } = props
    const [selectAddress, setSelectAddress] = useState<string>('Mes élèves')
    const [selectStatus, setSelectStatus] = useState<string>('Statut')
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {

    }, [])

    const stateArray = [
        {
            title: 'Mes élèves',
        },
        {
            title: 'Mes élèves',
        },
    ]

    const stateArray1 = [
        {
            title: 'Statut',
        },
        {
            title: 'Statut',
        },
    ]

    const missionListData = [
        {
            title: 'Anouk',
            date: '06/03/24',
            hours: '2h30',
            start: '5,0',
            status: 'modifier'
        }, {
            title: 'Mathi..',
            date: '05/03/24',
            hours: '1h30',
            start: '5,0',
            status: 'modifier'
        }, {
            title: 'Anouk',
            date: '02/03/24',
            hours: '2h30',
            start: '5,0',
            status: 'payé'
        }, {
            title: 'Anouk',
            date: '01/03/24',
            hours: '2h30',
            start: '5,0',
            status: 'payé'
        }, {
            title: 'Anouk',
            date: '28/02/24',
            hours: '2h30',
            start: '5,0',
            status: 'payé'
        }, {
            title: 'Anouk',
            date: '27/02/24',
            hours: '2h30',
            start: '5,0',
            status: 'payé'
        }, {
            title: 'Anouk',
            date: '25/03/24',
            hours: '2h30',
            start: '5,0',
            status: 'payé'
        },
    ]

    return (
        <View style={styles.container}>

            <View style={styles.fillterStyle}>
                <Image style={styles.missionFilter} source={IMAGES.missionFilter} />
                <SelectDropdown
                    data={stateArray}
                    onSelect={(selectedItem, index) => {
                        setSelectAddress(selectedItem.title)
                    }}
                    renderButton={(selectedItem, isOpened) => {
                        return (
                            <View style={styles.txtNumberWithBorder}>
                                <Text
                                    font={FONTS.Regular}
                                    color={'#6C7280'}
                                    size={getScaleSize(16)}>
                                    {(selectedItem && selectedItem.title) || selectAddress}
                                </Text>
                                <Image style={styles.productImage} source={IMAGES.downarrow} />
                            </View>
                        );
                    }}
                    renderItem={(item, index, isSelected) => {
                        return (
                            <View style={{ ...styles.txtNumberWithBorder1, ...(isSelected && { backgroundColor: '#D2D9DF' }) }} >
                                <Text
                                    font={FONTS.Regular}
                                    color={'#6C7280'}
                                    size={getScaleSize(16)}>
                                    {item?.title}
                                </Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
                <SelectDropdown
                    data={stateArray1}
                    onSelect={(selectedItem, index) => {
                        setSelectStatus(selectedItem.title)
                    }}
                    renderButton={(selectedItem, isOpened) => {
                        return (
                            <View style={styles.txtNumberWithBorder}>
                                <Text
                                    font={FONTS.Regular}
                                    color={'#6C7280'}
                                    size={getScaleSize(16)}>
                                    {(selectedItem && selectedItem.title) || selectStatus}
                                </Text>
                                <Image style={styles.productImage} source={IMAGES.downarrow} />
                            </View>
                        );
                    }}
                    renderItem={(item, index, isSelected) => {
                        return (
                            <View style={{ ...styles.txtNumberWithBorder1, ...(isSelected && { backgroundColor: '#D2D9DF' }) }} >
                                <Text
                                    font={FONTS.Regular}
                                    color={'#6C7280'}
                                    size={getScaleSize(16)}>
                                    {item?.title}
                                </Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                />
            </View>
            <View style={styles.missionList}>

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
                                    <Text
                                        font={FONTS.Regular}
                                        color={COLORS._202020}
                                        size={getScaleSize(14)}>
                                        {item?.hours}
                                    </Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text
                                            font={FONTS.Regular}
                                            color={COLORS._BDBDBD}
                                            size={getScaleSize(14)}>
                                            {item?.start}
                                        </Text>
                                        <Image style={styles.startImage} source={IMAGES.start} />
                                    </View>

                                    <Pressable onPress={() => {
                                        if (item.status == 'modifier') {
                                            navi.navigate(SCREENS.Declareacourse.identifier)
                                        }
                                    }} style={item.status == 'modifier' ? styles.modifierStyle : styles.payStyle}>
                                        <Text
                                            style={{ textAlign: 'center' }}
                                            font={FONTS.Regular}
                                            color={COLORS._6C7280}
                                            size={getScaleSize(12)}>
                                            {item?.status}
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>

                        }
                    />
                </List>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: getScaleSize(24),
        flex: 1.0,
        backgroundColor: COLORS._FFF,
    },
    missionSelectStyle: {
        marginTop: getScaleSize(40),
        height: getScaleSize(40),
        paddingHorizontal: getScaleSize(3),
        borderRadius: getScaleSize(6),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS._F3F4F6,
    },
    selectMission: {
        backgroundColor: COLORS._33B6FF,
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
    fillterStyle: {
        marginTop: getScaleSize(40),
        flexDirection: 'row',
        alignItems: 'center',
    },
    missionFilter: {
        width: getScaleSize(24),
        height: getScaleSize(24),
    },
    txtNumberWithBorder: {
        borderRadius: getScaleSize(20),
        padding: getScaleSize(8),
        marginLeft: getScaleSize(8),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: COLORS._6C7280,
        borderWidth: getScaleSize(1),
        fontSize: getScaleSize(16),
        color: COLORS._6C7280,
        fontFamily: FONTS.Regular
    },
    txtNumberWithBorder1: {
        padding: getScaleSize(8),
        marginLeft: getScaleSize(8),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: getScaleSize(16),
        color: COLORS._6C7280,
        fontFamily: FONTS.Regular
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: getScaleSize(8),
    },
    productImage: {
        height: getScaleSize(24),
        width: getScaleSize(24),
        marginLeft: getScaleSize(8),
        resizeMode: 'contain',
    },
    missionList: {
        marginTop: getScaleSize(25),
        flex: 1
    },
    modifierStyle: {
        justifyContent: 'center',
        width: getScaleSize(83),
        height: getScaleSize(28),
        borderRadius: getScaleSize(6),
        borderWidth: getScaleSize(1),
        borderColor: COLORS._202020
    },
    payStyle: {
        justifyContent: 'center',
        backgroundColor: '#D6FFCC',
        width: getScaleSize(83),
        height: getScaleSize(28),
        borderRadius: getScaleSize(6),
        borderWidth: getScaleSize(1),
        borderColor: '#D6FFCC'
    },
    startImage: {
        height: getScaleSize(24),
        width: getScaleSize(24),
        resizeMode: 'contain',
    },

})