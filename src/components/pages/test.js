import React, { Component, View, Text } from 'react-native';
import i18n from '../i18n';
import styles from './categories.style';

export class test extends Component {
  static displayName = 'test';
  render() {
    return (
        <View style={styles.container}>
            <Text>
              {i18n.t('test')}
            </Text>
        </View>
    );
  }
}

export const Test = test;
