import { Action } from '@ngrx/store';

export const SET_EMAIL  = '[Auth] Edit2';
export const RESET      = '[Auth] Reset';
export const SET_LOGGED_IN      = '[Auth] SetLogged';
export const SET_LOGGED_OUT     = '[Auth] SetLoggedOut';

export class SetUserEmail implements Action {
  readonly type = SET_EMAIL;
  constructor(public payload: string) {}
}

export class LogIn implements Action {
    readonly type = SET_LOGGED_IN ;
  }

export class LogOut implements Action {
    readonly type = SET_LOGGED_OUT ;
  }
export class Reset implements Action {
  readonly type = RESET;
}



export type All
  = Reset
  | LogIn
  | LogOut
  | SetUserEmail;
