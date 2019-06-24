import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  RefreshControl,
} from 'react-native';
import Swipeout from 'react-native-swipeout';

import { fonts } from '../../styles';
import { Text } from '../../components/StyledText';
import { CardItem, CardInformation, Button } from '../../components';

const iconRecive = require('../../../assets/images/icons/icon_recive.png');
const iconSend = require('../../../assets/images/icons/icon_send.png');

const wallets = [
  {
    id: '1',
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
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

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

  _onRefresh = () => {
    this.setState({ refreshing: false });
  };

  // this.setState('dataSource', wallets);
  renderSeparator = () => (
    <View
      style={{
        height: 10,
        width: '100%',
      }}
    />
  );

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
          style={{ backgroundColor: '#f8f7fc' }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <View style={styles.componentsSection}>
            <Text style={styles.sectionTitle}>Wallets</Text>

            <FlatList
              data={wallets}
              ItemSeparatorComponent={this.renderSeparator}
              renderItem={({ item }) => (
                <Swipeout
                  right={[
                    {
                      component: (
                        <View style={styles.swipeoutRight}>
                          <Image source={iconRecive} />
                          <Text style={{ paddingTop: 5 }}>Receive</Text>
                        </View>
                      ),
                    },
                  ]}
                  left={[
                    {
                      component: (
                        <View style={styles.swipeoutLeft}>
                          <Image source={iconSend} />
                          <Text style={{ paddingTop: 5 }}>Send</Text>
                        </View>
                      ),
                    },
                  ]}
                  autoClose
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
  swipeoutSide: {
    backgroundColor: '#f8f7fc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  swipeoutRight: {
    backgroundColor: '#8cf6e0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  swipeoutLeft: {
    backgroundColor: '#83c4fa',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
