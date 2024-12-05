import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Observable, debounceTime, switchMap, of, catchError, tap, filter } from 'rxjs';
import { Broker1Service } from '../../../services/broker1.service';
import MsgReader from '@kenjiuno/msgreader';
import { Broker } from './broker';
import { ChangeDetectorRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { combineLatest } from 'rxjs';



@Component({
  selector: 'app-submission',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.scss'
})
export class SubmissionComponent {
  form: FormGroup;
  bnameControl = new FormControl('');
  brokerNames: any[] = []; // List of brokers from backend
  isDropdownVisible: boolean = false;
  isLoading = false;
  brokerFirstNameControl = new FormControl('');
  brokerLastNameControl = new FormControl('');
  companyNames: any[] = []; // List of companies from backend
  filteredCompanies: any[] = []; // Filtered companies for the dropdown
  isCompanyDropdownVisible: boolean = false;
  insuredNames: any[] = [];  // List to hold the insured names from API
  isInsuredDropdownVisible: boolean = false;  // Toggle visibility of dropdown
  isLoadingInsuredNames = false;  // To show loading indicator
  insuredNameControl = new FormControl('');


  constructor(private fb: FormBuilder, private brokerService: Broker1Service, private cd: ChangeDetectorRef, private router: Router, private http: HttpClient) {
    this.form = this.fb.group({
      insuredName: [''],
      //bname: [''],
      brokerFirstName: [''],
      brokerLastName: [''],
      email: [''],
      brokerCompany: [''],
      //brokerCompanyDetails: [''],
      brokerAddress: [''],
    });


    //this.setupBrokerSearch();

  this.setupBrokerSearch();
  this.setupLastNameSearch();
  this.setupCompanySearch();
  this.setupInsuredNameSearch();
   // Watch for changes in first and last name and trigger search
   this.setupFullNameSearch();

    // this.bnameControl.valueChanges
    // .pipe(
    //   debounceTime(300),
    //   switchMap((searchTerm: string | null) => {
    //     const sanitizedSearchTerm: string = searchTerm || ''; // Explicitly set type
    //     return sanitizedSearchTerm.length > 1
    //       ? this.brokerService.searchBrokerNames(sanitizedSearchTerm, '').pipe(
    //           catchError(() => of([])) // Graceful error handling
    //         )
    //       : of([]);
    //   })
    // )
    // .subscribe((brokers: Broker[]) => {
    //   this.brokerNames = brokers;
    //   this.isDropdownVisible = brokers.length > 0;
    // });
  }

  // ngOnInit(){
  //   this.setupFullNameSearch();
  // }



  // Setup logic for searching brokers
  // private setupBrokerSearch(): void {
  //   this.brokerFirstNameControl.valueChanges
  //     .pipe(
  //       debounceTime(300),
  //       switchMap((firstName: string | null) => {
  //         const sanitizedFirstName: string = firstName || '';
  //         const lastName: string = this.brokerLastNameControl.value || '';
  //         return sanitizedFirstName.length > 1 || lastName.length > 1
  //           ? this.brokerService.searchBrokerNames(sanitizedFirstName, lastName).pipe(
  //               catchError(() => of([]))
  //             )
  //           : of([]);
  //       })
  //     )
  //     .subscribe((brokers: Broker[]) => {
  //       this.brokerNames = brokers;
  //       this.isDropdownVisible = brokers.length > 0;
  //     });
  // }

  setupInsuredNameSearch(): void {
    this.insuredNameControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((searchTerm: string | null) => {
          if (!searchTerm || searchTerm.length < 2) {
            this.insuredNames = [];  // Reset if no search term or too short
            this.isInsuredDropdownVisible = false;
            return of([]);  // Return empty if the search term is too short
          }
          console.log('Search Term:', searchTerm);  // Log the search term being sent
          this.isLoadingInsuredNames = true;  // Show loading indicator
          return this.http.get<any[]>(`http://127.0.0.1:8000/client/insured/search?query=${searchTerm}`).pipe(
            catchError(() => of([])),  // Graceful error handling
            tap(() => this.isLoadingInsuredNames = false)  // Hide loading indicator
          );
        })
      )
      .subscribe((insureds: any[]) => {
        console.log('API response:', insureds);  // Log the response data
        this.insuredNames = insureds;
        this.isInsuredDropdownVisible = insureds.length > 0;
      });
  }
  

  selectInsured(insured: any): void {
    console.log("Selecting Insured:", insured); 
    this.form.patchValue({
      insuredName: insured.name,  
    });
    this.insuredNameControl.setValue(insured.name, { emitEvent: false });
    this.isInsuredDropdownVisible = false;
    console.log("Selected Insured Name:", insured.name);
  }
  
  

    


  setupCompanySearch(): void {
    this.form.get('brokerCompany')?.valueChanges
      .pipe(
        debounceTime(300), // Wait for 300ms before triggering the search
        switchMap((searchTerm: string | null) => {
          // Check if there is a search term and make the request to the backend
          if (searchTerm && searchTerm.length > 0) {
            // Make a GET request to the company search endpoint with the query parameter
            return this.http.get<any[]>(`http://localhost:8000/contact/company/search?query=${searchTerm}`).pipe(
              catchError(() => of([])) // Return an empty array if the request fails
            );
          }
          return of([]); // If no search term, return empty array
        })
      )
      .subscribe((companies) => {
        // Update companyNames with the fetched company data
        this.companyNames = companies;
  
        // Filter the companies based on the search term
        const searchTerm = this.form.get('brokerCompany')?.value || '';
        this.filteredCompanies = companies.filter((company) =>
          company.name.toLowerCase().includes(searchTerm.toLowerCase()) // Use 'name' based on your response structure
        );
  
        // Toggle visibility of dropdown
        this.isCompanyDropdownVisible = this.filteredCompanies.length > 0;
      });
  }
  selectCompany(company: any): void {
    // Set the form value to the selected company's name (avoid emitting event to prevent value change triggers)
    this.form.get('brokerCompany')?.setValue(company.name, { emitEvent: false });
  
    // Clear the filtered list and hide the dropdown
    this.filteredCompanies = [];
    this.isCompanyDropdownVisible = false;
  }
    
  setupFullNameSearch(): void {
    combineLatest([
      this.brokerFirstNameControl.valueChanges,
      this.brokerLastNameControl.valueChanges,
    ])
      .pipe(
        debounceTime(300),
        switchMap(([firstName, lastName]: [string | null, string | null]) => {
          const query = `${firstName} ${lastName}`.trim();
          console.log('Constructed Query:', query);
          if (!query) {
            return of([]); // If no query, return empty array
          }
          return this.brokerService.searchBrokerNames(query).pipe(
            catchError(() => of([])) // Handle error gracefully
          );
        })
      )
      .subscribe((brokers: Broker[]) => {
        console.log('Brokers from API:', brokers);  
        this.brokerNames = brokers; // Handle the response
        this.isDropdownVisible = brokers.length > 0;
      });
  }
  

  

  
  setupBrokerSearch(): void {
    this.brokerFirstNameControl.valueChanges
      .pipe(
        debounceTime(300), // Wait for 300ms after the user stops typing
        switchMap(() => {
          // Combine firstName and lastName into a single query string
          const firstName = this.brokerFirstNameControl.value || '';
          const lastName = this.brokerLastNameControl.value || '';
          const query = `${firstName} ${lastName}`.trim();
          console.log('Constructed query:', query);
  
          // Only call the API if the combined query has more than 1 character
          return query.length > 1
            ? this.brokerService.searchBrokerNames(query).pipe(
                catchError(() => of([])) // Return an empty array on error
              )
            : of([]); // If query is too short, return an empty array
        })
      )
      .subscribe((brokers: Broker[]) => {
        this.brokerNames = brokers;
        this.isDropdownVisible = brokers.length > 0; // Show or hide the dropdown based on results
      });
  }
  

  
  setupLastNameSearch(): void {
    this.brokerLastNameControl.valueChanges
      .pipe(
        debounceTime(300), // Wait for 300ms after the user stops typing
        switchMap(() => {
          // Combine firstName and lastName into a single query string
          const firstName = this.brokerFirstNameControl.value || '';
          const lastName = this.brokerLastNameControl.value || '';
          const query = `${firstName} ${lastName}`.trim();
  
          // Only call the API if the combined query has more than 1 character
          return query.length > 1
            ? this.brokerService.searchBrokerNames(query).pipe(
                catchError(() => of([])) // Return an empty array on error
              )
            : of([]); // If query is too short, return an empty array
        })
      )
      .subscribe((brokers: Broker[]) => {
        this.brokerNames = brokers;
        this.isDropdownVisible = brokers.length > 0; // Show or hide the dropdown based on results
      });
  }
  

 
  selectBroker(broker: any): void {
    this.form.patchValue({
      brokerFirstName: broker.first_name,
      brokerLastName: broker.last_name,
      email: broker.email,
      brokerCompany: broker.broker_company_name,
      brokerAddress: broker.phone_number, // or another relevant field
    });
  
    // Set the individual form controls as well
    this.brokerFirstNameControl.setValue(broker.first_name, { emitEvent: false });
    this.brokerLastNameControl.setValue(broker.last_name, { emitEvent: false });
  
    // Hide the dropdown after selection
    this.isDropdownVisible = false;
    //this.brokerNames = [];
    console.log("Selected Broker:", broker);
  }
  


  selectBrokerName(broker: Broker) {
    const fullName = `${broker.first_name} ${broker.last_name}`;
    this.bnameControl.setValue(fullName);
    this.isDropdownVisible = false;

    // Populate additional form fields with broker data
    this.form.patchValue({
      email: broker.email,
      brokerCompany: broker.broker_company_name,
      brokerAddress: broker.phone_number,
    });
  }


  // Drag and drop event handlers
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

 

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.name.endsWith('.msg') || file.type === 'application/vnd.ms-outlook') {
        this.processEmailFile(file);
      } else {
        alert('Please drop a valid .msg file.');
      }
    }
  }


  

  processEmailFile(file: File): void {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const msgReader = new MsgReader(reader.result as ArrayBuffer);
        const emailData = msgReader.getFileData();
        const fullName = emailData?.senderName || '';
        const [firstName, lastName] = fullName.split(' ');
  
        console.log('Extracted Name:', fullName); // Debug log
  
        if (fullName) {
          // Call filter function after extracting names
          this.filterBrokersByName(fullName);
        } else {
          alert('Could not extract a valid name from the email.');
        }
      } catch (error) {
        console.error('Error processing .msg file:', error);
        alert('Error processing .msg file.');
      }
    };
    reader.onerror = (error) => alert('Error reading file: ' + error);
    reader.readAsArrayBuffer(file);
  }

  

  
  

  checkIfBrokerExists(firstName: string, lastName: string): void {
    const query = `${firstName} ${lastName}`.trim();
  
    // If no query or short query, do nothing
    if (!query) {
     //  this.brokerNames = [];
      this.isDropdownVisible = false;
      return;
    }
  
    // Check if broker exists in the already fetched brokers list
    const existingBroker = this.brokerNames.find(
      (broker) => `${broker.first_name} ${broker.last_name}`.toLowerCase() === query.toLowerCase()
    );
  
    if (existingBroker) {
      // Auto-populate form if broker exists
      this.selectBroker(existingBroker);
    } else {
      // Call the service to search brokers if not found
      this.brokerService
        .searchBrokerNames(query)
        .pipe(catchError(() => of([])))
        .subscribe((brokers: Broker[]) => {
          console.log('Brokers received from API:', brokers);
          this.brokerNames = brokers;
          this.isDropdownVisible = brokers.length > 0; // Show dropdown if brokers found
          if (brokers.length === 0) {
            // Auto-select broker if only one match found
            this.selectBroker(brokers[0]);
          } else if (brokers.length > 0) {
            alert(`Multiple brokers found with the name "${firstName} ${lastName}". Please select the correct broker.`);
          } else {
            alert(`No brokers found with the name "${firstName} ${lastName}".`);
          }
        });
    }
  }
  

  addNewBroker() {
    this.router.navigate(['/NewBrokerFormComponent']);
  }


filterBrokersByName(query: string): void {
  console.log('Searching for broker:', query);

  this.brokerService
    .searchBrokerNames(query)
    .pipe(catchError(() => of([]))) // Handle errors gracefully
    .subscribe((brokers: Broker[]) => {
      console.log('Broker search result:', brokers);

      // Merge new brokers with existing ones, avoiding duplicates
      this.brokerNames = [
        ...this.brokerNames.filter(broker => !brokers.some(newBroker => newBroker.id === broker.id)),
        ...brokers
      ];

      this.isDropdownVisible = this.brokerNames.length > 0;

      if (brokers.length === 0) {
        alert(`No brokers found with the name "${query}".`);
      } else if (brokers.length > 0) {
        alert(
          `Multiple brokers found with the name "${query}". Please select the correct broker from the list.`
        );
      }
    });
}


  submitForm(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      console.log('Form Data:', formData);  // Debug log
  
      // Log selected broker name values
      console.log('Selected broker first name:', formData.brokerFirstName);
      console.log('Selected broker last name:', formData.brokerLastName);
  
      // Ensure the insuredName is properly handled (even if it's manually typed)
      const insuredName = formData.insuredName || this.insuredNameControl.value;
      console.log('Final Insured Name:', insuredName);
  
      // Proceed with the rest of your form submission logic...
      const broker = this.brokerNames.find(
        (broker) =>
          broker.first_name.trim().toLowerCase() === formData.brokerFirstName.trim().toLowerCase() &&
          broker.last_name.trim().toLowerCase() === formData.brokerLastName.trim().toLowerCase()
      );
  
      if (broker) {
        const brokerCompany = this.companyNames.find(
          (company) => company.name === formData.brokerCompany
        );
  
        // Construct the payload for the POST request
        const payload = {
          underwriter: 3,  // Hardcoded value
          business_unit: 1,  // Hardcoded value
          team: 1,  // Hardcoded value
          named_insured: insuredName,  // Use the insuredName from the form
          broker: broker.id,  // Include the broker's ID from the response
          broker_company: brokerCompany?.id,  // Include the broker company's ID
          submission_type: 'New',  // Hardcoded value
          year: 2024,
        };
  
        console.log("Submission Payload:", payload); // Debug log to check the payload
  
        // Make the POST request to submit the form data
        this.http.post('http://127.0.0.1:8000/insurance/account/submission/new', payload)
          .subscribe(
            (response: any) => {
              console.log('Form submitted successfully', response);
            },
            (error) => {
              console.error('Error submitting form', error);
            }
          );
      } else {
        alert('Please select a valid broker');
      }
    } else {
      alert('Please fill in all required fields');
    }
  }
  
  
  
  populateForm(data: any): void {
    this.form.patchValue(data);
  }


}


