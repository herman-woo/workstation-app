import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UnderwriterService } from '../../../../services/underwriter.service';

@Component({
  selector: 'underwriter-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './underwriter-form.component.html',
  styleUrl: './underwriter-form.component.css'
})
export class UnderwriterFormComponent {
  underwriterForm: FormGroup;
  showForm = false; // Controls the visibility of the pop-up

  constructor(private fb: FormBuilder, private underwriterService: UnderwriterService) {
    // Initialize the form with form controls
    this.underwriterForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      business_unit: ['', Validators.required],
      team: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  // Show the pop-up
  openForm() {
    this.showForm = true;
  }

  // Hide the pop-up
  closeForm() {
    this.showForm = false;
    this.underwriterForm.reset(); // Reset the form
  }

  // Handle form submission
  onSubmit() {
    if (this.underwriterForm.valid) {
      const formData = this.underwriterForm.value
      this.underwriterService.createUnderwriter(formData).subscribe()
      //refresh list after successful submission
      //Currently not working.
      this.underwriterService.triggerUWListRefresh();
      this.closeForm(); // Close the form after submission
    }
  }
}
