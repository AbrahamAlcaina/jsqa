import React, { Navigator, PropTypes, Component } from 'react-native';
import { Router, Route, Schema } from 'react-native-router-flux';
import { Categories, Test, Stats } from './components/pages';
import { Splash } from './containers';
import { Nav } from './components/organisms';
import * as categoriesActions from './redux/categories';
import * as navigateActions from './redux/navigate';
import { connect } from 'react-redux';

const actions = Object.assign({}, categoriesActions, navigateActions);


export class router extends Component {
  static displayName = 'router';
  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  render() {
    return (
        <Router>
            <Schema
              footer={connect(state => ({ state }), navigateActions)(Nav)}
              name="normal"
              sceneConfig={Navigator.SceneConfigs.FloatFromBottom}
            />
            <Route
              component={Splash}
              initial
              name="splash"
              title="Splash"
            />
            <Route
              component={Categories}
              name="categories"
              schema="normal"
              title="categories"
            />
            <Route
              component={Categories}
              name="home"
              schema="normal"
              title="categories"
              type="replace"
            />
            <Route
              component={connect(state => ({ state }), actions)(Stats)}
              name="stats"
              schema="normal"
              title="stats"
            />
            <Route
              component={connect(state => ({ state }), actions)(Test)}
              name="test"
              schema="normal"
              title="Test"
            />
        </Router>
    );
  }
}
export const RouterApp = router;
