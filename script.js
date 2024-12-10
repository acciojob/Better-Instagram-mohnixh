// Cypress custom command for drag and drop
Cypress.Commands.add("dragAndDrop", (sourceSelector, targetSelector) => {
  cy.get(sourceSelector)
    .trigger("mousedown", { which: 1 });

  cy.get(targetSelector)
    .trigger("mousemove")
    .trigger("mouseup", { force: true });
});

// Example To-Do App Tests
describe("Example To-Do App", () => {
  it("All drag exists", () => {
    for (let index = 1; index <= 6; index++) {
      cy.get(`#drag${index}`).should("exist");
    }
  });

  it("Drag and drop 3rd image on 6th", () => {
    cy.dragAndDrop("#drag3", "#drag6");
    cy.get("#div6").within(() => {
      cy.get("img").should("have.length", 1);
    });
  });

  it("Drag and drop 1st image on 5th", () => {
    cy.dragAndDrop("#drag1", "#drag5");
    cy.get("#div5").within(() => {
      cy.get("img").should("have.length", 1);
    });
  });

  it("Drag and drop 4th image on 2nd", () => {
    cy.dragAndDrop("#drag4", "#drag2");
    cy.get("#div2").within(() => {
      cy.get("img").should("have.length", 1);
    });
  });

  it("Drag and drop 2nd image on 3rd", () => {
    cy.dragAndDrop("#drag2", "#drag3");
    cy.get("#div3").within(() => {
      cy.get("img").should("have.length", 1);
    });
  });

  it("Drag and drop 5th image on 3rd", () => {
    cy.dragAndDrop("#drag5", "#drag3");
    cy.get("#div3").within(() => {
      cy.get("img").should("have.length", 1);
    });
  });

  it("Drag and drop 6th image on 1st", () => {
    cy.dragAndDrop("#drag6", "#drag1");
    cy.get("#div1").within(() => {
      cy.get("img").should("have.length", 1);
    });
  });
});