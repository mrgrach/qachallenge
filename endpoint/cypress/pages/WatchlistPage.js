/* eslint-disable spaced-comment */
/// <reference types="cypress" />

/**
 * Class representing a watchlist page.
 */
export default class WatchlistPage {
    static getWatchlistButton() {
        return cy.get('#pt-watchlist');
    }
    
    static clickWatchlist() {
        this.getWatchlistButton().click();
    }

    static getEditList() {
        return cy.get('.oo-ui-buttonElement-button').contains("Edit your list of watched pages");
        // return cy.get('button:contains("Edit your list of watched pages")');
        // return cy.contains('button', 'Edit your list of watched pages');
        // return cy.get('button[aria-label="Edit your list of watched pages"]');
    }

    static clickEditList() {
        this.getEditList().click();
    }

    static addArticleToWatchList() {
      this.clickStarButton();
    }

    static getFirstCheckbox() {
        return cy.get('#ooui-php-1');
    }

    static selectFirstCheckbox() {
        this.getFirstCheckbox().click();
    }

    static getRemoveTitles() {
        return cy.get('.mw-htmlform-submit-buttons').contains("Remove titles");
        // return cy.get('#ooui-php-6');
    }

    static clickRemoveTitles() {
        this.getRemoveTitles().click();
    }

    static removeFirstArticle() {
        this.selectFirstCheckbox();
        this.clickRemoveTitles();
    }

    static getArticleTitle(articleName) {
        return cy.get('.oo-ui-fieldLayout-header').contains(articleName);
    }

    static verifyArticleTitle(articleName) {
        this.getArticleTitle(articleName);
    }

    static clickArticleTitle(articleName) {
        this.getArticleTitle(articleName).click();
    }
}

