import style from './splash.style';
import i18n from '../i18n';
import React, {
  Text,
  View,
  Component,
  PropTypes
} from 'react-native';

export class splash extends Component {
  static displayName = 'Splash page';
  static propTypes = {
    load: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }

  render() {
    return (
        <View style={style.container}>
            <Text>{i18n.t('splash')}</Text>
        </View>
    );
  }
}

export const Splash = splash;
