import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants';

export const NotFound = (): JSX.Element => {
  return (
    <>
      <h1>404</h1>
      <Link to={ROUTES.HOME}>Visit homepage</Link>
    </>
  );
}
