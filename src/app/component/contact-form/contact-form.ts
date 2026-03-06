import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {ContactService} from '../../services/contact/contact.service';
import {Router} from '@angular/router';
import {Contact} from '../../model/shared/contact.model';

@Component({
  selector: 'app-contact-form',
  imports: [
    FormsModule
  ],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.css',
})
export class ContactForm implements OnInit {
  messageSent: boolean = false;
  messageId: string = '';
  name: string = '';
  email: string = '';
  subject: string = '';
  body: string = '';
  error: boolean = false;
  errorMessage: string = '';

  constructor(private contactService: ContactService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  sendContact(ngForm: NgForm) {
    this.name = ngForm.value.name;
    this.email = ngForm.value.email;
    this.subject = ngForm.value.subject;
    this.body = ngForm.value.body;

    if (this.name == '' || this.email == '' || this.subject == '' || this.body == '') {
      this.error = true;
      return;
    } else {
      const contact = new Contact();
      contact.name = this.name;
      contact.email = this.email;
      contact.subject = this.subject;
      contact.body = this.body;
      this.contactService.submitContact(contact).subscribe({
        complete(): void {
        },
        next: (createdContact: Contact) => {
          this.messageId = createdContact.id;
          this.messageSent = true;
        },
        error: (error) => {
          if (error.status === 0) {
            this.errorMessage = "Server unresponsive, please try again later."
          } else if (error.status === 400) {
            this.errorMessage = "Invalid request, please try again."
          } else if (error.status === 401) {
            this.errorMessage = "Unauthorized access, please log in."
          } else {
            this.errorMessage = "An unexpected error occurred, please try again."
          }
        }
      })
    }

  }

}
