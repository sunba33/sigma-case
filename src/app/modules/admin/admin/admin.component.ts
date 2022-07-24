import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      itemName: new FormControl(null, [Validators.required]),
      itemAmount: new FormControl(null, [Validators.required]),
      itemPrice: new FormControl(null, [Validators.required]),
      itemId: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(): void {
    const formValues = this.form.value;


  }
}
