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
import { Button } from '../../components';

const back = require('../../../assets/images/back.png');
const shapeshift = require('../../../assets/images/shapeshift.svg');

export default function ShapeShift(props) {
  return (
    <React.Fragment>
      <View style={styles.topNav}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image source={back} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.topTitle}>
        <Image source={shapeshift} style={styles.icon} />
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.componentsSection}>
          <Text style={styles.balance}>
            The Safest, Fastest Asset Exchange on Earth
          </Text>
          <Text style={styles.balanceInfo}>
            Trace any leading blockchain asset for any other. Protection by
            Design.
          </Text>
          <Button
            style={styles.Button}
            primary
            bordered
            caption="Connect to ShapeShift Account"
            // onPress={() => {}}
          />
          <View style={styles.linkContainer}>
            <TouchableOpacity>
              <Text>Sign Up for ShapeShift →</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Visit ShapeShift.io →</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.linkContainer}>
            <TouchableOpacity>
              <Text>Why does this require authentication? → </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  linkContainer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 15,
    flexDirection: 'row',
  },

  Button: {
    marginTop: 16,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: colors.bluish,
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
  topTitle: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    backgroundColor: '#272937',
    color: '#fff',
  },
  balanceInfo: {
    fontSize: 15,
    padding: 10,
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-around',
  },
  componentsSection: {
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 20,
  },
  balance: {
    fontFamily: fonts.primaryBold,
    fontSize: 20,
    marginBottom: 2,
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  iconTitle: {
    height: 20,
    width: 200,
  },
});
