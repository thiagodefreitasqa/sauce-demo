class CartPage {
    // Verifica se o produto está no carrinho
    verifyProductInCart(productName) {
        cy.contains('.cart_item', productName, { timeout: 5000 }).should('be.visible');
    }

    // Remove um produto do carrinho
    removeProductFromCart(productName) {
        cy.contains('.cart_item', productName).find('button').click(); // Supondo que o botão de remover é o primeiro botão
    }

    // Prossegue para a página de checkout
    proceedToCheckout() {
        cy.get('.btn_action').click();
    }

    // Método para ir para a página de checkout
    goToCheckout() {
        cy.visit('https://www.saucedemo.com/v1/cart.html')
        cy.get('.btn_action').click();
    }
    
    verifyCartIsEmpty() {
        cy.get('.cart_item').should('not.exist');
    }
    
}

export default CartPage;
