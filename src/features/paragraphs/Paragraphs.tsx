import React from 'react';

import { fetchParagraphsAction } from './actions';
import { getIsParagraphsLoading, getParagraphs } from './selectors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ParagraphsList, LoadButton, Message } from '../../app/components';

export const Paragraphs = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsParagraphsLoading);
  const paragraphs = useAppSelector(getParagraphs);

  const thereAreNoParagraphs = paragraphs.length === 0;

  React.useEffect(() => {
    if (!thereAreNoParagraphs) {
      return;
    }

    dispatch(fetchParagraphsAction());
  }, []);

  if (thereAreNoParagraphs && !isLoading) {
    return <Message message="Paragraphs list is empty!" />
  }

  return (
    <>
      <ParagraphsList items={paragraphs} />
      <LoadButton />
    </>
  );
};
