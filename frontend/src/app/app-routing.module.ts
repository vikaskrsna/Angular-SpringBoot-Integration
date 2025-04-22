// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileEditComponent } from './mobile-edit/mobile-edit.component';
import { MobileInputComponent } from './mobile-input/mobile-input.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'edit', component: MobileEditComponent },
  { path: 'input', component: MobileInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
