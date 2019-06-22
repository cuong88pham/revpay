import React, { Component }  from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { CardItem } from '../../components';

export default function HomeScreen({ isExtended, setIsExtended }) {
  // const rnsUrl = 'https://reactnativestarter.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(rnsUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(rnsUrl);
  //     } else {
  //       console.log(`Don't know how to open URI: ${rnsUrl}`);
  //     }
  //   });
  // };

  return (
    <ScrollView 
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View style={styles.componentsSection}>
        <Text style={styles.sectionTitle}>Wallets</Text>
        <CardItem
          icon={require('../../../assets/images/bitcoin.png')}
          title="Bitcoin"
          subTitle="1/1"
          value="0"
          arrowRight={require('../../../assets/images/icons/right-arrow.png')}
          valueMoney="$100.10 USD"
        />
        <CardItem
          icon={require('../../../assets/images/bitcoin.png')}
          title="Bitcoin Cash"
          subTitle="2/3"
          value="0"
          arrowRight={require('../../../assets/images/icons/right-arrow.png')}
          valueMoney="$100.10 USD"
        />
      </View>
      <View style={styles.componentsSection}>
        <Text style={styles.sectionTitle}>Card</Text>
        <CardItem
          icon={require('../../../assets/images/bitcoin.png')}
          logo={require('../../../assets/images/logo-bitpay.png')}
          title="Bitcoin"
          subTitle="1/1"
          value="0"
          valueMoney="$100.10 USD"
        />
        <CardItem
          icon={require('../../../assets/images/bitcoin.png')}
          
          title="Bitcoin Cash"
          subTitle="2/3"
          value="0"
          valueMoney="$100.10 USD"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#ccc',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  componentsSection: {
    backgroundColor: colors.white,
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  sectionTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  itemImage: {
    flex: 1,
    height: 30,
  },
});
