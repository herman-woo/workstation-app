import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reference-banner',
  standalone: true,
  imports: [],
  templateUrl: './reference-banner.component.html',
  styleUrl: './reference-banner.component.scss'
})
export class ReferenceBannerComponent {
  @Input() title: string = '';
  @Input() subject: string = '';
}
