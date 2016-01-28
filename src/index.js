import React, { AppRegistry } from 'react-native'; // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { App } from './components/pages';

export const initialize = () => {
  const store = configureStore();
  const application = () =>
    (
      <Provider store={store}>
          <App />
      </Provider>
    );
  application.displayName = 'Applicaiton container';
  AppRegistry.registerComponent('jsqa', () => application);
};
