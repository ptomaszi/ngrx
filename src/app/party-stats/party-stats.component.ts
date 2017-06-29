import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-party-stats',
  templateUrl: './party-stats.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyStatsComponent {
    @Input() invited;
    @Input() attending;
    @Input() guests;
}
