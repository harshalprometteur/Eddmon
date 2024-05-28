import React, { useContext } from "react"
import { ActivityIndicator, Image, ImageSourcePropType, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native"

//COMPONENTS
import Text from "./Text"

//CONSTANT & ASSETS

//PACKAGES
import LinearGradient from "react-native-linear-gradient"
import { getScaleSize } from "../constant"
import { COLORS, FONTS } from "../assets"

interface ButtonProps {
    type?: string | ''
    style?: StyleProp<ViewStyle> | undefined
    title?: string | '',
    leftIcon?: ImageSourcePropType,
    isDisable?: boolean,
    onPress?: () => void,
    loading?: boolean,
    textColor?: string | '',
    textSize: number | 14
}

function Button(props: ButtonProps) {


    if (props.type == 'normal') {
        return (
            <TouchableOpacity style={[styles.container, styles.socialContainer, props.style]}
                onPress={props.onPress}>
                {props.leftIcon &&
                    <View style={styles.socialIconContainer}>
                        <Image style={styles.socialIcon}
                            source={props.leftIcon} />
                    </View>
                }
                <Text
                    style={{ flex: 1.0, textAlign: 'center' }}
                    align='center'
                    font={FONTS.Bold}
                    color={props.textColor}
                    size={getScaleSize(props.textSize)}>
                    {props.title}
                </Text>
                {props.leftIcon &&
                    <View style={styles.socialIconContainer} />
                }
            </TouchableOpacity>
        )
    } else {
        return (

            <TouchableOpacity onPress={props.onPress} >
                <LinearGradient
                    colors={[
                        COLORS?._8118D7,
                        COLORS?._8118D7,
                    ]}
                    locations={[0.7, 1]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={[styles.container, props.style]}>
                    {props.leftIcon &&
                        <View style={styles.socialIconContainer}>
                            <Image style={styles.socialIcon}
                                source={props.leftIcon} />
                        </View>
                    }
                    {props.loading == true ?
                        <ActivityIndicator size={"small"} color={'#fff'} />
                        :
                        <Text
                            style={{ flex: 1.0, textAlign: 'center' }}
                            align='center'
                            font={FONTS.Regular}
                            color={props.textColor}
                            size={getScaleSize(props.textSize)}>
                            {props.title}
                        </Text>}
                    {props.leftIcon &&
                        <View style={styles.socialIconContainer} />
                    }
                </LinearGradient>
            </TouchableOpacity>

        )
    }
}



const styles = StyleSheet.create({
    container: {
        height: getScaleSize(56),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getScaleSize(45)
    },
    socialContainer: {
        borderWidth: 1,
        borderColor: '#AFAFAF',
        paddingHorizontal: getScaleSize(15)
    },
    socialIconContainer: {
        height: getScaleSize(40),
        width: getScaleSize(40),
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon: {
        height: getScaleSize(20),
        width: getScaleSize(20),
    },
    disable: {
        backgroundColor: '#AFAFAF'
    },
    enable: {
        backgroundColor: '#000'
    }
})

export default Button