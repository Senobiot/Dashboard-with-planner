import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { ROUTES_NAV } from 'constants/Routes';

const Catalogue = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover='content' />}>
      <Switch>
        <Route
          path={`${match.url}${ROUTES_NAV.main.catalogue.category}`}
          component={lazy(() => import(`./category`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.catalogue.collections}`}
          component={lazy(() => import(`./collections`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.catalogue.combo}`}
          component={lazy(() => import(`./combo`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.catalogue.goods}`}
          component={lazy(() => import(`./goods`))}
        />
        <Redirect
          from={`${match.url}`}
          to={`${match.url}${ROUTES_NAV.main.catalogue.inner}`}
        />
      </Switch>
    </Suspense>
  );
};

export default Catalogue;
