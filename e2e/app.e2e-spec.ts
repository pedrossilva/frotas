import { FrotasPage } from './app.po';

describe('frotas App', () => {
  let page: FrotasPage;

  beforeEach(() => {
    page = new FrotasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
