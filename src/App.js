import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './pages';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks/';

export default function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <IsUserRedirect
        exact
        path={ROUTES.SIGN_IN}
        user={user}
        loggedInPath={ROUTES.BROWSE}
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        exact
        path={ROUTES.SIGN_UP}
        user={user}
        loggedInPath={ROUTES.BROWSE}
      >
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute exact path={ROUTES.BROWSE} user={user}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        exact
        path={ROUTES.HOME}
        user={user}
        loggedInPath={ROUTES.BROWSE}
      >
        <Home />
      </IsUserRedirect>
    </Router>
  );
}
