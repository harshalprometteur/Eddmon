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


    const images = [IMAGES.tabIcon1, IMAGES.tabIcon2, IMAGES.tabIcon3, IMAGES.tabIcon4, IMAGES.tabIcon5]

    return (
        <View style={{ backgroundColor: '#211031' }}>
            <View style={styles.container}>
                <View style={styles.tabContainer}>
                    {props.state.routes.map((route: any, index: number) => {
                        return (
                            <TabItem
                                key={index}
                                onPress={() => onPress(route.name, index)}
                                selected={props.state.index == index}
                                image={images[index]} />
                        )
                    })}
                </View>
            </View>
            <SafeAreaView />
        </View>
    )
}

interface TabItemProps {
    // title: string | undefined,
    onPress: () => void,
    selected: boolean,
    image: ImageSourcePropType
}

function TabItem(props: TabItemProps) {

    return (
        <TouchableOpacity style={styles.tabItem} onPress={props.onPress}>
            <View style={props.selected ? styles.selectIconBox : styles.iconBox}>
                <Image style={[styles.tabImage, { tintColor: props.selected ? COLORS._FFF : COLORS._211031 }]} source={props.image} />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: getScaleSize(24),
        marginTop: getScaleSize(16),
    },
    tabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS._FFF,
        borderRadius: getScaleSize(86),
        paddingVertical: getScaleSize(16),

    },
    tabItem: {
        flex: 1.0,
        alignItems: 'center',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    tabImage: {
        height: getScaleSize(24),
        width: getScaleSize(24),
    },
    iconBox: {
        width: getScaleSize(38),
        height: getScaleSize(38),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: getScaleSize(20),
    },
    selectIconBox: {
        width: getScaleSize(38),
        height: getScaleSize(38),
        backgroundColor: COLORS._211031,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: getScaleSize(20),
    }
})

export default Tabbar