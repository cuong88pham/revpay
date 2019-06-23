import React  from 'react';
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';
import { CardItem, CardInformation, Button } from '../../components';

export default class HomeScreen extends React.Component{
  _openCard = card => {
    this.props.navigation.navigate({
      routeName: 'CardTransaction',
      params: { ...card },
    });
  };

  render() {
    const dataCardDetail = [
      {
        title: "card" ,
        value: 10, 
        date: "23/6/2019" ,
        icon: ""
      }
    ]
    return (
      <React.Fragment>
        <ScrollView 
          contentContainerStyle={{ paddingBottom: 20, backgroundColor: '#f5f5f5', }}
        >
          <View style={styles.componentsSection}>
            <Text style={styles.sectionTitle}>Wallets</Text>
            <CardItem
              icon={require('../../../assets/images/bitcoin.png')}
              isLogo={false}
              title="Bitcoin"
              subTitle="1/1"
              value="0"
              hasTouch
              valueMoney="$100.10 USD"
            />
            <CardItem
              icon={require('../../../assets/images/bitcoin.png')}
              isLogo={false}
              title="Bitcoin Cash"
              subTitle="2/3"
              value="0"
              hasTouch
              valueMoney="$100.10 USD"
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
              icon=''
              onPress={() => this._openCard(dataCardDetail)}
              title='Get a RevPay Card'
              description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              onPressTitle='Get Started'
            />
            <CardInformation
              image=''
              icon={require('../../../assets/images/bitcoin.png')}
              onPress={() => this._openCard(dataCardDetail)}
              title='Buy Gift Card'
              description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
              onPressTitle='Shop now'
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
          caption="Scan"
          onPress={()=>(console.log("This is scan button!!"))}
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
    color: "#272937",
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  itemImage: {
    flex: 1,
    height: 30,
  },
  scanButton: {
    backgroundColor: "#272937",
    alignSelf: 'center',
    position: 'absolute',
    bottom: 25,
    width: 120,
    fontSize: 16,
    borderRadius: 10
  }
});
