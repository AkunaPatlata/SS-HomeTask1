import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddAdditionalInfo } from './additional-info.state.actions';
import { Injectable } from '@angular/core';

export class AdditionalInfoStateModel {
  additionalInfo: string[] = [];
}

@State<AdditionalInfoStateModel>({
  name: 'additionalInfo',
  defaults: {
    additionalInfo: []
  }
})

@Injectable()
export class AdditionalInfoState {
  @Selector()
  static getAdditionalInfo(state: AdditionalInfoStateModel) {
    return state.additionalInfo;
  }

  @Action(AddAdditionalInfo)
  addAdditionalInfo(ctx: StateContext<AdditionalInfoStateModel>, { info }: AddAdditionalInfo) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      additionalInfo: [...state.additionalInfo, info]
    });
  }
}
