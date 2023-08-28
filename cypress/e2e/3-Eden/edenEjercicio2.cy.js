/// <reference types="cypress" />

import edenCuartetos from "../../Page/edenCuartetos";
import EdenHeader from "../../Page/edenHeader";
const edenHeader = new EdenHeader();

describe("TEST SOBRE SECCION CUARTETOS", () => {
  beforeEach(() => {
    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");
  });

  it("Verificar precio", () => {
    edenHeader.getMenuButtons().contains("CUARTETOS").click();
    let buttons = edenCuartetos.getCuartetoButton();
    buttons.should("have.length", 14);
    buttons.each((el) => {
      cy.log(el);
      cy.log("BOTON");
      cy.wrap(el).should("be.visible").click();
      edenCuartetos.getCuartetoName().then((name) => {
        if (name.text().includes("Banda XXI")) {
          edenCuartetos
            .getCuartetoPrice()
            .should("contain.text", "$ 1.350,00 + $ 150,00");
          edenHeader.getMenuButtons().contains("CUARTETOS").click();
          cy.wait(5000);
        }
      });
    });
  });
});
