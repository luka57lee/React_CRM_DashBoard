/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Fragment } from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import GlobalStyle from 'global-styles';

// Import Containers
import HomePage from 'containers/HomePage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import ForgotPasswordPage from 'containers/ForgotPasswordPage/Loadable';
import ProspectPage from 'containers/ProspectPage/Loadable';
import ImportCSVPage from 'containers/ImportCSVPage/Loadable';
import ConversationPage from 'containers/ConversationPage/Loadable';
import BroadcastPage from 'containers/BroadcastPage/Loadable';
import CampaignPage from 'containers/CampaignPage/Loadable';
import CampaignCreatePage from 'containers/CampaignCreatePage/Loadable';
import CampaignEditPage from 'containers/CampaignEditPage/Loadable';
import SequenceSettingPage from 'containers/SequenceSettingPage/Loadable';
import ProspectCreatePage from 'containers/ProspectCreatePage/Loadable';
import AdminLayout from 'containers/Admin/index.js';
import AccountSettingPage from 'containers/AccountSettingPage/index.js';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

// Import Components

import AuthService from 'services/auth.service';

function PrivateRoute({ component: Component, ...rest }) {
  const auth = new AuthService();
  const isLogged = auth.loggedIn();
  return (
    <Route
      {...rest}
      render={props =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

function AdminRoute({ component: Component, ...rest }) {
  const auth = new AuthService();
  const isLogged = auth.loggedIn();
  const role = auth.getRole();
  return (
    <Route
      {...rest}
      render={props =>
        isLogged && role == 'admin' ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/404',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default function App(props) {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <AdminRoute path="/admin" component={AdminLayout} />
        <PrivateRoute path="/prospects/create" component={ProspectCreatePage} />
        <PrivateRoute path="/prospects/import" component={ImportCSVPage} />
        <PrivateRoute path="/broadcast" component={BroadcastPage} />
        <PrivateRoute path="/prospects" component={ProspectPage} />
        <PrivateRoute
          path="/conversations/"
          component={ConversationPage}
        ></PrivateRoute>
        <PrivateRoute
          path="/campaigns/edit/:campaignId"
          component={CampaignEditPage}
        />
        <PrivateRoute path="/campaigns/create" component={CampaignCreatePage} />
        <PrivateRoute path="/campaigns" component={CampaignPage} />
        <PrivateRoute path="/sequences/:id" component={SequenceSettingPage} />
        <PrivateRoute path="/preferences" component={AccountSettingPage} />
        <Route path="/404" component={NotFoundPage} />
        <Route render={() => <Redirect to="/404" />} />
      </Switch>
      <GlobalStyle />
    </Fragment>
  );
}
