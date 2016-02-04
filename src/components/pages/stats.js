import React, { Component, View, Text } from 'react-native';
import i18n from '../i18n';
import styles from './categories.style';

export class stats extends Component {
  static displayName = 'categories';
  render() {
    return (
        <View style={styles.container}>
            <Text>
              {i18n.t('stats')}
            </Text>
        </View>
    );
  }
}

export const Stats = stats;
