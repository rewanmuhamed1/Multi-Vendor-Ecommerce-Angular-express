import { Component } from '@angular/core';
import { PaginationComponent } from '../../common/pagination/pagination.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sellers-request',
  imports: [ FontAwesomeModule , PaginationComponent ],
  templateUrl: './sellers-request.component.html',
  styleUrl: './sellers-request.component.css'
})
export class SellersRequestComponent {
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
