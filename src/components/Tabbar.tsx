import React from "react";
import { Image, ImageSourcePropType, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native'

//CONSTANT & ASSETS
import { STRING, getScaleSize } from "../constant";
import { COLORS, FONTS, IMAGES } from "../assets";

//COMPONENTS
import Text from "./Text";

function Tabbar(props: any) {

    function onPress(name: string, index: number) {
        props.navigation.navigate(name);
    }

    const images = [IMAGES.compte, IMAGES.candidatures, IMAGES.missions, IMAGES.aide]
    const titles = [STRING.compte, STRING.candidatures, STRING.missions, STRING.aide]

    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                {props.state.routes.map((route: any, index: number) => {
                    return (
                        <TabItem
                            key={index}
                            onPress={() => onPress(route.name, index)}
                            title={titles[index]}
                            selected={props.state.index == index}
                            image={images[index]} />
                    )
                })}
            </View>
            <SafeAreaView />
        </View >
    )
}

interface TabItemProps {
    title: string | undefined,
    onPress: () => void,
    selected: boolean ,
    image: ImageSourcePropType
}

function TabItem(props: TabItemProps) {


    return (
        <TouchableOpacity style={styles.tabItem} onPress={props.onPress}>
            <Image style={styles.tabImage} source={props.image} />
            <Text
                style={{ marginTop: getScaleSize(5) }}
                font={FONTS.Regular}
                color={props.selected ? COLORS._FFF : COLORS._FFF}
                size={getScaleSize(12)}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS._211031,
        borderTopColor: '#3E1E5C',
        borderTopWidth: 1
    },
    tabContainer: {
        paddingTop: getScaleSize(15),
        flexDirection: 'row'
    },
    tabItem: {
        flex: 1.0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabImage: {
        height: getScaleSize(28),
        width: getScaleSize(28),
        tintColor: COLORS._FFF
    },
})

export default Tabbar