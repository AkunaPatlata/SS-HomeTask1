import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.scss']
})
export class CardSmallComponent {
  @Input() additionalInfo: string[] = [];
  @Input() newPosition: string = '';

  constructor() {}
}

