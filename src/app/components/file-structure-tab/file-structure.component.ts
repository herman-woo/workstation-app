import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesModuleCardComponent } from '../files-module-card/files-module-card.component';
import { AuditingChecklistCardComponent } from '../auditing-checklist-card/auditing-checklist-card.component';

@Component({
  selector: 'file-structure',
  standalone: true,
  imports: [CommonModule,
            FilesModuleCardComponent,
            AuditingChecklistCardComponent],
  templateUrl: './file-structure.component.html',
  styleUrl: './file-structure.component.scss'
})
export class FileStructureComponent {

  pdf = "/images/pdf-svgrepo-com.svg"
  doc = "/images/word.svg"
  exl = "/images/excel-svgrepo-com.svg"
  file = "/images/folder-files-and-folders-svgrepo-com.svg"
  @Input() data: any;
}
