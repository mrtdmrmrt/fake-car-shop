// https://docs.cypress.io/api/introduction/api.html

describe("Card Component Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h6", "R19 Europa 1.6 RT Manuel");
  });
});
