import React from 'react';

import { Counter } from '../features/counter/Counter';
import { ParagraphList } from '../features/paragraphList';

export const Home = (): JSX.Element => {
  return (
    <>
      <Counter />
      <ParagraphList />
    </>
  );
}
