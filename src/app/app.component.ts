import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  name:string;
  radioTest: FormGroup;
  gender;
  constructor(fb: FormBuilder) {
    this.name = 'Angular2'
    this.radioTest = fb.group({
      gender: ['', Validators.required]
    });
  }
}
