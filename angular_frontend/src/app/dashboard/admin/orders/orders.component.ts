import { PaginationComponent } from './../../common/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-orders',
  imports: [FontAwesomeModule ,CommonModule , PaginationComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  faAngleRight=faAngleRight;
  toggleRow:boolean=false;
  currentPage = 1;
  totalItems = 30;
  itemsPerPage = 5 ;
  changeToggleRow(){
    this.toggleRow=!this.toggleRow;
  
  }
  onPageSizeChange(event: Event) {
    this.itemsPerPage = +(event.target as HTMLSelectElement).value;
    //this.currentPage = 1;
    
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    // هنا تقدر تجيب الداتا الجديدة حسب الصفحة
  }
}
