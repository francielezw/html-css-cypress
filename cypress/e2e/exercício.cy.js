/// <reference types="cypress"/>


describe('Testando formulário',() =>{
    
    it ('Visitar', () =>{

        cy.visit('./formulario_cadastro.html');
        cy.wait(100);

        cy.get('input[id="cNome"]').type ('Franciele');
        cy.wait(100);

        cy.get('input[id="cSobrenome"]').type ('Zwirtes');
        cy.wait (100);

        cy.get('input[id="cSenha"]').type ('123456');
        cy.wait (100);

        cy.get('input[id="cMail"]').type ('francielezwirtes@gmail.com');
        cy.wait (100);

        cy.get('input[id="cMasc"]').click ();
        cy.wait (100);

        cy.get('input[id="cFem"]').click ();
        cy.wait (100);

        cy.get('input[type="date"]').type ('1991-03-22');
        cy.wait (100);

        cy.get('input[id="viajar"]').click ();
        cy.get('input[id="musica"').click ();

        
        cy.get('button[id="enviar"').click();
    })

})









