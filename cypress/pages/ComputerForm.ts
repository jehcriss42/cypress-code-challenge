class ComputerPage {
  elements = {
    computerNameInput: () => cy.get("#name"),
    introducedInput: () => cy.get("#introduced"),
    discontinuedInput: () => cy.get("#discontinued"),
    companyCombobox: () => cy.get("#company")
  };

  typeComputerName(computerName: string) {
    this.elements.computerNameInput().type(computerName);
  }

  typeIntroducedInput(introduced: string) {
    this.elements.introducedInput().type(introduced);
  }

  typeDiscontinuedInput(discontinued: string) {
    this.elements.discontinuedInput().type(discontinued);
  }

  selectCompany(company: string) {
    this.elements.companyCombobox().select(company);
  }
}

module.exports = new ComputerPage();
