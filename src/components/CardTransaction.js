import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Text } from './StyledText';

export default function CardTransaction({ title, value, date, icon }) {
  return (
    <TouchableOpacity style={styles.CardWrapper}>
      <View style={styles.Contenter}>
        <View style={styles.CardItem}>
          <Image source={icon} style={styles.icon} />
          <View style={styles.cardContent}>
            <View>
              <Text style={styles.cardTitle}>{title}</Text>
            </View>
          </View>
          <View style={styles.cardValueWrapper}>
            <Text style={styles.cardValue} numberOfLines={1}>
              {value}
            </Text>
            <Text style={styles.cardMoney} numberOfLines={1}>
              {date}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Contenter: {
    backgroundColor: '#fff',
  },
  CardWrapper: {
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    marginBottom: 18,
    overflow: 'hidden',
  },
  CardItem: {
    flexDirection: 'row',
    padding: 12,
    borderBottomColor: '#F8F8F8',
    borderBottomWidth: 1,
  },
  icon: {
    height: 50,
    width: 50,
  },
  cardContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#272937',
  },
  cardValueWrapper: {
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  cardValue: {
    color: '#272937',
  },
  cardMoney: {
    color: '#a4a4a4',
    paddingTop: 6,
  },
  iconRight: {
    color: '#a4a4a4',
    fontSize: 22,
    paddingLeft: 10,
    paddingTop: 15,
  },
});