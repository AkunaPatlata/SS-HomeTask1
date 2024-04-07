import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AdditionalInfoState } from '../../states/additional-info.state';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.scss']
})
export class CardSmallComponent {
  @Select(AdditionalInfoState.getAdditionalInfo) additionalInfo$!: Observable<string[]>;

  constructor() {}

  ngOnInit(): void {
  }
}
