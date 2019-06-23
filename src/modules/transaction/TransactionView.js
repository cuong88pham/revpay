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
import { CardTransaction } from '../../components';

const receive = require('../../../assets/images/receive.png');
const send = require('../../../assets/images/send.png');
const back = require('../../../assets/images/back.png');
const controls = require('../../../assets/images/controls.png');

export default function PagesScreen(props) {
  return (
    <React.Fragment>
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image source={back} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={controls} style={styles.icon} />
        </TouchableOpacity>
        {/* enter to wallet manage */}
      </View>
      <View style={styles.balanceInfo}>
        <Text style={styles.balance}>0.000 BTC</Text>
        <Text style={styles.date}>10 months ago</Text>
      </View>
      <View style={styles.titleBar}>
        <Text style={styles.textTitle}>10 months ago</Text>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.componentsSection}>
          <CardTransaction
            icon={receive}
            title="Received"
            value="0.0001 BTC"
            date="Aug 22, 2018"
          />
          <CardTransaction
            icon={send}
            title="Send"
            value="0.0121 BTC"
            date="Aug 22, 2018"
          />
        </View>
      </ScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bluish,
  },
  settingWallet: {
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  backButton: {
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  topNav: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#272937',
  },
  balanceInfo: {
    padding: 40,
    backgroundColor: '#272937',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titleBar: {
    fontFamily: fonts.primaryRegular,
    backgroundColor: '#F8F8F8',
  },
  componentsSection: {
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  balance: {
    fontFamily: fonts.primaryRegular,
    fontSize: 40,
    marginBottom: 2,
    color: '#FFF',
  },
  date: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    marginBottom: 2,
    color: '#FFF',
  },
  textTitle: {
    fontFamily: fonts.primaryRegular,
    padding: 20,
  },
  demoButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  demoIconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  demoButton: {
    marginTop: 8,
    marginBottom: 8,
  },
  demoItem: {
    marginVertical: 15,
  },
  item: {
    flex: 1,
    height: 50,
    paddingVertical: 10,
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 1,
    justifyContent: 'flex-start',
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  itemImage: {
    flex: 1,
    height: 30,
  },
  icon: {
    height: 20,
    width: 20,
  },
});
