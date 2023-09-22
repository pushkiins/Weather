import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import appTheme from '../constants/theme';

const Card = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.day}</Text>
      <Text style={styles.titleTemp}>+{item.tempDay}</Text>
      <Text style={styles.title}>+{item.tempNight}</Text>
      <Text style={styles.title}>{item.description}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: appTheme.COLORS.primary,
    alignItems: 'center',
    height: 180,
    width: '20%',
    borderRadius: 16,
    justifyContent: 'space-around',
  },
  title: {
    // margin: 10,
    color: appTheme.COLORS.white,
    fontSize: 18,
  },
  titleTemp: {
    // margin: 10,
    color: appTheme.COLORS.white,
    fontSize: 25,
  },
});
