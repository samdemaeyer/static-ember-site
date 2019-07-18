/// <reference types="Cypress" />

context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('shows the menu items as a hamburger menu on small screens', () => {
    cy.viewport(550, 750);
    cy.get('.navbar-toggler').should('have.css', 'display', 'block');
    cy.get('#mainNav').should('have.css', 'background', 'rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box');
  });
  
  it('shows the homepage', () => {
    cy.url().should('eq', 'http://localhost:4200/');
    cy.get('.navbar-toggler').should('have.css', 'display', 'none');
    cy.get('#mainNav').should('have.css', 'background', 'rgba(0, 0, 0, 0) none repeat scroll 0px 0px / auto padding-box border-box');
    cy.get('.nav-link').should('have.length', 4);
    cy.get('.masthead').should('have.class', 'index');
    cy.get('.masthead h1').should('have.text', 'Clean Blog');
    cy.get('.post-preview').should('have.length', 4);
  });
  
  it('shows the about page', () => {
    cy.get('.nav-link').eq(1).click();
    cy.url().should('eq', 'http://localhost:4200/about');
    cy.get('.masthead').should('have.class', 'about');
    cy.get('.masthead h1').should('have.text', 'About Me');
    cy.get('.about-text').should('have.length', 3);
  });

  it('shows the post page', () => {
    cy.get('.nav-link').eq(2).click();
    cy.url().should('eq', 'http://localhost:4200/post');
    cy.get('.masthead').should('have.class', 'post');
  });

  it('shows the contact page', () => {
    const formMessage = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' + 
                        'Saepe nostrum ullam eveniet pariatur voluptates odit, ' + 
                        'fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?';
    cy.get('.nav-link').eq(3).click();
    cy.url().should('eq', 'http://localhost:4200/contact');
    cy.get('.masthead').should('have.class', 'contact');
    cy.get('.masthead h1').should('have.text', 'Contact Me');
    cy.get('.form-control').eq(0).type('Sam De Maeyer');
    cy.get('.form-control').eq(1).type('sam.demaeyer@mail.com');
    cy.get('.form-control').eq(2).type('07858514141');
    cy.get('.form-control').eq(3).type(formMessage);
    cy.get('#sendMessageButton').click();
    // cy.get('.message-sent-confirmation').should('have.text', 'Your message as successfully been sent!');
  });
})
