import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  
  @Output() itemsPerPageEvent = new EventEmitter<number>();
  @Output() searchValueEvent = new EventEmitter<string>();
  itemsPerPage = 5;
  searchValue = '';
  onPageSizeChange(event: Event) {
    this.itemsPerPage = +(event.target as HTMLSelectElement).value;
    this.itemsPerPageEvent.emit(this.itemsPerPage);
  
    //this.currentPage = 1;
  }
  getSearchValue(event: Event){
    this.searchValue = (event.target as HTMLSelectElement).value;
    this.searchValueEvent.emit(this.searchValue);
  }
}
