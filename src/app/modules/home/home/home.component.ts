import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
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

  }

  onClickUserPage(): void {
    this.router.navigate(['/user']);
  }

  onClickAdminPage(): void {
    this.router.navigate(['/admin']);
  }
}
