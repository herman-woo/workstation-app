import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as data from '../../../../data/models/accounts.json'
import * as insuredData from '../../../../data/models/NamedInsureds.json'
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'named-insured-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './named-insured-table.component.html',
  styleUrl: './named-insured-table.component.css'
})
export class NamedInsuredTableComponent {

  constructor(private route: ActivatedRoute) { }

  id : string | null = null
  accounts: any[] = []
  year: string = ""

  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    const insured = (insuredData as any).namedInsureds.find((insured: any) => insured.id === this.id)

    for(let account of data.accounts){
      if(account.insuredId == this.id){
        this.accounts.push(account)
      }
    }
  }

}
