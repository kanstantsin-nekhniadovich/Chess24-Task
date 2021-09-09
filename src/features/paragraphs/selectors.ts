import { RootState } from '../../app/store';

export const getIsParagraphsLoading = (store: RootState) => store.paragraphs.isLoading;
export const getParagraphs = (store: RootState) => store.paragraphs.items;
