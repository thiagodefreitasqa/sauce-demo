import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckouPage';

describe('Adicionar e Remover do Carrinho', () => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();

    beforeEach(() => {
        loginPage.visit();
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.submit();
    });

    it('Adiciona um produto ao carrinho', () => {
        productsPage.addProductToCart('Sauce Labs Backpack');
        productsPage.goToCart();
        cartPage.verifyProductInCart('Sauce Labs Backpack');
    });

    it('Remove um produto do carrinho', () => {
        productsPage.addProductToCart('Sauce Labs Backpack');
        productsPage.goToCart();
        cartPage.verifyProductInCart('Sauce Labs Backpack');
        cartPage.removeProductFromCart('Sauce Labs Backpack');
        cy.get('.cart_item').should('not.exist');
    });

    it.only('Tenta finalizar a compra sem produtos no carrinho', () => {
        cartPage.goToCheckout();
        checkoutPage.fillCheckoutInfo('Thiago', 'Freitas', '99557860');
        checkoutPage.completePurchase();
        checkoutPage.verifyCheckoutComplete();
    });
});
