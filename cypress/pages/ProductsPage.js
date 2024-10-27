class ProductsPage {
    verifyProductListIsVisible() {
        cy.get('.inventory_list', { timeout: 5000 }).should('be.visible');
    }

    addProductToCart(productName) {
        cy.contains('.inventory_item', productName).find('button').click();
    }

    goToCart() {
        cy.get('.shopping_cart_link').click();
    }
}
export default ProductsPage;
