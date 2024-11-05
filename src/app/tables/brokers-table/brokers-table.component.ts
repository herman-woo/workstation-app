import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import * as accountData from '../../../../data/models/accounts.json'

@Component({
  selector: 'brokers-table',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './brokers-table.component.html',
  styleUrl: './brokers-table.component.css'
})
export class BrokersTableComponent {
  constructor(private route: ActivatedRoute) { }

  id : string | null = null
  accounts: any[] = []
  year: string = ""

  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.id)

    for(let account of accountData.accounts){
      
      if(account.brokerId === this.id){
        console.log(account)
          this.accounts.push(account)
      }
    }
  }
}
