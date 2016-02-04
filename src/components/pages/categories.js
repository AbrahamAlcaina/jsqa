import React, { Component, View, Text } from 'react-native';
import { Nav } from '../organisms';
import i18n from '../i18n';
import styles from './categories.style';

export class categories extends Component {
  static displayName = 'categories';
  render() {
    return (
        <View style={styles.container}>
            <Nav />
            <Text>
              {i18n.t('categories')}
            </Text>
        </View>
    );
  }
}

export const Categories = categories;
