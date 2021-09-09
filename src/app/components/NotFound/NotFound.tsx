import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../../constants';
import { Message } from '../Message';

import styles from './NotFound.module.scss';

export const NotFound = (): JSX.Element => {
  return (
    <div className={styles.page}>
      <Message message="404" className={styles.message} />
      <Link to={ROUTES.HOME}>Visit homepage</Link>
    </div>
  );
}
