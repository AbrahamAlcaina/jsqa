import { createSelector } from 'reselect';
import { Test as test } from '../components/pages';
import { connect } from 'react-redux';
import * as navigateActions from '../redux/navigate';

const selector = createSelector(
  [state => state.get('test')],
  state => ({ test: state }));

const actions = Object.assign({}, navigateActions);

export const Test = connect(selector, actions)(test);
