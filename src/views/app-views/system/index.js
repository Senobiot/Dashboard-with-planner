import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { ROUTES_NAV } from 'constants/Routes';

const Main = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover='content' />}>
      <Switch>
        <Route
          path={`${match.url}${ROUTES_NAV.system.logs}`}
          component={lazy(() => import(`./logs`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.system.mobile}`}
          component={lazy(() => import(`./mobile`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.system.preferences}`}
          component={lazy(() => import(`./preferences`))}
        />
        <Redirect
          from={`${match.url}`}
          to={`${match.url}${ROUTES_NAV.system.preferences}`}
        />
      </Switch>
    </Suspense>
  );
};

export default Main;
