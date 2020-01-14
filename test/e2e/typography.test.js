const { assert, driver } = require('vl-ui-core').Test;
const VlTypographyPage = require('./pages/vl-typography.page');

describe('vl-typography', async () => {
    const vlTypographyPage = new VlTypographyPage(driver);

    before(() => {
        return vlTypographyPage.load();
    });
    
    it('Als gebruiker kan ik de inhoud van een vl-typography zien', async () => {
    	const vlTypography = await vlTypographyPage.getTypographyPTag();
    	assert.eventually.include(vlTypography.getInnerHTML(), "<p>Lorem ipsum dolor sit amet");
    });

});
