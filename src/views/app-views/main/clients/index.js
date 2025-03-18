import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { ROUTES_NAV } from 'constants/Routes';

const Catalogue = ({ match }) => {
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
        <Redirect
          from={`${match.url}`}
          to={`${match.url}${ROUTES_NAV.main.clients.inner}`}
        />
      </Switch>
    </Suspense>
  );
};
export default Catalogue;
