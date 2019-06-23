import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../home/HomeViewContainer'
import AvailableInFullVersion from '../availableInFullVersion/AvailableInFullVersionViewContainer';

import { colors, fonts } from '../../styles';

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: HomeScreen,
        navigationOptions: () => ({
        title: 'RevPay',
        
      }),
    },
    CardDetail: {
      screen: AvailableInFullVersion,
        navigationOptions: () => ({
        title: 'RevPay',
        
      }),
    },
  },
  {
    defaultNavigationOptions: () => ({
      titleStyle: {
        fontFamily: fonts.primaryLight,
      },
      headerStyle: {
        backgroundColor: colors.primary,
        borderBottomWidth: 0,
      },
      headerBackground: null,
      headerTitleStyle: {
        color: colors.white,
        fontFamily: fonts.primaryRegular,
      },
      headerTintColor: '#222222',
      headerLeft: props => (
        <TouchableOpacity
          onPress={props.onPress}
        >
          <Image
            source={require('../../../assets/images/icons/icon_plus.png')}
            resizeMode="contain"
            style={{
              height: 16,
            }}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <Image
          source={require('../../../assets/images/icons/icon_setting.png')}
          resizeMode="contain"
          style={{
            height: 16,
            paddingRight: 30,
          }}
        />
      ),
    }),
  },
);

export default createAppContainer(stackNavigator);
