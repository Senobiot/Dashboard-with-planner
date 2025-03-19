import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { ROUTES_NAV } from 'constants/Routes';

const Clients = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover='content' />}>
      <Switch>
        <Route
          path={`${match.url}${ROUTES_NAV.main.clients.groups}`}
          component={lazy(() => import(`./goups`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.clients.list}`}
          component={lazy(() => import(`./list`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.clients.profile}`}
          component={lazy(() => import(`./list/profile`))}
        />
        <Redirect
          from={`${match.url}`}
          to={`${match.url}${ROUTES_NAV.main.clients.list}`}
        />
      </Switch>
    </Suspense>
  );
};
export default Clients;
