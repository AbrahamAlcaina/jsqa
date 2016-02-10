import React, { View, Text } from 'react-native';
import i18n from '../i18n';
import styles from './categories.style';
import { pureRender } from '../pureRender';

const test = () =>
  (
    <View style={styles.container}>
        <Text>
          {i18n.t('test')}
        </Text>
    </View>
  );

test.displayName = 'test';

export const Test = pureRender(test);
