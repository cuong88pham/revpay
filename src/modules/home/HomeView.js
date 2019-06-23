import React from 'react';
import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import Swipeout from 'react-native-swipeout';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { CardItem, CardInformation, Button } from '../../components';

const wallets = [
  {
    icon: require('../../../assets/images/bitcoin.png'),
    isLogo: false,
    title: 'Personal Wallet',
    subTitle: '1/1',
    value: '0',
    valueMoney: '$100.10 USD',
  },
  {
    id: '2',
    icon: require('../../../assets/images/bitcoin.png'),
    isLogo: false,
    title: 'Family Wallet',
    subTitle: '1/1',
    value: '0',
    valueMoney: '$200.10 USD',
  },
];

export default class HomeScreen extends React.Component {
  _openCardDetail = data => {
    this.props.navigation.navigate({
      routeName: 'CardDetail',
      params: { ...data },
    });
  };

  _openCard = card => {
    this.props.navigation.navigate({
      routeName: 'CardTransaction',
      params: { ...card },
    });
  };

  // this.setState('dataSource', wallets);

  render() {
    const dataCardDetail = [
      {
        title: 'card',
        value: 10,
        date: '23/6/2019',
        icon: '',
      },
    ];
    return (
      <React.Fragment>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 20,
            backgroundColor: '#f8f7fc',
          }}
        >
          <View style={styles.componentsSection}>
            <Text style={styles.sectionTitle}>Wallets</Text>

            <FlatList
              data={wallets}
              renderItem={({ item }) => (
                <Swipeout
                  right={[
                    {
                      text: 'Recive',
                      backgroundColor: 'red',
                      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                      onPress: () => {
                        console.log('SWIFE');
                      },
                    },
                  ]}
                  left={[
                    {
                      text: 'Send',
                      backgroundColor: 'blue',
                      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
                      onPress: () => {
                        console.log('SWIFE');
                      },
                    },
                  ]}
                  autoClose="true"
                  backgroundColor="transparent"
                >
                  <CardItem {...item} />
                </Swipeout>
              )}
            />
          </View>
          <View style={styles.componentsSection}>
            <Text style={styles.sectionTitle}>Cards</Text>
            <CardItem
              hasBackgroundGradient
              icon={require('../../../assets/images/logo-RevPay.png')}
              isLogo
              title=""
              subTitle=""
              value="0"
              hasTouch={false}
              valueMoney="$100.10 USD"
            />
            <CardItem
              hasBackgroundGradient
              icon={require('../../../assets/images/logo-RevPay.png')}
              isLogo
              title=""
              subTitle=""
              value="0"
              hasTouch={false}
              valueMoney="$100.10 USD"
            />
          </View>
          <View style={styles.componentsSection}>
            <Text style={styles.sectionTitle}>Cards</Text>
            <CardInformation
              image={require('../../../assets/images/card-demo.png')}
              icon=""
              onPress={() => this._openCard(dataCardDetail)}
              title="Get a RevPay Card"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              onPressTitle="Get Started"
            />
            <CardInformation
              image=""
              icon={require('../../../assets/images/bitcoin.png')}
              onPress={() => this._openCard(dataCardDetail)}
              title="Buy Gift Card"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              onPressTitle="Shop now"
            />
          </View>
          <View style={styles.componentsSection}>
            <Text style={styles.sectionTitle}>Cards</Text>
            <CardItem
              hasBackgroundGradient
              icon={require('../../../assets/images/logo-RevPay.png')}
              isLogo
              title=""
              subTitle=""
              value="0"
              hasTouch
              valueMoney=""
            />
            <CardItem
              hasBackgroundGradient
              icon={require('../../../assets/images/logo-RevPay.png')}
              isLogo
              title=""
              subTitle=""
              value="0"
              hasTouch={false}
              valueMoney="$100.10 USD"
            />
          </View>
        </ScrollView>
        <Button
          style={styles.scanButton}
          icon={require('../../../assets/images/icons/qr-code.png')}
          onPress={() => console.log('This is scan button!!')}
        />
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
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
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  sectionTitle: {
    fontFamily: fonts.primaryRegular,
    color: '#272937',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  itemImage: {
    flex: 1,
    height: 30,
  },
  scanButton: {
    alignSelf: 'center',
    position: 'absolute',
    bottom: 25,
    width: 100,
    fontSize: 16,
    borderRadius: 10,
  },
});
