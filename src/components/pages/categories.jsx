import React, { ScrollView, PropTypes } from 'react-native';
import styles from './categories.style';
import { Category } from '../molecules';
import { pureRender } from '../pureRender';

const categoriesComponent = ({ categories }) =>
(
    <ScrollView sytle={styles.scrollView}>
      {categories.map(category => (
          <Category
            category={category}
            key={category.get('id')}
          />
      ))}
    </ScrollView>
);

categoriesComponent.displayName = 'categories';
categoriesComponent.propTypes = {
  categories: PropTypes.shape({
    map: PropTypes.function
  })
};

export const Categories = pureRender(categoriesComponent);
