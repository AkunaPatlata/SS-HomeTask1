import { Injectable } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AdditionalInfoState } from './additional-info.state';

@Injectable({
  providedIn: 'root',
})
export class AdditionalInfoService {
  @Select(AdditionalInfoState.getAdditionalInfo) additionalInfo$!: Observable<
    string[]
  >;
  @Select(AdditionalInfoState.getNewPosition) newPosition$!: Observable<string>;

  constructor() {}
}
