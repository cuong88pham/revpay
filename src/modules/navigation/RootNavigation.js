import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../home/HomeViewContainer';
import SettingScreen from '../setting/SettingViewContainer';
import WalletScreen from '../wallet/walletManageViewContainer';
import CardTransactionScreen from '../cardTransaction/CardTransactionView';
import CardDetailScreen from '../cardDetail/CardDetailView';
import basicWalletScreen from '../wallet/basicWalletViewContainer';

import { colors, fonts } from '../../styles';

const stackNavigator = createStackNavigator(
  {
    Main: {
      screen: HomeScreen,
      navigationOptions: props => ({
        title: 'RevPay',
        headerRight: (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate({ routeName: 'SettingScreen' })
            }
          >
            <Image
              source={require('../../../assets/images/icons/icon_setting.png')}
              resizeMode="contain"
              style={{
                height: 20,
                paddingRight: 30,
              }}
            />
          </TouchableOpacity>
        ),
        headerLeft: (
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate({ routeName: 'WalletScreen' })
            }
          >
            <Image
              source={require('../../../assets/images/icons/icon_plus.png')}
              resizeMode="contain"
              style={{
                height: 20,
                paddingRight: 30,
              }}
            />
          </TouchableOpacity>
        ),
      }),
    },
    SettingScreen: {
      screen: SettingScreen,
      navigationOptions: {
        title: 'Settings',
      },
    },
    WalletScreen: {
      screen: WalletScreen,
      navigationOptions: {
        title: 'Wallet',
      },
    },
    CardTransaction: {
      screen: CardTransactionScreen,
      navigationOptions: {
        title: 'RevPay',
      },
    },
    CardDetail: {
      screen: CardDetailScreen,
      navigationOptions: {
        title: 'RevPay',
      },
    },
    basicWalletScreen: {
      screen: basicWalletScreen,
    },
  },
  {
    defaultNavigationOptions: () => ({
      titleStyle: {
        fontFamily: fonts.primaryLight,
        fontSize: 20,
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
        <TouchableOpacity onPress={props.onPress}>
          <Image
            source={require('../../../assets/images/icons/arrow-back.png')}
            resizeMode="contain"
            style={{
              height: 20,
              paddingLeft: 30,
            }}
          />
        </TouchableOpacity>
      ),
    }),
  },
);

export default createAppContainer(stackNavigator);
