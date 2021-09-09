import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ParagraphsList.module.scss';

interface Props {
  index: number;
  item: string;
}

export const ListItem = ({ item, index }: Props): JSX.Element => {
  const firstSentence = item.split('. ')[0];

  return (
    <Link to={`/paragraph/${index}`} className={styles.item}>{firstSentence}</Link>
  );
};
