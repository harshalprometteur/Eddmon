import React, { useContext } from 'react';
import { Text as RNText, StyleProp, TextStyle } from 'react-native';

//CONSTANT
import { COLORS, FONTS } from '../assets'

interface TextProps {
    style?: StyleProp<TextStyle> | undefined,
    font?: string | undefined
    color?: string | undefined,
    align?: string | undefined,
    size?: number | undefined,
    children: any | undefined,
    numberOfLines?: number | undefined
}

function Text(props: TextProps) {

    const fontFamily: string | undefined = props.font ? props.font : undefined
    const fontSize: number = props.size ? props.size : 13
    const fontColor: string = props?.color ?? COLORS._000
    
    return (
        <RNText
            {...props}
            style={[
                props.style,
                {
                    color: fontColor,
                    fontSize: fontSize,
                    fontFamily: fontFamily,
                },
            ]}>
            {props.children}
        </RNText>
    )
}


Text.defaultValue = {
    style: {},
    size: 13,
    color: '#000',
    font: FONTS.Regular
};

export default Text;
