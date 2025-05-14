import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { category } from '../types/category.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}
 // add category  
  addCategory(
     formData : FormData 
  ): Observable<{ category: category; message: string }> {
    /* for (let [key, value] of formData.entries()) {
      console.log(key, value);
    } */
    return this.http.post<{ category: category; message: string }>(
      this.baseUrl + '/add-category',
      formData,
      { withCredentials: true }
    );
  }
  // get category
  getCategory (page : number , parPage : number , searchValue : string ) : Observable<{ categorys: category[]; totalCategory: number } >{
    return this.http.get<{ categorys: category[]; totalCategory: number }>(
      this.baseUrl +  '/get-category?page='+page+'&&searchValue='+searchValue+'&&parPage='+parPage,
      { withCredentials: true }
    );
  }

// update category
updateCategory(
  formData : FormData  , id :string
): Observable<{ category: category; message: string }> {
//   for (let [key, value] of formData.entries()) {
//    console.log(key, value);
//  } 
 return this.http.put<{ category: category; message: string }>(
   this.baseUrl + '/update-category/'+ id,
   formData,
   { withCredentials: true }
 );
}

// delete category
deleteCategory(
  id :string
): Observable<{  message: string }> {
return this.http.delete<{ message: string }>(
  this.baseUrl + '/delete-category/'+ id
);
}
}
