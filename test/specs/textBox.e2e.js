const CommonPage = require('../pageobjects/common.page');
const TextBoxPage = require('../pageobjects/textBox.page');


describe('Text Box Element Practice', () => {
    it('should open the text box page', async () => {
        await CommonPage.open('text-box');
        // x = await TextBoxPage.isMainHeaderPresent()
        // console.log("====================== " + x)
        await expect(TextBoxPage.mainHeader).toBeExisting({ message: ' ===  ====  Not a form control!', })
        
    });

    it('should fill up all the form fields', async () => {
        await TextBoxPage.provideFullName("Fullllll Namee")
        await TextBoxPage.provideEmail("dsfsdf@mail.com")
        await TextBoxPage.provideCurrentAddress("sdfsfsdf")
        await TextBoxPage.providPermanentAddress("kjabkjad")
        await TextBoxPage.clickSubmitButton()
    })

    it('should verify the Full name is present', async () => {
        await expect(CommonPage.getElementById('name')).toBeExisting()
    })

    it('should verify the email is present', async () => {
        await expect(CommonPage.getElementById('email')).toBeExisting()
    })

    it('should verify the Current Address is present', async () => {
        await expect(CommonPage.getElementById('currentAddress')).toBeExisting()
    })

    it('should verify the Permanent Address is present', async () => {
        await expect(CommonPage.getElementById('permanentAddress')).toBeExisting()
    })
    
});


