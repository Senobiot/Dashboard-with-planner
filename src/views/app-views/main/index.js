import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { ROUTES_NAV } from 'constants/Routes';

const Main = ({ match }) => {
  return (
    <Suspense fallback={<Loading cover='content' />}>
      <Switch>
        <Route
          path={`${match.url}/dashboard`}
          component={lazy(() => import(`./dashboard`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.planner}`}
          component={lazy(() => import(`./planner`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.catalogue.inner}`}
          component={lazy(() => import(`./catalogue`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.orders}`}
          component={lazy(() => import(`./orders`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.clients.inner}`}
          component={lazy(() => import(`./clients`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.banners}`}
          component={lazy(() => import(`./banners`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.promocodes}`}
          component={lazy(() => import(`./promocodes`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.offline.inner}`}
          component={lazy(() => import(`./offline`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.personal}`}
          component={lazy(() => import(`./personal`))}
        />
        <Route
          path={`${match.url}${ROUTES_NAV.main.mailers}`}
          component={lazy(() => import(`./mailers`))}
        />
        <Redirect
          from={`${match.url}`}
          to={`${match.url}${ROUTES_NAV.main.dashboard}`}
        />
      </Switch>
    </Suspense>
  );
};

export default Main;
