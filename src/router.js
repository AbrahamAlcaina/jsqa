import React, { Navigator, PropTypes, Component } from 'react-native';
import { Router, Route, Schema } from 'react-native-router-flux';
import { Splash, Categories } from './components/pages';
import * as splashActions from './redux/splash';
import * as navigateActions from './redux/navigate';
import { connect } from 'react-redux';

const actions = Object.assign({}, splashActions, navigateActions);

export class router extends Component {
  static displayName = 'router';
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  render() {
    return (
        <Router
          hideNavBar
        >
            <Schema
              name="normal"
              sceneConfig={Navigator.SceneConfigs.FloatFromBottom}
            />
            <Route
              component={connect(state => state, actions)(Splash)}
              initial
              name="splash"
              title="Splash"
              wrapRouter
            />
            <Route
              component={connect(state => state)(Categories)}
              name="categories"
              schema="normal"
              title="categories"
              wrapRouter
            />
        </Router>
    );
  }
}
export const RouterApp = router;
