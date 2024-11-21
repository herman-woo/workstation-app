import { Component } from '@angular/core';
import * as data from "../../../../package.json"
import { SearchbarComponent } from '../tools/searchbar/searchbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'main-banner',
  standalone: true,
  imports: [SearchbarComponent,RouterLink],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.css'
})
export class MainBannerComponent {

  version = data.version
  currentDate: Date = new Date()
  day = this.currentDate.toDateString()
}
