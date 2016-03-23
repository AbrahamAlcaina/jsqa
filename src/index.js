import React, { AppRegistry, PropTypes } from 'react-native'; // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { RouterApp } from './router';

export const initialize = () => {
  const store = configureStore();
  const application = () =>
    (
      <RouterApp />
    );
  application.displayName = 'Applicaiton container';
  application.childContextTypes = {
    store: PropTypes.object.isRequired
  };
  AppRegistry.registerComponent('jsqa', () => application);
};
