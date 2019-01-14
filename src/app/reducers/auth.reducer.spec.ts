
import * as actions from '../actions/auth.actions';
import * as types from './auth.reducer';


describe('actions', () => {
    it('state should be default after reset', () => {
        const state = {usrEmail: 'Please login', userEmail: 'no email', userID: 'no id', token: 'no token provided', isLoggedIn: false};
        expect(types.authReducer(state, {type: actions.RESET})).toEqual(state);
    });
});

describe('actions2', () => {
    it('state should be change after login', () => {
        const state = {usrEmail:'a@a',userEmail:'no email',userID:'no id',token:'no token provided',isLoggedIn:false};
        const state2 = {usrEmail:'a@a',userEmail:'no email',userID:'no id',token:'no token provided',isLoggedIn:true}; //after login

        expect(types.authReducer(state, {type: actions.SET_LOGGED_IN})).toEqual(state2);
    });
});
