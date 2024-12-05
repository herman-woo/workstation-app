import { Component } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { ActionItemComponent } from '../../components/action-item/action-item.component';
import { uwActions } from './_uwAcions';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    WelcomeComponent,
    ActionItemComponent,
    CommonModule
  ],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  uwActions = uwActions;

}
