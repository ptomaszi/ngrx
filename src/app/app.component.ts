import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { Person } from './person';
import {
  ADD_PERSON,
  ADD_GUEST,
  REMOVE_GUEST,
  REMOVE_PERSON,
  TOGGLE_ATTENDING } from './actions';
import { id } from './id';
import { partyModel, percentAttending } from './selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public model;
  public percentAttendance;

  constructor (private store: Store<number>) {
    this.model = Observable.combineLatest(
            store.select('people'),
            store.select('partyFilter')
          )
          .let(partyModel());
      this.percentAttendance = store.let(percentAttending());
  }

  addPerson(name) {
    this.store.dispatch({type: ADD_PERSON, payload: {id: id(), name}});
  }

  addGuest(id) {
    this.store.dispatch({type: ADD_GUEST, payload: {id}});
  }

  removeGuest(id) {
    this.store.dispatch({type: REMOVE_GUEST, payload: {id}});
  }

  removePerson(id) {
    this.store.dispatch({type: REMOVE_PERSON, payload: id});
  }

  toggleAttending(id) {
    this.store.dispatch({type: TOGGLE_ATTENDING, payload: id});
  }

  updateFilter(filter) {
      this.store.dispatch({type: filter});
  }
}
