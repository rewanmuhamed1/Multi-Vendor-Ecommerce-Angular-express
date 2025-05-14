import { category } from './../../types/category.model';
import { createAction, props } from '@ngrx/store';

export const addCategory = createAction(
  '[Category] Add ',
  props<{ formData: FormData }>()
);

/* export const categoryLoader = createAction(
  '[Category]  Loader',
  props<{ loader: boolean }>()
); */

export const categorySuccess = createAction(
  '[Category] Success',
  props<{   category : category; message: string ; }>()
);

export const clearSuccessMessage = createAction(
  '[Category] Clear Success Message'
); 

export const categoryFailure = createAction(
  '[Category]  Failure',
  props<{ error: string }>()
);

export const clearErrorMessage = createAction(
  '[Category] Clear Error Message'
); 

// get categories 
export const getCategory = createAction(
  '[Get Category]  ',
  props<{ page :number ; parPage : number ; searchValue : string}>()
);
export const getCategorySuccess = createAction(
  '[Get Category] Success',
  props<{   categories :  category[]; categoryCount: number ; }>()
);

// update category 
export const updateCategory = createAction(
  '[Category] Updates ',
  props<{ formData: FormData , id : string }>()
);

export const UpdateCategorySuccess = createAction(
  '[Update Category] Success',
  props<{   category : category; message: string ; }>()
);

// delete category 
export const deleteCategory = createAction(
  '[Category] Delete ',
  props<{ id : string }>()
);

export const deleteCategorySuccess = createAction(
  '[Delete Category] Success',
  props<{ id:  string ; message: string ; }>()
);