import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'account-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './account-breadcrumb.component.html',
  styleUrl: './account-breadcrumb.component.scss'
})
export class AccountBreadcrumbComponent {

}
