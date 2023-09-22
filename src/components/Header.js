import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {locationArrow} from '../constants/images';
import {SwitchComponent, ButtonComponet, InputComponent} from '../components';

import appTheme from '../constants/theme';

const Header = props => {
  const {getCureentLocation} = props;
  const [changeCity, setChangeSity] = useState(false);

  if (changeCity) {
    return (
      <View style={styles.container}>
        <InputComponent setChangeSity={setChangeSity} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.cityText}>{props.name.city.name}</Text>
        <SwitchComponent />
      </View>
      <View style={styles.row}>
        <ButtonComponet
          onPress={() => setChangeSity(true)}
          text="Сменить город"
        />
        <ButtonComponet
          onPress={() => getCureentLocation()}
          text="Мое местоположение"
          image={locationArrow}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: appTheme.SIZES.padding,
    height: 80,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cityText: {
    color: appTheme.COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
