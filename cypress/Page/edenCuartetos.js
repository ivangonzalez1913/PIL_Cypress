class edenCuartetos {
  getCuartetoBlock() {
    return cy.get(
      "#calendario-right-col .row:nth-of-type(2) [class='col-12']:nth-of-type(2)"
    );
  }
  getCuartetoInfo() {
    return cy.get(
      "div:nth-of-type(2) > .col-12 > .fechas-funciones  .col-12.m-0.mt-2.p-0 > div:nth-of-type(1) > .col-12.contenido-todos-calendario-container.fg-eden.m-0.mb-3.p-0.pull-left > a > .d-md-block.d-none.fg-eden.font-weight-bold.fs-14.pull-left"
    );
  }
  getCuartetoPrice() {
    return cy.get("[class='col-12 mb-1']");
  }
  getCuartetoButton() {
    return cy.get(".botonLink");
  }
}
export default new edenCuartetos();
