import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  searchUsers(searchText: string) {
   return this.http.get(`${environment.apiEndpoint}${environment.searchUsers}${searchText}`)
  }
}
