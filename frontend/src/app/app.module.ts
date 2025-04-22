import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileInputComponent } from './mobile-input/mobile-input.component';
import { MobileDisplayComponent } from './mobile-display/mobile-display.component';
import { MobileEditComponent } from './mobile-edit/mobile-edit.component';
import { MobileWrapperComponent } from './mobile-wrapper/mobile-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MobileInputComponent,
    MobileDisplayComponent,
    MobileEditComponent,
    MobileWrapperComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
