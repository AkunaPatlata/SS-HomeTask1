import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AdditionalInfoState } from '../../states/additional-info.state';

@Component({
  selector: 'app-card-basic',
  templateUrl: './card-basic.component.html',
  styleUrls: ['./card-basic.component.scss']
})
export class CardBasicComponent implements OnInit {
  @Select(AdditionalInfoState.getAdditionalInfo) additionalInfo$!: Observable<string[]>;
  @Select(AdditionalInfoState.getNewPosition) newPosition$!: Observable<string>;

  constructor() {}

  ngOnInit(): void {
  }
}
