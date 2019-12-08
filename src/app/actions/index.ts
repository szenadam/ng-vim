import { Action } from '@ngrx/store';

export enum ActionTypes {
  SetMode = '[Editor] Set mode'
}

export class SetMode implements Action {
  readonly type = ActionTypes.SetMode;
  constructor(public payload: string) {}
}
