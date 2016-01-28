import I18n from './app.i18n';
import styles from './app.style';
import React, {
  Text,
  View,
} from 'react-native';

export const App = ({ platfform }) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
          {I18n.t('welcome')} {platfform}!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
    </View>);

App.displayName = 'App container';
