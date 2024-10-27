class LoginPage {
    visit() {
        cy.visit('/');
    }

    enterUsername(username) {
        cy.get('[data-test="username"]', { timeout: 5000 }).should('be.visible').clear().type(username);
    }

    enterPassword(password) {
        cy.get('[data-test="password"]', { timeout: 5000 }).should('be.visible').clear().type(password);
    }

    submit() {
        cy.get('#login-button', { timeout: 5000 }).should('be.enabled').click();
    }
    
    enterCredentials(username, password) {
        this.enterUsername(username);
        this.enterPassword(password);
        this.submit();
    }
    
}
export default LoginPage;
