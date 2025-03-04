import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Rater } from '../../../models/rater.model';
import { FormsModule } from '@angular/forms';
import { RaterService } from '../../../services/rater.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rater-table',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './rater-table.component.html',
  styleUrl: './rater-table.component.scss'
})
export class RaterTableComponent {

  raters: Rater[]
  newItem: any;
  constructor(
    private raterService: RaterService
  ) { }

  ngOnInit() {
    this.raterService.getAllRaters().subscribe({
      next: (data) => {
        console.log("Rater Data:", data)
        this.raters = data
      },
      error: (error) => {
        // this.errorMessage = error.message;
      }
    })
  }
}
