import { Component, Input } from '@angular/core';

@Component({
  selector: 'file-structure',
  standalone: true,
  imports: [],
  templateUrl: './file-structure.component.html',
  styleUrl: './file-structure.component.css'
})
export class FileStructureComponent {
  @Input() data: any;

}
