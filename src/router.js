import React, { Navigator, PropTypes, Component } from 'react-native';
import { Router, Route, Schema } from 'react-native-router-flux';
import { Splash, Categories } from './components/pages';
import * as splashActions from './reducers/splash';

import { connect } from 'react-redux';

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
              component={connect(state => state, splashActions)(Splash)}
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
