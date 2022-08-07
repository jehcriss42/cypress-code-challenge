Feature: Editing a computer

    Scenario: User should be able to edit, filter and to save changes for a computer data
        Given  The user launchs Computer Database Site
        When user adds a New Computer 
        And user filters the computer added
        And user edits the computer data
        Then a sucess message for the update is displayed