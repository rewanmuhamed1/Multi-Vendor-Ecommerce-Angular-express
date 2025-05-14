import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [RouterLink],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  allCategories = ['cat1', 'category2', 'category2 l', 'cat 4', 'cat 5', 'cat 6'];
  categories = [...this.allCategories];
  showCategoryList = false;
  selectedCategory: string = '';
  //categorySearchValue: string = '';

  constructor(private eRef: ElementRef) {}
  toggleCategoryList() {
    this.showCategoryList = !this.showCategoryList;
  }
  selectCategory(category: string) {
    this.selectedCategory = category;
    this.showCategoryList = false;
    this.categories = [...this.allCategories];
  
  }
  categorySearch(event: Event) {
   const categorySearchValue = (event.target as HTMLInputElement).value;
    /* this.categories = this.categories.filter(
      (c) =>
        c.toLowerCase().indexOf(this.categorySearchValue.toLowerCase()) > -1
    ); */
    this.categories = this.allCategories.filter(c =>
    c.toLowerCase().includes(categorySearchValue))
  }
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.showCategoryList = false;
    }
  }
}
