import React, { AppRegistry } from 'react-native'; // eslint-disable-line no-unused-vars
import { Provider } from 'react-redux';
// import { getStore } from './store';
import App from './containers/App';

export const initialize = () => {
  // const store = getStore();
  // const application = () =>
  //   (
  //     <Provider store={store}>
  //         <App />
  //     </Provider>
  //   );
  const application = () => (<App />);
  application.displayName = 'Applicaiton container';
  AppRegistry.registerComponent('jsqa', application);
};
