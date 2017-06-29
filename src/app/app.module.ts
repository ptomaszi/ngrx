import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonInputComponent } from './person-input/person-input.component';
import { PersonListComponent } from './person-list/person-list.component';
import { FilterSelectComponent } from './filter-select/filter-select.component';

import { peopleReducer } from './people.reducer';
import { partyFilterReducer } from './party-filter.reducer';
import { PartyStatsComponent } from './party-stats/party-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonInputComponent,
    PersonListComponent,
    FilterSelectComponent,
    PartyStatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.provideStore({people: peopleReducer, partyFilter: partyFilterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
