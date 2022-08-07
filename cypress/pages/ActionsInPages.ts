class ActionsInPages {
  elements = {
    addNewComputerBtn: () => cy.get("#add"),
    searchFilterByNameInput: () => cy.get("#searchbox"),
    filterByNameBtn: () => cy.get("#searchsubmit"),
    selectComputerName: () => cy.get("td > a"),
    submitComputerBtn: () => cy.get("input[type=submit]"),
    cancelBtn: () => cy.get("cancel"),
  };

  clickAddNewComputerBtn() {
    this.elements.addNewComputerBtn().click();
  }

  typeSearchFilterName(computer : string){
    this.elements.searchFilterByNameInput().type(computer);
  }

  clickFilterByNameBtn() {
    this.elements.filterByNameBtn().click();
  }

  clickOnComputerName(exactComputerName : string) {
    this.elements.selectComputerName().contains(new RegExp(`^${exactComputerName}$`, 'gi')).click();
  }

  clickCreateThisComputerBtn() {
    this.elements.submitComputerBtn().click();
  }

  clickSaveThisComputerBtn() {
    this.elements.submitComputerBtn().contains("Save this computer").click();
  }

  clickCancelBtn() {
    this.elements.cancelBtn().click();
  }
}

module.exports = new ActionsInPages();
