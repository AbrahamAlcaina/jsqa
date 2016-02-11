import { createSelector } from 'reselect';
import { Category as category } from '../components/pages';
import { connect } from 'react-redux';
import * as navigateActions from '../redux/navigate';

const selector = createSelector(
  [state => state.get('categories')],
  state => ({ categories: state.get('categories') }));

const actions = Object.assign({}, navigateActions);

export const Category = connect(selector, actions)(category);
