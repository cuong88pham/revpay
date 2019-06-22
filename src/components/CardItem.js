import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { Text } from './StyledText';

export default function CardItem({ title, subTitle, value, valueMoney, icon, isLogo, hasTouch, hasBackgroundGradient }) {
  return (
    <TouchableOpacity style={styles.CardWrapper}>
      <LinearGradient colors={hasBackgroundGradient ? ['#f5f5f5', '#ccc'] : ['#fff', '#fff']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <View style={isLogo ? styles.CardItemGradient : styles.CardItem}>
          <Image source={icon} style={isLogo ? styles.logo : styles.icon} />
          <View style={styles.cardContent}>
            <View>
              <Text style={styles.cardTitle}>{title}</Text>
              <Text style={styles.subtitle} numberOfLines={1}>
                {subTitle}
              </Text>
            </View>
          </View>
          <View style={styles.cardValueWrapper}>
            <Text style={styles.cardValue} numberOfLines={1}>
              {value}
            </Text>
            <Text style={styles.cardMoney} numberOfLines={1}>
              {valueMoney}
            </Text>
          </View>
          <View style={styles.cardValueWrapper}>
            {hasTouch && (
              <TouchableOpacity>
                <Icon
                  name='angle-right'
                  size={20}
                  style={styles.iconRight}
                />
              </TouchableOpacity>
            )
            }
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  CardWrapper: {
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    marginBottom: 18,
    overflow: "hidden"
  },
  CardItem: {
    flexDirection: 'row',
    padding: 12,
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 1,
  },
  CardItemGradient: {
    flexDirection: 'row',
    padding: 12,
    paddingVertical: 20,
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 1,
  },
  icon: {
    height: 50,
    width: 50,
  },
  logo: {
    maxWidth: 150,
    height: 50,
  },
  arrowRight: {
    width: 20,
    height: 20,
    padding: 10,
    paddingVertical: 1,
    justifyContent: 'center'
  },
  cardContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#272937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#a4a4a4',
  },
  cardValueWrapper: {
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  cardValue: {
    color: '#272937',
    fontSize: 18,
  },
  cardMoney: {
    color: '#a4a4a4',
    fontSize: 18,
    paddingTop: 6
  },
  iconRight: {
    color: '#a4a4a4',
    fontSize: 22,
    paddingLeft: 10,
    paddingTop: 15
  }
});
