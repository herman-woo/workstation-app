import { Component, Input } from '@angular/core';

@Component({
  selector: 'record-header',
  standalone: true,
  imports: [],
  templateUrl: './record-header.component.html',
  styleUrl: './record-header.component.css'
})
export class RecordHeaderComponent {
  @Input() title: string = '';
}
