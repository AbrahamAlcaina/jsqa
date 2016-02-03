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
    loadApp: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
    splash: PropTypes.shape({
      loaded: PropTypes.bool.isRequired,
      loading: PropTypes.bool
    })
  };

  componentDidMount() {
    this.props.loadApp();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.splash.loaded && this.props.splash.loading) {
      this.props.push('categories');
    }
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
