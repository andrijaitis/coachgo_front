import { Action } from '@ngrx/store';

export const EDIT_TEXT2  = '[Post] Edit2';
export const RESET      = '[Post] Reset';

export class EditText2 implements Action {
  readonly type = EDIT_TEXT2;

  constructor(public payload: string) {}
}


export class Reset implements Action {
  readonly type = RESET;
}



export type All
  = Reset
  | EditText2;
