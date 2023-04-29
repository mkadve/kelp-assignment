import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { HistoryComponent } from './components/history/history.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search', component: SearchComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'user/:username', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
