import React, { useEffect, useState } from 'react'
import { Image, Pressable, ScrollView, StyleSheet, View } from 'react-native'

//ASSETS & CONSTANT
import { FONTS, COLORS, IMAGES } from '../assets'
import { STRING, getScaleSize } from '../constant'

//SCREENS
import { SCREENS } from '.'
import { Header, Text } from '../components'


export default function Mysponsorships(props: any) {

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <Header
                title={STRING.mesparrainages}
                onBack={() => {

                }} />
            <ScrollView>
                <Image source={IMAGES.mySponsorships} style={styles.arrowForwardIcon} />

                <View style={{ marginHorizontal: getScaleSize(16) }}>
                    <Text
                        style={{ textAlign: 'center' }}
                        font={FONTS.Regular}
                        color={COLORS._202020}
                        size={getScaleSize(16)}>
                        {STRING.ton_code}
                    </Text>
                    <View style={styles.fliperButton}>
                        <Text
                            style={{ textAlign: 'center' }}
                            font={FONTS.Regular}
                            color={COLORS._8118D7}
                            size={getScaleSize(14)}>
                            {STRING.felipe}
                        </Text>
                    </View>
                    <Text
                        style={{ textAlign: 'center' }}
                        font={FONTS.Regular}
                        color={COLORS._202020}
                        size={getScaleSize(14)}>
                        {'Partage ton code avec tes amis et des familles. Gagne 5€ par tuteur inscrit et 50€ par famille inscrite chez Eddmon.'}
                    </Text>
                    <View style={{ flexDirection: 'row', marginVertical: getScaleSize(24), marginBottom: getScaleSize(40) }}>
                        <View style={styles.copyView}>
                            <Text
                                style={{ textAlign: 'center' }}
                                font={FONTS.Regular}
                                color={COLORS._6C7280}
                                size={getScaleSize(14)}>
                                {STRING.copier}
                            </Text>
                            <Image source={IMAGES.copy} style={styles.copyImage} />
                        </View>
                        <View style={[styles.copyView, { flex: 1, marginLeft: getScaleSize(8), justifyContent: 'center' }]}>
                            <Text
                                style={{ textAlign: 'center' }}
                                font={FONTS.Regular}
                                color={COLORS._6C7280}
                                size={getScaleSize(14)}>
                                {STRING.partager}
                            </Text>
                            <Image source={IMAGES.share} style={styles.copyImage} />
                        </View>
                    </View>
                    <Text
                        style={{ fontStyle: 'italic' }}
                        font={FONTS.Bold}
                        color={COLORS._202020}
                        size={getScaleSize(25)}>
                        {STRING.tonprofilparrain}
                    </Text>

                    <View style={{ marginVertical: getScaleSize(32) }}>
                        <Text
                            font={FONTS.Regular}
                            color={COLORS._202020}
                            size={getScaleSize(14)}>
                            {STRING.prochainbadge}
                        </Text>
                        <View style={{ flexDirection: 'row', marginVertical: getScaleSize(12), alignItems: 'center' }}>
                            <View style={{ flex: 1, height: getScaleSize(8), backgroundColor: COLORS._F5F5F5, borderRadius: getScaleSize(44), marginRight: getScaleSize(8) }}>
                                <View style={{ width: '70%', height: getScaleSize(8), backgroundColor: COLORS._FFC700, borderRadius: getScaleSize(44) }}>

                                </View>
                            </View>
                            <Image source={IMAGES.starsponcer} style={styles.checkUncheckCircle} />
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={IMAGES.checkcircle} style={styles.checkUncheckCircle} />
                            <Text
                                style={{ marginLeft: getScaleSize(8) }}
                                font={FONTS.Regular}
                                color={COLORS._1B8601}
                                size={getScaleSize(12)}>
                                {STRING.tuteurparrainé}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: getScaleSize(4) }}>
                            <Image source={IMAGES.uncheck} style={styles.checkUncheckCircle} />
                            <Text
                                style={{ marginLeft: getScaleSize(8) }}
                                font={FONTS.Regular}
                                color={COLORS._6C7280}
                                size={getScaleSize(12)}>
                                {STRING.heureseffectuées}
                            </Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
                        <View>
                            <View style={styles.profileViewStyle}>
                                <Image source={IMAGES.profile} style={styles.profileImageStyle} />
                            </View>
                            <View style={{
                                width: getScaleSize(24),
                                height: getScaleSize(24),
                                backgroundColor: COLORS._FF7121,
                                borderRadius: getScaleSize(24 / 2),
                                position: 'absolute',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Image source={IMAGES.school} style={[styles.checkUncheckCircle, { tintColor: COLORS._FFF }]} />

                            </View>
                        </View>
                        <View style={{ marginLeft: getScaleSize(16) }}>
                            <Text
                                font={FONTS.Semi_Bold}
                                color={COLORS._202020}
                                size={getScaleSize(16)}>
                                {STRING.superambassadeur}
                            </Text>
                            <Text
                                style={{ marginTop: getScaleSize(4) }}
                                font={FONTS.Regular}
                                color={COLORS._6C7280}
                                size={getScaleSize(12)}>
                                {STRING.Tonbadgeactuel}
                            </Text>
                            <Text
                                style={{ marginTop: getScaleSize(4) }}
                                font={FONTS.Regular}
                                color={COLORS._6C7280}
                                size={getScaleSize(12)}>
                                {STRING.tefaisgagner}
                            </Text>
                            <Text
                                style={{ marginTop: getScaleSize(4) }}
                                font={FONTS.Regular}
                                color={COLORS._6C7280}
                                size={getScaleSize(12)}>
                                {STRING.enmoyenne}
                            </Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, height: getScaleSize(2), backgroundColor: COLORS._F5F5F5, marginRight: getScaleSize(8), marginVertical: getScaleSize(40) }} />

                    <Text
                        style={{ marginBottom: getScaleSize(8), textAlign: 'center' }}
                        font={FONTS.Regular}
                        color={COLORS._202020}
                        size={getScaleSize(12)}>
                        {STRING.cagnottetotale}
                    </Text>
                    <View style={{
                        backgroundColor: COLORS._FF7121,
                        borderRadius: getScaleSize(8),
                        padding: getScaleSize(16),
                        marginBottom: getScaleSize(24),
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center'
                    }}>
                        <Image source={IMAGES.pigibank} style={styles.pigibank} />
                        <Text
                            style={{ fontStyle: 'italic', marginLeft: getScaleSize(8) }}
                            font={FONTS.Bold}
                            color={COLORS._FFF}
                            size={getScaleSize(25)}>
                            {'156,00 €'}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text
                                style={{ fontStyle: 'italic', marginLeft: getScaleSize(8) }}
                                font={FONTS.Bold}
                                color={COLORS._000}
                                size={getScaleSize(25)}>
                                {'156,00 €'}
                            </Text>
                            <View style={{
                                backgroundColor: COLORS._FFDDCA,
                                borderRadius: getScaleSize(8),
                                padding: getScaleSize(16),
                                flexDirection: 'row',
                                alignSelf: 'center',
                                alignItems: 'center'
                            }}>
                                <Text
                                    style={{ fontStyle: 'italic', marginLeft: getScaleSize(8) }}
                                    font={FONTS.Bold}
                                    color={COLORS._FF7121}
                                    size={getScaleSize(25)}>
                                    {'106,00 €'}
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: COLORS._D1FF92,
                            borderRadius: getScaleSize(8),
                            padding: getScaleSize(16),
                            flexDirection: 'row',
                            alignSelf: 'center',
                            alignItems: 'center'
                        }}>
                            <Text
                                style={{ fontStyle: 'italic', marginLeft: getScaleSize(8) }}
                                font={FONTS.Bold}
                                color={COLORS._FFF}
                                size={getScaleSize(25)}>
                                {'50,00 €'}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.0,
        backgroundColor: COLORS._FFF,
    },
    arrowForwardIcon: {
        height: getScaleSize(173),
        width: '100%',
        marginVertical: getScaleSize(16),
        resizeMode: 'cover',
    },
    fliperButton: {
        backgroundColor: COLORS._EADDFC,
        margin: getScaleSize(16),
        padding: getScaleSize(10),
        borderRadius: getScaleSize(10),
    },
    copyImage: {
        height: getScaleSize(24),
        width: getScaleSize(24),
    },
    copyView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: getScaleSize(16),
        paddingHorizontal: getScaleSize(12),
        borderRadius: getScaleSize(6),
        borderColor: COLORS._202020,
        borderWidth: getScaleSize(1)
    },
    checkUncheckCircle: {
        height: getScaleSize(16),
        width: getScaleSize(16),
        resizeMode: 'contain',
    },
    profileViewStyle: {
        height: getScaleSize(50),
        width: getScaleSize(50),
        borderRadius: getScaleSize(50 / 2),
        borderColor: COLORS._FF7121,
        marginLeft: getScaleSize(4),
        marginTop: getScaleSize(4),
        borderWidth: getScaleSize(2)
    },
    profileImageStyle: {
        height: getScaleSize(45),
        width: getScaleSize(45),
        resizeMode: 'contain',
    },
    pigibank: {
        height: getScaleSize(38),
        width: getScaleSize(38),
        resizeMode: 'contain',
    },
})