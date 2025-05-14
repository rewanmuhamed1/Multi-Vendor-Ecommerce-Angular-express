import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleDashboardService {
  private isSidebarOpen = new BehaviorSubject<boolean>(false);
  isSidebarOpen$ = this.isSidebarOpen.asObservable();
  constructor() { 

  }
  toggleSidebar(): void {
    this.isSidebarOpen.next(!this.isSidebarOpen.value);
  }

  closeSidebar(): void {
    this.isSidebarOpen.next(false);
  }
  openSidebar(): void {
    this.isSidebarOpen.next(true);
  }
}
