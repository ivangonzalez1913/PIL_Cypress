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
    let name = edenCuartetos.getCuartetoName();
    if (name.contains("El Perla Eventos")) {
      edenCuartetos
        .getCuartetoPrice()
        .should("contain.text", "$ 2.000,00 + $ 200,00");
    } else if (getCuartetoName().contains("Atenas")) {
      edenCuartetos
        .getCuartetoPrice()
        .should("contain.text", "$ 1.350,00 + $ 150,00");
    }
  });
});
