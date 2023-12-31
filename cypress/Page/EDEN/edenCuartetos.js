class edenCuartetos {
  getCuartetoBlock() {
    return cy.get(
      "#calendario-right-col .row:nth-of-type(2) [class='col-12']:nth-of-type(2)"
    );
  }
  getCuartetoInfo() {
    return cy.get(".botonLink");
  }
  getCuartetoPrice() {
    return cy.get("[class='col-12 mb-1']");
  }
  getCuartetoButton() {
    return cy.get(".botonLink");
  }
  getCuartetoName() {
    return cy.get(".fechas-funciones span");
  }
}
export default new edenCuartetos();
