import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS, FONTS, IMAGES } from '../assets'
import { Header, HomeCard, Text } from '../components'
import { getScaleSize } from '../constant'

export default function MissionsAvailable(props: any) {
    return (
        <View style={styles.container}>
            <Header
                onBack={() => {
                    props.navigation.goBack()
                }}
                title={'Missions disponibles'}
                isDarkBg={true} />
            <View>
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
                                color={COLORS._6C7280}
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
                                color={COLORS._6C7280}
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
                                color={COLORS._6C7280}
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
                            <HomeCard  />
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
        height: getScaleSize(24)
    },
    headerItemView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS._FFF,
        paddingHorizontal: getScaleSize(16),
        paddingVertical: getScaleSize(8),
        borderRadius: getScaleSize(20),
        marginRight: getScaleSize(8)

    }
})