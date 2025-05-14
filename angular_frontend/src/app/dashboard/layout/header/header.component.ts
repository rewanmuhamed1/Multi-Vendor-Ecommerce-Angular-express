import { Component , inject ,HostListener } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faUser,faMagnifyingGlass , faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { ToggleDashboardService } from '../../services/toggle-dashboard.service';

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  faBars=faBars;
  faUser=faUser;
  faArrowRightFromBracket=faArrowRightFromBracket;
  faMagnifyingGlass=faMagnifyingGlass;
  btnUserMenu= false;
  toggleDashboardService: ToggleDashboardService = inject(ToggleDashboardService);
//clickOnSearch = false;
  constructor(){

  }
  toggleSidebar(): void {
    this.toggleDashboardService.toggleSidebar();
  }
  toggleUserMenu():boolean{
    this.btnUserMenu = !this.btnUserMenu; 
return this.btnUserMenu;
  }
// when user click  any where except menu and button user menu disappear 
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const menuElement = document.getElementById('user-menu');
    const buttonElement = document.getElementById('menu-btn');

    if (
      menuElement && !menuElement.contains(event.target as Node) &&
      buttonElement && !buttonElement.contains(event.target as Node)
    ) {
      this.btnUserMenu = false;
    }
  }
}
