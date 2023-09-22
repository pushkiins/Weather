import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import appTheme from '../constants/theme';
import {useAppSelector} from '../store/hooks/redux';
import {getTemp} from '../utils/utils';

const MainInfo = props => {
  const {weather} = props;

  const iconUrl = `https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@4x.png`;
  const {format} = useAppSelector(state => state.weatherReducer);

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          resizeMode="contain"
          style={styles.weatherIcon}
          source={{uri: iconUrl}}
        />
        <Text style={styles.temp}>
          {getTemp(weather.list[0].main.temp, format)}°
        </Text>
      </View>
      <Text style={styles.description}>
        {weather.list[0].weather[0].description}
      </Text>
    </View>
  );
};

export default MainInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  temp: {
    fontSize: 55,
    color: appTheme.COLORS.white,
  },
  description: {
    fontSize: 25,
    color: appTheme.COLORS.white,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  weatherIcon: {
    width: 150,
    height: 150,
  },
});
