/// <reference types="cypress" />

describe("Test de servicios", () => {
  it("Test servicio", () => {
    cy.request({
      method: "GET",
      url: "https://vientosdelaselva.com.ar/",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
