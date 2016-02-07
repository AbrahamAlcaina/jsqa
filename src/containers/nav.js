import { createSelector } from 'reselect';
import { Nav as nav } from '../components/organisms';
import { connect } from 'react-redux';
import * as navigateActions from '../redux/navigate';

const selector = createSelector(
  [state => state],
  state => ({ state }));

export const Nav = connect(selector, navigateActions)(nav);
