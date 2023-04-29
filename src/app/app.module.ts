import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HistoryComponent } from './components/history/history.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HistoryComponent,
    UserDetailsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
