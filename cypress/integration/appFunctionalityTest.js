describe("Test the App Loads Correctly", function() {
  it("Tagline is complete", function() {
    cy.visit("https://tracktivism.herokuapp.com/");
    cy.get(".tagline").should("has.text", "Your organizational tool in the resistance");
  });
  it("Load both the legislation and tracking buttons", function() {
    cy.get(".navagation div").should("have.length", 2);
    cy.get(".buttons div").eq(0).should("has.id", "navagate-tracking");
    cy.get(".buttons div").eq(1).should("has.id", "navagate-legislation")
  });
  it("Ensure tracking button goes to correct link", function() {
    cy.get(".navagate-tracking").click();
    cy.url().should("contain","/tracking");
  });
  it("Ensure legislation button goes to correct link", function() {
    cy.get(".navagate-legislation").click();
    cy.url().should("contain","/legislation");
  });
});
