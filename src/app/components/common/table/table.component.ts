import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent {
  @Input() columnTitles: string[] = [];
  @Input() columnFields: string[] = [];
  @Input() rows: Array<{ [key: string]: any }> = [];
}
