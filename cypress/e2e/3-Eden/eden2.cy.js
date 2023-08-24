/// <reference types="cypress" />
const edenHome2 = require("../../Page/edenHome2");
const edenHeader2 = require("../../Page/edenHeader2");

describe("Test sobre la página de EDEN ENTRADAS", () => {
  beforeEach(() => {
    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");
  });
  it("Verificar subtitulos", () => {
    const txtBuscar = "BUSCAR EVENTO";
    const txtCalendar = "CALENDARIO DE EVENTOS";
    edenHome2.getSubTitles().first().should("contain.text", txtBuscar);
    edenHome2.getSubTitles().last().should("contain.text", txtCalendar);
  });

  it("Verificar Menu", () => {
    const menuBtn = [
      "HOME",
      "TODOS",
      "AGENDA DEL FINDE",
      "RECITALES",
      "TEATROS",
      "CUARTETOS",
      "FESTIVALES",
      "SALAS",
    ];

    edenHeader2.getMenuButtons().each((button, inx) => {
      cy.wrap(button).should("contain.text", menuBtn[inx]);
    });
  });

  it("Verificar pagina de recitales", () => {
    edenHeader2.getMenuButtons().eq(3).click();
  });

  it("Verificar pagina de recitales", () => {
    edenHeader2.getMenuButtons().eq(3).click();
  });

  it("Logo", () => {
    const imgSrc = "https://static.edenentradas.com.ar/sitio/images/logo.gif";
    edenHeader2.getImgLogo().should("have.attr", "src", imgSrc);
    edenHeader2.getImgLogo().should("have.attr", "alt", "EdenEntradas");
  });
});
