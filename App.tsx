/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';

//SCREENS
import { SCREENS } from './src/screens';

//CONSTANT & ASSETS
import { getScaleSize } from './src/constant';
import { FONTS } from './src/assets';

//PACKAGES
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import _ from 'lodash'
import Toast, { BaseToast, ErrorToast, InfoToast } from 'react-native-toast-message';


const { Navigator, Screen } = createStackNavigator();

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1NumberOfLines={3}
      text1Style={{
        fontSize: getScaleSize(12),
        fontFamily: FONTS.Regular,
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1NumberOfLines={3}
      text1Style={{
        fontSize: getScaleSize(12),
        fontFamily: FONTS.Regular,
      }}
    />
  ),
  info: (props: any) => (
    <InfoToast
      {...props}
      text1NumberOfLines={3}
      text1Style={{
        fontSize: getScaleSize(12),
        fontFamily: FONTS.Regular,
      }}
    />
  ),
};

function App(): JSX.Element {

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: false
          }}
          initialRouteName={SCREENS.Splash.identifier}
        >
          {_.toArray(SCREENS).map((item: any, index: number) => {
            return item.component ? (
              <Screen
                key={item.identifier}
                name={item.identifier}
                component={item.component}
              />
            ) : null;
          })}
        </Navigator>
      </NavigationContainer>
      <Toast config={toastConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.0,
  }
});

export default App;
