import React, { Navigator, PropTypes, Component } from 'react-native';
import { Router, Route, Schema } from 'react-native-router-flux';
import * as container from './containers';

export class router extends Component {
  static displayName = 'router';
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  render() {
    return (
        <Router>
            <Schema
              footer={container.Nav}
              name="normal"
              sceneConfig={Navigator.SceneConfigs.FloatFromBottom}
            />
            <Route
              component={container.Splash}
              initial
              name="splash"
              title="Splash"
            />
            <Route
              component={container.Categories}
              name="categories"
              schema="normal"
              title="categories"
            />
            <Route
              component={container.Categories}
              name="home"
              schema="normal"
              title="categories"
              type="replace"
            />
            <Route
              component={container.Stats}
              name="stats"
              schema="normal"
              title="stats"
            />
            <Route
              component={container.Test}
              name="test"
              schema="normal"
              title="Test"
            />
        </Router>
    );
  }
}
export const RouterApp = router;
