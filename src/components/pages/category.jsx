import React, { View, PropTypes } from 'react-native';
import style from './category.style';

const categoryComponent = ({ category }) => (
    <View sytle={style.container}>
      {category.questions.map(question => (
          <View key={question.id} />
      ))}
    </View>
);

categoryComponent .displayName = 'Category';

categoryComponent .propTypes = {
  category: PropTypes.shape({
    id: PropTypes.shape({
      get: PropTypes.function
    }),
    name: PropTypes.shape({
      get: PropTypes.function
    }),
    content: PropTypes.shape({
      get: PropTypes.function
    }),
    questions: PropTypes.shape({
      map: PropTypes.function
    })
  })
};

export const Category = categoryComponent;
