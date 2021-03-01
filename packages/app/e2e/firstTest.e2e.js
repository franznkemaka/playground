describe('Example', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    it('should show hello world', async () => {
        await expect(element(by.text('Hello World'))).toBeVisible();
    });

    it('should show interact properly after tap', async () => {
        await expect(element(by.text('Not Pressed!'))).toBeVisible();
        await element(by.id('press_me')).tap();
        await expect(element(by.text('Pressed!'))).toBeVisible();
        await element(by.id('press_me')).tap();
        await expect(element(by.text('Not Pressed!'))).toBeVisible();
    });
});
