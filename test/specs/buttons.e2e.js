const CommonPage = require('../pageobjects/common.page');
const ButtonPage = require('../pageobjects/buttons.page');

describe('Buttons Element Practice', () => {
    it('should open theweb tables page', async () => {
        await CommonPage.open('buttons');
        await expect(await CommonPage.getMainHeader("Buttons"))
        .toBeExisting({ message: 'Buttons Page Not Found'});
    });
    it('should click the bouble click button', async () => {
        await ButtonPage.clickOnDoubleClickButton();
        await expect(await ButtonPage.doubleClickMessageElement).toHaveText("You have done a double click");
        await browser.pause(2000)
    })
    it('should click the right click button', async () => {
        await ButtonPage.clickOnRightClickButton();
        await expect(await ButtonPage.rightClickMessageElement).toHaveText("You have done a right click");
        await browser.pause(2000)
    })
    // it('should click the single click button', async () => {
    //     await ButtonPage.clickSingleClickButton();
    //     await expect(await ButtonPage.rightClickMessageElement).toHaveText("You have done a dynamic clic");
    //     await browser.pause(2000)
    // })
   
});


