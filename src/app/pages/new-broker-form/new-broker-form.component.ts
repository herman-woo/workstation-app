import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import MsgReader from '@kenjiuno/msgreader';

@Component({
  selector: 'app-new-broker-form',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './new-broker-form.component.html',
  styleUrl: './new-broker-form.component.scss'
})
export class NewBrokerFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      insuredName: ['', Validators.required],
      brokerFirstName: ['', Validators.required],
      brokerLastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      brokerCompany: ['', Validators.required],
      brokerAddress: ['', Validators.required],
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

  // Process the .msg file
  processEmailFile(file: File) {
    const reader = new FileReader();

    reader.onload = () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const msgReader = new MsgReader(arrayBuffer);

      // Get email data from MsgReader
      const emailData = msgReader.getFileData();
      console.log('Parsed Email Data:', emailData);

      // Extract fields and populate the form
      const extractedData = this.extractDataFromEmail(emailData);
      this.populateForm(extractedData);
    };

    reader.onerror = (error) => {
      console.error('Error reading file:', error);
    };
    reader.readAsArrayBuffer(file);
  }

  
  // Upload email data to the backend for processing
  uploadEmailData(emailData: any) {
    this.http.post<{ text: string }>('/upload', emailData).subscribe(
      response => {
        console.log('OCR Response:', response);
        // Process the OCR response to extract company and address
        const signatureDetails = this.parseSignature(response.text);
        this.form.patchValue({
          brokerCompany: signatureDetails.company,
          brokerAddress: signatureDetails.address,
        });
      },
      error => {
        console.error('Error uploading email data:', error);
      }
    );
  }

  // Extract data from email file
  extractDataFromEmail(emailData: any) {
    // Adjust field mappings as necessary based on email data structure
    // Split the full name into first name and last name
    const brokerName = emailData.senderName || ''; // Ensure senderName is available
    const nameParts = brokerName.split(' '); // Split the full name by space

    // Extract first name and last name (assuming the name has at least two parts)
    const brokerFirstName = nameParts[0] || ''; // First name (first part of the name)
    const brokerLastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : ''; // Last name (remaining parts of the name)

    // Extract the signature block from the email body
    const signatureBlock = this.extractSignatureBlock(emailData.body || '');

    // Extract company and address from the signature block
    const signatureDetails = this.parseSignature(signatureBlock);

    return {
      insuredName: emailData.subject || '',
      brokerFirstName: brokerFirstName || '',
      brokerLastName: brokerLastName,
      email: emailData.senderEmail || '',
      brokerCompany: signatureDetails.company || '',
      brokerAddress: signatureDetails.address || '',
    };
  }

   // Extract the signature block from the email body
   extractSignatureBlock(emailBody: string) {
    // Split the email body into lines
    const lines = emailBody.split('\n');
    // Find the index of the signature delimiter (e.g., "--", "Best regards", etc.)
    const signatureStartIndex = lines.findIndex(line => line.match(/--|Best regards|Thanks|Sincerely|Regards|Cheers|Kind regards/i));
    // Extract the signature block
    const signatureBlock = lines.slice(signatureStartIndex).join('\n');
    return signatureBlock;
  }


parseSignature(signature: string) {
  // Regex to match the full company name, including preceding words
  const companyRegex = /(?:\b(?:[A-Z][a-z]*\s){0,5}(?:Inc|Ltd|LLC|Limited|Corporation|Corp|Group|Company|Organization|Firm)\b)/i;
  // Regex to match common address patterns
  const addressRegex = /\d{1,5}\s\w+(\s\w+)*,\sSuite\s\d+,\s\w+,\s\w+\s\w+,\s\w+/i;

  const companyMatch = signature.match(companyRegex);
  const addressMatch = signature.match(addressRegex);

  return {
    company: companyMatch ? companyMatch[0].trim() : '',
    address: addressMatch ? addressMatch[0].trim() : '',
  };
}
  // Handle file attachment (when a user selects a file through the input)
  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement?.files?.length) {
      const selectedFile = inputElement.files[0];
      console.log("Selected File: ", selectedFile);
      if (selectedFile.name.endsWith('.msg') || selectedFile.type === 'application/vnd.ms-outlook') {
        this.processEmailFile(selectedFile);
      } else {
        alert('Please attach a valid .msg file.');
      }
    }
  }

  // Populate the form
  populateForm(data: any) {
    console.log('Populating form with:', data);
    this.form.patchValue(data);
  }

  submitForm() {
    if (this.form.valid) {
      console.log('New Broker Data:', this.form.value);
      // Add your logic to save the new broker data
    }
  }
}

