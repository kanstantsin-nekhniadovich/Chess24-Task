import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchParagraphsAction } from './actions';

interface State {
  isLoading: boolean;
  items: string[],
}

const initialState: State = {
  isLoading: false,
  items: [],
}

export const { reducer } = createSlice({
  name: 'paragraphs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchParagraphsAction.pending, (state: State) => ({ ...state, isLoading: true }))
      .addCase(fetchParagraphsAction.fulfilled, (state: State, action: PayloadAction<string[]>) =>
        ({ isLoading: false, items: [...state.items, ...action.payload] }))
      .addCase(fetchParagraphsAction.rejected, (state: State) => ({ ...state, isLoading: false }))
  },
});
