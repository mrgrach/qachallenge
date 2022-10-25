import LoginPage from '../pages/LoginPage';
import ArticlePage from '../pages/ArticlePage';
import WatchlistPage from '../pages/WatchlistPage';

//     Add two pages to your watchlist
//     Removes one of the articles from your watchlist
//     Makes sure that the second article is still present in the watchlist
//     Goes to the article in the watchlist and makes sure that the title matches

context('Wikipedia challenge from Endpoint', () => {
  before(() => {
    cy.clearLocalStorage();
    cy.clearCookies();
  });
  
  describe('watchlist test scenarios', () => {
    it('Add two pages to your watchlist', () => {
      cy.fixture('users.json').then((users) => {
        const user = users[0];
        LoginPage.login(user.username, user.password);
      });
      cy.visit('https://en.wikipedia.org/wiki/Mercedes-Benz_G-Class');
      ArticlePage.addArticleToWatchList();
      cy.visit('https://en.wikipedia.org/wiki/Postcrossing');
      ArticlePage.addArticleToWatchList();
    });

    it('Remove one of the articles from your watchlist', () => {
      WatchlistPage.clickWatchlist();
      WatchlistPage.clickEditList();
      WatchlistPage.removeFirstArticle();
    });

    it('Verify that the second article is still present in the watchlist', () => {
      WatchlistPage.clickWatchlist();
      WatchlistPage.clickEditList();
      WatchlistPage.verifyArticleTitle('Postcrossing');
    });

    it('Goes to the article in the watchlist and makes sure that the title matches', () => {
      WatchlistPage.clickArticleTitle('Postcrossing')
      ArticlePage.verifyArticleTitle('Postcrossing');
    });
  });
});