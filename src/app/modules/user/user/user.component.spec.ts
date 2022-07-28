import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { provideMockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';

const RouterSpy = jasmine.createSpyObj(
  'Router',
  ['navigate']
);

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        provideMockStore({ initialState: {} }),
        { provide: Router, useValue: RouterSpy }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be give primary alert when no products in it', () => {
    const alert = document.querySelector('.alert-primary');

    expect(alert).toBeTruthy();
  });
});
