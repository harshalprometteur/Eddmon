import React from 'react';
import { Modal, View, TouchableWithoutFeedback, Keyboard, Pressable, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { HomeCard, Text } from '../components';
import { STRING, getScaleSize } from '../constant';
import { windowHeight, windowWidth } from '../constant/scaleSize';
import { COLORS, FONTS, IMAGES } from '../assets';




export default function ShowMyItemModel(props: any) {
  const { showModel, setShowModel } = props;

  const item = [{ title: 'Mathématiques', id: 1 }, { title: 'Histoire', id: 2 }, { title: 'Physique', id: 3 }]
  const weekItem = [
    { title: 'Mon.', id: 1, slot: 1 },
    { title: 'Mar.', id: 2, slot: 1 },
    { title: 'Sea.', id: 3, slot: 2 },
    { title: 'Game.', id: 4, slot: 1 },
    { title: 'Fri.', id: 5, slot: 0 },
    { title: 'Sat.', id: 6, slot: 0 },
    { title: 'Sun.', id: 7, slot: 1 }]

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModel}
      onRequestClose={() => {
        setShowModel(!showModel);
      }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.touchableViewstyle} />
      </TouchableWithoutFeedback>
      <Pressable onPress={() => {
        setShowModel(!showModel)
      }}
        style={styles.centeredView}>
        <View style={styles.container}>
          <View style={styles.mainContainer}>
            <View style={[styles.flexView, { marginBottom: getScaleSize(16) }]}>
              <Image source={IMAGES.category} style={styles.categoryIcon} />
              <View>
                <View style={[styles.flexView, { marginBottom: getScaleSize(4) }]}>
                  <Text
                    font={FONTS.italic_Bold}
                    color={COLORS._FFF}
                    size={getScaleSize(25)}>
                    {'Lilian'}
                  </Text>
                  <View style={styles.dottView} />
                  <Text
                    font={FONTS.Regular}
                    color={COLORS._FFF}
                    size={getScaleSize(16)}>
                    {'3ème'}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.locationView}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={IMAGES.mapIcon} style={styles.mapIcon} />
                <Text
                  font={FONTS.Regular}
                  color={COLORS._202020}
                  size={getScaleSize(14)}>
                  {'17 Rue Trousseau, 750122 Paris'}
                </Text>
              </View>

            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: getScaleSize(16) }}>
              {item.map((e, index) => {
                return (
                  <TouchableOpacity style={styles.tabView1} key={e.id}>
                    <Text
                      font={FONTS.Regular}
                      color={COLORS._33B6FF}
                      size={getScaleSize(14)}>
                      {e.title}
                    </Text>
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
            <View style={{ marginTop: getScaleSize(8), flexDirection: 'row', alignItems: 'center', marginHorizontal: getScaleSize(16) }}>
              <Image source={IMAGES.dateRange} style={[styles.timeIcon, { tintColor: COLORS._ACACAB }]} />
              <Text
                font={FONTS.Regular}
                color={COLORS._202020}
                size={getScaleSize(14)}>
                {'22/04/2024'}
              </Text>
              <Text
                style={{ marginHorizontal: getScaleSize(8) }}
                font={FONTS.Regular}
                color={COLORS._ACACAB}
                size={getScaleSize(14)}>
                {'au'}
              </Text>
              <Text
                font={FONTS.Regular}
                color={COLORS._202020}
                size={getScaleSize(14)}>
                {'21/06/2024'}
              </Text>
            </View>
            <View style={{ marginTop: getScaleSize(8), flexDirection: 'row', alignItems: 'center', marginHorizontal: getScaleSize(16) }}>
              <Image source={IMAGES.timeIcon} style={[styles.timeIcon, { tintColor: COLORS._ACACAB }]} />
              <Text
                font={FONTS.Regular}
                color={COLORS._202020}
                size={getScaleSize(14)}>
                {'3 x 1h30 / semaine'}
              </Text>
            </View>
            <View>
              <View style={styles.availabilityBox}>
                {weekItem.map((e, index) => {
                  return (
                    <View key={e.id} style={styles.weekView}>
                      <View style={{ width: getScaleSize(50) }}>
                        <Text
                          font={FONTS.Regular}
                          color={COLORS._004070}
                          size={getScaleSize(14)}>
                          {e.title}
                        </Text>
                      </View>
                      <View style={styles.wightBox}>
                        {e.slot == 1 ?
                          <View style={[styles.smallBox, { backgroundColor: COLORS._E3F3FF, }]}>
                            <Text
                              font={FONTS.Medium}
                              color={COLORS._004070}
                              size={getScaleSize(12)}>
                              {'Xh-Xh.'}
                            </Text>
                          </View>
                          :
                          <View style={[styles.smallBox, { width: getScaleSize(52) }]} >
                            <Text
                              font={FONTS.Medium}
                              color={COLORS._004070}
                              size={getScaleSize(12)}>
                              {''}
                            </Text>
                          </View>
                        }
                        {e.slot == 2 ?
                          <View style={[styles.smallBox, { backgroundColor: COLORS._FEE1DD, }]}>
                            <Text
                              font={FONTS.Medium}
                              color={COLORS._004070}
                              size={getScaleSize(12)}>
                              {'Xh-Xh.'}
                            </Text>
                          </View>
                          :
                          <View style={styles.smallBox} >
                            <Text
                              font={FONTS.Medium}
                              color={COLORS._004070}
                              size={getScaleSize(12)}>
                              {''}
                            </Text>
                          </View>
                        }
                      </View>
                    </View>
                  )
                })
                }
              </View>
            </View>
            <TouchableOpacity style={styles.btnView}>
              <Text
                font={FONTS.Semi_Bold}
                color={COLORS._FFF}
                size={getScaleSize(16)}>
                {STRING.intéressé}
              </Text>
            </TouchableOpacity>
            <Text
              style={{ marginVertical: getScaleSize(24), alignSelf: 'center', textDecorationLine: 'underline' }}
              font={FONTS.Semi_Bold}
              color={COLORS._E77975}
              size={getScaleSize(14)}>
              {'Supprimer la candidature'}
            </Text>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  keyboardView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: 0.5
  },
  touchableViewstyle: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    zIndex: 0,
    backgroundColor: '#00000066',
  },
  container: {
    backgroundColor: COLORS._E3F3FF,
    marginLeft: getScaleSize(34),
    marginRight: getScaleSize(24),
    marginVertical: getScaleSize(16),
    borderWidth: 1,
    borderColor: COLORS._E3F3FF,
    borderRadius: getScaleSize(23),
  },
  mainContainer: {
    backgroundColor: COLORS._FFF,
    borderRadius: getScaleSize(14),
    marginTop: -10,
    marginLeft: -10,
    marginBottom: 10,
    width: Dimensions.get('window').width - getScaleSize(50) - 10,
  },
  categoryIcon: {
    width: getScaleSize(50),
    height: getScaleSize(50),
    marginRight: getScaleSize(16)
  },
  flexView: {
    padding: getScaleSize(16),
    borderTopRightRadius: getScaleSize(14),
    borderTopStartRadius: getScaleSize(14),
    backgroundColor: COLORS._33B6FF,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dottView: {
    width: getScaleSize(6),
    height: getScaleSize(6),
    borderRadius: getScaleSize(3),
    backgroundColor: COLORS._FFF,
    marginHorizontal: getScaleSize(16)
  },
  tabView: {
    backgroundColor: COLORS._FFF,
    paddingHorizontal: getScaleSize(10),
    paddingVertical: getScaleSize(8),
    borderRadius: getScaleSize(7),
    marginRight: getScaleSize(8)
  },
  tabView1: {
    backgroundColor: COLORS._E3F3FF,
    paddingHorizontal: getScaleSize(10),
    paddingVertical: getScaleSize(8),
    borderRadius: getScaleSize(7),
    marginRight: getScaleSize(8)
  },
  locationView: {
    marginBottom: getScaleSize(8)
  },
  mapIcon: {
    width: getScaleSize(20),
    height: getScaleSize(20),
    marginRight: getScaleSize(2),
  },
  timeIcon: {
    width: getScaleSize(24),
    height: getScaleSize(24),
    marginRight: getScaleSize(4),
  },
  availabilityBox: {
    backgroundColor: COLORS._FFF,
    borderRadius: getScaleSize(14),
    paddingHorizontal: getScaleSize(8),
    paddingTop: getScaleSize(8),
    marginHorizontal: getScaleSize(16),
    paddingBottom: getScaleSize(4),
    marginBottom: getScaleSize(16),
    marginTop: getScaleSize(2)
  },
  smallBox: {
    marginHorizontal: getScaleSize(6),
    paddingHorizontal: getScaleSize(8),
    borderRadius: getScaleSize(4),
    paddingVertical: getScaleSize(2)
  },
  weekView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  wightBox: {
    backgroundColor: COLORS._F5F5F5,
    borderRadius: getScaleSize(4),
    flex: 1.0,
    marginLeft: getScaleSize(8),
    marginBottom: getScaleSize(4),
    paddingVertical: getScaleSize(3),
    paddingLeft: getScaleSize(20),
    flexDirection: 'row',
    alignItems: 'center'
  },
  btnView: {
    backgroundColor: COLORS._8118D7,
    borderRadius: getScaleSize(14),
    marginHorizontal: getScaleSize(16),
    paddingVertical: getScaleSize(16),
    alignItems: 'center'
  },
})
