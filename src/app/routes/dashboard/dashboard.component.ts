import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionItemComponent } from '../../components/action-item/action-item.component';
import * as actions from "../../components/action-item/UnderwriterActions.json";

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [CommonModule, ActionItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  underwriterActions = actions['underwriter actions']
}
