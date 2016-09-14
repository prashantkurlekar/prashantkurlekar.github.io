import { PrashantkurlekarPage } from './app.po';

describe('prashantkurlekar App', function() {
  let page: PrashantkurlekarPage;

  beforeEach(() => {
    page = new PrashantkurlekarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
