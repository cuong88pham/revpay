import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import { colors, fonts } from '../../styles';
import {} from '../../components';

const importWallet = require('../../../assets/images/import.png');
const share = require('../../../assets/images/share.png');
const joinshare = require('../../../assets/images/joinshare.png');
const wallet = require('../../../assets/images/wallet.png');

const WalletManageItem = ({ icon, onPress, title, description }) => (
  <TouchableOpacity style={styles.WalletManageItemContainer} onPress={onPress}>
    <View style={styles.WalletManageItemSubContainer}>
      <Image source={icon} style={styles.icon} />
      <View style={styles.iconContent}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle} numberOfLines={1}>
            {description}
          </Text>
        </View>
      </View>
    </View>
    {/* <View style={styles.itemThreeHr} /> */}
  </TouchableOpacity>
);

export default function PagesScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>General</Text>
        <WalletManageItem
          icon={wallet}
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Basic Wallet"
          description="Quick and easy setup"
        />
        <WalletManageItem
          icon={share}
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Shared Wallet"
          description="Requires multiple devices (most secure)"
        />
        <WalletManageItem
          icon={joinshare}
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Join Shared Wallet"
          description="Requires invitation to join"
        />
        <WalletManageItem
          icon={importWallet}
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Import Wallet"
          description="Recover your wallet using your passphare"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bluish,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  componentsSection: {
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  componentSectionHeader: {
    fontFamily: fonts.primaryRegular,
    color: '#686868',
    fontSize: 20,
    marginBottom: 20,
  },
  WalletManageItemContainer: {
    backgroundColor: 'white',
  },
  WalletManageItemSubContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 1,
  },
  icon: {
    height: 50,
    width: 50,
  },
  iconContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },

  title: {
    fontFamily: fonts.primaryBold,
    fontSize: 16,
    color: '#5F5F5F',
    marginBottom: 2,
  },
  subtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 12,
    color: '#a4a4a4',
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
});
