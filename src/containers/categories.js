import { createSelector } from 'reselect';
import { Categories as categories } from '../components/pages';
import { connect } from 'react-redux';
import * as navigateActions from '../redux/navigate';

const selector = createSelector(
  [state => state.get('categories')],
  state => ({ categories: state.get('categories') }));

const actions = Object.assign({}, navigateActions);

export const Categories = connect(selector, actions)(categories);
