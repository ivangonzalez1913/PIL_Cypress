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

    edenCuartetos
      .getCuartetoButton()
      .should("contain.text", "Ver")
      .each((element) => {
        let btn = cy.wrap(element);
        btn.click();
        if (
          edenCuartetos
            .getCuartetoPrice()
            .should("contain.text", "$ 2.000,00 + $ 200,00")
        ) {
          edenHeader.getMenuButtons().contains("CUARTETOS").click();
        } else {
          return false;
        }
      });
  });
});
