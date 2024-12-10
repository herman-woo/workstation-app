import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@Component({
  selector: 'doc-viewer',
  standalone: true,
  imports: [
    CommonModule,
    NgxDocViewerModule
  ],
  templateUrl: './doc-viewer.component.html',
  styleUrl: './doc-viewer.component.scss'
})
export class DocViewerComponent {

}
