
const CommonPage = require('./common.page');

class RadioButtonPage{
   

    get yesRadioButton () {
        return  $('#yesRadio');
    }

    get impresssiveRadioButton () {
        return  $('#impressiveRadio');
    }

    get successText (){
        return $('.text-success')
    }

    async clickOnYesRadioButton (){
        await this.yesRadioButton.click();
    }
    
    async clickOnImpressiveRadioButton (){
        await this.impresssiveRadioButton.click();
    }

    async getConfirmationText (){
        return await this.successText;
    }
}

module.exports = new RadioButtonPage();
