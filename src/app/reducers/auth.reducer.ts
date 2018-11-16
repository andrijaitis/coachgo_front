import * as AuthActions from '../actions/auth.actions';
import { Auth } from '../entities/auth.model';

export type Action = AuthActions.All;
/// Default app state
const defaultState: Auth = {
    usrEmail: 'Please login',
    userEmail: 'no email',
    userID: 'no id',
    token: 'no token provided',
    isLoggedIn: false,
};

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};


export function authReducer(state: Auth = defaultState, action: Action) {
    console.log(action.type, state);

    switch (action.type) {
        case AuthActions.SET_EMAIL:
            return newState(state, { usrEmail: action.payload });

        case AuthActions.SET_LOGGED_IN:
            return newState(state, { isLoggedIn: state.isLoggedIn = true });
 
        case AuthActions.SET_LOGGED_OUT:
            return newState(state, { isLoggedIn: state.isLoggedIn = false });

        case AuthActions.RESET:
            return defaultState;

        default:
            return state;

    }
}
