class CheckoutPage {
    fillCheckoutInfo(firstName, lastName, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);

        // Espera até que o campo de código postal esteja visível antes de continuar
        cy.get('[data-test="postalCode"]').should('be.visible');
        
        // Verifica se o botão btn_primary está visível e clica nele
        cy.get('.btn_primary', { timeout: 100 })
          .should('be.visible')
          .click();
    }

    completePurchase() {
        cy.get('.btn_action').click(); // Clica no botão para completar a compra
    }

    verifyCheckoutComplete() {
        // Verifica se o container de checkout completo contém a mensagem esperada
        cy.get('#checkout_complete_container')
          .should('be.visible')
          .contains('Thank you for your order', { matchCase: false }); // Ignora o case sensitivity
    }
}
export default CheckoutPage;
