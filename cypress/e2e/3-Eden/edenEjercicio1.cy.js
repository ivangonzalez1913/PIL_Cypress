/// <reference types="cypress" />

import edenCuartetos from "../../Page/edenCuartetos";
import EdenHeader from "../../Page/edenHeader";
const edenHeader = new EdenHeader();

describe("TEST SOBRE SECCION CUARTETOS", () => {
  beforeEach(() => {
    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");
  });

  it.only("Verificar precio", () => {
    edenHeader.getMenuButtons().contains("CUARTETOS").click();
    edenCuartetos.getCuartetoInfo().click();
    edenCuartetos
      .getCuartetoPrice()
      .should("contain.text", "$ 3.000,00 + $ 0,00");
  });
});
