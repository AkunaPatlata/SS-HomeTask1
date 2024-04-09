import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AdditionalInfoState } from '../../states/additional-info.state';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.scss']
})
export class CardSmallComponent {
  @Select(AdditionalInfoState.getAdditionalInfo) additionalInfo$!: Observable<string[]>;
  @Select(AdditionalInfoState.getNewPosition) newPosition$!: Observable<string>;

  constructor() {}

  ngOnInit(): void {
  }
}
