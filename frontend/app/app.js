/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import 'sanitize.css/sanitize.css';
import FontFaceObserver from 'fontfaceobserver';
import { SnackbarProvider } from 'notistack';
import { SECONDARY_BLUE_LIGHT } from 'utils/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { loadState, saveState } from 'services/persist.service';
import { throttle } from 'lodash';
import 'bootstrap/dist/css/bootstrap.css';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Load the favicon and the .htaccess file
/* eslint-disable import/no-unresolved, import/extensions */
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import '!file-loader?name=[name].[ext]!./images/logo.png';
import '!file-loader?name=[name].[ext]!./images/icon.png';
import 'file-loader?name=.htaccess!./.htaccess';

import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';
import configureSocket from './utils/socket';
// Observe loading of Lato
const openSansObserver = new FontFaceObserver('Lato', {});

// When Lato is loaded, add a font-family using Lato to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

// Create redux store with history
const initialState = loadState();
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

store.subscribe(
  throttle(() => {
    saveState({
      language: store.getState().language,
      global: store.getState().global,
    });
  }, 1000),
);

const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${SECONDARY_BLUE_LIGHT}`,
    },
  },
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
  },
});
var socket = configureSocket();
const render = messages => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <LanguageProvider messages={messages}>
          <SnackbarProvider className="snackbar__provider">
            <ConnectedRouter history={history}>
              <App />
            </ConnectedRouter>
          </SnackbarProvider>
        </LanguageProvider>
      </MuiThemeProvider>
    </Provider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  new Promise(resolve => {
    resolve(import('intl'));
  })
    .then(() => Promise.all([import('intl/locale-data/jsonp/en.js')]))
    .then(() => render(translationMessages))
    .catch(err => {
      throw err;
    });
} else {
  render(translationMessages);
}

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
