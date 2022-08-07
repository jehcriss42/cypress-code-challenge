class MessageChecks {
    elements = {
      computerCreatedMessage: () => cy.get(".alert-message"),
    };
  
    checkMessageAfterComputerIsCreated(message : string) {
      this.elements.computerCreatedMessage().contains(message);
    }
  }
  
  module.exports = new MessageChecks();
  