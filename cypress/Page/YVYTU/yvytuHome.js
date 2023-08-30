/// <reference types="cypress" />

class YvytuHome {
  getHeaderButtons() {
    return cy.get("nav a");
  }
  getCabanaName() {
    return cy.get("h3");
  }
  getCabanaInfo() {
    return cy.get("div.flex span");
  }
}

export default new YvytuHome();
