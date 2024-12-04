import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { navItems } from './_navItems';
import { RouterLink } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule, 
    MatListModule, 
    MatIconModule,
    RouterLink,
    MatTooltipModule,
    MatExpansionModule
  ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav; // Get a reference to the sidenav
  isExpanded = true; // Initially expanded
  navItems= navItems;

constructor() { 
  // Set the sidenav to be open by default
  this.sidenav.open();
  }
  toggleSidenav(): void {
    this.isExpanded = !this.isExpanded;
    this.sidenav.toggle();
    }


  // toggleSidenav() {
  //   this.isExpanded = !this.isExpanded;
  //   this.sidenav.toggle(); 
  // }
}
