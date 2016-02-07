import { createSelector } from 'reselect';
import { Splash as splash } from '../components/pages';
import { connect } from 'react-redux';
import * as categoriesActions from '../redux/categories';
import * as navigateActions from '../redux/navigate';

const selector = createSelector(
  [state => state.get('categories')],
  state => ({ categories: state }));

const actions = Object.assign({}, categoriesActions, navigateActions);

export const Splash = connect(selector, actions)(splash);
