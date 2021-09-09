import React from 'react';

import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader}>
        <div className={styles.circleOut} />
        <div className={styles.circleIn} />
      </div>
    </div>
  );
};
