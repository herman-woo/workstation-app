import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NamedInsuredService } from '../../../../services/named-insured.service';

@Component({
  selector: 'insured-creation-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './insured-creation-form.component.html',
  styleUrl: './insured-creation-form.component.css'
})
export class InsuredCreationFormComponent {
  insuredCreationForm: FormGroup;
  showForm = false; // Controls the visibility of the pop-up

  constructor(private fb: FormBuilder, private insuredService: NamedInsuredService) {
    this.insuredCreationForm = this.fb.group({
      name: [''],
      address: [''],
      postal_code: [''],
      province: ['']
    });
  }


  // Show the pop-up
  openForm() {
    this.showForm = true;
  }

  // Hide the pop-up
  closeForm() {
    this.showForm = false;
    this.insuredCreationForm.reset(); // Reset the form
  }
  // Handle form submission
  onSubmit() {
    console.log("clicked")
    if (this.insuredCreationForm.valid) {
      const formData = this.insuredCreationForm.value
      this.insuredService.createNamedInsured(formData).subscribe()
      this.closeForm(); // Close the form after submission
    }else{
      console.log("Invalid")
      console.log(this.insuredCreationForm.valid);  // true or false
      console.log(this.insuredCreationForm.errors); // Display any form-wide errors
      console.log(this.insuredCreationForm.get('name')?.errors); // Errors specific to 'name'
    }
  }
}