import { createReducer, on } from '@ngrx/store';
import {
  addCategory,
  categorySuccess,
  categoryFailure,
  clearSuccessMessage,
  clearErrorMessage,
  getCategorySuccess,
  updateCategory,
  UpdateCategorySuccess,
  deleteCategory,
  deleteCategorySuccess,
} from './category.action';
import { categoryReducer } from '../../types/category.model';

const initialState: categoryReducer = {
  successMessage: '',
  errorMessage: '',
  loader: false,
  categories : [] ,
  totalCategory : 0,

  
};

export const categoryReducerFunction = createReducer(
  initialState,
  on(addCategory, state => ({ ...state, loader: true })),

  on(categorySuccess, (state, { category, message }) => ({
    ...state,
    loader: false,
    categories :[ category , ...state.categories ],
    successMessage: message,
    errorMessage: ''
  })),

  on(categoryFailure, (state, { error }) => ({
    ...state,
    loader: false,
    errorMessage: error,
    successMessage: ''
  })),

/*   on(categoryLoader, (state, { loader }) => ({
    ...state,
    loader
  })), */

  on(clearSuccessMessage, state => ({
    ...state,
    successMessage: ''
  })),

  on(clearErrorMessage, state => ({
    ...state,
    errorMessage: ''
  })),
  on(getCategorySuccess, (state, { categories, categoryCount }) => ({
    ...state,
    loader: false,
    categories ,
    totalCategory : categoryCount,
    errorMessage: ''
  })),
  // update category
  on(updateCategory, state => ({ ...state, loader: true })),
  on(UpdateCategorySuccess, (state, { category, message }) => ({
    ...state,
    loader: false,
    categories :  state.categories.map(c => c._id === category._id ? category : c),
    successMessage: message,
    errorMessage: ''
  })),
 // delete category
 on(deleteCategory, state => ({ ...state, loader: true })),
 on(deleteCategorySuccess, (state, { id , message }) => ({
   ...state,
   loader: false,
   categories :  state.categories.filter(c => c._id !== id ),
   successMessage: message,
   errorMessage: ''
 })),
);
