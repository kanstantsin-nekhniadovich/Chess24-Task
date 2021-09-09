import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../constants';

import styles from './NotFound.module.scss';

export const NotFound = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <h1>404</h1>
      <Link to={ROUTES.HOME}>Visit homepage</Link>
    </div>
  );
}
