import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as data from '../../../../../data/models/accounts.json'
import { RecordHeaderComponent } from "../../../components/common/record-header/record-header.component";
import { BreadcrumbComponent } from '../../../components/common/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { NamedInsuredService } from '../../../../services/named-insured.service';
import { NamedInsured } from '../../../../models/named-insured.model';

@Component({
  selector: 'insured-page',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, RecordHeaderComponent, RouterLink],
  templateUrl: './named-insured-record.component.html',
  styleUrl: './named-insured-record.component.css'
})




export class NamedInsuredRecordComponent {
  pageSubject = "Named Insured"
  id: string | null = null;
  insured = new NamedInsured()
  accounts: any[] = []

  constructor(private route: ActivatedRoute, private insuredService: NamedInsuredService) { }
  
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    parseInt(this.id!)

    //get Named Insured by ID
    this.insuredService.getNamedInsuredById(parseInt(this.id!)).subscribe((data: NamedInsured) => this.insured = data)

    //get accounts by named insured Id
    for (let account of data.accounts) {
      if (account.insuredId === this.id) {
        this.accounts.push(account)
      }
    }

  }

}
