import { Route16Page } from './app.po';

describe('route16 App', () => {
  let page: Route16Page;

  beforeEach(() => {
    page = new Route16Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
