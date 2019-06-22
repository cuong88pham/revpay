import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { colors, fonts } from '../../styles';
import {} from '../../components';
// const chatIcon = require('../../../assets/images/pages/chat.png');
// const galleryIcon = require('../../../assets/images/pages/gallery.png');
// const profileIcon = require('../../../assets/images/pages/profile.png');

class SettingItem extends Component {
  render() {
    const { title, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.item}>
        <Text style={styles.itemText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default function SettingView(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>General</Text>
        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Address book"
        />
        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Help & support"
        />
        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Share revPay"
        />
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Preferences</Text>
        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Notification"
        />
        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Language"
        />
        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Alternative currentcy"
        />

        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Bitcoin netwok fee policy"
        />
        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Lock"
        />
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Integrations</Text>
        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="RevPay Visa® Card"
        />
        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Coinbase"
        />
        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Gift Cards"
        />
        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Shapeshift"
        />
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>More</Text>
        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="Advanced"
        />
        <SettingItem
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          title="About revPay"
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
});
