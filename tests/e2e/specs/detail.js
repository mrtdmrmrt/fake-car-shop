// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get(".card:first").wait(2000).click();
    cy.contains(".car-detail", "VW BEETLE 14 TSİ RLİNE");
  });
});
