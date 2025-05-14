import { Store } from '@ngrx/store';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getUser } from './dashboard/store/auth/auth.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'multi-vendor-ecommerce';
  private store = inject(Store);

  ngOnInit(): void {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.store.dispatch(getUser()); // your action that fetches the user info
    }
  }
}
