import React from "react";

import { View, StyleSheet, ActivityIndicator } from 'react-native'

//COMPONENTS
import Text from "./Text"
import { COLORS, FONTS } from "../assets";
import { getScaleSize } from "../constant";

//CONSTANT & ASSETS

const List = (props: any) => {


    if (props.isLoading) {
        return (
            <View style={styles.container}>
                <View style={styles.indicatorContainer}>
                    <ActivityIndicator color={'#000'} />
                </View>
            </View>
        )
    }

    if (props.isError) {
        return (
            <View style={styles.errorContainer}>
                <Text
                    style={{ flex: 1.0, textAlign: 'center' }}
                    align='center'
                    font={FONTS.Regular}
                    color={COLORS._000}
                    size={getScaleSize(16)}>
                    {props?.isError ?? ''}
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0
    },
    indicatorContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: getScaleSize(100)
    },
    errorContainer: {
        flex: 1.0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: getScaleSize(16),
        paddingVertical: getScaleSize(16)
    }
})

export default List