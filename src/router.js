import React, { Navigator, PropTypes } from 'react-native';
import { Router, Scene, Schema } from 'react-native-router-flux';
import * as container from './containers';

const router = () => (
    <Router>
        <Schema
          footer={container.Nav}
          key="normal"
          sceneConfig={Navigator.SceneConfigs.FloatFromBottom}
        />
        <Scene
          component={container.Splash}
          initial
          key="splash"
          title="Splash"
        />
        <Scene
          component={container.Categories}
          key="categories"
          schema="normal"
          title="categories"
        />
        <Scene
          component={container.Categories}
          key="home"
          schema="normal"
          title="categories"
          type="replace"
        />
        <Scene
          component={container.Category}
          key="category"
          schema="normal"
          title="category"
        />
        <Scene
          component={container.Stats}
          key="stats"
          schema="normal"
          title="stats"
        />
        <Scene
          component={container.Test}
          key="test"
          schema="normal"
          title="Test"
        />
    </Router>
);

router.displayName = 'router';
router.contextTypes = {
  store: PropTypes.object.isRequired
};

export const RouterApp = router;
