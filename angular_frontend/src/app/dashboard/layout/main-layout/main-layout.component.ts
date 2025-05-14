import { Component , inject, HostListener, OnInit  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from '../header/header.component';
import { ToggleDashboardService } from '../../services/toggle-dashboard.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-layout',
  imports: [RouterModule, SidebarComponent , HeaderComponent,CommonModule],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit{
  isSidebarOpen = false;
  toggleDashboardService: ToggleDashboardService = inject(ToggleDashboardService);
  isDesktopScreen = window.innerWidth >= 1024;
  constructor() {
    this.toggleDashboardService.isSidebarOpen$.subscribe(value => {
      console.log('Sidebar Open Status:', value);
      this.isSidebarOpen = value;
    });
  }
  ngOnInit(): void {
    if (this.isDesktopScreen) {
      this.toggleDashboardService.openSidebar();
    }
  }

  closeSidebar(): void {
    this.toggleDashboardService.closeSidebar();
  }

  /* @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    
  }*/ 
}
