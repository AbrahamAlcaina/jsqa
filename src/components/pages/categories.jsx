import React, { View, ScrollView, Text, PropTypes } from 'react-native';
import styles from './categories.style';
import { MKCardStyles, mdl } from 'react-native-material-kit';

const categoriesComponent = ({ categories }) =>
(
    <ScrollView sytle={styles.scrollView}>
      {categories.map(category => (
          <View key={category.name}
            style={styles.container}
          >
              <View
                style={MKCardStyles.card}
              >
                  <mdl.Progress
                    progress={0.2}
                    style={styles.progress}
                  />
                  <Text style={MKCardStyles.title}>{category.get('name')}</Text>
                  <View
                    style={{ padding: 15 }}
                  >
                      <Text style={MKCardStyles.content}>{category.get('content')}</Text>
                  </View>
              </View>
          </View>
      ))}
    </ScrollView>
);

categoriesComponent.displayName = 'categories';
categoriesComponent.propTypes = {
  categories: PropTypes.shape({
    map: PropTypes.function
  })
};

export const Categories = categoriesComponent;
