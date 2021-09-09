import React from 'react';

import { useAppDispatch } from '../../hooks';
import { fetchParagraphsAction } from '../../../features/paragraphs';

import styles from './LoadButton.module.scss';

export const LoadButton = () => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(fetchParagraphsAction());
  }

  return (
    <button className={styles.button} onClick={onClick}>Load Paragraphs</button>
  );
}
