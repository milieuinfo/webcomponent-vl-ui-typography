const { assert, driver } = require('vl-ui-core').Test;
const VlTypographyPage = require('./pages/vl-typography.page');

describe('vl-typography', async () => {
    const vlTypographyPage = new VlTypographyPage(driver);

    before(() => {
        return vlTypographyPage.load();
    });
    
    it('Kan de inhoud van de een vl-typography opvragen', async () => {
    	const vlTypography = await vlTypographyPage.getTypographyPTag();
    	const text = await vlTypography.getText();
    	assert.include(text, "<p>Lorem ipsum dolor sit amet");
    });

});
