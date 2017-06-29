import { Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonInputComponent implements OnInit {
  @Output() addPerson = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add(personInput) {
    this.addPerson.emit(personInput.value);
    personInput.value = '';
  }
}
