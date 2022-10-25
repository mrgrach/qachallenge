/* eslint-disable spaced-comment */
/// <reference types="cypress" />

/**
 * Class representing an article page.
 */
export default class ArticlePage {
    static getStarButton() {
        return cy.get('#ca-watch');
    }
    
    static clickStarButton() {
        this.getStarButton().click();
    }

    static addArticleToWatchList() {
        this.clickStarButton();
    }

    static getArticleTitle(articleTitle) {
        return cy.get('.mw-page-title-main').contains(articleTitle);
    }
    
    static verifyArticleTitle(articleTitle) {
        this.getArticleTitle(articleTitle);
      }
}

