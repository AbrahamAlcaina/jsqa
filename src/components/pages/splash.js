import style from './splash.style';
import i18N from './splash.i18n';
import React, {
  Text,
  View,
  Component
} from 'react-native';

export class splash extends Component {
  displayName = 'Splash page';
  render() {
    return (
        <View style={style.container}>
            <Text>{i18N.t('splash')}</Text>
        </View>
    );
  }
}

export const Splash = splash;
