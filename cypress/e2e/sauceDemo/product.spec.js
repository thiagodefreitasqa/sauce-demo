import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';

describe('Visualização de Produtos', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.submit();
    });

    it('Verifica se a lista de produtos é carregada após o login', () => {
        productsPage.verifyProductListIsVisible();
    });

    it('Muda a vizualizacao Inicial para Z to A', () => {

        cy.get('.product_sort_container').select('za')
    });

    it('Muda a vizualizacao Inicial Price (low to high)', () => {

        cy.get('.product_sort_container').select('lohi')
    });

    it('Muda a vizualizacao Inicial para Price (high to low)', () => {

        cy.get('.product_sort_container').select('hilo')
    });
});
