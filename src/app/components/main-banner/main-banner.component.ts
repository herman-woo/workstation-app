import { Component } from '@angular/core';
import * as data from "../../../../package.json"
import { RouterLink } from '@angular/router';

@Component({
  selector: 'main-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-banner.component.html',
  styleUrl: './main-banner.component.scss'
})
export class MainBannerComponent {

  version = data.version
  currentDate: Date = new Date()
  day = this.currentDate.toDateString()
}
