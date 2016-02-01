import React, { Navigator, PropTypes, Component } from 'react-native';
import { Router, Route, Schema } from 'react-native-router-flux';
import { Splash } from './components/pages';

import { connect } from 'react-redux';
import * as splashActionCreator from './reducers/splash';

export class router extends Component {
  static displayName = 'router';
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  render() {
    debugger;
    return (
        <Router hideNavBar>
            <Schema
              name="normal"
              sceneConfig={Navigator.SceneConfigs.FloatFromBottom}
            />
            <Route
              component={connect(state => state, splashActionCreator)(Splash)}
              initial
              name="splash"
              title="Splash"
              wrapRouter
            />
        </Router>
    );
  }
}
export const RouterApp = router;
