import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { Routing } from './Routing';
import { store, history } from './app/store';

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routing />
      </ConnectedRouter>
    </Provider>
  );
}
