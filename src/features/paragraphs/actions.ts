import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchParagraphs } from './api';

export const fetchParagraphsAction = createAsyncThunk(
  'paragraphs/fetch',
  async () => {
    try {
      const response = await fetchParagraphs();
      return response.data;
    } catch {
      return [];
    }
  }
);
