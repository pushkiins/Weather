import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Card from './Card';

const Footer = ({weather}) => {
  const dates = timestamp => new Date(timestamp * 1000);

  const WeatherInfo = [
    {
      day: 'Завтра',
      tempDay: Math.ceil(weather?.list[7].main.temp),
      tempNight: Math.ceil(weather?.list[12].main.temp),
      description: weather?.list[12].weather[0].description,
    },
    {
      day: dates(weather?.list[15].dt).toDateString('ru-RU'),
      tempDay: Math.ceil(weather?.list[15].main.temp),
      tempNight: Math.ceil(weather?.list[20].main.temp),
      description: weather?.list[15].weather[0].description,
    },
    {
      day: dates(weather?.list[23].dt).toDateString('ru-RU'),
      tempDay: Math.ceil(weather?.list[23].main.temp),
      tempNight: Math.ceil(weather?.list[28].main.temp),
      description: weather?.list[23].weather[0].description,
    },
    {
      day: dates(weather?.list[31].dt).toDateString('ru-RU'),
      tempDay: Math.ceil(weather?.list[31].main.temp),
      tempNight: Math.ceil(weather?.list[36].main.temp),
      description: weather?.list[31].weather[0].description,
    },
  ];

  return (
    <View style={styles.container}>
      {WeatherInfo.map(item => (
        <Card item={item} />
      ))}
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    width: '100%',
    height: 200,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
