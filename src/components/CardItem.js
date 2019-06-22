import React from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image
} from 'react-native';
import { Text } from './StyledText';

export default function CardItem({ title, subTitle, value, valueMoney, icon, arrowRight }) {
  return (
    <TouchableOpacity style={styles.CardWrapper}>
      <View style={styles.CardItem}>
        <Image source={icon} style={styles.icon} />
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
          <TouchableOpacity>
            <Image source={arrowRight} style={styles.arrowRight} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  componentsSection: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 20,
    borderRadius: 5,
  },
  CardWrapper: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
    marginBottom: 18
  },
  CardItem: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 1,
  },
  icon: {
    height: 50,
    width: 50,
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
    color: '#272937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#a4a4a4',
  },
  cardValueWrapper: {
    alignItems: 'flex-end',
  },
  cardValue: {
    color: '#272937',
    fontSize: 18,
  },
  cardMoney: {
    color: '#a4a4a4',
    fontSize: 18,
  }
});
