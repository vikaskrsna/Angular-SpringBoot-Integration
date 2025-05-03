import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';

import {Mobile} from '../mobile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-input',
  templateUrl: './mobile-input.component.html',
  styleUrls: ['./mobile-input.component.css'],
  standalone: true,
  imports: [MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatButtonModule,
            MatDividerModule,
            MatIconModule,
            FormsModule,
            MatCardModule,
            MatCheckboxModule,
            MatRadioModule],
})
export class MobileInputComponent {

  @ViewChild('mobileForm') mobileForm!: NgForm;

  @Output() newDataEvent = new EventEmitter();

  constructor(private http: HttpClient,private router: Router) {}

  onSubmit(): void {
    this.http.post<Mobile>(
      "http://springboot-service:8080/mobiles",
      this.mobileForm.value
    ).subscribe(data => {
      this.newDataEvent.emit(data);
      });
    this.router.navigate(['/']);
  }

  exitEdit(): void {
    this.router.navigate(['/']);  
  }


}
