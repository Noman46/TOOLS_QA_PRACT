
const CommonPage = require('./common.page');

class WebTablesPage{
   

    get addButton () {
        return $('#addNewRecordButton');
    }

    get firstNameField () {
        return $('#firstName');
    }

    get lastNameField () {
        return $('#lastName');
    }

    get emailField () {
        return $('#userEmail');
    }

    get ageField () {
        return $('#age');
    }

    get salaryField () {
        return $('#salary');
    }

    get departmentField () {
        return $('#department');
    }

    get submitButton () {
        return $('#submit');
    }

    get deleteButtons () {
        return $$('//span[contains(@id,"delete-record")]')
    }

    get editButtons () {
        return $$('//span[contains(@id,"edit-record")]')
    }



    

    async clickOnAddButton (){
        await this.addButton.click();
    }

    async clickOnSubmitButton (){
        await this.submitButton.click();
    }

    async provideValuesToAllFields (firstName,lastName,email,age,salary,departMent){
        await this.firstNameField.setValue(firstName);
        await this.lastNameField.setValue(lastName);
        await this.emailField.setValue(email);
        await this.ageField.setValue(age);
        await this.salaryField.setValue(salary);
        await this.departmentField.setValue(departMent);
    }

    async provideFirstName (firstName) {
        await this.firstNameField.setValue(firstName);
    }

    async deleteButtonsSize () {
        return this.deleteButtons.length;
    }

    async editButtonsSize() {
        return this.editButtons.length;
    }

    async clickOnTheEditButton (editButtonNumber) {
        await this.editButtons[editButtonNumber].click();
    }
    async deleteCustomer (deleteButtonNumber) {
        await this.deleteButtons[deleteButtonNumber].click();
    }

}

module.exports = new WebTablesPage();
