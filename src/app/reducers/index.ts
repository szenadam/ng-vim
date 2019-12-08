import { ActionTypes, SetMode } from '../actions';

export const initialState = 'normal';

export function modeReducer(state = initialState, action: SetMode) {
  switch (action.type) {
    case ActionTypes.SetMode:
      return state = action.payload;
    default:
      return state;
  }
}
