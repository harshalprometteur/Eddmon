import React from 'react';
import { Modal, View, TouchableWithoutFeedback, Keyboard, Pressable, StyleSheet, Dimensions, Image } from 'react-native';
import { HomeCard } from '../components';
import { getScaleSize } from '../constant';
import { windowHeight, windowWidth } from '../constant/scaleSize';




export default function ShowMyItemModel(props: any) {
  const { showModel, setShowModel } = props;

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
       <HomeCard/>
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

})
