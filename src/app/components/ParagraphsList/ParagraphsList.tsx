import React from 'react';

import { ListItem } from './ListItem';

import styles from './ParagraphsList.module.scss';

interface Props {
  items: string[];
}

export const ParagraphsList = ({ items }: Props): JSX.Element => {
  return (
    <div className={styles.list}>
      {items.map((item, index) => <div key={index}><ListItem index={index} item={item} /></div>)}
    </div>
  );
}
