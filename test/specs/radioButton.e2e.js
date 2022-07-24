const CommonPage = require('../pageobjects/common.page');
const RadioButtonPage = require('../pageobjects/radioButton.page');


describe('Radio Button Element Practice', () => {
    it('should open the radio button page', async () => {
        await CommonPage.open('radio-button');
        await expect(await CommonPage.getMainHeader("Radio Button"))
        .toBeExisting({ message: 'Radio Button Page Not Found'})
    });
   
    it('should click on YES radio button', async () => {
        await RadioButtonPage.clickOnYesRadioButton();
        await expect(await RadioButtonPage.getConfirmationText()).toHaveText('Yes');
    });

    it('should click on IMPRESSIVE radio button', async () => {
        await RadioButtonPage.clickOnImpressiveRadioButton();
        await expect(await RadioButtonPage.getConfirmationText())
        .toHaveText('Impressiv',{ message: 'Impressive Was not there'});
    });
});


