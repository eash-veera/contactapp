import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Contact} from './contact';
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  //retrive existing contacts method

  getContacts(){
    return this.http.get('http://localhost:3000/api/contacts')
      .map(res => res.json());
  }

  //add new contact method

  addContact(newContact){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/contacts', newContact,{headers:headers})
      .map(res => res.json());
  }

  //delete existing contact method

  deleteContact(contactId){
    return this.http.delete('http://localhost:300./api/contacts/'+contactId)
      .map(res => res.json());
  }

}
