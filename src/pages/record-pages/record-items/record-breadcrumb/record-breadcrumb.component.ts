import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'record-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './record-breadcrumb.component.html',
  styleUrl: './record-breadcrumb.component.css'
})
export class RecordBreadcrumbComponent {
  @Input() id: string | null = '';
  @Input() category: string = '';
  home = ""
  @Input() link: string = '';
}
