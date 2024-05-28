import React from "react"
import { Image, Platform, SafeAreaView, StatusBar, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"

//COMPONENTS
import { Text } from "."

//CONSTANT & ASSETS
import { STRING, getScaleSize } from '../constant'
import { COLORS, FONTS, IMAGES } from "../assets"

interface HeaderProps {
    style?: StyleProp<ViewStyle> | undefined
    title?: string | undefined,
    type?: string | undefined,
    onBack?: () => void,
    isDarkBg?: boolean | undefined,
}

function Header(props: HeaderProps) {

    if (props.type == 'home') {
        return (
            <View>
                <StatusBar barStyle={Platform.OS == 'ios' ? 'light-content' : 'light-content'} hidden={false} backgroundColor={COLORS._211031} translucent={false} />
                <SafeAreaView />
                <View style={styles.homeContainer}>
                    <View style={{ flex: 1.0 }}>
                        <Text
                            font={FONTS.Bold}
                            color={COLORS._FFF}
                            size={getScaleSize(24)}>
                            {'eddmon'}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.btnView}>
                        <Image style={styles.notificationIcon} source={IMAGES.giftIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.notificationIcon} source={IMAGES.notification} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    } else {
        return (
            <View style={{}}>
                <StatusBar barStyle={Platform.OS == 'ios' ? 'light-content' : 'light-content'} hidden={false} backgroundColor={COLORS._211031} translucent={false} />
                <SafeAreaView />
                <View style={[styles.container, props.style]}>
                    {props.onBack ?
                        <TouchableOpacity
                            style={{}}
                            onPress={props.onBack}>
                            <Image style={[styles.backIcon, { tintColor: props.isDarkBg ? COLORS._FFF : COLORS._202020 }]} source={IMAGES.backIcon} />
                        </TouchableOpacity>
                        :
                        <View />
                    }
                    {props.title &&
                        <View style={styles.titleContainer}>
                            <Text
                                style={{ textAlign: 'center' }}
                                font={FONTS.Bold}
                                color={props.isDarkBg ? COLORS._FFF : COLORS._202020}
                                size={getScaleSize(20)}>
                                {props.title}
                            </Text>
                        </View>
                    }
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
    }
})

export default Header