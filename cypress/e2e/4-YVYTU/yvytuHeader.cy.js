/// <reference types="cypress" />

const yvytuHeader = require("../../Page/YVYTU/yvytuHeader");

describe("Test sobre nabvar", () => {
  beforeEach(() => {
    cy.visit("https://vientosdelaselva.com.ar/");
  });
  it("Verificar navbar", () => {
    const navbarNames = [
      "\n                Yvytu\n                \n              ",
      "LA RESERVA",
      "CABAÑAS",
      "COMO LLEGAR",
      "CONTACTO",
      "DONÁ",
    ];
    yvytuHeader.getHeaderButtons().each((el, inx) => {
      if (inx != 0) {
        cy.wrap(el).should("have.text", navbarNames[inx]);
      }
    });
  });

  it.only("Verificar estilos botones", () => {
    yvytuHeader.getHeaderButtons().each((el, inx) => {
      cy.log(`"este es el boton ${inx}"`);
      if (inx === 5) {
        cy.wrap(el)
          .should("have.css", "font-family", "Montserrat, sans-serif")
          .and(
            "have.css",
            "Background",
            "rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box border-box"
          );
      } else if (inx != 0) {
        cy.wrap(el)
          .should("have.css", "font-family", "Montserrat, sans-serif")
          .and(
            "have.css",
            "Background",
            "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box"
          );
      }
    });
  });
});
