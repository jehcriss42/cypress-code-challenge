
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const computerForm = require('../../pages/ComputerForm');
const actions = require('../../pages/ActionsInPages');
const messageCheck = require('../../pages/MessagesCheck');

const computer = 'ACE';
const introduced = '1950-02-15';

When("user adds a New Computer", () => {
    actions.clickAddNewComputerBtn();
    computerForm.typeComputerName(computer);
    actions.clickCreateThisComputerBtn();
    messageCheck.checkMessageAfterComputerIsCreated(`Computer ${computer} has been created`);
});

When("user filters the computer added", () => {
    actions.typeSearchFilterName(computer);
	actions.clickFilterByNameBtn();
    actions.clickOnComputerName(computer);
});

When("user edits the computer data", () => {
	computerForm.typeIntroducedInput(introduced);
    actions.clickSaveThisComputerBtn();
});

Then("a sucess message for the update is displayed", () => {
    messageCheck.checkMessageAfterComputerIsCreated(`Computer ${computer} has been updated`);
});
