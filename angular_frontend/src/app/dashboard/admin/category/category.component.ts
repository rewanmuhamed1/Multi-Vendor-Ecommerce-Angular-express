import { category } from './../../types/category.model';
import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { PaginationComponent } from '../../common/pagination/pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPenToSquare,
  faTrashCan,
  faImage,
} from '@fortawesome/free-solid-svg-icons';
import { FormsModule, NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  addCategory,
  clearErrorMessage,
  clearSuccessMessage,
  deleteCategory,
  getCategory,
  updateCategory,
} from '../../store/category/category.action';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subject, takeUntil } from 'rxjs';
import {
  selectCategoryState,
  selectErrorMessage,
  selectLoader,
  selectSuccessMessage,
} from '../../store/category/category.selectors';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../common/search/search.component';
import { categoryReducer } from '../../types/category.model';

@Component({
  selector: 'app-category',
  imports: [
    PaginationComponent,
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    SearchComponent,
    SearchComponent,
  ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent implements OnDestroy, OnInit {
  currentPage = 1;
  itemsPerPage = 5;
  searchValue = '';
  faPenToSquare = faPenToSquare;
  faTrashCan = faTrashCan;
  faImage = faImage;
  categories: category[] | null = [];
  totalCategory = 0;
  categoryImage = '';
  categoryName = '';
  categoryImageFile: File | null = null;
  isEditMode = false;
  catId = '';
  // observable variable
  loader$: Observable<boolean>;
  successMessage$: Observable<string>;
  errorMessage$: Observable<string>;
  category$: Observable<categoryReducer>;
  private destroy$ = new Subject<void>();

  constructor(private store: Store, private toastr: ToastrService) {
    this.loader$ = this.store.select(selectLoader);
    this.successMessage$ = this.store.select(selectSuccessMessage);
    this.errorMessage$ = this.store.select(selectErrorMessage);
    this.category$ = this.store.select(selectCategoryState);
  }

  ngOnInit() {
    this.store.dispatch(
      getCategory({
        page: this.currentPage,
        parPage: this.itemsPerPage,
        searchValue: this.searchValue,
      })
    );
    this.category$.pipe(takeUntil(this.destroy$)).subscribe((category) => {
      if (category.categories) {
        this.categories = category.categories;
      }
      if (category.totalCategory) {
        this.totalCategory = category.totalCategory;
      }
    });

    this.successMessage$.pipe(takeUntil(this.destroy$)).subscribe((message) => {
      if (message) {
        this.showSuccess(message);
        this.store.dispatch(clearSuccessMessage()); // clear message action to reducer  if delete it toaster sucess message appear only one time
        this.store.dispatch(
          getCategory({
            page: this.currentPage,
            parPage: this.itemsPerPage,
            searchValue: this.searchValue,
          })
        );
      }
    });

    this.errorMessage$.pipe(takeUntil(this.destroy$)).subscribe((message) => {
      if (message) {
        this.showError(message);
        this.store.dispatch(clearErrorMessage()); // clear message action to reducer  if delete it toaster sucess message appear only one time
      }
    });
  }

  getItemsPerPage(event: number) {
    this.itemsPerPage = event;
    //  console.log('this.itemsPerPage ',event);
    this.store.dispatch(
      getCategory({
        page: this.currentPage,
        parPage: this.itemsPerPage,
        searchValue: this.searchValue,
      })
    );
  }
  getSearchValue(event: string) {
    this.searchValue = event;
    this.store.dispatch(
      getCategory({
        page: this.currentPage,
        parPage: this.itemsPerPage,
        searchValue: this.searchValue,
      })
    );
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.store.dispatch(
      getCategory({
        page: this.currentPage,
        parPage: this.itemsPerPage,
        searchValue: this.searchValue,
      })
    );
  }

  categorySubmit(categoryForm: NgForm) {
    const formData = new FormData(); // to send image into backend

    formData.append('catName', categoryForm.value.categoryName);
    if (this.categoryImageFile) {
      formData.append('catImage', this.categoryImageFile);
    }
    if (this.isEditMode) {
      this.store.dispatch(updateCategory({ formData, id: this.catId }));
    } else {
      this.store.dispatch(addCategory({ formData }));
    }

    categoryForm.reset();
    this.categoryImage = '';
  }
  // edit category
  editCategory(category: category) {
    //console.log('edit category ', category);
    this.categoryImage =
      typeof category.image === 'string' ? category.image : ''; // error beacuse f type insure that category.image is string not file
    this.isEditMode = true;
    this.categoryName = category.name;
    this.catId = category._id ? category._id : '';
  }
  imageChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.categoryImageFile = input.files[0]; //  image url
      this.categoryImage = URL.createObjectURL(this.categoryImageFile); // create temprary object to preview in html
    }
  }

  // delete category
  deleteCategory(id: string) {
    if(window.confirm('Are you sure to delete category?')){
      this.store.dispatch(deleteCategory({ id }));

    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    if (this.categoryImage) {
      URL.revokeObjectURL(this.categoryImage); //تحرير الذاكرة
    }
  }
  showSuccess(message: string) {
    this.toastr.success(message);
  }

  showError(message: string) {
    this.toastr.error(message);
  }
}
