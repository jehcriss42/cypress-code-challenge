class ActionsInPages {
  elements = {
    addNewComputerBtn: () => cy.get("#add"),
    filterByNameBtn: () => cy.get("#searchsubmit"),
    createThisComputerBtn: () => cy.get("input[type=submit]"),
    cancelBtn: () => cy.get("cancel")
  };

  clickAddNewComputerBtn() {
    this.elements.addNewComputerBtn().click();
  }

  clickFilterByNameBtn() {
    this.elements.filterByNameBtn().click();
  }

  clickCreateThisComputerBtn() {
    this.elements.createThisComputerBtn().click();
  }

  clickCancelBtn() {
    this.elements.cancelBtn().click();
  }
}

module.exports = new ActionsInPages();
