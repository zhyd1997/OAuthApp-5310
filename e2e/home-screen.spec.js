const { reloadApp } = require('./utils');

describe('Home Screen Tests', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should have welcome screen', async () => {
    await waitFor(element(by.id('homeScreen')))
      .toBeVisible()
      .withTimeout(200000);
  });
});
