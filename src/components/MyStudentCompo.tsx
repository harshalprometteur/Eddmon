import React, { useEffect, useState } from 'react'
import { FlatList, Image, Pressable, ScrollView, StyleSheet, View } from 'react-native'

//ASSETS & CONSTANT
import { FONTS, IMAGES, COLORS } from '../assets'
import { getScaleSize } from '../constant'

//SCREENS
import { Text } from '.'
import List from './List'



export default function MyStudentCompo(props: any) {

    const [selectDropDown, setSelectDropDown] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {

    }, [])


    function clickDropDownItem() {
        if (selectDropDown) {
            setSelectDropDown(false)
        } else {
            setSelectDropDown(true)
        }
    }

    const Passions = [
        {
            title: 'Football'

        }, {
            title: 'Tennis'

        }, {
            title: 'Natation'

        }
    ]

    const Matières = [
        {
            title: 'Mathématiques'

        }, {
            title: 'Histoire'

        }, {
            title: 'Physique'

        }
    ]

    const weektime = [
        {
            title: 'Mar',
            date: '17h-18h'

        }, {
            title: 'Mer.',
            date: '15h-16h'

        }, {
            title: 'Ven.',
            date: '18h-19h'

        }
    ]

    return (
        <View style={styles.container}>

            <View style={styles.fillterStyle}>
                <Image style={styles.missionFilter} source={IMAGES.missionFilter} />
                {/* <SelectDropdown
                    data={stateArray}
                    onSelect={(selectedItem, index) => {
                        setSelectAddress(selectedItem.title)
                    }}
                    renderButton={(selectedItem, isOpened) => {
                        return (
                            <View style={styles.txtNumberWithBorder}>
                                <Text
                                    font={FONTS.Regular}
                                    color={'#6C7280'}
                                    size={getScaleSize(16)}>
                                    {(selectedItem && selectedItem.title) || selectAddress}
                                </Text>
                                <Image style={styles.productImage} source={IMAGES.downarrow} />
                            </View>
                        );
                    }}
                    renderItem={(item, index, isSelected) => {
                        return (
                            <View style={{ ...styles.txtNumberWithBorder1, ...(isSelected && { backgroundColor: '#D2D9DF' }) }} >
                                <Text
                                    font={FONTS.Regular}
                                    color={'#6C7280'}
                                    size={getScaleSize(16)}>
                                    {item?.title}
                                </Text>
                            </View>
                        );
                    }}
                    showsVerticalScrollIndicator={false}
                    dropdownStyle={styles.dropdownMenuStyle}
                /> */}
                <View style={styles.txtNumberWithBorder}>
                    <Text
                        font={FONTS.Regular}
                        color={COLORS._6C7280}
                        size={getScaleSize(16)}>
                        {selectDropDown ? 'Anouk' : 'Mes élèves'}
                    </Text>
                    <Pressable onPress={() => { clickDropDownItem() }}>
                        <Image style={[styles.productImage, { marginLeft: getScaleSize(8) }]} source={selectDropDown ? IMAGES.filterClose : IMAGES.downarrow} />
                    </Pressable>
                </View>


            </View>
            {
                selectDropDown ?
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: getScaleSize(24) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text
                                font={FONTS.Bold}
                                color={COLORS._202020}
                                size={getScaleSize(25)}>
                                {'Anouk'}
                            </Text>
                            <View style={styles.circleStyle} />
                            <Text
                                font={FONTS.Regular}
                                color={COLORS._202020}
                                size={getScaleSize(16)}>
                                {'3ème'}
                            </Text>
                        </View>
                        <View style={styles.timerStyle}>
                            <Image style={styles.productImage} source={IMAGES.datetimer} />
                            <Text
                                style={{ marginLeft: getScaleSize(8) }}
                                font={FONTS.Regular}
                                color={COLORS._FF7020}
                                size={getScaleSize(14)}>
                                {'Dernier cours le 16/03/24'}
                            </Text>
                        </View>
                        <Text
                            style={{ marginVertical: getScaleSize(16) }}
                            font={FONTS.Regular}
                            color={COLORS._B4B1AD}
                            size={getScaleSize(14)}>
                            {'Passions'}
                        </Text>
                        <List isLoading={loading}>
                            <FlatList
                                data={Passions}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => `league-${index}`}
                                renderItem={({ item }) =>
                                    <View style={styles.passionStyle}>
                                        <Text
                                            font={FONTS.Regular}
                                            color={COLORS._B4B1AD}
                                            size={getScaleSize(14)}>
                                            {item.title}
                                        </Text>
                                    </View>

                                }
                            />
                        </List>
                        <View style={{ marginTop: getScaleSize(24) }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Image style={styles.productImage} source={IMAGES.blackstar} />
                                <Text
                                    style={{ marginLeft: getScaleSize(8) }}
                                    font={FONTS.Regular}
                                    color={COLORS._202020}
                                    size={getScaleSize(12)}>
                                    {'4,7 (3 notes)'}
                                </Text>
                            </View>
                            <View style={{
                                marginTop: getScaleSize(8),
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Image style={styles.productImage} source={IMAGES.school} />
                                <Text
                                    style={{ marginLeft: getScaleSize(8) }}
                                    font={FONTS.Regular}
                                    color={COLORS._202020}
                                    size={getScaleSize(14)}>
                                    {'Lycée Louis Le Grand'}
                                </Text>
                            </View>
                            <View style={{
                                marginTop: getScaleSize(8),
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                                <Image style={styles.productImage} source={IMAGES.home} />
                                <Text
                                    style={{ marginLeft: getScaleSize(8) }}
                                    font={FONTS.Regular}
                                    color={COLORS._202020}
                                    size={getScaleSize(14)}>
                                    {'11 Pl. Marcelin Berthelot, 75005 Paris'}
                                </Text>
                            </View>
                        </View>
                        <Text
                            style={{ marginVertical: getScaleSize(16) }}
                            font={FONTS.Regular}
                            color={COLORS._22180E57}
                            size={getScaleSize(14)}>
                            {'Contact'}
                        </Text>
                        <View>
                            <Text
                                font={FONTS.Regular}
                                color={COLORS._202020}
                                size={getScaleSize(14)}>
                                {'Madame Liaut'}
                            </Text>
                            <Text
                                style={{ marginTop: getScaleSize(8) }}
                                font={FONTS.Regular}
                                color={COLORS._202020}
                                size={getScaleSize(14)}>
                                {'06 00 00 00 00'}
                            </Text>
                            <Text
                                style={{ marginTop: getScaleSize(8) }}
                                font={FONTS.Regular}
                                color={COLORS._202020}
                                size={getScaleSize(14)}>
                                {'mail@gmail.com'}
                            </Text>
                        </View>
                        <Text
                            style={{ marginVertical: getScaleSize(16) }}
                            font={FONTS.Regular}
                            color={COLORS._B4B1AD}
                            size={getScaleSize(14)}>
                            {'Matières'}
                        </Text>
                        <List isLoading={loading}>
                            <FlatList
                                data={Matières}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => `league-${index}`}
                                renderItem={({ item }) =>
                                    <View style={styles.matieresStyle}>
                                        <Text
                                            font={FONTS.Regular}
                                            color={COLORS._186ADE}
                                            size={getScaleSize(14)}>
                                            {item.title}
                                        </Text>
                                    </View>

                                }
                            />
                        </List>
                        <Text
                            style={{ marginVertical: getScaleSize(16) }}
                            font={FONTS.Regular}
                            color={COLORS._B4B1AD}
                            size={getScaleSize(14)}>
                            {'Rythme et durée'}
                        </Text>
                        <View style={{
                            marginTop: getScaleSize(8),
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image style={styles.productImage} source={IMAGES.dateRange} />
                            <View style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{ marginLeft: getScaleSize(8) }}
                                    font={FONTS.Medium}
                                    color={COLORS._202020}
                                    size={getScaleSize(14)}>
                                    {'12/03/2024'}
                                </Text>
                                <Text
                                    style={{ marginHorizontal: getScaleSize(4) }}
                                    font={FONTS.Regular}
                                    color={COLORS._202020}
                                    size={getScaleSize(14)}>
                                    {'au'}
                                </Text>
                                <Text
                                    font={FONTS.Medium}
                                    color={COLORS._202020}
                                    size={getScaleSize(14)}>
                                    {'21/05/2024'}
                                </Text>
                            </View>

                        </View>
                        <View style={{
                            marginVertical: getScaleSize(16),
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <Image style={styles.productImage} source={IMAGES.update} />
                            <View style={{ flexDirection: 'row' }}>
                                <Text
                                    style={{ marginLeft: getScaleSize(8) }}
                                    font={FONTS.Medium}
                                    color={COLORS._202020}
                                    size={getScaleSize(14)}>
                                    {'3 x 1h'}
                                </Text>
                                <Text
                                    style={{ marginLeft: getScaleSize(4) }}
                                    font={FONTS.Regular}
                                    color={COLORS._202020}
                                    size={getScaleSize(14)}>
                                    {'/ semaine'}
                                </Text>
                            </View>
                        </View>
                        <List isLoading={loading}>
                            <FlatList
                                data={weektime}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => `league-${index}`}
                                renderItem={({ item }) =>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                        <Text
                                            font={FONTS.Regular}
                                            color={COLORS._202020}
                                            size={getScaleSize(16)}>
                                            {item.title}
                                        </Text>

                                        <View style={{
                                            flex: 1,
                                            backgroundColor: COLORS._F5F5F5,
                                            borderRadius: getScaleSize(6),
                                            height: getScaleSize(40),
                                            alignItems: 'flex-end',
                                            justifyContent: 'center',
                                            marginLeft: getScaleSize(8),
                                            marginBottom: getScaleSize(8)
                                        }}>
                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: 'flex-end',
                                                backgroundColor: COLORS._E3F3FF,
                                                borderRadius: getScaleSize(6),
                                                marginRight: getScaleSize(8),
                                                paddingHorizontal: getScaleSize(19),
                                                paddingVertical: getScaleSize(4),
                                            }}>
                                                <Text
                                                    font={FONTS.Regular}
                                                    color={COLORS._186ADE}
                                                    size={getScaleSize(12)}>
                                                    {item.date}
                                                </Text>
                                            </View>

                                        </View>
                                    </View>


                                }
                            />
                        </List>
                        <Text
                            style={{ marginVertical: getScaleSize(24) }}
                            font={FONTS.Regular}
                            color={COLORS._B4B1AD}
                            size={getScaleSize(14)}>
                            {'Particularité.s'}
                        </Text>
                        <View style={{
                            width: getScaleSize(205),
                            backgroundColor: COLORS._C7ECD1,
                            borderRadius: getScaleSize(6),
                            marginRight: getScaleSize(8),
                            paddingHorizontal: getScaleSize(9),
                            paddingVertical: getScaleSize(10),
                        }}>
                            <Text
                                font={FONTS.Regular}
                                color={COLORS._097D55}
                                size={getScaleSize(14)}>
                                {'Haut Potentiel Intellectuel'}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: getScaleSize(8) }}>
                            <View style={{
                                backgroundColor: COLORS._C7ECD1,
                                borderRadius: getScaleSize(6),
                                marginRight: getScaleSize(8),
                                paddingHorizontal: getScaleSize(9),
                                paddingVertical: getScaleSize(10),
                            }}>
                                <Text
                                    font={FONTS.Regular}
                                    color={COLORS._097D55}
                                    size={getScaleSize(14)}>
                                    {'Pas autonome'}
                                </Text>
                            </View>
                            <View style={{
                                backgroundColor: COLORS._C7ECD1,
                                borderRadius: getScaleSize(6),
                                marginRight: getScaleSize(8),
                                paddingHorizontal: getScaleSize(9),
                                paddingVertical: getScaleSize(10),
                            }}>
                                <Text
                                    font={FONTS.Regular}
                                    color={COLORS._097D55}
                                    size={getScaleSize(14)}>
                                    {'Perte de confiance'}
                                </Text>
                            </View>
                        </View>
                        <Text
                            style={{ marginVertical: getScaleSize(24) }}
                            font={FONTS.Regular}
                            color={COLORS._B4B1AD}
                            size={getScaleSize(14)}>
                            {'Commentaires'}
                        </Text>
                        <Text
                            style={{ marginBottom: getScaleSize(24) }}
                            font={FONTS.Regular}
                            color={COLORS._202020}
                            size={getScaleSize(14)}>
                            {'Julie est en première avec la spé Pysique, il des difficultés avec la méthodologie et sa motivation, il na pas de problème de compréhension mais plus de restitution'}
                        </Text>
                    </ScrollView>
                    :
                    <View style={{ marginTop: getScaleSize(24) }}>
                        <Text
                            font={FONTS.Regular}
                            color={COLORS._202020}
                            size={getScaleSize(14)}>
                            {'Pas d’élève sélectionné'}
                        </Text>
                        <Text
                            style={{ marginTop: getScaleSize(24) }}
                            font={FONTS.Regular}
                            color={'#C6C6C6'}
                            size={getScaleSize(14)}>
                            {'Sélectionne un élève dans le filtre ci  dessus pour en afficher le détail.'}
                        </Text>
                    </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: getScaleSize(24),
        flex: 1.0,
        backgroundColor: COLORS._FFF,
    },
    fillterStyle: {
        marginTop: getScaleSize(40),
        flexDirection: 'row',
        alignItems: 'center',
    },
    missionFilter: {
        width: getScaleSize(24),
        height: getScaleSize(24),
    },
    txtNumberWithBorder: {
        borderRadius: getScaleSize(20),
        padding: getScaleSize(8),
        marginLeft: getScaleSize(8),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#6C7280',
        borderWidth: getScaleSize(1),
        fontSize: getScaleSize(16),
        color: '#6C7280',
        fontFamily: FONTS.Regular
    },
    txtNumberWithBorder1: {
        padding: getScaleSize(8),
        marginLeft: getScaleSize(8),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: getScaleSize(16),
        color: '#6C7280',
        fontFamily: FONTS.Regular
    },
    dropdownMenuStyle: {
        backgroundColor: '#E9ECEF',
        borderRadius: getScaleSize(8),
    },
    productImage: {
        height: getScaleSize(24),
        width: getScaleSize(24),
        resizeMode: 'contain',
    },
    circleStyle: {
        backgroundColor: COLORS._202020,
        width: getScaleSize(6),
        height: getScaleSize(6),
        borderRadius: getScaleSize(8),
        marginLeft: getScaleSize(8),
        marginRight: getScaleSize(8)
    },
    timerStyle: {
        padding: getScaleSize(8),
        borderRadius: getScaleSize(6),
        marginTop: getScaleSize(16),
        backgroundColor: COLORS._FFDDCA,
        flexDirection: 'row',
        alignItems: 'center'
    },
    passionStyle: {
        backgroundColor: COLORS._D1FF92,
        borderRadius: getScaleSize(6),
        paddingHorizontal: getScaleSize(8),
        paddingVertical: getScaleSize(10),
        marginRight: getScaleSize(8)
    },
    matieresStyle: {
        backgroundColor: COLORS._E3F3FF,
        borderRadius: getScaleSize(6),
        paddingHorizontal: getScaleSize(8),
        paddingVertical: getScaleSize(10),
        marginRight: getScaleSize(8)
    }

})