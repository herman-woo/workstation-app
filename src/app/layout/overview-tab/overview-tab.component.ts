import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AccountService } from '../../../services/account.service';
import { MatSort } from '@angular/material/sort';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'overview-tab',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    RouterLink
  ],
  templateUrl: './overview-tab.component.html',
  styleUrl: './overview-tab.component.scss'
})
export class OverviewTabComponent implements OnInit {
  displayedColumns: string[] = [
    'Policy Number',
    'Name Insured',
    'Broker',
    'Submission',
    'Year',
    'Product',
    'Status'
  ];
  dataSource = new MatTableDataSource<any>(); // Table data source
  insuredFilter: string = ''; // Bound to the search input
  isLoading: boolean = false; // Loading indicator

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getAccounts(''); // Fetch all accounts initially
  }

  // Column click handler (can be used for specific column filtering)
  onColumnClick(column: string): void {
    this.isLoading = true;
    this.getAccounts(column);
  }

  // Fetch accounts based on the filter (column or full filter)
  getAccounts(filter: string): void {
    this.isLoading = true;

    // Call the service to fetch the accounts
    this.accountService.getAllAccounts(filter).subscribe({
      next: (response) => {
        console.log('Service Data:', response); // Log the service data
        this.dataSource.data = response.accounts; // Bind the data to the table
        this.dataSource.paginator = this.paginator; // Rebind paginator to the new data
        this.isLoading = false; // Stop loading indicator
      },
      error: (error) => {
        console.error('Error fetching accounts:', error);
        this.isLoading = false; // Stop loading indicator on error
      }
    });
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];












//   @ViewChild(MatPaginator) paginator: MatPaginator;
//   @ViewChild(MatSort, { static: true }) sort: MatSort;

//   accounts = [];
//   dataSource= new MatTableDataSource<>

//   constructor (private accountService: AccountService){}
//   ngOnInit(): void {
//     this.getAccounts("").subscribe(accounts => {
//       this.dataSource = new MatTableDataSource(accounts);
//       this.dataSource.paginator = this.paginator;
//       this.dataSource.sort = this.sort;
//   });
// }
//   }

//   getAccounts(insured: string) {
//     this.accountService.getAllAccounts(insured).subscribe({
//       next: (response) => {
//         console.log(response)
//         this.accounts = response.accounts;
//       },
//       error: (error) => {
//         console.error('Error fetching underwriters:', error);
//       }
//     })
//   }


//   ngAfterViewInit(): void {
//     throw new Error('Method not implemented.');
//   }


