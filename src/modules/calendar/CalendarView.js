import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  // Image,
  ScrollView,
} from 'react-native';

import { colors, fonts } from '../../styles';
import {} from '../../components';

// const calendarIcon = require('../../../assets/images/pages/calendar.png');
// const chatIcon = require('../../../assets/images/pages/chat.png');
// const galleryIcon = require('../../../assets/images/pages/gallery.png');
// const profileIcon = require('../../../assets/images/pages/profile.png');

export default function PagesScreen(props) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>General</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Address book</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Help & support</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Share revPay</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Preferences</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Alternative currentcy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Bitcoin netwok fee policy</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Look</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>Integrations</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>RevPay Visa® Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Coinbase</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Gift Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Shapeshift</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.componentSectionHeader}>More</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>Advanced</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate({ routeName: 'Gallery' })}
          style={styles.item}
        >
          {/* <Image
            resizeMode="contain"
            source={galleryIcon}
            style={styles.itemImage}
          /> */}
          <Text style={styles.itemText}>About revPay</Text>
        </TouchableOpacity>
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
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
});
