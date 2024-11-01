import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'action-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-item.component.html',
  styleUrl: './action-item.component.css'
})
export class ActionItemComponent {
  @Input() icon: string = '';
  @Input() action: string = '';
}
