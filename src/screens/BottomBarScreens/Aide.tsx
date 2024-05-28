import { Dimensions, Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../assets/colors'
import { Header, Text } from '../../components'
import { FONTS, IMAGES } from '../../assets'
import { getScaleSize } from '../../constant'

export default function Aide() {
    return (
        <View style={styles.container}>
            <Header
                title='Aide'
                onBack={() => {

                }} />

            <View style={{ paddingHorizontal: getScaleSize(16) }}>
                <View style={{ marginTop: getScaleSize(24), alignItems: 'center' }}>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._202020}
                        size={getScaleSize(14)}>
                        {'Tu as une question ?'}
                    </Text>
                    <Text
                        style={{ textDecorationLine: 'underline', marginTop: getScaleSize(8) }}
                        font={FONTS.Semi_Bold}
                        color={COLORS._202020}
                        size={getScaleSize(14)}>
                        {'Regarde notre FAQ'}
                    </Text>
                </View>
                <Image style={styles.productImage} source={IMAGES.aidshelp} />
                <Text
                    style={{ marginTop: getScaleSize(24), fontStyle: 'italic' }}
                    font={FONTS.Bold}
                    color={COLORS._202020}
                    size={getScaleSize(20)}>
                    {'Contact cours'}
                </Text>

                <View style={styles.backcontainer}>
                    <View style={styles.mainContainer}>
                        <View style={{
                            backgroundColor: COLORS._33B6FF,
                            padding: getScaleSize(16),
                            borderTopRightRadius: getScaleSize(14),
                            borderTopLeftRadius: getScaleSize(14)
                        }}>
                            <Text
                                style={{ fontStyle: 'italic' }}
                                font={FONTS.Bold}
                                color={COLORS._FFF}
                                size={getScaleSize(20)}>
                                {'Mathieu QUINIOU'}
                            </Text>

                            <Text
                                style={{ marginTop: getScaleSize(16) }}
                                font={FONTS.Regular}
                                color={COLORS._FFF}
                                size={getScaleSize(12)}>
                                {'Fondateur'}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: getScaleSize(16), marginHorizontal: getScaleSize(16) }}>
                            <Image style={styles.profileImage} />
                            <View style={{ marginLeft: getScaleSize(12) }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text
                                        font={FONTS.Regular}
                                        color={COLORS._202020}
                                        size={getScaleSize(12)}>
                                        {'06 06 06 06 07'}
                                    </Text>

                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text
                                        style={{ marginTop: getScaleSize(8) }}
                                        font={FONTS.Regular}
                                        color={COLORS._202020}
                                        size={getScaleSize(12)}>
                                        {'mathieu.quiniou@eddmon.fr'}
                                    </Text>
                                </View>

                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS._FFF,
    },
    productImage: {
        height: getScaleSize(138),
        width: getScaleSize(195),
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: getScaleSize(24)
    },
    backcontainer: {
        backgroundColor: COLORS._E3F3FF,
        marginVertical: getScaleSize(16),
        borderWidth: 1,
        borderColor: COLORS._E3F3FF,
        borderRadius: getScaleSize(23),
    },
    mainContainer: {
        backgroundColor: COLORS._FFF,
        borderRadius: getScaleSize(14),
        marginTop: -10,
        marginBottom: 10,
        width: Dimensions.get('window').width - getScaleSize(50),
    },
    profileImage: {
        height: getScaleSize(72),
        width: getScaleSize(72),
        resizeMode: 'contain',
        backgroundColor: COLORS._004070,
        borderRadius: getScaleSize(72 / 2)
    },
})