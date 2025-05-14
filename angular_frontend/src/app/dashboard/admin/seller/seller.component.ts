import { Component } from '@angular/core';
import { PaginationComponent } from '../../common/pagination/pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye  } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-seller',
  imports: [PaginationComponent , FontAwesomeModule],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css'
})
export class SellerComponent {
  faEye=faEye;
  currentPage = 1;
    totalItems = 30;
    itemsPerPage = 5 ;
   
    onPageSizeChange(event: Event) {
      this.itemsPerPage = +(event.target as HTMLSelectElement).value;
      //this.currentPage = 1;
      
    }
  
    onPageChange(newPage: number) {
      this.currentPage = newPage;
      // هنا تقدر تجيب الداتا الجديدة حسب الصفحة
    }
}
