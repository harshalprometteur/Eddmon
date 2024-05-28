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
import { SCREENS } from '../screens'
import ShowMyItemModel from '../model/ShowMyItemModel'

export default function MyMissionsCompo(props: any) {

    const { navi } = props
    const [selectAddress, setSelectAddress] = useState<string>('Mes élèves')
    const [selectStatus, setSelectStatus] = useState<string>('Statut')
    const [loading, setLoading] = useState<boolean>(false);
    const [openCouponModel, setOpenCouponModel] = useState(false);

    useEffect(() => {

    }, [])

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
            title: 'Julie',
            date: '5ème',
            hours: '2x1h30',
            start: '04/02/24',
            status: 'modifier'
        }, {
            title: 'Marie',
            date: '3ème',
            hours: '2x1h',
            start: '04/02/24',
            status: 'modifier'
        }, {
            title: 'Anouk',
            date: '5ème',
            hours: '2x1h30',
            start: '04/02/24',
            status: 'validé'
        }, {
            title: 'Louis',
            date: '4ème',
            hours: '1x1h30',
            start: '04/02/24',
            status: 'refusé'
        }, {
            title: 'Mathieu',
            date: '3ème',
            hours: '2x1h',
            start: '04/02/24',
            status: 'validé'
        }, {
            title: 'Jeanne',
            date: '2nde',
            hours: '3x2h',
            start: '04/02/24',
            status: 'refusé'
        }, {
            title: 'Arsène',
            date: '1ère',
            hours: '2x1h30',
            start: '04/02/24',
            status: 'refusé'
        },
    ]

    return (
        <View style={styles.container}>

            <View style={styles.fillterStyle}>
                <Image style={styles.missionFilter} source={IMAGES.missionFilter} />
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
                                    </View>

                                    {
                                        item?.status == 'modifier' ?
                                            <View style={{ flexDirection: 'row' }}>
                                                <Pressable onPress={() => {
                                                    setOpenCouponModel(true)
                                                }}>
                                                    <Image source={IMAGES.viewmission} style={styles.categoryIcon} />
                                                </Pressable>
                                                <Image source={IMAGES.deletemission} style={[styles.categoryIcon, { marginLeft: getScaleSize(8) }]} />
                                            </View>
                                            :
                                            <Pressable style={item.status == 'modifier' ? styles.modifierStyle :
                                                item.status == 'refusé' ? styles.refuséStyle : styles.payStyle}>
                                                {
                                                    <Text
                                                        style={{ textAlign: 'center' }}
                                                        font={FONTS.Regular}
                                                        color={item.status == 'refusé' ? COLORS._E77975 : COLORS._6C7280}
                                                        size={getScaleSize(12)}>
                                                        {item?.status}
                                                    </Text>
                                                }

                                            </Pressable>
                                    }

                                </View>
                            </View>

                        }
                    />
                </List>

            </View>

            <ShowMyItemModel
                showModel={openCouponModel}
                setShowModel={setOpenCouponModel}

            />

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
        borderColor: '#6C7280',
        borderWidth: getScaleSize(1),
        fontSize: getScaleSize(16),
        color: '#6C7280',
        fontFamily: FONTS.Regular
    },
    txtNumberWithBorder1: {
        padding: getScaleSize(8),
        marginLeft: getScaleSize(8),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: getScaleSize(16),
        color: '#6C7280',
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
    refuséStyle: {
        justifyContent: 'center',
        backgroundColor: '#FCF1F1',
        width: getScaleSize(83),
        height: getScaleSize(28),
        borderRadius: getScaleSize(6),
        borderWidth: getScaleSize(1),
        borderColor: '#FCF1F1'
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
    categoryIcon: {
        width: getScaleSize(24),
        height: getScaleSize(24),
    },
})