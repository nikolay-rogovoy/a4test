import { A4testPage } from './app.po';

describe('a4test App', () => {
  let page: A4testPage;

  beforeEach(() => {
    page = new A4testPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
