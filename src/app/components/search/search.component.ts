import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HistoryService } from '../../services/history.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchText = '';
  searchResults: any[] = [];

  constructor(private router: Router, private searchService: SearchService, private historyService: HistoryService) { }

  search() {
      if (!this.searchText) {
        this.searchResults = [];
        return;
      }
      this.searchService.searchUsers(this.searchText)
      .subscribe((data: any) => {
        this.searchResults = data.items;
        this.historyService.storeSearch(this.searchText)
      });
  }

  goToUserDetails(username: string) {
    this.router.navigate(['/user', username]);
  }
}
