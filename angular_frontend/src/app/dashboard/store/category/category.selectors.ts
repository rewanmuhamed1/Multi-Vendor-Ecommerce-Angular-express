import { createSelector, createFeatureSelector } from '@ngrx/store';
import { categoryReducer } from '../../types/category.model';

export const selectCategoryState = createFeatureSelector<categoryReducer>('category');

export const selectLoader = createSelector(
  selectCategoryState,
  (state: categoryReducer) => state.loader
);

export const selectSuccessMessage = createSelector(
  selectCategoryState,
  (state: categoryReducer) => state.successMessage
);

export const selectErrorMessage = createSelector(
  selectCategoryState,
  (state: categoryReducer) => state.errorMessage
);
