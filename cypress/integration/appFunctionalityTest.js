describe("Test the App Loads Correctly", function() {
  it("Tagline is complete", function() {
    cy.visit("http://localhost:3000/");
    cy
      .get("#tagline")
      .should("has.text", "Your organizational Tool for the Resistance.");
  });
  it("Load both the legislation and tracking buttons", function() {
    cy.get("#navagation div").should("have.length", 2);
  });
  it("Ensure tracking button goes to correct link", function() {
    cy.get("#navagate-tracking").click();
    cy.url().should("contain", "/tracking");
  });
  it("Goes back to the home page", function() {
    cy.get("#header").click();
    cy.url().should("contain", "");
  });
  it("Ensure legislation button goes to correct link", function() {
    cy.get("#navagate-legislation").click();
    cy.url().should("contain", "/legislation");
  });
});
