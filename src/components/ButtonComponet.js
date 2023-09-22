import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import appTheme from '../constants/theme';

const ButtonComponet = props => {
  const {onPress, image, text} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.location}>
        {image && <Image style={styles.locationArrow} source={image} />}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponet;

const styles = StyleSheet.create({
  container: {},
  location: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: appTheme.COLORS.white,
    fontSize: appTheme.SIZES.font,
    opacity: 0.6,
  },
  locationArrow: {
    marginRight: 10,
  },
});
