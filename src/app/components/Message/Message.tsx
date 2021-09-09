import React from 'react';
import classNames from 'classnames';

import styles from './Message.module.scss';

interface Props {
  message: string;
  className?: string;
}

export const Message = ({ message, className }: Props): JSX.Element => {
  return <p className={classNames(styles.message, className)}>{message}</p>;
}
