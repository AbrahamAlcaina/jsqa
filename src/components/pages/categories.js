import React, { Component, View, ScrollView, Text, PropTypes } from 'react-native';
import styles from './categories.style';
import { MKCardStyles } from 'react-native-material-kit';

export class categories extends Component {
  static displayName = 'categories';
  static propTypes = {
    categories: PropTypes.shape({
      map: PropTypes.function
    })
  };
  render() {
    return (
        <View style={styles.container}>
            <ScrollView>
                {this.props.categories.map(category => (
                    <View
                      key={category.name}
                      style={MKCardStyles.card}
                    >
                        <Text style={MKCardStyles.title}>{category.get('name')}</Text>
                        <Text style={MKCardStyles.content}>{category.get('content')}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
  }
}

export const Categories = categories;
