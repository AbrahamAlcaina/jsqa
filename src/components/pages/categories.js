import React, { Component, View, Text, PropTypes } from 'react-native';
import i18n from '../i18n';
import styles from './categories.style';
import { MKCardStyles } from 'react-native-material-kit';

export class categories extends Component {
  static displayName = 'categories';
  static propTypes = {
    categories: PropTypes.object.isRequired
  };
  render() {
    return (
        <View style={styles.container}>
            <Text>
              {i18n.t('categories')}
            </Text>
            {this.props.categories.map(category => (
                <View
                  key={category.name}
                  style={MKCardStyles.card}
                >
                    <Text style={MKCardStyles.title}>{category.get('name')}</Text>
                    <Text style={MKCardStyles.content}>{category.get('content')}</Text>
                </View>
            ))}
        </View>
    );
  }
}

export const Categories = categories;
