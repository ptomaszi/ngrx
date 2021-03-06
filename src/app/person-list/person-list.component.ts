import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonListComponent {
    @Input() people;

    @Output() addGuest = new EventEmitter();
    @Output() removeGuest = new EventEmitter();
    @Output() removePerson = new EventEmitter();
    @Output() toggleAttending = new EventEmitter();
}
