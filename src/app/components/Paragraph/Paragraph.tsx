import React from 'react';
import { useParams, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import { isDefined } from '../../../utils';
import { ROUTES } from '../../../constants';
import { useAppSelector } from '../../../app/hooks';
import { getParagraphByIndex } from '../../../features/paragraphs';
import { Message } from '../Message';

import styles from './Paragraph.module.scss';

export const Paragraph = (): JSX.Element => {
  const { index } = useParams<{ index: string }>();

  const itemIndex = parseInt(index, 10);

  if (isNaN(itemIndex)) {
    return <Redirect to={`/${ROUTES.NOT_FOUND}`} />;
  }

  const paragraph = useAppSelector(getParagraphByIndex(itemIndex));

  return (
    <div className={styles.page}>
      {!isDefined(paragraph) ?
        <>
          <Message message="Sorry! Paragraph was not found. Please navigate to Home page" />
          <Link to={ROUTES.HOME}>Visit homepage</Link>
        </>
        : <p className={styles.paragraph}>
          {paragraph}
        </p>
      }
    </div>
  );
};
