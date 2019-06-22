import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';
import { colors, fonts } from '../../styles';

import { Button, RadioGroup, Dropdown } from '../../components';

export default function PersonalwalletScreen({ isExtended, setIsExtended }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.componentsSection}>
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
  }
});

