import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ParagraphsList.module.scss';

interface Props {
  index: number;
  item: string;
}

export const ListItem = ({ item, index }: Props): JSX.Element => {
  return (
    <Link to={`/paragraph/${index}`} className={styles.item}>{item}</Link>
  );
};
