const { VlElement } = require('vl-ui-core');
const { By } = require('selenium-webdriver');

class VlTypography extends VlElement {  
    async getText() {
        return await this.getAttribute("innerHTML");
    }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = VlTypography;
