import * as route from '@helpers/route';
import * as element from '@helpers/elements';
import * as assert from '@helpers/asserts';
import { ROUTES } from '@tests/consts/routes';
import * as auth from '@tests/data/login.data';
import * as login from '@tests/page/login.page';


describe('Login', () => {
    beforeEach(() => {
        route.visit(ROUTES.login);
    })

    it('Ensure the error message is displayed', () => {
        element.fillField(login.usernameField, auth.INVALID_LOGIN.username);
        element.fillField(login.passwordField, auth.INVALID_LOGIN.password);
        element.click(login.loginButton);

        assert.shouldContainText(login.errorAlert)
    });
});