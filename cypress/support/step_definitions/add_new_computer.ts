import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
const computerForm = require('../../pages/ComputerForm');
const actions = require('../../pages/ActionsInPages');
const messageCheck = require('../../pages/MessagesCheck');

const computer = 'ENIAC';
const introduced = '1946-02-15';
const discontinued = '1955-10-02';
const company = 'Moore School of Electrical Engineering';

Given("The user launchs Computer Database Site", () => {
	cy.visit('/');
});

When("user clicks in Add a New Computer", () => {
	actions.clickAddNewComputerBtn();
});

When("fills in the computer name", () => {
	computerForm.typeComputerName(computer);
});

When("fills in all the fields", () => {
	computerForm.typeComputerName(computer);
	computerForm.typeIntroducedInput(introduced);
	computerForm.typeDiscontinuedInput(discontinued);
	computerForm.selectCompany(company);
});

When("user clicks in Create this computer", () => {
	actions.clickCreateThisComputerBtn();
});

Then("a sucess message is displayed", () => {
	messageCheck.checkMessageAfterComputerIsCreated(`Computer ${computer} has been created`);
});