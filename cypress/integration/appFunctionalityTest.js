describe("Test the App Loads Correctly", function() {
  it("Tagline is complete", function() {
    cy.visit("https://tracktivism.herokuapp.com/");
    cy.get(".tagline").should("has.text", "Your organization tool in the resistance");
  });
  it("Load both the legislation and tracking buttons", function() {
    cy.get(".navagation div").should("have.length", 2);
    cy.get(".buttons div").eq(0).should("has.id", "navagate-tracking");
    cy.get(".buttons div").eq(1).should("has.id", "navagate-legislation")
  });
  it("Ensure tracking button goes to correct link", function() {
    cy.get(".navagate-tracking").click();
    cy.url().should("contain","/tracking");
    cy.get(".form").find("label").should("have.length", 12);
    cy.get(".logo").click();
    cy.url().should("contain", "index.html");
  });
  it("Ensure company form loads correctly", function() {
    cy.get(".company").click();
    cy.url().should("contain","companyForm.html");
    cy.get(".form").find("label").should("have.length", 14);
    cy.get(".logo").click();
    cy.url().should("contain", "index.html");
  });
  it("Loads past matches button and goes to correct page", function() {
    cy.get(".pastCompanies").contains("See Our Past Matched Companies").click();
    cy.url().should("contain","posts.html");
    cy.get(".logo").click();
    cy.url().should("contain", "index.html");
  });
  it("Loads meetup button and goes to correct page", function() {
    cy.get(".meetupLink").contains("Find a Startup Event");
  });
  it("Makes sure about us page loads", function() {
    cy.get(".social").find(".socialLogo").eq(0).click();
    cy.url().should("contain", "about.html");
    cy.get(".logo").click();
    cy.url().should("contain", "index.html");
  });
});
