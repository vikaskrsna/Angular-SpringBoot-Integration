import { Component } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Mobile} from './mobile';
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {

  mobiles: Mobile[] = [];
  showForm =false;

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.http.get<Mobile[]>(
      "http://localhost:8080/mobiles"
    ).subscribe(data => this.mobiles = data);
  }

  addNewPhone(): void {
    this.showForm=true
    this.router.navigate(['/input']);
  }

  appendData(newMobile: any): void {
    this.mobiles.push(newMobile);
  }

  removeItem(mobileId: string): void {
    this.http.delete(
      "http://localhost:8080/mobiles/" + mobileId,
    ).subscribe(data => this.mobiles = this.mobiles.filter((mobile: Mobile) => mobile.id != mobileId));
  }

}
