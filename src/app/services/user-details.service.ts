import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }

  getUsers(username: string) {
    return this.http
      .get(`${environment.apiEndpoint}${environment.users}${username}`)
  }
}
