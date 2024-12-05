import { Component } from '@angular/core';
import * as data from "../../../../package.json"
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
  version = data.version
  currentDate: Date = new Date()
  day = this.currentDate.toDateString()

}
