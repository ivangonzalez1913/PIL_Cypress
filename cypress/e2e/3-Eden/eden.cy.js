/// <reference types="cypress" />
//Forma del PageObject tipo 1
import EdenHome from "../../Page/EDEN/edenHome";
import EdenHeader from "../../Page/EDEN/edenHeader";
import EdenEvent from "../../Page/EDEN/edenEvent";
import edenCuartetos from "../../Page/EDEN/edenCuartetos";
const edenHome = new EdenHome();
const edenHeader = new EdenHeader();
const edenEvent = new EdenEvent();

//Forma del PageObject Tipo 2
const edenSalas = require("../../Page/EDEN/edenSalas");

describe("Test sobre la página de EDEN ENTRADAS", () => {
  beforeEach(() => {
    cy.visit("https://www.edenentradas.com.ar/sitio/contenido/inicio");
  });
  it("Verificar subtitulos", () => {
    edenHome.getSubTitles().first().should("contain.text", "BUSCAR EVENTO");
    edenHome
      .getSubTitles()
      .last()
      .should("contain.text", "CALENDARIO DE EVENTOS");
  });

  it("Verificar Menu", { tags: "@regression" }, () => {
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
    edenHeader.getMenuButtons().each((button, inx) => {
      cy.wrap(button).should("contain.text", menuBtn[inx]);
    });
  });

  it(
    "Verificar pagina de recitales",
    { tags: ["@regression", "@smoke"] },
    () => {
      edenHeader.getMenuButtons().contains("RECITALES").click();

      cy.url().should("include", "/sitio/contenido/recitales");
    }
  );

  it("Logo", () => {
    edenHeader
      .getImgLogo()
      .should(
        "have.attr",
        "src",
        "https://static.edenentradas.com.ar/sitio/images/logo.gif"
      );
    edenHeader.getImgLogo().should("have.attr", "alt", "EdenEntradas");
    edenHeader
      .getImgLogo()
      .should("be.visible")
      .and("have.prop", "naturalHeight")
      .and("be.greaterThan", 0);
  });

  it("Buscador", () => {
    edenHeader.getSearchInput().type("la mona");
    edenHeader.getSearchSuggestion().contains("La Mona").click();
    edenEvent
      .getEventTitle()
      .should("have.text", "Creepy Halloween/ La Mona Jimenez ");
  });

  it("Calendario", () => {
    const nombresMeses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth();
    const anioActual = fechaActual.getFullYear();
    const nombreMesActual = nombresMeses[mesActual];
    const diaActual = fechaActual.getDate();

    cy.log(nombreMesActual); // Por ejemplo, "Agosto"
    cy.log(anioActual); // Por ejemplo, "2023"
    cy.log(diaActual); // Por ejemplo, "4"
    edenHome.getCalendarTitle().should("contain.text", nombreMesActual);
    edenHome.getCalendarTitle().should("contain.text", anioActual);

    edenHome
      .getCalendar()
      .find("td")
      .each((cuadradoDia, $inx) => {
        if ($inx < diaActual) {
          cy.wrap(cuadradoDia).should(
            "have.class",
            "ui-datepicker-unselectable ui-state-disabled"
          );
          cy.log(`El día ${$inx} es no seleccionable`);
        }
      });
  });

  it("Buscador Nuevo", () => {
    edenHeader.getSearchInput().type("Experiencia");
  });

  //NO FUNCIONA LA PAGINA DE "SALAS"
  it.skip("Verificar pagina de Salas", () => {
    const arrSalas = [
      "Plaza de La Música",
      "Sala del Rey",
      "Refugio Guernica",
      "Captain Blue XL",
      "Teatro Cultural Cañada",
      "Sala Agustín Tosco – Luz y Fuerza - Bº Centro",
      "Sala de Las Américas",
      "Studio Theater",
      "Casa Babylon",
    ];
    edenHeader.getMenuButtons().contains("SALAS").click();

    //Validación ITERANDO en ARRAY
    arrSalas.forEach((titleInArray, $inx) => {
      cy.log(`Itero en el titulo ${$inx}: ${titleInArray}`);
      edenSalas.getSalasBlock().eq($inx).should("be.visible");
      edenSalas.getSalasTitle().eq($inx).should("have.text", titleInArray);
    });

    //Validación ITERANDO en ELEMENTOS
    edenSalas.getSalasBlock().each((block, $inx) => {
      cy.log(`Itero en el elemento ${$inx}: ${block}`);
      cy.wrap(block).should("be.visible");
      edenSalas.getSalasTitle().eq($inx).should("have.text", arrSalas[$inx]);
    });
  });

  it.skip("Verificar salas completo", () => {
    edenHeader.getMenuButtons().contains("SALAS").click();

    cy.fixture(`salas.json`).then((file) => {
      //Validación ITERANDO en ELEMENTOS
      file.forEach((salaData, $inx) => {
        edenSalas.getSalasBlock().eq($inx).should("be.visible");
        edenSalas.getSalasTitle().eq($inx).should("have.text", salaData.title);
        edenSalas
          .getSalasPuntoDeVenta()
          .eq($inx)
          .should("contain.text", salaData.address);
      });
    });
  });

  //PRUEBA DE VALIDACION//

  it.skip("Verificar precio cuartetos", () => {
    edenHeader.getMenuButtons().contains("CUARTETOS").click();
  });
});
