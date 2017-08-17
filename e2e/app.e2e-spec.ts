import { CGCOMPONENTSPage } from './app.po';

describe('cg-components App', () => {
  let page: CGCOMPONENTSPage;

  beforeEach(() => {
    page = new CGCOMPONENTSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
