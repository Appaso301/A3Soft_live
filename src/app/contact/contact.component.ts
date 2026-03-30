import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  email: string = "a3soft@rediffmail.com";
  phone: string = "+91 9561538754";

  formData = {
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: ''
  };

  onSubmit() {
    console.log("Form Data:", this.formData);

    alert("Message Sent Successfully!");

    // Reset form
    this.formData = {
      name: '',
      email: '',
      countryCode: '+91',
      phone: '',
      message: ''
    };
  }
}