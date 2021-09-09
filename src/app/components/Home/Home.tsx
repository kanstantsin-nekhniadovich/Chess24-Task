import React from 'react';

import { useAppSelector } from '../../hooks';
import { Paragraphs, getIsParagraphsLoading } from '../../../features/paragraphs';
import { Loader } from '../Loader';

import styles from './Home.module.scss';

export const Home = (): JSX.Element => {
  const isLoading = useAppSelector(getIsParagraphsLoading);

  return (
    <div className={styles.page}>
      {isLoading && <Loader />}
      <h1>Paragraphs List</h1>
      <Paragraphs />
    </div>
  );
}
