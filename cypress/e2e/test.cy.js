Cypress.config("viewportWidth", 1366);
Cypress.config("viewportHeight", 768);

describe("React Docs", () => {
	it("Should Go to learn page", () => {
		cy.visit("https://react.dev/");
		cy.get("a")
			.contains(/Learn React/i)
			.click();
	});
});
