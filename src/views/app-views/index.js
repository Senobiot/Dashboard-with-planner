import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig';
import { ROUTES_NAV } from 'constants/Routes';

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover='content' />}>
      <Switch>
        <Route
          path={`${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}`}
          component={lazy(() => import(`./main`))}
        />

        <Route
          path={`${APP_PREFIX_PATH}${ROUTES_NAV.system.inner}`}
          component={lazy(() => import(`./system`))}
        />
        <Redirect
          from={`${APP_PREFIX_PATH}`}
          to={`${APP_PREFIX_PATH}${ROUTES_NAV.main.inner}`}
        />
      </Switch>
    </Suspense>
  );
};

export default React.memo(AppViews);
