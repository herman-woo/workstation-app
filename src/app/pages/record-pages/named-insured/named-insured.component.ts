import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import * as data from '\../../../../../data/models/accounts.json'
import { NamedInsuredTableComponent } from '../../../tables/named-insured-table/named-insured-table.component';
import { RecordHeaderComponent } from "../record-items/record-header/record-header.component";
import { RecordBreadcrumbComponent } from '../record-items/record-breadcrumb/record-breadcrumb.component';
import { TableComponent } from '../../../tools/table/table.component';
import { RouterLink } from '@angular/router';
import { NamedInsuredService } from '../../../../services/named-insured.service';
@Component({
  selector: 'insured-page',
  standalone: true,
  imports: [CommonModule, RecordBreadcrumbComponent, NamedInsuredTableComponent, RecordHeaderComponent, TableComponent, RouterLink],
  templateUrl: './named-insured.component.html',
  styleUrl: './named-insured.component.css'
})




export class NamedInsuredComponent {
  id: string | null = null;
  insuredName: string = "";
  insuredAddress: string = "";
  insuredProvince: string = "";
  insuredPostalCode: string = ""
  pageSubject = "Named Insured"
  accounts: any[] = []



  constructor(private route: ActivatedRoute, private insuredService: NamedInsuredService) { }
  ngOnInit(): void {
    // Capture the ID from the route
    this.id = this.route.snapshot.paramMap.get('id');
    parseInt(this.id!)

    //get Named Insured by ID
    this.insuredService.getNamedInsuredById(parseInt(this.id!)).subscribe((data) => {
      this.insuredName = data.insured_name
      this.insuredAddress = data.insured_street_address
      this.insuredPostalCode = data.insured_postal_code
      this.insuredProvince = data.insured_province
    })


    //get accounts by named insured Id
    for(let account of data.accounts){
      if(account.insuredId === this.id){
        this.accounts.push(account)
      }
    }

  }

}
