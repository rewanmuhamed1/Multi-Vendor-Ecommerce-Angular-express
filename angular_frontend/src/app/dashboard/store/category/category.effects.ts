import { category } from './../../types/category.model';
import { Injectable, inject } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { CategoryService } from '../../services/category.service';
import { addCategory , categorySuccess, categoryFailure, getCategory, getCategorySuccess, updateCategory, UpdateCategorySuccess, deleteCategory, deleteCategorySuccess} from './category.action';


@Injectable()
export class CategoryEffects {

  private actions$ = inject(Actions);
  private categoryService = inject(CategoryService);

  addCategory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCategory),
      exhaustMap(action =>
        // Service
        this.categoryService.addCategory(action.formData).pipe(
          map((response: { category: category; message: string }) =>{
           // console.log("add category effect : ",response);
           return categorySuccess({ category: response.category, message: response.message })
          }
           
          ),
          catchError(error =>{
           // console.log("add category effect : ",error);
            return  of(categoryFailure({ error: error?.error?.error || 'Unknown error occurred' }))

          }
          )
        )
      )
    )
  );
// get category 

getCategory$ = createEffect(() =>
  this.actions$.pipe(
    ofType(getCategory),
    exhaustMap(action =>
      // Service
      this.categoryService.getCategory(action.page , action.parPage , action.searchValue).pipe(
        map((response: { categorys: category[]; totalCategory: number }) =>{
      //   console.log("get category effect : ",response);
         return getCategorySuccess({ categories: response.categorys, categoryCount: response.totalCategory })
        }
         
        ),
        catchError(error =>{
         // console.log("add category effect : ",error);
          return  of(categoryFailure({ error: error?.error?.error || 'Unknown error occurred' }))

        }
        )
      )
    )
  )
);
// update category
UpdateCategory$ = createEffect(() =>
  this.actions$.pipe(
    ofType(updateCategory),
    exhaustMap(action =>
      // Service
      this.categoryService.updateCategory(action.formData , action.id).pipe(
        map((response: { category: category; message: string }) =>{
         console.log("update category effect : ",response);
         return UpdateCategorySuccess({ category: response.category, message: response.message })
        }
         
        ),
        catchError(error =>{
         // console.log("add category effect : ",error);
          return  of(categoryFailure({ error: error?.error?.error || 'Unknown error occurred' }))

        }
        )
      )
    )
  )
);


// delete category
deleteCategory$ = createEffect(() =>
  this.actions$.pipe(
    ofType(deleteCategory),
    exhaustMap(action =>
      // Service
      this.categoryService.deleteCategory(action.id).pipe(
        map((response: {  message: string }) =>{
        // console.log("delete category effect : ",response);
         return deleteCategorySuccess({ id : action.id , message: response.message })
        }
         
        ),
        catchError(error =>{
         // console.log("add category effect : ",error);
          return  of(categoryFailure({ error: error?.error?.error || 'Unknown error occurred' }))

        }
        )
      )
    )
  )
);
}