import { Component } from '@angular/core';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  pastSearches: string[] = [];

  constructor(public historyService: HistoryService) {
    const searches = localStorage.getItem('pastSearches');
    if (searches) {
      this.pastSearches = JSON.parse(searches);
    }
  }

  public clearSearch(index :number) {
    this.pastSearches = this.historyService.clearSearch(index);
  }

  public clearAllSearches() {
    this.pastSearches = this.historyService.clearAllSearches();
  }
}
