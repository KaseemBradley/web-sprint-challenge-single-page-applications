describe("Sprint Test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it("name test", () => {
    cy.get("input[name=name]")
      .should("exist")
      .should("have.value", "")
      .type("kaseem")
      .should("have.value", "kaseem");
  });

  it("checkbox test", () => {
    cy.get("input[name=onions]").check().should("have.value", "on");
    cy.get("input[name=mushrooms]").check().should("have.value", "on");
    cy.get("input[name=pineapple]").check().should("have.value", "on");
    cy.get("input[name=beef]").check().should("have.value", "on");
  });

  it("can submit", () => {
    cy.get("form").submit().should("have.value", "");

    cy.get("button[name=button]").should("not.be.disabled");
  });
});
