import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'action-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-item.component.html',
  styleUrl: './action-item.component.scss'
})
export class ActionItemComponent {
  @Input() icon: string = '';
  @Input() action: string = '';
  @Output() actionClicked: EventEmitter<string> = new EventEmitter();  // this will notify the parent (event emitter), here the parent is dashboard component

  onActionClick(): void {
    this.actionClicked.emit(this.action);
  }

}
