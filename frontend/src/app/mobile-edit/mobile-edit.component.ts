import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mobile-edit',
  templateUrl: './mobile-edit.component.html',
  styleUrls: ['./mobile-edit.component.css'],
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
export class MobileEditComponent {

   @Input() mobile: Mobile = new Mobile("", "", "", 0, "");

    @Output() editDataEvent = new EventEmitter();

    constructor(private http: HttpClient) {}

    onSubmit(): void {
      this.http.post<Mobile>(
        "http://localhost:8080/mobiles",
        this.mobile
      ).subscribe(data => {
        this.editDataEvent.emit(data);
        });
    }
}
