import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

//ASSETS & CONSTANT
import { COLORS, FONTS, IMAGES } from '../assets'
import { getScaleSize } from '../constant'

//COMPONENTS
import { Header, HomeCard, Text } from '../components'

//SCREENS
import { SCREENS } from '.'

export default function MissionsAvailable(props: any) {
    return (
        <View style={styles.container}>
            <Header
                onBack={() => {
                    props.navigation.goBack()
                }}
                title={'Missions disponibles'}
                isDarkBg={true} />
            <View style={{ flex: 1.0 }}>
                <ScrollView
                    style={styles.headerView}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}>
                    <View style={styles.headerContainer}>
                        <View style={{ padding: getScaleSize(8) }}>
                            <Image source={IMAGES.filterIcon} style={styles.filterIcon} />
                        </View>
                        <View style={styles.headerItemView}>
                            <Image style={styles.filterIcon} source={IMAGES.searchIcon} />
                            <Text
                                style={{ marginHorizontal: getScaleSize(4) }}
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(16)}>
                                {'Type de mission'}
                            </Text>
                            <Image source={IMAGES.downIcon} style={styles.filterIcon} />
                        </View>
                        <View style={styles.headerItemView}>
                            <Image style={styles.filterIcon} source={IMAGES.bookIcon} />
                            <Text
                                style={{ marginHorizontal: getScaleSize(4) }}
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(16)}>
                                {'Matière'}
                            </Text>
                            <Image source={IMAGES.downIcon} style={styles.filterIcon} />
                        </View>
                        <View style={styles.headerItemView}>
                            <Image style={styles.filterIcon} source={IMAGES.searchIcon} />
                            <Text
                                style={{ marginHorizontal: getScaleSize(4) }}
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(16)}>
                                {'Type de mission'}
                            </Text>
                            <Image source={IMAGES.downIcon} style={styles.filterIcon} />
                        </View>
                    </View>
                </ScrollView>
                <FlatList
                    data={['', '', '']}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item: any, index: number }) => {
                        return (
                            <View style={styles.itemContainer}>
                                <HomeCard
                                    onNext={() => {
                                        props.navigation.navigate(SCREENS.CourseRegistration.identifier)
                                    }} />
                            </View>
                        )
                    }} />
            </View>
            <SafeAreaView />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS._211031
    },
    headerView: {
        marginTop: getScaleSize(40),
        marginBottom: getScaleSize(24),
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: getScaleSize(16),

    },
    filterIcon: {
        width: getScaleSize(24),
        height: getScaleSize(24),
        marginVertical: getScaleSize(8),
        marginHorizontal: getScaleSize(4),
        tintColor: COLORS._FFF
    },
    headerItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS._493672,
        paddingHorizontal: getScaleSize(12),
        borderRadius: getScaleSize(20),
        marginRight: getScaleSize(8),
        flex: 1
    },
    itemContainer: {
        alignItems: 'center',
        marginBottom: getScaleSize(24)
    }
})