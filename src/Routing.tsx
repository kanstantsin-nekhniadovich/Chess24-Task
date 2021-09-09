import React from 'react';
import { Switch, Route } from 'react-router';

import { Home, Paragraph, NotFound } from './app/components';
import { ROUTES } from './constants';

export const Routing = (): JSX.Element => (
  <Switch>
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route exact path={ROUTES.NOT_FOUND} component={NotFound} />
    <Route exact path={ROUTES.PARAGRAPH} component={Paragraph} />
    <Route path={ROUTES.ALL} component={NotFound} />
  </Switch>
);
