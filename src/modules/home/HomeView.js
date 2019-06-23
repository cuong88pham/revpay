/* eslint-disable react/sort-comp */
/* eslint-disable no-param-reassign */
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

class HomeView extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.container}>
          <View style={styles.section} />
          <View style={styles.section} />
          <View style={styles.section}>
            <Text size={20}>section 3</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default function HomeScreen() {
  return <HomeView />;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
