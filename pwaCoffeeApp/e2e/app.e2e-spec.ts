import { PwaCoffeeAppPage } from './app.po';

describe('pwa-coffee-app App', () => {
  let page: PwaCoffeeAppPage;

  beforeEach(() => {
    page = new PwaCoffeeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
