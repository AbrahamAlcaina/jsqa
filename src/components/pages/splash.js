import style from './splash.style';
import i18N from './splash.i18n';
import React, {
  Text,
  View,
} from 'react-native';

const splash = () => (
    <View style={style.container}>
        <Text>{i18N.t('splash')}</Text>
    </View>
);

splash.displayName = 'Splash page';

export const Splash = splash;
