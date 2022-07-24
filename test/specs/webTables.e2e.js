const CommonPage = require('../pageobjects/common.page');
const WebTablesPage = require('../pageobjects/webTables.page');
const firstName = "Noman";
const editFirstName = "Imon"
const lastName = "Ibrahim";
const email = "something@mail.com";
const age = 30;
const salary = 6;
const departMent = "SQA" 


describe('Web Tables Element Practice', () => {
    it('should open theweb tables page', async () => {
        await CommonPage.open('webtables');
        await expect(await CommonPage.getMainHeader("Web Tables"))
        .toBeExisting({ message: 'Web Tables Page Not Found'});
    });
    it('should click on Add button', async () => {
        await WebTablesPage.clickOnAddButton()
    })
    it('shoud provide all the values and submit the form', async () => {
        await WebTablesPage.provideValuesToAllFields(firstName,lastName,email,age,salary,departMent);
        await WebTablesPage.clickOnSubmitButton();
    })
    it('table should have the newly added customer', async () => {
        await expect(await CommonPage.getElementByXpath(`//div[text() = '${firstName}']`))
        .toBeExisting({ message: 'Customer name was not present in the table'})
    })
    it('should click on the last row edit buttonsand edit first name', async() => {
        //console.log("The otal number of edit buttons ======== " +await WebTablesPage.editButtonsSize())
        await WebTablesPage.clickOnTheEditButton(await WebTablesPage.editButtonsSize() - 1);
        await WebTablesPage.provideFirstName(editFirstName);
        await WebTablesPage.clickOnSubmitButton();

    })
    it('table should have the edit customer', async () => {
        await expect(await CommonPage.getElementByXpath(`//div[text() = '${editFirstName}']`))
        .toBeExisting({ message: 'Edit Customer name was not present in the table'});
    })
    it('should delete the added customer', async () => {
        await WebTablesPage.deleteCustomer(await WebTablesPage.deleteButtonsSize() - 1);
    })
    it('table should not have the customer', async () => {
        await expect(await CommonPage.getElementByXpath(`//div[text() = '${editFirstName}']`))
        .not
        .toBeExisting({ message: 'Edit Customer name was not present in the table'});
    })
   
});


