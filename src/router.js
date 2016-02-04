import React, { Navigator, PropTypes, Component } from 'react-native';
import { Router, Route, Schema } from 'react-native-router-flux';
import { Splash, Categories, Test, Stats } from './components/pages';
import { Nav } from './components/organisms';
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
        <Router>
            <Schema
              footer={connect(state => state, navigateActions)(Nav)}
              name="normal"
              sceneConfig={Navigator.SceneConfigs.FloatFromBottom}
            />
            <Route
              component={connect(state => state, actions)(Splash)}
              initial
              name="splash"
              title="Splash"
            />
            <Route
              component={connect(state => state, actions)(Categories)}
              name="categories"
              schema="normal"
              title="categories"
            />
            <Route
              component={connect(state => state, actions)(Categories)}
              name="home"
              schema="normal"
              title="categories"
              type="replace"
            />
            <Route
              component={connect(state => state, actions)(Stats)}
              name="stats"
              schema="normal"
              title="stats"
            />
            <Route
              component={connect(state => state, actions)(Test)}
              name="test"
              schema="normal"
              title="Test"
            />
        </Router>
    );
  }
}
export const RouterApp = router;
