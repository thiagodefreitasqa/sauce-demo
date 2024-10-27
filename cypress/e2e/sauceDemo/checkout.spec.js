import LoginPage from '../../pages/LoginPage';
import ProductsPage from '../../pages/ProductsPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckouPage';

describe('Finalizar Compra', () => {
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

    it.only('Finaliza o fluxo de compra', () => {
        productsPage.addProductToCart('Sauce Labs Backpack');
        productsPage.goToCart();
        cartPage.proceedToCheckout();
        checkoutPage.fillCheckoutInfo('Bartolomeu', 'Guimaraes', '99557860');
        checkoutPage.completePurchase();
        checkoutPage.verifyCheckoutComplete();
    });
});
