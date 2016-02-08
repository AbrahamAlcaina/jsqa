import React, { View, Text } from 'react-native';
import i18n from '../i18n';
import styles from './categories.style';

const stats = () =>
  (
    <View style={styles.container}>
        <Text>
          {i18n.t('stats')}
        </Text>
    </View>
  );

stats.displayName = 'categories';

export const Stats = stats;
