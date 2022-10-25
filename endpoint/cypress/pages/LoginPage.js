/* eslint-disable spaced-comment */
/// <reference types="cypress" />

/**
 * Class representing a login page.
 */
export default class LoginPage {
    static visitUrl() {
    cy.visit(`https://en.wikipedia.org/wiki/Main_Page`)
    return '/login';
    };
  
  static getLogIn() {
    return cy.get('#pt-login');
  }

  static clickLogIn() {
    this.getLogIn().click();
  }

  static getUsername() {
    return cy.get('#wpName1');
  }

  static enterUsername(username) {
    this.getUsername().clear().type(username);
  }

  static getPassword() {
    return cy.get('#wpPassword1');
  }

  static enterPassword(password) {
    this.getPassword().clear().type(password);
  }

  static getLogInOnForm() {
    return cy.get('#wpLoginAttempt');
  }

  static clickLogInOnForm() {
    this.getLogInOnForm().click();
  }

  static login(username, password) {
    this.visitUrl();
    this.clickLogIn();
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogInOnForm();
  }
}