import { ErkcAngPage } from './app.po';

describe('erkc-ang App', function() {
  let page: ErkcAngPage;

  beforeEach(() => {
    page = new ErkcAngPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
