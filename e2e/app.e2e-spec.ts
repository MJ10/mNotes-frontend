import { MnotesPage } from './app.po';

describe('mnotes App', () => {
  let page: MnotesPage;

  beforeEach(() => {
    page = new MnotesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
