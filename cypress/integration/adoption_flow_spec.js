let adoptionPagePath = "http://localhost:3000/adocao";

describe('Adoption flow', function() {
    beforeEach(function () {
        cy.exec('rails db:seed')
    });

    it('Clicking on adoption button', function() {
        cy.visit(adoptionPagePath);
        cy.contains('Adote').click();
        cy.contains('Ir para tela de login').click();

        cy.get('input[id="user_email"]').type('user@boacausa.com');
        cy.get('input[id="user_password"]').type('123456789');

        cy.contains('Entrar').click();

        cy.visit(adoptionPagePath);
        cy.contains('Adote').click();
        cy.contains('Você está a poucas patas de me adotar. A ONG acabou de saber sobre o seu interesse e entrará em contato em breve. PS: Mal posso esperar por esse momento :)');
        cy.get('div[class*="Backdrop"]').click();

        cy.contains('Adote').should('be.disabled');
    });
});
