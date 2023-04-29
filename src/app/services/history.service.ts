import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  pastSearches: string[] = [];


  constructor() { 
    const searches = localStorage.getItem('pastSearches');
    if (searches) {
      this.pastSearches = JSON.parse(searches);
    }
  }
  clearSearch(index: number) {
    if (this.pastSearches && this.pastSearches.length) {
      this.pastSearches.splice(index,1)
      localStorage.setItem('pastSearches', JSON.stringify(this.pastSearches));
    }
    return this.pastSearches || [];
  }

  storeSearch(search :string) {
    const isSearch = this.pastSearches.filter(s => s !== search);
    if (isSearch) {
      this.pastSearches.push(search);
      localStorage.setItem('pastSearches', JSON.stringify(this.pastSearches));
    }
  }

  clearAllSearches() {
    this.pastSearches = [];
    localStorage.setItem('pastSearches', JSON.stringify(this.pastSearches));
    return this.pastSearches;
  }
}
