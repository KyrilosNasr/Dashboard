import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }


  getCountires(): Observable<object> {
    return this.http.get('/assets/json/countries.json');
  }

  getUserDetails() {
    return this.http.get('/assets/json/user.json')
  }

  updateUserDetails(payload: User, id: number) {
    return this.http.put<User>('/assets/json/user.json' + id, payload)
  }

}
