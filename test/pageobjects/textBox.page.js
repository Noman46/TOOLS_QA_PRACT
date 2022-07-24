

const CommonPage = require('./common.page');

class TextBoxPage{
   
    get mainHeader () {
        return $('//div[@class="main-header" and text()="Text Box"]');
    }

    get fullNameField (){
        return $('#userName')
    }

    get emailField () {
        return $('#userEmail')
    }

    get currentAddressField () {
        return $('#currentAddress')
    }

    get permanentAddressField () {
        return $('#permanentAddress')
    }
    get submitButton () {
        return $('#submit')
    }

    async provideFullName (fullName){
        await this.fullNameField.setValue(fullName)
    }
    async provideEmail (email){
        await this.emailField.setValue(email)
    }
    async provideCurrentAddress (currentAddress){
        await this.currentAddressField.setValue(currentAddress)
    }

    async providPermanentAddress (permanentAddress){
        await this.permanentAddressField.setValue(permanentAddress)
    }

    async clickSubmitButton() {
        await this.submitButton.scrollIntoView()
        await this.submitButton.click()
    }

    async isMainHeaderPresent() {
        return await this.mainHeader.isExisting()
    }


 
}

module.exports = new TextBoxPage();
