import i18n from '../i18n';
import React, { View, Text, PropTypes } from 'react-native';
import { MKButton, MKColor } from 'react-native-material-kit';
import style from './nav.style';

const nav = ({ push }) => {
  const toTest = push.bind(this, 'test');
  const toCategories = push.bind(this, 'categories');
  const toStats = push.bind(this, 'stats');
  return (
      <View style={style.container}>
          <MKButton
            backgroundColor={MKColor.LightGreen}
            onPress={toStats}
            rippleLocation="center"
            shadowColor="black"
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={0.7}
            shadowRadius={2}
            style={style.button}
          >
              <Text
                pointerEvents="none"
                style={{ color: 'white', fontWeight: 'bold' }}
              >
                {i18n.t('stats')}
              </Text>
          </MKButton>
          <MKButton
            backgroundColor={MKColor.Teal}
            onPress={toTest}
            rippleLocation="center"
            shadowColor="black"
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={0.7}
            shadowRadius={2}
            style={style.button}
          >
              <Text
                pointerEvents="none"
                style={{ color: 'white', fontWeight: 'bold' }}
              >
              {i18n.t('test')}
              </Text>
          </MKButton>
          <MKButton
            backgroundColor={MKColor.Green}
            onPress={toCategories}
            rippleLocation="center"
            shadowColor="black"
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={0.7}
            shadowRadius={2}
            style={style.button}
          >
              <Text
                pointerEvents="none"
                style={{ color: 'white', fontWeight: 'bold' }}
              >
                {i18n.t('bookmark')}
              </Text>
          </MKButton>
      </View>
  );
};

nav.displayName = 'Nav';
nav.propTypes = {
  push: PropTypes.func.isRequired
};

export const Nav = nav;
