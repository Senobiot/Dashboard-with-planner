import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { ROUTES_NAV } from 'constants/Routes';

const Catalogue = ({ match }) => (
  <Suspense fallback={<Loading cover='content' />}>
    <Switch>
      <Route
        path={`${match.url}${ROUTES_NAV.main.offline.geozones}`}
        component={lazy(() => import(`./geozones`))}
      />
      <Route
        path={`${match.url}${ROUTES_NAV.main.offline.adresses}`}
        component={lazy(() => import(`./adresses`))}
      />
      <Redirect
        from={`${match.url}`}
        to={`${match.url}${ROUTES_NAV.main.offline.inner}`}
      />
    </Switch>
  </Suspense>
);

export default Catalogue;
