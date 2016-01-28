import React, { Navigator } from 'react-native';
import { Router, Route, Schema } from 'react-native-router-flux';
import { Splash } from './components/pages';

export const router = () => (
    <Router hideNavBar>
        <Schema
          name="normal"
          sceneConfig={Navigator.SceneConfigs.FloatFromBottom}
        />
        <Route
          component={Splash}
          initial
          name="splash"
          wrapRouter
        />
    </Router>
);

router.displayName = 'router';

export const RouterApp = router;
