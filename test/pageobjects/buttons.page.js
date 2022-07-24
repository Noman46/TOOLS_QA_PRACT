
const CommonPage = require('./common.page');

class ButtonPage {
   
    get doubleClickButton () {
        return $('#doubleClickBtn');
    }
    get rightClickButton () {
        return $('#rightClickBtn');
    }
    get singleClickButton () {
        return $('#CGoGC');
    }    
    
    get doubleClickMessageElement () {
        return $('#doubleClickMessage');
    }
        
    get singleClickMessageElement () {
        return $('#dynamicClickMessage');
    }

    get rightClickMessageElement () {
        return $('#rightClickMessage');
    }
    async clickOnDoubleClickButton (firtName) {
        await this.doubleClickButton.doubleClick()
    }
    async clickOnRightClickButton (firtName) {
        await this.rightClickButton.click({ button: 'right' })
    }
    async clickSingleClickButton (firtName) {
        await this.singleClickButton.click()
    }
}

module.exports = new ButtonPage();
