/// <reference types="cypress" />

class YvytuHeader {
  getHeaderButtons() {
    return cy.get("nav a");
  }
}

export default new YvytuHeader();
