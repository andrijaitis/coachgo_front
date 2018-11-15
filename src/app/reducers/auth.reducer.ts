import * as AuthActions from '../actions/auth.actions';
import { Auth } from '../entities/auth.model';

export type Action = AuthActions.All;
/// Default app state
const defaultState: Auth = {
    text2: 'default text',
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
        case AuthActions.EDIT_TEXT2:
            return newState(state, { text2: action.payload });

        case AuthActions.RESET:
            return defaultState;

        default:
            return state;

    }
}
