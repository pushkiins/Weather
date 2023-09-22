import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import appTheme from '../constants/theme';

const DetailedInfo = props => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.title}>Ветер</Text>
          <Text style={styles.value}>{props?.wind?.wind?.speed} м/с</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Влажность</Text>
          <Text style={styles.value}>
            {props?.wind?.main?.humidity} мм рт. ст.
          </Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.title}>Давление</Text>
          <Text style={styles.value}>{props?.wind?.main?.pressure} %</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.title}>Вероятность дождя</Text>
          <Text style={styles.value}>{props?.wind?.pop} %</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailedInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: appTheme.SIZES.padding,
    marginTop: 100,
  },
  row: {
    flex: 1,
  },
  item: {
    marginBottom: appTheme.SIZES.margin,
  },
  title: {
    color: appTheme.COLORS.white,
    opacity: 0.6,
    fontSize: 18,
    marginBottom: 5,
  },
  value: {
    color: appTheme.COLORS.white,
    fontSize: 25,
  },
});
