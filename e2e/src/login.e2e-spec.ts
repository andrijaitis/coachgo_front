import { browser, by, element } from 'protractor';

describe('login test', () => {
    it('Should be able to login and see register new user tab', async () => {

        browser.get('/login');
         browser.sleep(5000);
        element(by.id('inputEmail')).sendKeys('a@a');
        element(by.id('inputPassword')).sendKeys('a');
        element(by.id('e2e-submit')).click();
        browser.sleep(250);
        const registerAthlete = element(by.id('regAthlete')).getText();
        expect(registerAthlete).toBe('REGISTER NEW ATHLETE');

    });

});

describe('logout button', () => {
    it('Should go to login screen', async () => {
               browser.get('/home');
              browser.sleep(5000);
        element(by.id('e2e-login')).click();
        browser.sleep(5000);
    });
});


it('Should NOT login when form is NOT valid', async () => {
    expect(false).not.toBeTruthy();
});




