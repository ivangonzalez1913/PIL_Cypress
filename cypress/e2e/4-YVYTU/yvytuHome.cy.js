/// <reference types="cypress" />

const yvytuHome = require("../../Page/YVYTU/yvytuHome");

describe("Test sobre nabvar", () => {
  beforeEach(() => {
    cy.visit("https://vientosdelaselva.com.ar/");
  });
  it("Verificar navbar", () => {
    const navbarNames = [
      "",
      "LA RESERVA",
      "CABAÑAS",
      "COMO LLEGAR",
      "CONTACTO",
      "DONÁ",
    ];
    yvytuHome.getHeaderButtons().each((el, inx) => {
      if (inx != 0) {
        cy.wrap(el).should("have.text", navbarNames[inx]);
      }
    });
  });

  it("Verificar estilos botones", () => {
    yvytuHome.getHeaderButtons().each((el, inx) => {
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
  it("Verificar nombre cabanas", () => {
    const cabanaNames = ["Cabaña Yaguareté", "Cabaña Arasari"];
    yvytuHome.getCabanaName().each((el, inx) => {
      cy.wrap(el).should("contain", cabanaNames[inx]);
    });
  });
  it.only("Verificar informacion cabanas", () => {
    const cabanaInfo = [
      "Para 4 personas",
      "2 habitaciones",
      "Baño con ducha",
      "Ropa de cama",
      "Wi-fi",
      "Aire acondicionado",
    ];
    yvytuHome.getCabanaInfo().each((el, inx) => {
      if (inx < 6) {
        cy.wrap(el).should("have.text", cabanaInfo[inx]);
      }
    });
  });
});
