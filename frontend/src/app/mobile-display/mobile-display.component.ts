import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import {Mobile} from '../mobile';

@Component({
  selector: 'app-mobile-display',
  templateUrl: './mobile-display.component.html',
  styleUrls: ['./mobile-display.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class MobileDisplayComponent {

  @Input() mobile: Mobile = new Mobile("", "", "", 0, "");

  @Output() removeItemEvent = new EventEmitter();
  @Output() editItemEvent = new EventEmitter();
}
