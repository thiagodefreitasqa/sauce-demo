import LoginPage from '../../pages/LoginPage';

describe('Testes de Login', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
    });

    it('Login com credenciais válidas', () => {
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.submit();
        cy.url().should('include', 'v1/inventory.html');
    });

    it('Login com credenciais inválidas', () => {
        loginPage.enterUsername('invalid_user');
        loginPage.enterPassword('invalid_password');
        loginPage.submit();
        cy.get('[data-test="error"]').should('be.visible')
    });

    it('Login com credenciais bloqueadas', () => {
        loginPage.enterUsername('locked_out_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.submit();
        //cy.get('.error-message-container').should('be.visible').and('contain', 'Sorry, this user has been locked out.');
        cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Sorry, this user has been locked out.')
    });  
    
});
