import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  contact:Object;

  constructor(private contactService:ContactsService,
              private route:ActivatedRoute
  ) {
    route.params.subscribe(params => {
      contactService.getContacts().forEach(contact => {
        if (contact['id'] == params.id) {
          this.contact = contact
        }
      })
    });
  }

  ngOnInit() {
  }

}
