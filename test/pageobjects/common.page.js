
class CommonPage {
   
    async getElementById (Id) {
        return $(`#${Id}`);
    }

    async getElementByXpath (xpath) {
        return $(xpath);
    }

    async getElementByClass (className) {
        return $(`#${className}`);
    }

    async getMainHeader (mainHeaderText) {
        return $(`//div[@class="main-header" and text()="${mainHeaderText}"]`);
    }
    async open (path) {
        return browser.url(`https://demoqa.com/${path}`)
    }
}

module.exports = new CommonPage();
