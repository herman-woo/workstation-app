import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RecordHeaderComponent } from '../../components/record-header/record-header.component';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { NamedInsuredService } from '../../../services/named-insured.service';
import { NamedInsured } from '../../../models/named-insured.model';
import { AccountService } from '../../../services/account.service';
@Component({
  selector: 'insured-page',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent, RecordHeaderComponent, RouterLink],
  templateUrl: './named-insured-record.component.html',
  styleUrl: './named-insured-record.component.scss'
})




export class NamedInsuredRecordComponent {
  pageSubject = "Named Insured"
  namedInsuredId: string | null = null;
  insured = new NamedInsured()
  accounts: any[] = []

  constructor(private route: ActivatedRoute, private insuredService: NamedInsuredService, private accountService: AccountService) { }
  
  ngOnInit(): void {
    // Capture the ID from the route
    this.namedInsuredId = this.route.snapshot.paramMap.get('id');
    parseInt(this.namedInsuredId!)

    //get Named Insured by ID
    this.insuredService.getNamedInsuredById(parseInt(this.namedInsuredId!)).subscribe((data: NamedInsured) => this.insured = data)
    this.loadData()

    

  }
  loadData() {
    this.accountService.getAccountsByForeignKey("named_insured",parseInt(this.namedInsuredId)).subscribe({
      next: (response) => {
        console.log(response)
        this.accounts = response.accounts;
      },
      error: (error) => {
        console.error('Error fetching underwriters:', error);
      }
    })
  }

}
