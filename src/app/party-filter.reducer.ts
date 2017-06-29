import {
  SHOW_ATTENDING,
  SHOW_ALL,
  SHOW_WITH_GUESTS
} from './actions';

import { Person } from './person';
import { Action } from '@ngrx/store';

export function partyFilterReducer(state = person => person, action: Action) {
    switch (action.type) {
        case SHOW_ATTENDING:
            return person => person.attending;
        case SHOW_ALL:
            return person => person;
        case SHOW_WITH_GUESTS:
            return person => person.guests;
        default:
            return state;
    }
}
