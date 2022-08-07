Feature: Adding new computer

    Scenario: A new computer should be saved after filling in only the Computer Name
        Given  The user launchs Computer Database Site
        When user clicks in Add a New Computer
        And fills in the computer name
        And user clicks in Create this computer
        Then a sucess message is displayed

    Scenario: A new computer should be saved after filling in all fields
        Given  The user launchs Computer Database Site
        When user clicks in Add a New Computer
        And fills in all the fields
        And user clicks in Create this computer
        Then a sucess message is displayed