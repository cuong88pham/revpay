import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { colors, fonts } from '../styles';

const CardComponent = ({
  image,
  icon,
  onPress,
  title,
  description,
  onPressTitle,
}) => (
  <React.Fragment>
    <View style={styles.componentsSection}>
      {image ? (
        <View>
          <Image source={image} style={styles.image} />
        </View>
      ) : null}
      <View style={styles.cardContainer}>
        <View style={styles.iconContent}>
          {icon ? (
            <View>
              <Image source={icon} style={styles.icon} />
            </View>
          ) : null}
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            <Text style={styles.subtitle}>{description}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>{onPressTitle}</Text>
      </TouchableOpacity>
    </View>
  </React.Fragment>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bluish,
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  componentsSection: {
    backgroundColor: colors.white,
    marginBottom: 20,
    borderRadius: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
    padding: 25,
  },
  image: {
    width: '100%',
  },

  icon: {
    height: 50,
    width: 50,
    marginBottom: 10,
  },
  iconContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: fonts.primaryBold,
    fontSize: 20,
    color: '#5F5F5F',
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 16,
    color: '#a4a4a4',
    justifyContent: 'space-around',
    textAlign: 'center',
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  button: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  textButton: {
    fontFamily: fonts.primaryRegular,
  },
});

export default CardComponent;
