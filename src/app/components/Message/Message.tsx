import React from 'react';

import styles from './Message.module.scss';

interface Props {
  message: string;
}

export const Message = ({ message }: Props): JSX.Element => {
  return <p className={styles.message}>{message}</p>;
}
