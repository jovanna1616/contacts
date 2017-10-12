import { Injectable } from '@angular/core';
import { contacts } from '../contacts';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ContactsService {

	searchData = new BehaviorSubject('');


	constructor() { }

	getContacts(): Array<Object> {
		return contacts;
	}

	search(term) {
		this.searchData.next(term);
	}

	getSearchTerm() {
		return this.searchData;
	}

}

