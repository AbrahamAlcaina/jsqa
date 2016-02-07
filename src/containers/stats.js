import { createSelector } from 'reselect';
import { Stats as stats } from '../components/pages';
import { connect } from 'react-redux';
import * as navigateActions from '../redux/navigate';

const selector = createSelector(
  [state => state.get('stats')],
  state => ({ stats: state }));

const actions = Object.assign({}, navigateActions);

export const Stats = connect(selector, actions)(stats);
