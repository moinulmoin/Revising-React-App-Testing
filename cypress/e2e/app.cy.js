/// <reference types="Cypress" />

Cypress.config("viewportWidth", 1366);
Cypress.config("viewportHeight", 768);

describe("App", () => {
	it("Should Go to learn page", () => {
		cy.visit("http://localhost:5173/");
		cy.get("h2").contains(/Moinul Moin/i);
		cy.get("button").contains(/count is 0/);
		cy.get("button").click();
		cy.get("button").contains(/count is 1/);
	});
});
