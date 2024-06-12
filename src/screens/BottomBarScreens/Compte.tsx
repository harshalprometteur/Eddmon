import { Dimensions, FlatList, Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'

//COMPONENTS
import { Header, HomeCard, QuizzesCard, Text, TipsCard } from '../../components'

//ASSETS & CONSTANT
import { COLORS, FONTS, IMAGES } from '../../assets'
import { STRING, getScaleSize } from '../../constant'

//PACKAGES
import Carousel from 'react-native-snap-carousel';
import { SCREENS } from '..'

export default function Compte(props: any) {

    const arrey = ['', '', '']

    const carouselRef = useRef<any>('')

    return (
        <View style={styles.container}>
            <Header
                type={'home'}
                navi={props.navigation} />
            <View style={styles.headerContainer}>
                <Text
                    font={FONTS.Regular}
                    color={COLORS._FFF}
                    size={getScaleSize(12)}>
                    {STRING.headerText}
                </Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableOpacity style={styles.missionBtn}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(16)}>
                        {STRING.declare_a_mission}
                    </Text>
                    <Image source={IMAGES.arrowForward} style={styles.arrowForwardIcon} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.navigate(SCREENS.MissionsAvailable.identifier)
                    }} style={styles.headerView}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(16)}>
                        {STRING.missions_available}
                    </Text>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._008DFB}
                        size={getScaleSize(14)}>
                        {STRING.see_everything}
                    </Text>
                </TouchableOpacity>
                <View>
                    <Carousel
                        ref={carouselRef}
                        inactiveSlideScale={0.9}
                        inactiveSlideOpacity={0.5}
                        sliderWidth={Dimensions.get('window').width}
                        itemWidth={Dimensions.get('window').width - getScaleSize(60)}
                        data={arrey}
                        renderItem={({ item: any, index: number }) => {
                            return (
                                <HomeCard isFromHome={true} />
                            )
                        }}
                    />
                </View>
                <View style={styles.imageView}>
                    <Image resizeMode='cover' source={IMAGES.greenHand} style={styles.greenHandIcon} />
                </View>
                <View style={styles.quizzesView}>
                    <Text
                        font={FONTS.italic_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(16)}>
                        {'Jeux concours'}
                    </Text>
                    <Image source={IMAGES.info} style={styles.infoIcon} />
                </View>
                <QuizzesCard />
                <View>
                    <Image source={IMAGES.blueHand} style={styles.blueHandIcon} />
                </View>
                <View style={styles.tipsView}>
                    <Text
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(16)}>
                        {'Bons plans'}
                    </Text>
                </View>
                <FlatList
                    data={arrey}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    ListHeaderComponent={() => {
                        return (
                            <View style={{ marginLeft: getScaleSize(8) }} />
                        )
                    }}
                    ListFooterComponent={() => {
                        return (
                            <View style={{ marginLeft: getScaleSize(24) }} />
                        )
                    }}
                    renderItem={({ item: any, index: number }) => {
                        return (
                            <TipsCard />
                        )
                    }} />

                <View style={styles.footerView}>
                    <Text
                        style={{ textAlign: 'center' }}
                        font={FONTS.Regular}
                        color={COLORS._FFF}
                        size={getScaleSize(14)}>
                        {'Une fonctionnalité manquante sur\nl’application ?'}
                    </Text>
                    <Text
                        style={styles.textStyle}
                        font={FONTS.Semi_Bold}
                        color={COLORS._FFF}
                        size={getScaleSize(14)}>
                        {'Donne-nous des idées !'}
                    </Text>
                </View>
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS._211031,
    },
    headerContainer: {
        backgroundColor: COLORS._FF7121,
        paddingVertical: getScaleSize(4),
        alignItems: 'center'
    },
    missionBtn: {
        backgroundColor: COLORS._B058F8,
        marginHorizontal: getScaleSize(24),
        marginVertical: getScaleSize(24),
        paddingVertical: getScaleSize(16),
        borderRadius: getScaleSize(14),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    arrowForwardIcon: {
        width: getScaleSize(24),
        height: getScaleSize(24),
        marginLeft: getScaleSize(10)
    },
    headerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: getScaleSize(24),
        marginBottom: getScaleSize(16)
    },
    greenHandIcon: {
        width: Dimensions.get('window').width - 24,
        height: ((Dimensions.get('window').width - 24) * 121) / 376,
    },
    blueHandIcon: {
        width: Dimensions.get('window').width,
        height: ((Dimensions.get('window').width) * 224) / 375,
        marginVertical: getScaleSize(24)
    },
    imageView: {
        marginLeft: getScaleSize(24),
        marginVertical: getScaleSize(24)
    },
    infoIcon: {
        width: getScaleSize(24),
        height: getScaleSize(24),
        tintColor: COLORS._FFF,
        marginLeft: getScaleSize(8)
    },
    quizzesView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginHorizontal: getScaleSize(24)
    },
    tipsView: {
        marginHorizontal: getScaleSize(24),
        marginBottom: getScaleSize(16)
    },
    footerView: {
        marginVertical: getScaleSize(24),
        alignItems: 'center',
        textAlign: 'center'
    },
    textStyle: {
        textDecorationLine: 'underline',
        marginTop: getScaleSize(8),
    }
})