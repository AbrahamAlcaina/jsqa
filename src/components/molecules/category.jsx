import React, { View, Text, PropTypes } from 'react-native';
import { MKCardStyles, mdl } from 'react-native-material-kit';
import styles from './category.style';

const categoryComponent = ({ category }) => (
    <View key={category.get('id')}
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
);

categoryComponent.displayName = 'Category';
categoryComponent.propTypes = {
  category: PropTypes.shape({
    get: PropTypes.function
  })
};

export const Category = categoryComponent;
