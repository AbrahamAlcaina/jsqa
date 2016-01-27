import I18n from 'react-native-i18n';
import React, {
  StyleSheet,
  Text,
  View,
} from 'react-native';

I18n.fallbacks = true;
I18n.translations = {
  en: {
    welcome: 'Welcome to React Native (EN)'
  },
  es: {
    welcome: 'Bienvenido a RN (ES)'
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

const App = ({ platfform }) => (
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

export default App;
