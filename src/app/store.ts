import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { ParagraphsReducer } from '../features/paragraphs';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const rootReducer = {
  router: connectRouter(history),
  paragraphs: ParagraphsReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
