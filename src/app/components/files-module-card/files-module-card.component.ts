import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'files-module-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './files-module-card.component.html',
  styleUrl: './files-module-card.component.scss'
})
export class FilesModuleCardComponent {
  pdf = "/images/pdf-svgrepo-com.svg"
  doc = "/images/word.svg"
  exl = "/images/excel-svgrepo-com.svg"
  file = "/images/folder-files-and-folders-svgrepo-com.svg"
}
