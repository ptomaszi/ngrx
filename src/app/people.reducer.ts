import { Action } from '@ngrx/store';
import { Person } from './person';
import {ADD_GUEST, REMOVE_GUEST, TOGGLE_ATTENDING, ADD_PERSON, REMOVE_PERSON} from './actions';

const details = (state: Person, action: Action) => {
    switch (action.type) {
        case ADD_GUEST:
            if (state.id === action.payload.id) {
                return Object.assign({}, state, { guests: state.guests + 1});
            }
            return state;
        case REMOVE_GUEST:
            if (state.id === action.payload.id) {
                return Object.assign({}, state, { guests: state.guests - 1});
            }
            return state;
        case TOGGLE_ATTENDING:
        if (state.id === action.payload.id) {
            return Object.assign({}, state, {attending: !state.attending});
        }
        return state;
    }
}

export function peopleReducer (state: Array<Person> = [], action: Action) {
    switch (action.type) {
        case ADD_PERSON:
            return [...state, Object.assign({}, {id: action.payload.id, name: action.payload.name, guests: 0, attending: false})];
        case REMOVE_PERSON:
            return state.filter(person => person.id !== action.payload);
        case ADD_GUEST:
            return state.map(person => details(person, action));
        case REMOVE_GUEST:
            return state.map(person => details(person, action));
        case TOGGLE_ATTENDING:
            return state.map(person => details(person, action));
        default:
            return state;
    }
}
