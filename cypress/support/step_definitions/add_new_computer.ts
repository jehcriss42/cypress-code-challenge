import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const computerForm = require('../../pages/ComputerForm');
const actions = require('../../pages/Actions');
const messageCheck = require('../../pages/MessagesCheck');

const computer = 'ENIAC'; 

Given("The user launchs Computer Database Site", () => {
	cy.visit('/');
});

When("user clicks in Add a New Computer", () => {
	actions.clickAddNewComputerBtn();
});

When("fill in the computer name", () => {
	computerForm.typeComputerName(computer);
});

When("user clicks in Create this computer", () => {
	actions.clickCreateThisComputerBtn();
});

Then("a sucess message is displayed", () => {
	messageCheck.checkMessageAfterComputerIsCreated(`Computer ${computer} has been created`);
});