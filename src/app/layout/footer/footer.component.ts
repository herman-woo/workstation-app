import { Component } from '@angular/core';
import packageJson from "../../../../package.json"
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  version: string = packageJson.version;
  currentDate: Date = new Date();
  day: string = this.currentDate.toDateString();
  constructor() {
    console.log("package.json:", packageJson); // Log the entire package.json
    console.log("App Version:", this.version);  // Log the version
  }

}
