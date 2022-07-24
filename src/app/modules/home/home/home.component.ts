import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartAdd } from '../../../stores/cart-store/actions/cart-store.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store, private router: Router) {
  }

  ngOnInit(): void {
    this.store.dispatch(new CartAdd({ id: 1, amount: 1, name: '', price: 1 }));
  }

  onClickUserPage(): void {
    this.router.navigate(['/user']);
  }

  onClickAdminPage() {
    this.router.navigate(['/admin']);
  }
}
