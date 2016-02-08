import React, { View, ScrollView, Text, PropTypes } from 'react-native';
import styles from './categories.style';
import { MKCardStyles } from 'react-native-material-kit';

const categoriesComponent = ({ categories }) =>
(
    <View style={styles.container}>
        <ScrollView>
            {categories.map(category => (
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

categoriesComponent.displayName = 'categories';
categoriesComponent.propTypes = {
  categories: PropTypes.shape({
    map: PropTypes.function
  })
};

export const Categories = categoriesComponent;
