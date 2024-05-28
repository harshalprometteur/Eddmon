import React from 'react'
import { StyleProp, StyleSheet, TextInput, View, ViewStyle, Platform, KeyboardTypeOptions } from 'react-native'

//CONSTANT & ASSETS
import { getScaleSize } from '../constant'
import { COLORS, FONTS } from '../assets'


interface InputProps {
    style?: StyleProp<ViewStyle> | undefined,
    inputStyle?: StyleProp<ViewStyle> | undefined,
    placeholder?: string | undefined,
    onChangeText?: (text: string) => void,
    secureTextEntry?: boolean | undefined,
    multiline?: boolean | undefined,
    value?: string | undefined,
    keyboardType?: KeyboardTypeOptions | undefined,
    editable?: boolean | undefined,
}

const Input = (props: InputProps) => {
    return (
        <View style={[styles.container, props.style]}>
            <TextInput
                style={[styles.input, props.inputStyle]}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                secureTextEntry={props.secureTextEntry}
                multiline={props.multiline}
                value={props.value}
                editable={props.editable}
                keyboardType={props.keyboardType}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderColor: COLORS._DEDEDE,
        borderWidth: 1,
        borderRadius: getScaleSize(4),
        paddingHorizontal: getScaleSize(16),
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontSize: getScaleSize(14),
        fontFamily: FONTS.Regular,
        color: COLORS._202020,
        flex: 1.0,
        height: Platform.OS == 'ios' ? getScaleSize(48) : null,
    },
})
export default Input