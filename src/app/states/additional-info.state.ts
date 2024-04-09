import { State, Action, StateContext, Selector } from '@ngxs/store';
import { AddAdditionalInfo } from './additional-info.actions';
import { AddNewPosition } from './additional-info.actions';
import { Injectable } from '@angular/core';

export class AdditionalInfoStateModel {
  additionalInfo: string[] = [];
  newPosition: string = '';
}

@State<AdditionalInfoStateModel>({
  name: 'additionalInfo',
  defaults: {
    additionalInfo: [],
    newPosition: 'FrontEnd Angular Developer'
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

  @Selector()
  static getNewPosition(state: AdditionalInfoStateModel) {
    return state.newPosition;
  }

  @Action(AddNewPosition)
  addNewPosition(ctx: StateContext<AdditionalInfoStateModel>, { position }: AddNewPosition) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      newPosition: position
    });
  }
}
