import { Component, Input, Output, EventEmitter } from '@angular/core';
 import { CommonModule } from '@angular/common';

import { MobileDisplayComponent } from '../mobile-display/mobile-display.component';
import { MobileEditComponent } from '../mobile-edit/mobile-edit.component';

import {Mobile} from '../mobile';

@Component({
  selector: 'app-mobile-wrapper',
  templateUrl: './mobile-wrapper.component.html',
  styleUrls: ['./mobile-wrapper.component.css'],
  standalone: true,
  imports: [MobileDisplayComponent, MobileEditComponent, CommonModule]
})
export class MobileWrapperComponent {

  @Input() mobile: Mobile = new Mobile("", "", "", 0, "");
  @Output() removeItemEvent = new EventEmitter();
  editable: boolean = false;

  handleEditClick(): void {
    this.editable = true;
  }

  handleSaveEdition(mobile: Mobile): void {
    this.editable = false
    this.mobile = mobile;
  }


}
