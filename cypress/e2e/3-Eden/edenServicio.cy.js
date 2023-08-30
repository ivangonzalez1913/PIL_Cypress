/// <reference types="cypress" />

describe("Test de SERVICIOS", () => {
  it("Verificar servicio", () => {
    cy.request(
      "GET",
      "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio"
    ).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(200);
    });
  });

  it("Test Sevicios Home", () => {
    cy.request({
      method: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio",
    }).then((response) => {
      expect(response.status).to.eq(200);
      cy.writeFile(`cypress/fixtures/autogenerado/eventos.json`, response.body);
    });
    cy.validarSchema("eventos_schema", "eventos");
  });
});
