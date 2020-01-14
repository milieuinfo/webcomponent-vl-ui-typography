const { VlElement } = require('vl-ui-core');
const { By } = require('selenium-webdriver');

class VlTypography extends VlElement {  
    async getText() {
        return this.getAttribute("innerHTML");
    }
}

module.exports = VlTypography;
