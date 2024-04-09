export class AddAdditionalInfo {
    static readonly type = '[Additional Info] Add';
    constructor(public info: string) {} 
  }

export class AddNewPosition {
  static readonly type = '[New Position] Add';
  constructor(public position: string) {} 
}
