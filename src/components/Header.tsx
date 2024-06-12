import React from "react"
import { Image, Platform, SafeAreaView, StatusBar, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"

//COMPONENTS
import { Text } from "."

//CONSTANT & ASSETS
import { getScaleSize } from '../constant'
import { COLORS, FONTS, IMAGES } from "../assets"
import { SCREENS } from "../screens"

interface HeaderProps {
    navi?: any
    style?: StyleProp<ViewStyle>
    title?: string,
    type?: string,
    onBack?: () => void,
    isDarkBg?: boolean,
}

function Header(props: HeaderProps) {

    if (props.type == 'home') {
        return (
            <View>
                <StatusBar barStyle={'light-content'} hidden={false} backgroundColor={COLORS._211031} translucent={false} />
                <SafeAreaView />
                <View style={styles.homeContainer}>
                    <View style={{ flex: 1.0 }}>
                       <Image source={IMAGES.profile} style={styles.profileIcon} />
                    </View>
                    <View style={styles.headerIconView}>
                        <TouchableOpacity
                            onPress={() => {
                                props.navi.navigate(SCREENS.Mysponsorships.identifier)
                            }}>
                            <Image style={styles.notificationIcon} source={IMAGES.giftIcon} />
                        </TouchableOpacity>
                        <View style={styles.btnView} />
                        <TouchableOpacity>
                            <Image style={styles.notificationIcon} source={IMAGES.notification} />
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    } else {
        return (
            <View style={{}}>
                <StatusBar barStyle={'light-content'} hidden={false} backgroundColor={COLORS._211031} translucent={false} />
                <SafeAreaView />
                <View style={[styles.container, props.style]}>
                    {props.onBack ?
                        <TouchableOpacity
                            style={{}}
                            onPress={props.onBack}>
                            <Image style={[styles.backIcon, { tintColor: props.isDarkBg ? COLORS._FFF : COLORS._202020 }]} source={IMAGES.backIcon} />
                        </TouchableOpacity>
                        :
                        <View style={styles.backIcon} />
                    }
                    {props.title ?
                        <View style={styles.titleContainer}>
                            <Text
                                style={{ textAlign: 'center' }}
                                font={FONTS.Bold}
                                color={props.isDarkBg ? COLORS._FFF : COLORS._202020}
                                size={getScaleSize(20)}>
                                {props.title}
                            </Text>
                        </View>
                        :
                        <View style={{ flex: 1.0 }} />
                    }
                    <View style={styles.backIcon} />
                </View>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        height: Platform.OS == 'ios' ? getScaleSize(44) : getScaleSize(54),
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: getScaleSize(24)
    },
    backIcon: {
        width: getScaleSize(24),
        height: getScaleSize(24),
    },
    titleContainer: {
        flex: 1.0
    },
    homeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: getScaleSize(24),
        paddingVertical: getScaleSize(16)
    },
    flexView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: getScaleSize(2)
    },
    notificationIcon: {
        width: getScaleSize(24),
        height: getScaleSize(24),
        tintColor: COLORS._FFF
    },
    btnView: {
        marginRight: getScaleSize(16)
    },
    headerIconView:{
        backgroundColor: COLORS._2B1B4D,
        flexDirection: 'row',
        paddingHorizontal: getScaleSize(16),
        paddingVertical: getScaleSize(13),
        borderRadius: getScaleSize(46)
    },
    profileIcon:{
        width: getScaleSize(50),
        height: getScaleSize(50),
    }
})

export default Header