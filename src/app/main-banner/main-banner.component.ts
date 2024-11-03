import { Component } from '@angular/core';
import * as data from "../../../package.json"

@Component({
  selector: 'banner',
  standalone: true,
  imports: [],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.css'
})
export class MainBannerComponent {

  version = data.version
  currentDate: Date = new Date()
  day = this.currentDate.toDateString()
}
