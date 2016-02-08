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
    categories: PropTypes.shape({
      get: PropTypes.func.isRequired
    }),
    loadApp: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.loadApp();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.categories.get('loaded')) {
      this.props.push('home');
    }
  }

  render() {
    return (
        <View style={style.container}>
            <Text>{i18n.t('splash')}</Text>
            <Text>{this.props.categories.get('loading')}</Text>
            <Text>{this.props.categories.get('loaded')}</Text>
        </View>
    );
  }
}

export const Splash = splash;
